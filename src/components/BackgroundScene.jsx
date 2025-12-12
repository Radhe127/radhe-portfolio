import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function useCssVarColor(varName, fallback) {
  const [color, setColor] = useState(fallback);
  useEffect(() => {
    const root = document.documentElement;
    const read = () => {
      const v = getComputedStyle(root).getPropertyValue(varName).trim();
      setColor(v || fallback);
    };
    read();
    const obs = new MutationObserver(read);
    obs.observe(root, { attributes: true, attributeFilter: ["style", "class"] });
    return () => obs.disconnect();
  }, [varName, fallback]);
  return color;
}

/* Animated ocean-wave plane */
function OceanWaves({ color, position, width = 120, depth = 80, seg = 180, amp = 0.6, speed = 0.28 }) {
  const mesh = useRef();
  const basePos = useRef(null);

  const geo = useMemo(() => {
    const g = new THREE.PlaneGeometry(width, depth, seg, seg);
    g.rotateX(-Math.PI / 2.15);
    return g;
  }, [width, depth, seg]);

  useEffect(() => {
    basePos.current = new Float32Array(geo.attributes.position.array);
  }, [geo]);

  useFrame(({ clock }) => {
    if (!mesh.current || !basePos.current) return;
    const t = clock.getElapsedTime() * speed;
    const attr = mesh.current.geometry.attributes.position;
    const base = basePos.current;
    for (let i = 0; i < attr.count; i++) {
      const ix = i * 3;
      const x = base[ix], z = base[ix + 2];
      const wave = Math.sin(x * 0.08 + t * 2.2) * 0.5
        + Math.cos(z * 0.06 - t * 1.6) * 0.45
        + Math.sin((x + z) * 0.04 + t) * 0.35;
      attr.array[ix + 1] = base[ix + 1] + wave * amp;
    }
    attr.needsUpdate = true;
    mesh.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={mesh} geometry={geo} position={position}>
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.38}
        emissive={color}
        emissiveIntensity={0.85}
      />
    </mesh>
  );
}

/* Network wireframe running figure */
function NetworkFigure({ color }) {
  const group = useRef();

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.15) * 0.12;
    group.current.position.y = 0.8 + Math.sin(t * 1.2) * 0.08;
  });

  // Build a simplified running figure from primitives
  const joints = useMemo(() => {
    // Key points (x, y, z) forming a running pose silhouette
    return [
      // Head
      [0, 2.4, 0],
      // Torso
      [0, 1.8, 0], [0, 1.2, 0], [0, 0.6, 0],
      // Left arm
      [-0.35, 1.7, 0.1], [-0.7, 1.3, 0.25], [-0.95, 0.95, 0.15],
      // Right arm (back swing)
      [0.3, 1.65, -0.15], [0.65, 1.85, -0.35], [0.85, 2.1, -0.25],
      // Left leg (forward)
      [-0.18, 0.55, 0], [-0.35, -0.15, 0.45], [-0.28, -0.75, 0.75],
      // Right leg (back)
      [0.18, 0.55, 0], [0.4, -0.1, -0.4], [0.55, -0.65, -0.75],
    ];
  }, []);

  const edges = useMemo(() => [
    [0, 1], [1, 2], [2, 3], // spine
    [1, 4], [4, 5], [5, 6], // left arm
    [1, 7], [7, 8], [8, 9], // right arm
    [3, 10], [10, 11], [11, 12], // left leg
    [3, 13], [13, 14], [14, 15], // right leg
  ], []);

  return (
    <group ref={group} position={[3.8, 0.8, -6]} scale={1.15}>
      {/* Joints as small spheres */}
      {joints.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} />
        </mesh>
      ))}
      {/* Edges as lines */}
      {edges.map(([a, b], i) => {
        const pA = new THREE.Vector3(...joints[a]);
        const pB = new THREE.Vector3(...joints[b]);
        const mid = pA.clone().add(pB).multiplyScalar(0.5);
        const len = pA.distanceTo(pB);
        const dir = pB.clone().sub(pA).normalize();
        const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        return (
          <mesh key={i} position={mid} quaternion={quat}>
            <cylinderGeometry args={[0.018, 0.018, len, 6]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} transparent opacity={0.85} />
          </mesh>
        );
      })}
    </group>
  );
}

/* Floating accent dots (like the colored badges in the reference) */
function FloatingDots({ colors }) {
  return (
    <group>
      {colors.map((c, i) => (
        <Float key={i} speed={1.8 + i * 0.3} floatIntensity={0.6} rotationIntensity={0.2}>
          <mesh position={[4.5 + i * 1.2, 2.2 - i * 0.9, -4 - i * 1.5]}>
            <sphereGeometry args={[0.12 + i * 0.02, 16, 16]} />
            <meshStandardMaterial color={c} emissive={c} emissiveIntensity={1.6} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* Camera subtle drift */
function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.07) * 0.6;
    camera.position.y = 2.8 + Math.sin(t * 0.05) * 0.18;
    camera.lookAt(1.2, 0.9, -5);
  });
  return null;
}

export default function BackgroundScene() {
  const accent = useCssVarColor("--accentColor", "#24e2ff");
  const bg = useCssVarColor("--backgroundColor", "#061a4d");

  return (
    <div className="background-canvas">
      <Canvas camera={{ position: [0, 2.8, 9], fov: 54 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={[bg]} />
        <fog attach="fog" args={[bg, 8, 42]} />

        <ambientLight intensity={0.22} />
        <pointLight position={[10, 10, 8]} intensity={0.9} color={accent} />
        <pointLight position={[-8, 4, -6]} intensity={0.45} color={"#7cf3ff"} />
        <pointLight position={[0, -4, 6]} intensity={0.2} color={"#ffffff"} />

        <Stars radius={130} depth={55} count={2200} factor={3} saturation={0.1} fade speed={0.6} />

        {/* Ocean waves bottom */}
        <OceanWaves color={accent} position={[0, -2.5, -12]} width={140} depth={90} seg={200} amp={0.55} speed={0.32} />
        {/* Deeper darker layer */}
        <OceanWaves color={"#0a3d8f"} position={[0, -3.8, -22]} width={180} depth={110} seg={160} amp={0.7} speed={0.22} />

        {/* Network running figure */}
        <NetworkFigure color={accent} />

        {/* Floating colored dots like the reference badges */}
        <FloatingDots colors={["#34d399", "#facc15", "#f472b6", "#60a5fa"]} />

        <CameraRig />

        <EffectComposer>
          <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={1.1} />
          <Vignette eskil={false} offset={0.22} darkness={0.48} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
