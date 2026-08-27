import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "nfc-attendance",
    featured: true,

    title: "Smart NFC & Camera-Based Attendance System",
    subtitle: "Embedded Systems • IoT",

    description:
      "A secure smart attendance solution that combines NFC authentication, ESP32-CAM face verification, and Firebase cloud synchronization to eliminate proxy attendance and provide real-time monitoring.",

    // Image inside /public
    image: "/nfc-attendance.png",

    duration: "3 Months",
    role: "Embedded Systems Developer",

    tags: [
      "ESP32",
      "ESP32-CAM",
      "RFID",
      "Firebase",
      "Python",
      "Computer Vision",
      "IoT",
    ],

    github: "https://github.com/aSh-dev-io",
    demoHref: "#",

    overview:
      "This project combines RFID authentication with camera verification to create a highly secure attendance system. Attendance records are synchronized to Firebase in real time, enabling administrators to monitor attendance remotely while preventing proxy attendance.",

    problem:
      "Traditional attendance methods are slow, manual, and vulnerable to proxy attendance. Institutions require a secure and automated solution capable of real-time cloud synchronization.",

    solution:
      "Developed an ESP32-based embedded system integrating an RC522 RFID reader, ESP32-CAM, Wi-Fi connectivity, and Firebase cloud services to verify identity before recording attendance.",

    architecture: [
      "RFID Card",
      "RC522 RFID Reader",
      "ESP32 Controller",
      "ESP32-CAM Verification",
      "Wi-Fi",
      "Firebase",
      "Admin Dashboard",
    ],

    features: [
      "Dual authentication",
      "Cloud synchronization",
      "Real-time attendance logs",
      "Camera verification",
      "Remote monitoring",
      "Scalable architecture",
    ],

    challenges: [
      "Synchronizing RFID and camera modules",
      "Maintaining Wi-Fi reliability",
      "Optimizing Firebase response time",
      "Handling duplicate attendance",
    ],

    learnings: [
      "ESP32 networking",
      "Firebase APIs",
      "Embedded debugging",
      "RFID communication",
      "IoT architecture",
    ],

    future: [
      "Face recognition AI",
      "Mobile application",
      "Offline synchronization",
      "Analytics dashboard",
      "Email notifications",
    ],
  },

  {
    id: "smart-water",
    featured: true,

    title: "Smart Water Quality & Pipeline Monitoring System",
    subtitle: "IoT • AI • LoRaWAN",

    description:
      "An intelligent IoT platform for monitoring water quality, predicting pipeline failures, detecting underground leaks, and sending real-time cloud alerts using LoRaWAN.",

    // Image inside /public
    image: "/water-monitoring.png",

    duration: "5 Months",
    role: "IoT & Embedded Developer",

    tags: [
      "ESP32",
      "LoRaWAN",
      "MQTT",
      "Python",
      "Machine Learning",
      "GIS",
      "Cloud",
    ],

    github: "https://github.com/aSh-dev-io",
    demoHref: "#",

    overview:
      "Designed a complete IoT monitoring solution capable of collecting sensor data across long distances using LoRaWAN while applying machine learning techniques to predict failures before they occur.",

    problem:
      "Water distribution systems frequently suffer from leakage, contamination, and delayed maintenance due to a lack of continuous monitoring.",

    solution:
      "Integrated multiple environmental sensors with ESP32 and LoRaWAN gateways to transmit data to a cloud dashboard where AI models analyze pipeline conditions.",

    architecture: [
      "Water Sensors",
      "ESP32",
      "LoRa Node",
      "LoRa Gateway",
      "MQTT Broker",
      "Cloud Database",
      "Dashboard",
    ],

    features: [
      "Leak detection",
      "Water quality monitoring",
      "Predictive maintenance",
      "Cloud dashboard",
      "Real-time alerts",
      "Historical analytics",
    ],

    challenges: [
      "Sensor calibration",
      "Long-range communication",
      "Power optimization",
      "Cloud latency",
    ],

    learnings: [
      "LoRaWAN networking",
      "MQTT protocol",
      "Cloud dashboards",
      "Machine learning deployment",
    ],

    future: [
      "Digital twin integration",
      "Satellite communication",
      "Solar-powered nodes",
      "Mobile monitoring",
    ],
  },
  {
  id: "cloudburst-early-warning",
  featured: true,

  title: "Cloudburst Early Warning & Alarm System",
  subtitle: "AI • IoT • Embedded Systems • Disaster Management",

  description:
    "An AI-powered hyperlocal early warning and alarm system designed to predict cloudburst conditions and deliver real-time disaster alerts using intelligent weather analysis, distributed sensing, and automated response mechanisms.",

  // Image inside /public
  image: "/Cloud-burst.jpg",

  duration: "SIH 2025",
  role: "Embedded Systems & IoT Developer",

  tags: [
    "Artificial Intelligence",
    "Machine Learning",
    "IoT",
    "Embedded Systems",
    "Weather Monitoring",
    "Sensor Networks",
    "Real-Time Alerts",
    "Disaster Management",
  ],

  github: "https://github.com/aSh-dev-io",
  demoHref: "#",

  overview:
    "Developed an intelligent disaster-management system focused on early detection and hyperlocal prediction of cloudburst events. The system combines environmental sensing, weather intelligence, machine learning, and automated alert mechanisms to provide timely warnings and support coordinated emergency response.",

  problem:
    "Cloudbursts can develop rapidly and cause severe flooding, infrastructure damage, and loss of life. Conventional weather monitoring and warning systems may not provide sufficiently localized or timely information for communities exposed to sudden extreme rainfall events.",

  solution:
    "Designed a distributed early warning system that combines dense environmental sensor networks, weather data, radar information, anomaly detection, and machine learning-based analysis to identify potential cloudburst conditions and generate real-time localized alerts.",

  architecture: [
    "Environmental Sensors",
    "Weather Data",
    "Radar Data",
    "IoT Sensor Network",
    "Edge Processing",
    "Machine Learning Model",
    "Cloud Platform",
    "Early Warning Engine",
    "Automated Alarm System",
  ],

  features: [
    "Hyperlocal cloudburst prediction",
    "Real-time environmental monitoring",
    "Multi-source weather data analysis",
    "Anomaly detection",
    "AI-assisted prediction",
    "Automated disaster alerts",
    "Real-time alarm activation",
    "Remote monitoring",
    "Response coordination",
  ],

  challenges: [
    "Predicting rapidly developing cloudburst conditions",
    "Processing distributed environmental data",
    "Achieving reliable real-time communication",
    "Reducing false alerts",
    "Designing a dependable hardware prototype",
    "Coordinating sensing, prediction, and alert systems",
  ],

  learnings: [
    "Machine learning for environmental prediction",
    "IoT sensor-network architecture",
    "Embedded systems integration",
    "Real-time data processing",
    "Disaster-warning system design",
    "Hardware-software integration",
    "Rapid prototyping",
    "Technical problem solving",
  ],

  future: [
    "Larger distributed sensor networks",
    "Advanced weather radar integration",
    "Improved prediction accuracy",
    "Satellite data integration",
    "Mobile emergency alerts",
    "Smart-city disaster management integration",
    "Automated emergency response coordination",
  ],
},
{
  id: "smart-dustbin",
  featured: false,

  title: "Smart Dustbin for Community Waste Management",
  subtitle: "IoT • Smart Waste Management • Community Outreach",

  description:
    "A proposed smart waste-management solution designed for Selevapuram village as part of a community outreach initiative, focusing on cleaner waste disposal, better segregation, and improved awareness of responsible waste management.",

  // Image inside /public
  image: "/Smart-dustbin.jpg",

  duration: "Outreach Project",
  role: "Project Designer",

  tags: [
    "IoT",
    "Smart Waste Management",
    "Waste Segregation",
    "Embedded Systems",
    "Sensors",
    "Automation",
    "Community Outreach",
  ],

  github: "https://github.com/aSh-dev-io",
  demoHref: "#",

  overview:
    "Designed a smart dustbin concept to address waste-management challenges faced by people in Selevapuram village. The proposal focuses on combining simple automation and sensing technologies with practical waste-management practices to create a cleaner and more sustainable community environment.",

  problem:
    "Improper waste disposal and limited waste segregation can create unhygienic surroundings and increase the difficulty of managing household and community waste. The project was proposed to explore a practical technology-based solution suitable for a village environment.",

  solution:
    "Designed a smart dustbin concept that can support improved waste disposal and segregation through sensors and automated mechanisms. The proposed system is intended to make waste handling more convenient for residents while supporting better community-level waste management.",

  architecture: [
    "Waste Input",
    "Detection Sensors",
    "Embedded Controller",
    "Waste Classification",
    "Automated Segregation",
    "Waste Collection",
    "Status Monitoring",
  ],

  features: [
    "Smart waste detection",
    "Waste segregation concept",
    "Automated waste handling",
    "Bin status monitoring",
    "Improved disposal awareness",
    "Community-focused design",
  ],

  challenges: [
    "Designing a solution suitable for village conditions",
    "Keeping the system affordable and practical",
    "Handling different types of waste",
    "Designing a simple user-friendly mechanism",
    "Considering maintenance and reliability",
  ],

  learnings: [
    "Community-focused engineering",
    "IoT system planning",
    "Sensor-based automation",
    "Embedded system design",
    "Problem identification",
    "Sustainable technology design",
  ],

  future: [
    "Build and test a working prototype",
    "Add IoT-based bin monitoring",
    "Introduce fill-level notifications",
    "Improve automatic waste classification",
    "Develop a mobile monitoring interface",
    "Deploy and evaluate the system in the village",
  ],
},
];