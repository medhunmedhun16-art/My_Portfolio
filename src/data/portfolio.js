/**
 * ──────────────────────────────────────────────────────
 *  Portfolio Data — Medhun N
 * ──────────────────────────────────────────────────────
 *  All portfolio content lives here for easy editing.
 */

// ─── Personal / Hero ────────────────────────────────
export const personalInfo = {
  name: "Medhun N",
  subtitle: "Data Science Student",
  tagline:
    "Transforming complex datasets into meaningful insights through analytical thinking, clean code, and a passion for data-driven solutions.",
  resumeUrl: "#",            // link to your PDF resume
  email: "medhun@example.com",
  location: "Chennai, India",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

// ─── About ──────────────────────────────────────────
export const aboutData = {
  image: "https://via.placeholder.com/400x400?text=Medhun+N",
  summary:
    "I'm a Data Science student at Panimalar Engineering College with a strong foundation in Python, SQL, and analytical tools. I thrive on turning raw data into actionable insights, building end-to-end projects from data cleaning to visualization. With hands-on internship experience in web development and a deep curiosity for machine learning, I bring both technical depth and creative problem-solving to every challenge.",
  highlights: [
    { label: "Education", value: "B.Tech", unit: "IT — Class of 2027" },
    { label: "Projects",  value: "2+",     unit: "Completed" },
    { label: "Skills",    value: "7+",     unit: "Technologies" },
  ],
};

// ─── Education ──────────────────────────────────────
export const educationData = [
  {
    id: 1,
    degree: "B.Tech in Information Technology",
    institution: "Panimalar Engineering College, Chennai",
    duration: "2023 – 2027 (Expected)",
    description:
      "Pursuing a Bachelor's degree with a focus on Data Science, machine learning, and software development. Actively building real-world projects and gaining industry exposure through internships.",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Chennai, Tamil Nadu",
    duration: "2021 – 2023",
    description:
      "Completed higher secondary education with a strong foundation in Mathematics and Computer Science.",
  },
  {
    id: 3,
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Chennai, Tamil Nadu",
    duration: "2020 – 2021",
    description:
      "Built a solid academic base with excellent performance in core subjects.",
  },
];

// ─── Skills ─────────────────────────────────────────
export const skillsData = {
  "Programming Languages": [
    { name: "Python",       level: 85 },
    { name: "C",            level: 75 },
    { name: "Java",         level: 70 },
  ],
  "Data Science & Analysis": [
    { name: "Pandas",           level: 80 },
    { name: "NumPy",            level: 80 },
    { name: "Data Cleaning",    level: 85 },
    { name: "Data Visualization", level: 75 },
    { name: "Predictive Analysis", level: 65 },
  ],
  Database: [
    { name: "SQL",          level: 80 },
  ],
  Tools: [
    { name: "Jupyter Notebook", level: 85 },
    { name: "VS Code",          level: 90 },
    { name: "Git & GitHub",     level: 70 },
  ],
};

// ─── Soft Skills ────────────────────────────────────
export const softSkillsData = [
  {
    label: "Problem Solving",
    description: "Analytical mindset to break down complex challenges into structured, data-driven solutions.",
    icon: "puzzle",
  },
  {
    label: "Communication",
    description: "Ability to present technical findings clearly to both technical and non-technical audiences.",
    icon: "chat",
  },
  {
    label: "Team Collaboration",
    description: "Effective contributor in cross-functional teams, valuing diverse perspectives and shared goals.",
    icon: "team",
  },
  {
    label: "Time Management",
    description: "Skilled at prioritising tasks and meeting deadlines in fast-paced academic and professional settings.",
    icon: "clock",
  },
];

// ─── Projects ───────────────────────────────────────
export const projectsData = [
  {
    id: 1,
    title: "Student Performance Analysis",
    description:
      "A comprehensive data analysis project that uncovers patterns in student academic performance using Python and data science libraries.",
    longDescription:
      "Built an end-to-end data analysis pipeline using Python, Pandas, and NumPy. Performed thorough data cleaning and preprocessing on raw student records. Created insightful visualizations to identify performance trends across demographics, subjects, and study habits. Applied basic predictive analysis to forecast outcomes and generated actionable insights for educators.",
    image: "https://via.placeholder.com/600x400?text=Student+Performance+Analysis",
    techStack: ["Python", "Pandas", "NumPy", "Data Visualization", "Predictive Analysis"],
    category: "Data Science",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Music Web Application",
    description:
      "A full-featured music streaming web app where users can browse, play, and manage their favourite songs.",
    longDescription:
      "Developed during an internship at Test Yantra Software Solution Pvt. Ltd. Built both frontend and backend features enabling users to browse a music library, stream tracks, create playlists, and manage their song collections. Focused on delivering a seamless, intuitive, and user-friendly experience with responsive design.",
    image: "https://via.placeholder.com/600x400?text=Music+Web+App",
    techStack: ["HTML", "CSS", "JavaScript", "Backend Development"],
    category: "Full Stack",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
];

// ─── Experience ─────────────────────────────────────
export const experienceData = [
  {
    id: 1,
    role: "Web Application Development Intern",
    company: "Test Yantra Software Solution Pvt. Ltd.",
    duration: "Internship",
    achievements: [
      "Developed a Music Web Application enabling users to browse, play, and manage songs seamlessly.",
      "Implemented both frontend UI and backend logic for a complete full-stack experience.",
      "Focused on responsive design and intuitive UX to deliver a polished, user-friendly product.",
      "Gained hands-on experience with real-world software development workflows and best practices.",
    ],
  },
];

// ─── Navigation Links ───────────────────────────────
export const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Education",  href: "#education" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];
