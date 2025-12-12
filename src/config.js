// Configuration file for Radheshyam Verma's Portfolio
// All personal data is centralized here for easy updates

export const config = {
  developer: {
    name: "Radheshyam",
    fullName: "Radheshyam Verma",
    title: "Full Stack Java Developer",
    subtitle: "Developer | Designer | Tech Enthusiast",
    description: "Building innovative solutions with Java, Spring Boot, and modern web technologies. Passionate about creating scalable applications and exploring Machine Learning."
  },

  social: {
    github: "radhe127",
    email: "radheverma569@outlook.com",
    linkedin: "radheshyam-verma",
    location: "India"
  },

  about: {
    title: "About Me",
    description: `Hello, I'm Radheshyam Verma, an aspiring developer with a strong foundation in programming languages such as Java, Spring Boot, C, HTML, CSS, and JavaScript.

Beyond programming, I have a keen interest in design and am proficient in Canva. I am also learning Photoshop to further enhance my design abilities.

I am enthusiastic about exploring new areas and applying my knowledge to create innovative solutions. I have experience building full-stack applications and working on Machine Learning projects.`,
    highlights: [
      "Full Stack Development with Java & Spring Boot",
      "Frontend Development with React & JavaScript",
      "Machine Learning & Data Science Projects",
      "UI/UX Design with Canva & Photoshop"
    ]
  },

  skills: {
    languages: ["Java", "JavaScript", "Python", "C", "HTML", "CSS"],
    frameworks: ["Spring Boot", "React", "Hibernate"],
    databases: ["MySQL", "PostgreSQL"],
    tools: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Canva", "Photoshop"],
    mlTools: ["Pandas", "NumPy", "Scikit-learn", "NLP"]
  },

  experiences: [
    {
      position: "Full Stack Java Developer",
      company: "Personal Projects & Learning",
      period: "2023 - Present",
      location: "India",
      description: "Building production-ready applications using Spring Boot for backend and React for frontend. Developed multiple projects including Job Portal and E-Commerce platform.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "REST API"]
    },
    {
      position: "Machine Learning Enthusiast",
      company: "Self-Learning & Projects",
      period: "2023 - Present",
      location: "India",
      description: "Exploring ML and Data Science through hands-on projects including sentiment analysis, price prediction, and classification models using Python.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NLP", "TensorFlow"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Job-App",
      category: "Full Stack - Java",
      description: "Job Application Portal built with Spring Boot backend",
      technologies: ["Java", "Spring Boot", "REST API", "MySQL"],
      github: "https://github.com/Radhe127/Job-App",
      demo: "https://github.com/Radhe127/Job-App",
      image: "https://opengraph.githubassets.com/1/Radhe127/Job-App",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce",
      category: "Full Stack",
      description: "E-Commerce platform with React UI",
      technologies: ["React", "JavaScript", "CSS", "REST API"],
      github: "https://github.com/Radhe127/E-Commerce",
      demo: "https://github.com/Radhe127/E-Commerce",
      image: "https://opengraph.githubassets.com/1/Radhe127/E-Commerce",
      featured: true
    },
    {
      id: 3,
      title: "Sentiment Analysis (NLP)",
      category: "Machine Learning",
      description: "Sentiment Analysis on Social Media Text using NLP",
      technologies: ["Python", "NLP", "Scikit-learn", "Pandas"],
      github: "https://github.com/Radhe127/Sentiment-Analysis-on-Social-Media-Text-NLP-",
      demo: "https://radhe127.github.io/Sentiment-Analysis-on-Social-Media-Text-NLP-",
      image: "https://opengraph.githubassets.com/1/Radhe127/Sentiment-Analysis-on-Social-Media-Text-NLP-",
      featured: true
    },
    {
      id: 4,
      title: "House Price Prediction",
      category: "Machine Learning",
      description: "House Price Prediction using Regression Model",
      technologies: ["Python", "Regression", "Scikit-learn", "Pandas"],
      github: "https://github.com/Radhe127/House-Price-Prediction---Regression-Model",
      demo: "https://github.com/Radhe127/House-Price-Prediction---Regression-Model",
      image: "https://opengraph.githubassets.com/1/Radhe127/House-Price-Prediction---Regression-Model",
      featured: true
    },
    {
      id: 5,
      title: "Customer Churn Prediction",
      category: "Machine Learning",
      description: "Classification Model to predict customer churn",
      technologies: ["Python", "Classification", "Scikit-learn"],
      github: "https://github.com/Radhe127/Customer-Churn-Prediction---Classification-Model",
      demo: "https://github.com/Radhe127/Customer-Churn-Prediction---Classification-Model",
      image: "https://opengraph.githubassets.com/1/Radhe127/Customer-Churn-Prediction---Classification-Model",
      featured: false
    },
    {
      id: 6,
      title: "Code Editor",
      category: "Frontend",
      description: "Online Code Editor built with vanilla JavaScript",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Radhe127/Code-Editor",
      demo: "https://radhe127.github.io/Code-Editor",
      image: "https://opengraph.githubassets.com/1/Radhe127/Code-Editor",
      featured: true
    },
    {
      id: 7,
      title: "Notes Taking App",
      category: "Frontend",
      description: "Notes application with local storage",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      github: "https://github.com/Radhe127/Notes-Taking-Application",
      demo: "https://radhe127.github.io/Notes-Taking-Application",
      image: "https://opengraph.githubassets.com/1/Radhe127/Notes-Taking-Application",
      featured: false
    },
    {
      id: 8,
      title: "TextToSpeech",
      category: "Frontend",
      description: "Text to Speech converter application",
      technologies: ["HTML", "CSS", "JavaScript", "Web Speech API"],
      github: "https://github.com/Radhe127/TextToSpeech",
      demo: "https://radhe127.github.io/TextToSpeech",
      image: "https://opengraph.githubassets.com/1/Radhe127/TextToSpeech",
      featured: false
    },
    {
      id: 9,
      title: "Image Editor",
      category: "Frontend",
      description: "Basic Image Editor with filters and effects",
      technologies: ["HTML", "CSS", "JavaScript", "Canvas API"],
      github: "https://github.com/Radhe127/Image-Editor",
      demo: "https://radhe127.github.io/Image-Editor",
      image: "https://opengraph.githubassets.com/1/Radhe127/Image-Editor",
      featured: false
    },
    {
      id: 10,
      title: "Age Calculator",
      category: "Frontend",
      description: "Calculate your exact age in years, months, and days",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Radhe127/Age-Calculator",
      demo: "https://radhe127.github.io/Age-Calculator",
      image: "https://opengraph.githubassets.com/1/Radhe127/Age-Calculator",
      featured: false
    }
  ],

  contact: {
    email: "radheverma569@outlook.com",
    github: "https://github.com/radhe127",
    linkedin: "https://www.linkedin.com/in/radheshyam-verma",
    message: "Let's connect and collaborate on exciting projects! Feel free to explore my repositories and reach out to me. I'm always looking for opportunities to learn and grow as a developer."
  }
};
