import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated IT Technical degree",
    location: "Indaiatuba, SP",
    description:
      "I graduated after 18 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Full-stack Developer",
    location: "Indaiatuba, SP",
    description:
      "I worked as a Full Stack developer for 3 years and 10 months at Lenovo Brazil.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "Full-Stack DevOps Developer",
    location: "Campinas, SP",
    description:
      "I worked as a DevOps full developer at Venturus in may 2022, but as it turned out changing from full stack development to DevOps wasn't a good idea for me.",
    icon: React.createElement(FaReact),
    date: "2022 - 2022",
  },
  {
    title: "FrontEnd Developer",
    location: "Indaiatuba, SP",
    description:
      "I'm now currently working at a Startup called DoubleIT where I'm focused only on FrontEnd development using stacks like: React (Typescript), Angular, Nest.js, Next.js, Node.js, .NET Core",
    icon: React.createElement(FaReact),
    date: "2023 - Now",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "PHP",
  "MySQL",
  "SQLServer",
  ".NET Core",
  "Styled Components",
] as const;
