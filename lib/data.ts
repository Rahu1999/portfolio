import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import examImg from "@/public/exam.png";
import levelNextImg from "@/public/levelnext.png";
import taskManagerImg from "@/public/taskmanager.png";
import rahulProfileImg from "../public/rahul_profile.jpeg"
import { calculateExperience } from "./utils";

export const userName = "Rahul"
export const userPhoto = rahulProfileImg
export const userEmail = "rahulrajbhar19999@gmail.com"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated in BSc.(C.S)",
    location: "Mumbai, Jogeswheri(E)",
    description:
    "I graduated in BSc. computer science from ismail yusuf college (Mumbai University)",
      // "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Master's in Computer Science",
    location: "Mumbai, Goregaon(W)",
    description:
    "I am completed my MSc. computer science from patkar varde college (Mumbai University)",
      // "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Mumbai, Andheri(E)",
    description:
      `I worked as a full-stack developer for ${calculateExperience("01-07-2021")} years. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.`,
      // "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Exam",
    description:
      "I worked as a full-stack developer on this project for 1 years. The project focused on facilitating exam processes and generating mark sheets",
    tags: ["React", "Next.js", "Typescript", "MySQL", "Tailwind", "Node"],
    imageUrl: examImg,
  },
  {
    title: "LevelNext",
    description:
      `Built a learning management mobile application similar to Udemy from scratch.`,
    tags: ["React","React Native", "Node js", "Express js", "MongoDB"],
    imageUrl: levelNextImg,
  },
  {
    title: "Task Manager",
    description:
      "Task Manager Web App allows users to create tasks and subtasks, mark them as completed, and delete them as needed, providing efficient task management.",
    tags: ["Angular", "Node js", "MongoDB", "Express js"],
    imageUrl: taskManagerImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  "MongoDB",
  "RabbitMQ",
  "NGNIX",
  "PM2",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  "Express",
  // "PostgreSQL",
  "MySQL",
  // "Python",
  // "Django",
  // "Framer Motion",
] as const;
