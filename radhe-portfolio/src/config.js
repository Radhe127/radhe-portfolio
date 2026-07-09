const githubBase = 'https://github.com/Radhe127';
const ogImage = (repo) => `https://opengraph.githubassets.com/1/Radhe127/${repo}`;

export const config = {
  developer: {
    name: 'Radheshyam',
    fullName: 'Radheshyam Verma',
    title: 'Full Stack Java Developer',
    subtitle: 'Spring Boot • React • AI-powered product builder',
    description:
      'I build performant full-stack products with Java, Spring Boot, React, and intelligent workflows that turn ideas into polished user experiences.',
    location: 'Kushinagar, India',
    availability: 'Open to internships, freelance work, and collaborative product builds.',
    education: 'B.Tech in Computer Science Engineering • United Institute of Technology, Prayagraj'
  },

  social: {
    github: 'Radhe127',
    githubUrl: githubBase,
    email: 'radheverma569@outlook.com',
    linkedin: 'radheshyam-verma',
    linkedinUrl: 'https://www.linkedin.com/in/radheshyam-verma',
    location: 'Kushinagar, India'
  },

  hero: {
    badge: 'Available for modern full-stack builds',
    quickFacts: ['28+ public repositories', 'React + Spring Boot stack', 'AI, ML & product-focused projects'],
    focusCards: [
      'Backend-first systems with clean REST architecture',
      'Responsive, polished frontends with React and Vite',
      'AI-assisted experiences for interviews, research, and productivity'
    ]
  },

  about: {
    title: 'About Me',
    description: `I am Radheshyam Verma, a Computer Science Engineering student who enjoys building clean, scalable products with Java, Spring Boot, React, and SQL.

My work combines backend problem-solving with user-focused interfaces. I enjoy shaping both the system design and the final user experience, especially for platforms that need real-world utility.

Recently, I have been exploring AI-powered applications, data-driven features, and end-to-end product delivery workflows that blend software engineering with practical innovation.`,
    highlights: [
      'Full-stack development with Java, Spring Boot, React, and REST APIs',
      'AI-oriented applications with evaluation, analysis, and automation flows',
      'Frontend UI implementation with responsive, modern interaction patterns',
      'Strong interest in problem solving, system design, and product thinking'
    ],
    focusAreas: ['Java & Spring Boot', 'React UI Engineering', 'AI-based Applications', 'SQL & APIs'],
    stats: [
      { value: '28+', label: 'Public Repositories' },
      { value: '6+', label: 'Featured Projects' },
      { value: '3', label: 'Core Focus Areas' }
    ]
  },

  skills: {
    languages: ['Java', 'JavaScript', 'Python', 'C', 'HTML', 'CSS'],
    frameworks: ['Spring Boot', 'React', 'Hibernate', 'Express.js'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Canva', 'Postman'],
    mlTools: ['Pandas', 'NumPy', 'Scikit-learn', 'NLP'],
    currentlyLearning: ['Spring AI', 'System Design', 'Advanced React Patterns', 'Production-ready API Design']
  },

  experiences: [
    {
      position: 'Full Stack Java Developer',
      company: 'Personal Projects & Independent Learning',
      period: '2023 - Present',
      location: 'India',
      description:
        'Designing and shipping practical applications using Spring Boot on the backend and React on the frontend, with a focus on usability, APIs, and maintainable architecture.',
      achievements: [
        'Built full-stack products across job, land registry, visualization, and interview domains',
        'Worked with authentication, REST APIs, responsive UI, and deployment-ready workflows',
        'Balanced backend logic, frontend polish, and product presentation in personal projects'
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'REST APIs', 'MySQL']
    },
    {
      position: 'AI & Product Development Explorer',
      company: 'Applied AI Projects',
      period: '2024 - Present',
      location: 'India',
      description:
        'Exploring AI-enabled products that combine LLM workflows, evaluation systems, and real-time interfaces for practical user use cases.',
      achievements: [
        'Built an AI-based interview evaluation platform with feedback and history tracking',
        'Experimented with chatbot and data analysis projects powered by modern full-stack tooling',
        'Focused on making AI features useful inside polished application flows'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AI Workflows', 'JavaScript']
    },
    {
      position: 'Software Engineering Learner',
      company: 'B.Tech in Computer Science Engineering',
      period: 'Ongoing',
      location: 'Prayagraj, India',
      description:
        'Developing a stronger foundation in data structures, algorithms, software engineering, and intelligent systems while building hands-on portfolio projects.',
      achievements: [
        'Studying computer science fundamentals alongside real project implementation',
        'Using project-based learning to strengthen coding, debugging, and design decisions',
        'Continuously improving communication, UI thinking, and engineering execution'
      ],
      technologies: ['DSA', 'OOP', 'Databases', 'Web Development']
    }
  ],

  projects: [
    {
      id: 1,
      title: 'AI Interview Evaluation Platform',
      category: 'AI Product',
      description:
        'A full-stack MERN application that simulates technical interviews with AI-powered sessions, evaluation, feedback, and interview history tracking.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/Radhe127/AI-Based-Intelligent-Interview-Evaluation',
      demo: 'https://ai-based-intelligent-interview-eval.vercel.app',
      image: ogImage('AI-Based-Intelligent-Interview-Evaluation'),
      featured: true
    },
    {
      id: 2,
      title: 'Land Registry',
      category: 'Full Stack Java',
      description:
        'A land registry platform for secure record registration, ownership verification, transfer workflows, and property history tracking.',
      technologies: ['Spring Boot', 'React', 'Vite', 'REST API'],
      github: 'https://github.com/Radhe127/Land-Registry',
      demo: 'https://github.com/Radhe127/Land-Registry',
      image: ogImage('Land-Registry'),
      featured: true
    },
    {
      id: 3,
      title: 'Sorting Visualizer',
      category: 'Interactive UI',
      description:
        'An interactive visualizer with a React frontend and Spring Boot backend to demonstrate sorting behavior in an engaging way.',
      technologies: ['React', 'Spring Boot', 'Visualization', 'Java'],
      github: 'https://github.com/Radhe127/Sorting-Visualizer',
      demo: 'https://sorting-visualizer-vert-five.vercel.app/',
      image: ogImage('Sorting-Visualizer'),
      featured: true
    },
    {
      id: 4,
      title: 'ChatBot',
      category: 'AI Product',
      description:
        'A conversational assistant focused on real-time, context-aware interactions through modern full-stack architecture.',
      technologies: ['React', 'LLM', 'JavaScript', 'Full Stack'],
      github: 'https://github.com/Radhe127/ChatBot',
      demo: 'https://chat-bot-tawny-rho.vercel.app',
      image: ogImage('ChatBot'),
      featured: true
    },
    {
      id: 5,
      title: 'Job App',
      category: 'Full Stack Java',
      description:
        'A job application portal built with Spring Boot, designed to organize roles and application workflows in a clean backend-driven setup.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
      github: 'https://github.com/Radhe127/Job-App',
      demo: 'https://radhe127.github.io/Job-App/',
      image: ogImage('Job-App'),
      featured: true
    },
    {
      id: 6,
      title: 'Sentiment Analysis on Social Media Text',
      category: 'Machine Learning',
      description:
        'An NLP-focused project that analyzes sentiment in social media text using practical machine learning workflows.',
      technologies: ['Python', 'NLP', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/Radhe127/Sentiment-Analysis-on-Social-Media-Text-NLP-',
      demo: 'https://radhe127.github.io/Sentiment-Analysis-on-Social-Media-Text-NLP-/',
      image: ogImage('Sentiment-Analysis-on-Social-Media-Text-NLP-'),
      featured: true
    }
  ],

  contact: {
    email: 'radheverma569@outlook.com',
    github: githubBase,
    linkedin: 'https://www.linkedin.com/in/radheshyam-verma',
    message:
      'If you are looking for someone who can contribute across backend systems, React interfaces, and practical AI product ideas, I would love to connect.'
  }
};
