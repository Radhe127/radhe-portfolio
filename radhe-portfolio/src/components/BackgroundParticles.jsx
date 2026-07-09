import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './BackgroundParticles.css';

// Floating particles component
function Particles({ count = 100 }) {
  const mesh = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push({ x, y, z });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    particles.forEach((particle, i) => {
      pos[i * 3] = particle.x;
      pos[i * 3 + 1] = particle.y;
      pos[i * 3 + 2] = particle.z;
    });
    return pos;
  }, [particles, count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = time * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#e63946"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Floating geometric shapes
function FloatingShapes() {
  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.1;
    groupRef.current.children.forEach((child, i) => {
      child.position.y = Math.sin(time + i) * 0.5;
      child.rotation.x = time * 0.2;
      child.rotation.z = time * 0.1;
    });
  });

  return (
    <group ref={groupRef}>
      {/* Octahedrons */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10 - 5
          ]}
        >
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color="#e63946"
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}
      
      {/* Torus shapes */}
      {[...Array(3)].map((_, i) => (
        <mesh
          key={`torus-${i}`}
          position={[
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8 - 3
          ]}
        >
          <torusGeometry args={[0.4, 0.1, 16, 32]} />
          <meshStandardMaterial
            color="#ff6b6b"
            transparent
            opacity={0.2}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

// Red ambient glow sphere
function GlowSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.scale.x = 1 + Math.sin(time * 0.5) * 0.1;
    meshRef.current.scale.y = 1 + Math.sin(time * 0.5) * 0.1;
    meshRef.current.scale.z = 1 + Math.sin(time * 0.5) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[5, 2, -10]}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial
        color="#e63946"
        transparent
        opacity={0.05}
        emissive="#e63946"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

const BackgroundParticles = () => {
  return (
    <div className="background-canvas">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#e63946" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff6b6b" />
        
        <Particles count={150} />
        <FloatingShapes />
        <GlowSphere />
        
        <fog attach="fog" args={['#121212', 10, 30]} />
      </Canvas>
    </div>
  );
};

export default BackgroundParticles;
