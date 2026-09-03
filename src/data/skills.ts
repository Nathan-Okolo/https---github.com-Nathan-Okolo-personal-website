export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "Solidity", "Rust"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Context API"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "OAuth",
      "Middleware",
      "Webhooks",
      "Background Jobs",
      "Microservices",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis"],
  },
  {
    title: "Payments",
    skills: [
      "Paystack",
      "Payment Processing",
      "Transaction Verification",
      "Webhooks",
      "Direct Debit",
      "Bank Transfers",
      "Subaccounts",
      "Payment Splits",
      "Reconciliation",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "GitHub Actions",
      "Nginx",
      "PM2",
      "Vercel",
      "Railway",
      "Cloudflare",
      "Linux",
      "Bash",
      "SSH",
      "Git",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "API Design",
      "System Design",
      "Debugging",
      "Performance Optimisation",
      "Database Optimisation",
      "Automation",
      "Data Processing",
      "Business Logic",
      "CI/CD",
      "Code Reviews",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "Cursor",
      "GitHub Copilot",
      "ChatGPT",
      "Claude",
      "AI-Assisted Development",
      "Automation Workflows",
    ],
  },
];

export const collaborationTraits = [
  {
    title: "Communication",
    description:
      "Comfortable discussing technical work with engineers and explaining it clearly to non-technical stakeholders.",
  },
  {
    title: "Collaboration",
    description:
      "Works well in teams — understands that good software is a group effort, not an individual one.",
  },
  {
    title: "Curiosity",
    description:
      "Genuinely interested in how systems work, why they fail and how they can be improved.",
  },
  {
    title: "Teamwork",
    description:
      "Reliable as a team member — follows through, communicates blockers early and helps others when possible.",
  },
  {
    title: "Empathy",
    description:
      "Tries to understand what people are actually trying to accomplish, not just what they literally asked for.",
  },
];
