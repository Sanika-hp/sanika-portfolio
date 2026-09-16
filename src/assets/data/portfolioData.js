/**
 * Sanika H P - Portfolio Data Configuration
 * Central data source for easy customization and maintenance.
 */

export const personalInfo = {
  name: "Sanika H P",
  role: "Artificial Intelligence & Data Science Student",
  degree: "B.Tech in Artificial Intelligence & Data Science",
  semester: "3rd Semester",
  college: "REVA University, Bengaluru, Karnataka",
  hometown: "Hassan, Karnataka, India",
  email: "sanikahp4@gmail.com",
  phone: "+91 9353264598",
  phoneRaw: "9353264598",
  location: "Bengaluru / Hassan, Karnataka, India",
  statusBadge: "Open to Internships & Research Projects",
  
  // Hero intro
  heroHeadline: "Hi, I'm Sanika H P",
  heroSubtitle: "Artificial Intelligence & Data Science Student",
  heroDescription:
    "I am a passionate Artificial Intelligence and Data Science undergraduate student at REVA University, Bengaluru, interested in technology, data, machine learning, and building real-world solutions.",

  // Social Links (Update these with your actual profiles!)
  socials: {
    github: "https://github.com/sanikahp", // Replace with your actual GitHub URL
    linkedin: "https://linkedin.com/in/sanika-hp", // Replace with your actual LinkedIn URL
    email: "mailto:sanikahp4@gmail.com",
    phone: "tel:+919353264598",
  },

  // About Section
  about: {
    paragraphs: [
      "I am currently an undergraduate student pursuing my B.Tech in Artificial Intelligence and Data Science at REVA University, Bengaluru, currently in my 3rd semester. Originally from Hassan, Karnataka, where I completed my Pre-University Education (PUC), I developed an early passion for technology, logical reasoning, and computing.",
      "My primary interests lie at the intersection of Artificial Intelligence, Data Science, and Machine Learning. I am actively expanding my knowledge in Python programming, exploratory data analysis, data structures, SQL databases, and modern web technologies to build practical, intelligent solutions that solve meaningful real-world challenges.",
      "As an eager learner, I am dedicated to continuous improvement, participating in hands-on coursework, problem-solving, and collaborating on academic and student-driven technology initiatives."
    ],
    highlights: [
      {
        title: "Artificial Intelligence & ML",
        description: "Exploring algorithmic models, predictive analytics, and core AI principles.",
        icon: "Brain"
      },
      {
        title: "Data Analysis & Science",
        description: "Gaining insights from data using Python, statistical reasoning, and visualization.",
        icon: "BarChart3"
      },
      {
        title: "Problem Solving & Logic",
        description: "Strengthening computational logic, algorithm design, and structured thinking.",
        icon: "Cpu"
      },
      {
        title: "Full-Stack Web Foundations",
        description: "Building responsive, modern user interfaces with HTML, CSS, JavaScript, and React.",
        icon: "Globe"
      }
    ],
    quickFacts: [
      { label: "Current Focus", value: "3rd Sem AI & DS @ REVA" },
      { label: "Hometown", value: "Hassan, Karnataka" },
      { label: "Languages", value: "Python, SQL, JavaScript" },
      { label: "Aspiration", value: "AI / Data Science Engineer" }
    ]
  }
};

export const educationData = [
  {
    id: 1,
    institution: "REVA University",
    location: "Bengaluru, Karnataka",
    degree: "Undergraduate Student – B.Tech in Artificial Intelligence & Data Science",
    period: "3rd Semester • Present",
    status: "Currently Pursuing",
    isCurrent: true,
    description:
      "Engaging in comprehensive coursework covering core Artificial Intelligence concepts, Data Science methodologies, Python programming, database management systems, discrete mathematics, and software engineering principles.",
    highlights: [
      "Artificial Intelligence & Machine Learning Foundations",
      "Data Structures & Python Programming",
      "Relational Database Management Systems (SQL / MySQL)",
      "Collaborative Student Tech Projects & Labs"
    ]
  },
  {
    id: 2,
    institution: "Pre-University College (PUC)",
    location: "Hassan, Karnataka",
    degree: "Pre-University Education (PUC)",
    period: "Completed",
    status: "Completed",
    isCurrent: false,
    description:
      "Successfully completed Pre-University education in Hassan with a strong focus on Science and Mathematics, laying a solid mathematical and analytical foundation for engineering studies.",
    highlights: [
      "Strong grounding in Mathematics and Physics",
      "Analytical reasoning and logical problem solving",
      "Transitioned into Engineering & AI specialization"
    ]
  }
];

