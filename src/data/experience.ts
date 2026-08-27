import { ExperienceItem } from '../types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: "hitwicket",
    company: "Hitwicket Cricket Game (Metasports)",
    role: "SDE Intern",
    period: "Jan 2026 - Jul 2026",
    location: "Hyderabad, India",
    commitHash: "c0mm1t_hitwicket_sde",
    summary: "Production backend engineering on high-scale Play Store mobile title. Built coupon engine, tagging framework, catalog versioning, revenue analytics, LiveOps tools, internal admin platforms, and refactored core service execution paths.",
    highlights: [
      "Designed and implemented production backend coupon engine and tagging framework.",
      "Engineered catalog versioning and revenue analytics services for LiveOps platforms.",
      "Optimized internal execution pipelines, cutting Python SLT execution time from 30s down to 10s.",
      "Conducted extensive database refactoring and performance tuning for high-throughput live game traffic."
    ],
    metrics: [
      { label: "Payer Conversion", value: "+49%" },
      { label: "Premium Purchase Sales", value: "+52%" },
      { label: "Incremental Ad Revenue", value: "+$100/day" },
      { label: "Python SLT Exec Time", value: "30s -> 10s" }
    ],
    technologies: ["Python", "Node.js", "Express", "PostgreSQL", "Redis", "AWS", "LiveOps Platforms"]
  },
  {
    id: "smartbridge",
    company: "SmartBridge",
    role: "AI/ML Intern",
    period: "Jun 2024 - Jul 2024",
    location: "Remote",
    commitHash: "a1m1_smartbridge_genai",
    summary: "Built GenAI nutrition & computer vision workflow for multi-item food recognition, automated calorie estimation, and personalized dietary recommendations.",
    highlights: [
      "Developed end-to-end computer vision pipeline for automated food item recognition.",
      "Integrated Generative AI models to estimate caloric content and macro ratios from food photos.",
      "Engineered recommendation module delivering customized meal plans based on user health parameters."
    ],
    metrics: [
      { label: "Food Recognition", value: "Multi-item CV" },
      { label: "Calorie Estimation", value: "Automated AI" }
    ],
    technologies: ["Python", "Computer Vision", "Generative AI", "PyTorch", "OpenCV", "REST APIs"]
  }
];
