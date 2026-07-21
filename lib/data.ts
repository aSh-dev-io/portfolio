export const navLinks = [
  { label: "Intro", href: "#intro" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export const focusAreas = [
  "Embedded Systems",
  "IoT",
  "Automation",
  "PCB Design",
  "Machine Learning",
];

export const skillGroups = [
  {
    title: "Programming",
    proficiency: 85,
    skills: ["C", "MATLAB", "C++"],
  },
  {
    title: "Embedded",
    proficiency: 88,
    skills: ["ESP32", "STM32", "Embedded C", "Arduino", "Raspberry Pi"],
  },
  {
    title: "Hardware & PCB Design",
    proficiency: 80,
    skills: ["PCB Design", "KiCad", "Instrumentation", "EasyEDA", "Circuit Simulation"],
  },
  {
    title: "Core Technologies",
    proficiency: 78,
    skills: [
      "Machine Learning",
      "Internet of Things",
      "Industrial Automation",
      "DSP System Toolbox (MATLAB)",
      "Simulink",
    ],
  },
];

export const projects = [
  {
    title: "NFC & Camera-Based Attendance System",
    subtitle: "ESP32 • ESP32-CAM • Python",
    description:
      "Engineered a dual-authentication smart attendance system using ESP32, ESP32-CAM, and Python, integrating NFC-based identification with camera-assisted verification. The solution enables secure, real-time attendance logging, cloud synchronization, and improved accuracy by reducing proxy attendance in educational and organizational environments.",
    duration: "3 months",
    role: "Solo Developer",
    tags: [
      "ESP32",
      "ESP32-CAM",
      "Python",
      "NFC",
      "IoT",
      "Cloud Integration",
      "Computer Vision",
    ],
    demoHref: "#",
  },
  {
    title: "Smart Water Quality & Pipeline Monitoring System",
    subtitle: "IoT • AI • LoRaWAN",
    description:
      "Developed an IoT and AI-based smart water pipeline monitoring system that predicts pipeline failures, detects underground leaks, monitors water quality, and provides real-time alerts through a cloud-connected dashboard using LoRaWAN technology.",
    duration: "4-6 months",
    role: "IoT & Embedded Systems Developer",
    tags: [
      "ESP32",
      "LoRaWAN",
      "IoT",
      "AI/Machine Learning",
      "Python",
      "GIS Mapping",
      "Web Dashboard",
      "Pressure Sensors",
      "Flow Sensors",
      "Water Quality Sensors",
      "MQTT",
      "Cloud Database",
    ],
    demoHref: "#",
  },
  {
    title: "PCB-Based Motor Controller",
    subtitle: "Custom Hardware Design",
    description:
      "Custom PCB design for a brushless motor controller used in a robotics automation line.",
    duration: "6 weeks",
    role: "Hardware Designer",
    tags: ["KiCad", "Embedded C", "PCB Design"],
    demoHref: "#",
  },
];

export const achievements = [
  {
    date: "Sep 15, 2025",
    title: "Smart India Hackathon (SIH) – Joint Winner",
    org: "Smart India Hackathon",
    description:
      "Selected for Smart India Hackathon by developing an innovative engineering solution focused on solving real-world challenges using embedded systems, IoT, and intelligent automation.",
  },
  {
    date: "Mar 10, 2025",
    title: "Star Performer – Hacktoberfest Open Source",
    org: "Hacktoberfest",
    description:
      "Recognized as a Star Performer for meaningful open-source contributions during Hacktoberfest, demonstrating collaboration, version control, and software development skills.",
  },
  {
    date: "Nov 2, 2024",
    title: "1st Place – Paper & Project Presentation",
    org: "College Tech Symposium — CIT Sandwich Polytechnic College",
    description:
      "Secured First Place for presenting an innovative engineering project and technical paper, showcasing technical knowledge, innovation, and presentation skills.",
  },
  {
    date: "Nov 2, 2024",
    title: "1st Place – National Level Technical Quiz",
    org: "College Tech Symposium — CIT Sandwich Polytechnic College",
    description:
      "Achieved First Place in a National Level Technical Quiz Competition by demonstrating excellence in electronics, engineering concepts, and analytical problem-solving.",
  },
];

export const certifications = [
  {
    title: "Embedded Systems with ARM Cortex-M",
    issuer: "Arm",
    date: "Jan 29, 2026",
    href: "#",
  },
  {
    title: "Programming for the Internet of Things Project",
    issuer: "University of California, Irvine (UC Irvine)",
    date: "Jan 23, 2026",
    href: "#",
  },
  {
    title: "MATLAB & Simulink Professional Learning Path",
    issuer: "MathWorks",
    date: "Jun 20, 2026",
    href: "#",
  },
  {
    title: "Introduction to IoT",
    issuer: "Cisco",
    date: "Jul 16, 2026",
    href: "#",
  },
  {
    title: "Hindi Language Proficiency – Level 4",
    issuer: "Dakshina Bharat Hindi Prachar Sabha",
    date: "Jul 8, 2026",
    href: "#",
  },
  {
    title: "Hindi Spoken (Bolchal) Proficiency – Level 6",
    issuer: "Dakshina Bharat Hindi Prachar Sabha",
    date: "Jul 8, 2026",
    href: "#",
  },
];

export const experience = [
  {
    period: "May 2024",
    duration: "15 Days",
    type: "Industrial Training",
    title: "Industrial Automation Intern",
    org: "Gayathri Technocrats",
    location: "Hosur, Tamil Nadu",
    description:
      "Completed industrial training focused on industrial automation, instrumentation, and manufacturing operations. Worked alongside experienced engineers while gaining practical exposure to PLC-based automation systems, machine assembly, commissioning, and industrial control equipment.",
    responsibilities: [
      "Assisted in machine assembly, electrical wiring, and equipment testing.",
      "Gained hands-on exposure to Omron, Siemens, ABB, and Schneider Electric PLC systems.",
      "Supported installation and commissioning activities under senior engineers.",
      "Observed industrial automation workflows and manufacturing processes.",
      "Learned industrial safety standards and best engineering practices.",
      "Improved analytical thinking, teamwork, and technical communication skills.",
    ],
    technologies: [
      "Omron PLC",
      "Siemens PLC",
      "ABB PLC",
      "Schneider Electric PLC",
      "Industrial Automation",
      "Industrial Instrumentation",
      "Electrical Wiring",
      "Machine Assembly",
      "Equipment Testing",
      "Commissioning",
      "Process Control",
      "Industrial Safety",
    ],
  },
];

export const publications = [
  {
    date: "Mar 14, 2025",
    venue: "IEEE International Conference on Data Systems",
    title:
      "IoT–Machine Learning Based Predictive Maintenance Framework for Industrial Machinery",
    description:
      "Presents a novel neural architecture for detecting anomalies in streaming data with sub-millisecond latency, achieving state-of-the-art accuracy on benchmark datasets.",
    publicationHref: "#publications",
    certificateHref: "#publications",
  },
];

export const education = [
  {
    period: "2026 – PRESENT",
    title: "B.E. Electronics & Communication Engineering (Lateral Entry)",
    org: "KGISL Institute of Technology",
    location: "Coimbatore, Tamil Nadu",
    score: "7.2 / 10",
    learning: [
      "Embedded Systems",
      "Internet of Things (IoT)",
      "PCB Design",
      "Machine Learning",
      "Microcontrollers & Embedded C",
    ],
  },
  {
    period: "2022 – 2025",
    title: "Diploma in Instrumentation & Control Engineering",
    org: "CIT Sandwich Polytechnic College",
    location: "Coimbatore, Tamil Nadu",
    score: "89%",
    learning: [
      "Industrial Instrumentation",
      "PLC & Industrial Automation",
      "Process Control Systems",
      "Sensors & Transducers",
      "Digital Electronics",
    ],
  },
  {
    period: "2021",
    title: "Secondary School Leaving Certificate (SSLC)",
    org: "Keartiman Matric Higher Secondary School",
    location: "Coimbatore, Tamil Nadu",
    score: "80%",
    learning: [],
  },
];

export const contactInfo = {
  email: "ashwinmoorthy86@gmail.com",
  phone: "+91 8807814879",
  linkedin: "linkedin.com/in/ashwinm86",
  github: "https://github.com/aSh-dev-io",
  location: "Coimbatore, India",
};