export const skillCategories = [
  {
    category: "AI & Data Science",
    description: "Core analytical, machine learning, and data processing competencies.",
    skills: [
      { name: "Python", level: "Core Language", tag: "Active" },
      { name: "Artificial Intelligence", level: "Foundational & Concepts", tag: "Learning" },
      { name: "Data Science", level: "Data Workflows & Insights", tag: "Learning" },
      { name: "Machine Learning", level: "Algorithms & Models", tag: "Learning" },
      { name: "Data Analysis", level: "Exploratory & Statistics", tag: "Practicing" }
    ]
  },
  {
    category: "Databases & Tools",
    description: "Data persistence, query optimization, and modern developer tooling.",
    skills: [
      { name: "SQL", level: "Queries & Schema Design", tag: "Active" },
      { name: "MySQL", level: "Relational DB Management", tag: "Active" },
      { name: "Git", level: "Version Control Workflow", tag: "Active" },
      { name: "GitHub", level: "Collaboration & Repositories", tag: "Active" }
    ]
  },
  {
    category: "Web & Front-End Technologies",
    description: "Creating interactive, responsive user interfaces and web applications.",
    skills: [
      { name: "HTML5", level: "Semantic Markup", tag: "Proficient" },
      { name: "CSS3", level: "Modern Layouts & Animations", tag: "Proficient" },
      { name: "JavaScript", level: "ES6+ Logic & Async JS", tag: "Practicing" },
      { name: "React JS", level: "Component Architecture", tag: "Learning" }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Data Analysis & Visualization Dashboard",
    category: "Data Science",
    badge: "Student Project Placeholder",
    shortDesc:
      "A data analytics project focused on importing, cleaning, analyzing, and visualizing multi-dimensional datasets to uncover meaningful business trends and statistical patterns.",
    longDesc:
      "Demonstrates data wrangling, handling missing values, statistical summaries, and interactive chart visualizations using Python libraries.",
    techStack: ["Python", "Data Analysis", "SQL", "Data Visualization"],
    githubUrl: "https://github.com/sanikahp", // Replace with specific project repo URL
    demoUrl: "https://github.com/sanikahp",   // Replace with live demo if available
    features: [
      "Exploratory Data Analysis (EDA) pipelines",
      "Statistical distribution and correlation matrices",
      "Interactive data plots and metric reporting"
    ]
  },
  {
    id: 2,
    title: "Machine Learning Predictive Model",
    category: "Machine Learning",
    badge: "Student Project Placeholder",
    shortDesc:
      "An end-to-end machine learning project applying classification/regression algorithms to train predictive models on structured feature datasets.",
    longDesc:
      "Covers feature engineering, training/testing splits, algorithm comparison, and performance evaluation metrics like accuracy, precision, and recall.",
    techStack: ["Python", "Machine Learning", "Scikit-Learn", "Data Preprocessing"],
    githubUrl: "https://github.com/sanikahp", // Replace with specific project repo URL
    demoUrl: "https://github.com/sanikahp",   // Replace with live demo if available
    features: [
      "Data preprocessing and feature scaling",
      "Supervised learning model training & tuning",
      "Performance evaluation and confusion matrices"
    ]
  },
  {
    id: 3,
    title: "AI-Powered Intelligent Web Solution",
    category: "AI & Web",
    badge: "Student Project Placeholder",
    shortDesc:
      "A modern, responsive web application designed to integrate an intelligent AI backend with a smooth, interactive React user interface.",
    longDesc:
      "Combines modern front-end design systems with data-driven API endpoints, showcasing seamless user interaction and real-time response rendering.",
    techStack: ["React JS", "JavaScript", "HTML5/CSS3", "Python / API"],
    githubUrl: "https://github.com/sanikahp", // Replace with specific project repo URL
    demoUrl: "https://github.com/sanikahp",   // Replace with live demo if available
    features: [
      "Responsive React component architecture",
      "Client-side state management & async API calls",
      "Clean, modern cyber-themed UI design"
    ]
  }
];

export const journeyMilestones = [
  {
    semester: "Semester 1",
    phase: "Programming & Math Foundations",
    title: "Core Computational Logic",
    description:
      "Established foundational knowledge in programming logic, mathematics, and problem-solving fundamentals necessary for computing systems.",
    tags: ["Algorithms", "Logic Building", "Mathematics"]
  },
  {
    semester: "Semester 2",
    phase: "Data Structures & Database Systems",
    title: "Structuring & Querying Data",
    description:
      "Deepened understanding of structured data representation, SQL query design, relational database schemas with MySQL, and object-oriented programming.",
    tags: ["SQL", "MySQL", "Data Organization", "Git"]
  },
  {
    semester: "Semester 3 (Current)",
    phase: "AI, Machine Learning & Modern Web",
    title: "Exploring AI Pipelines & Web Applications",
    description:
      "Currently diving into artificial intelligence concepts, machine learning algorithms, Python data analytics, and modern React web development.",
    tags: ["AI", "Machine Learning", "Python", "React JS"]
  },
  {
    semester: "Future Roadmap",
    phase: "Deep Learning, Big Data & Industry Internships",
    title: "Real-World Solutions & Research",
    description:
      "Aiming to build complex AI projects, explore deep learning architectures, contribute to open-source, and undertake rewarding industry internships.",
    tags: ["Deep Learning", "Internships", "Capstone Projects"]
  }
];

export const certificationsData = [
  {
    id: 1,
    type: "Certification",
    title: "Python / Data Science Certification",
    issuer: "Course / Platform Placeholder",
    status: "Placeholder Card",
    description:
      "Ready for your official certification details (e.g. Python for Data Science, NPTEL, Coursera, HackerRank, etc.).",
    date: "Upcoming / In-Progress"
  },
  {
    id: 2,
    type: "Workshop",
    title: "Artificial Intelligence & ML Workshop",
    issuer: "REVA University / Tech Event",
    status: "Placeholder Card",
    description:
      "Ready for hands-on workshops, technical bootcamps, and seminar participations attended during college.",
    date: "Academic Year 2025-2026"
  },
  {
    id: 3,
    type: "Hackathon",
    title: "Student Innovation Hackathon",
    issuer: "Hackathon / Competition Placeholder",
    status: "Placeholder Card",
    description:
      "Ready to highlight your hackathon submissions, ideathons, and technical team challenges.",
    date: "Ready to update"
  },
  {
    id: 4,
    type: "Course",
    title: "Database Management & Web Development",
    issuer: "Academic & Self-Paced Learning",
    status: "Placeholder Card",
    description:
      "Ready for specialized coursework and technical certificates in SQL databases and front-end engineering.",
    date: "Ongoing Learning"
  }
];
