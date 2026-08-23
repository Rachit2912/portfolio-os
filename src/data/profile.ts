import { Profile } from '../types/portfolio';

export const profileData: Profile = {
  name: "RACHIT JOSHI",
  title: "Backend / Systems / Cloud / AI Experiments",
  tagline: "Building production systems, developer tools and curious side projects.",
  identityLine: "Backend engineer building systems, tools and experiments - usually somewhere between Linux, distributed backends, C++, cloud and curiosity.",
  education: {
    institution: "Vellore Institute of Technology (VIT)",
    degree: "B.Tech in Information Technology",
    period: "Sep 2022 - Jul 2026",
    gpa: "8.87 / 10",
    location: "Vellore, India"
  },
  highlights: {
    role: "SDE / Backend-focused engineer",
    currentStory: "Production backend work at Hitwicket Cricket Game (Metasports)",
    coreLanguages: ["C", "C++", "Go", "Python", "JavaScript", "TypeScript", "Bash", "SQL"],
    coreSystems: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Linux", "CMake", "Qt"],
    engineeringInterests: [
      "Backend Systems & Distributed Engines",
      "Linux Kernel & Operating System Concepts",
      "Real-time Trading & Order Matching",
      "Cloud Architecture & High-Scale APIs",
      "Computer Vision & Deep Learning Pipelines",
      "Developer Tooling & CLI Applications"
    ],
    competitiveProgramming: "800+ DSA problems solved across LeetCode & CodeChef"
  },
  achievements: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      badge: "AWS SAA",
      date: "2024"
    },
    {
      title: "goQuant C++ Development Bootcamp",
      badge: "goQuant",
      date: "2024"
    },
    {
      title: "SCIS 2025 Research Paper Presentation",
      badge: "SCIS '25",
      date: "2025"
    },
    {
      title: "LeetCode Contest Best Rank #408",
      subtitle: "800+ DSA Problems Solved across platforms",
      badge: "LeetCode 1600+",
      date: "Global Rank #408"
    },
    {
      title: "CodeChef Rating 1500+ (Top 14%)",
      badge: "CodeChef",
      date: "Top 14%"
    }
  ]
};
