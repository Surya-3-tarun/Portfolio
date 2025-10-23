import cashremitImg from "@/public/cashremit.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaAws, FaReact, FaRaspberryPi } from "react-icons/fa";
import {
  RiCss3Line,
  RiDatabase2Line,
  RiGatsbyLine,
  RiGitBranchLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandMongodb,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandTypescript,
} from "react-icons/tb";

import React from "react";
import { StaticImageData } from "next/image";

export const profile = {
  avatar: "https://avatars.githubusercontent.com/u/124872329", // You can upload your photo to GitHub or use a different hosted image
  email: "naralasuryatarun@gmail.com",
  name: "Sri Surya Tarun Narala",
  title: "Full-Stack Developer | MS in Computer & Information Sciences",
  experience: "1+ years", // Adjust as needed
  likes: "building scalable apps, working on AI/ML projects, learning cloud tech",
  resumeLink: "https://drive.google.com/file/d/1r0hN-Ux34VQZhf1SpvS4dBaNUP-MOnqv/view?usp=drive_link", // Replace with a live shareable PDF link
  linkedInLink: "https://linkedin.com/in/srisuryatarun/",
  githubLink: "https://github.com/Surya-3-tarun",
} as const;

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
] as const;

type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl?: StaticImageData;  // Made optional
  url: string;
};

export const experiencesData = [
  {
    title: "Backend Developer Intern",
    location: "HealthXchange International Inc.",
    description:
      "Optimized large-scale Django APIs using ORM techniques (select_related, prefetch_related), reducing average latency by 53%. Designed a distributed PDF generation service with WeasyPrint, Celery, and Google Cloud Storage. Improved scalability with Redis caching and asynchronous task queues, doubling throughput across microservices under high load.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2025 - Present",
  },
  {
    title: "Software Developer Intern",
    location: "Elemica, India",
    description:
      "Engineered full-stack modules using React.js, Django REST Framework, and MongoDB, improving system performance by 30%. Delivered reliable RESTful APIs handling 500+ daily transactions with authentication, validation, and CI/CD pipelines in Linux environments. Partnered with cross-functional teams to deploy scalable, secure releases, improving uptime and client satisfaction by 20%.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - July 2024",
  },
  {
    title: "AI-ML Intern",
    location: "AICTE, India",
    description:
      "Engineered machine learning pipelines with AWS SageMaker and serverless apps using AWS Lambda, improving scalability and deployment speed.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - July 2023",
  },
  {
    title: "Full Stack Intern",
    location: "BVRIT, India",
    description:
      "Built a pharmacy management app using React.js and Firebase. Improved accessibility, live sync, and cut manual effort by 60%.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2022 - Jun 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Shelfwise",
    description:
      "A book review platform built using React, Redux, Express, MySQL, and Firebase. Implemented Google OAuth and improved performance by 30% using Vite.",
    tags: ["React", "Redux", "Express", "MySQL", "Firebase"],
    imageUrl: cashremitImg,
    url: "https://github.com/Surya-3-tarun/Shelfwise",
  },
  {
    title: "P2P File Sharing System",
    description:
      "Java-based decentralized file-sharing system using multithreaded socket programming. Enabled piecewise downloads and dynamic peer selection.",
    tags: ["Java", "Sockets", "Concurrency"],
    url: "",
  },
  {
    title: "Dream Estate",
    description:
      "A MERN stack real estate listing platform with JWT and Google OAuth. Optimized APIs and deployed UI with Tailwind CSS & Vite.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "JWT"],
    url: "https://github.com/Surya-3-tarun/dream-estate",
  },
  // New projects added below
  {
    title: "Heart Disease Risk Prediction",
    description:
      "Built ML models (Logistic Regression, Random Forest, SVM) using preprocessed clinical/lifestyle data and evaluated with AUC-ROC. Deployed a Streamlit dashboard to visualize predictions and support health risk interpretation.",
    tags: ["Machine Learning", "Logistic Regression", "Random Forest", "SVM", "Streamlit"],
    url: "", // Add link if available
  },
  {
    title: "Ocular Disease Recognition Using Deep Learning",
    description:
      "Developed a CNN model with VGGNet and Inception to classify 8 retinal diseases using TensorFlow and PyTorch. Enhanced model accuracy through image augmentation and performance tuning.",
    tags: ["Deep Learning", "CNN", "VGGNet", "Inception", "TensorFlow", "PyTorch"],
    url: "", // Add link if available
  },
  {
    title: "Offensive Language Detection using NLP",
    description:
      "Built a text classification model using Logistic Regression, TF-IDF, and NLTK to detect offensive or toxic language. Preprocessed social media text and evaluated model performance with accuracy and F1-score metrics.",
    tags: ["NLP", "Logistic Regression", "TF-IDF", "NLTK", "Text Classification"],
    url: "", // Add link if available
  },
  {
    title: "Pharoman - Pharmacy Dashboard System",
    description:
      "Academic minor project. A medical store management web app that helps store owners and managers track inventory and retrieve pharmacy data needs.",
    tags: ["HTML", "CSS", "React.js", "REST", "Node.js", "Firebase"],
    url: "", // Add link if available
  },
];


export const skillsData = [
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: TbBrandNodejs },
  { name: "Express", icon: TbBrandNodejs },
  { name: "HTML", icon: RiHtml5Line },
  { name: "CSS", icon: RiCss3Line },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "PostgreSQL", icon: RiDatabase2Line },
  { name: "Redux", icon: TbBrandRedux },
  { name: "Git", icon: RiGitBranchLine },
  { name: "AWS", icon: FaAws },
  { name: "...and more", icon: React.Fragment },
];
