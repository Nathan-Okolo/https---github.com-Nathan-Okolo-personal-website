export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  url?: string;
  description: string;
  highlights: string[];
  featured?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: "maj-fintech",
    company: "MAJ FinTech",
    role: "Backend Software Engineer",
    period: "January 2023 – Present",
    type: "Full-time",
    url: "https://majfintech.com",
    description:
      "I work on financial technology systems where reliability, accuracy and good engineering are not optional — they are the baseline. My work spans backend development, API integration, databases, payment processing and complex business logic for cooperative financial platforms.",
    highlights: [
      "Built and maintained savings, loans and contributions systems for cooperative members",
      "Designed and implemented wallet and member management infrastructure",
      "Built payment automation including direct debit and scheduled bank transfers",
      "Integrated Paystack payment APIs with full webhook and transaction verification",
      "Implemented payment splits, subaccounts and fee computation",
      "Built reconciliation pipelines to validate internal records against provider data",
      "Designed REST APIs across multiple microservices",
      "Worked across MongoDB and PostgreSQL in a dual-database architecture",
      "Used Redis for caching and session management",
      "Built and maintained scheduled background jobs for payment processing",
      "Implemented controlled concurrency with p-limit for bulk operations",
      "Improved database query performance on large datasets",
    ],
    featured: true,
  },
  {
    id: "basani",
    company: "Basani Digital Innovations Limited",
    role: "Technology / Software",
    period: "Previous",
    type: "Contract",
    url: "https://basani.africa",
    description:
      "Worked on digital transformation and technology implementation for institutional clients. Involved in requirements gathering, stakeholder collaboration and delivery of institutional technology projects.",
    highlights: [
      "Digital transformation strategy and technology implementation",
      "Requirements gathering and stakeholder collaboration",
      "Institutional technology project delivery",
    ],
  },
  {
    id: "coal-city",
    company: "Coal City University",
    role: "Graduate Assistant / Lecturer Assistant",
    period: "2020 – 2023",
    type: "Academic",
    description:
      "Supported teaching across Mathematics and Statistics. Built strong skills in analytical reasoning, communication and breaking down complex concepts for different audiences — skills that directly inform how I approach software problems.",
    highlights: [
      "Taught and assisted in Mathematics and Statistics courses",
      "Developed analytical reasoning and structured communication skills",
      "Mentored students and provided academic guidance",
      "Founded the Coal City University Tech Club",
    ],
  },
  {
    id: "appknox",
    company: "Appknox",
    role: "Backend Developer",
    period: "Previous",
    type: "Contract",
    description:
      "Built backend endpoints, implemented customer-support integrations and contributed to feature development on the platform.",
    highlights: [
      "Backend endpoint development",
      "Customer-support system integrations",
      "Feature development and API work",
    ],
  },
  {
    id: "genesys",
    company: "Genesys Tech Hub",
    role: "Software Developer",
    period: "Previous",
    type: "Full-time",
    description:
      "Built React applications and HR modules in an Agile team. Also mentored junior developers during the programme.",
    highlights: [
      "React application development",
      "HR module development (Resource Edge platform)",
      "Agile delivery and sprint planning",
      "Mentoring junior developers",
    ],
  },
  {
    id: "afrange",
    company: "Afrange Cleaning Services",
    role: "Software Developer",
    period: "Previous",
    type: "Contract",
    description:
      "Built backend services to handle customer bookings and online service management, enabling the business to operate digitally.",
    highlights: [
      "Backend services for customer booking workflows",
      "Online service management system",
      "Digital operations infrastructure",
    ],
  },
];
