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
];