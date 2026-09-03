export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tags: string[];
  url?: string;
  description: string;
  problem?: string;
  built?: string;
  role?: string;
  stack: string[];
  challenge?: string;
  solution?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "akilaah",
    number: "01",
    title: "Akilaah",
    category: "Fintech · Backend Engineering",
    tags: ["Fintech", "Backend", "APIs", "Payments"],
    url: "https://akilaah.com",
    description:
      "A fintech platform built for cooperative societies — covering member management, savings, loans, contributions, wallets, payment automation and direct debit.",
    problem:
      "Cooperative societies need reliable, accurate financial infrastructure to manage member funds, automate payments and process loans — with no tolerance for errors.",
    built:
      "A backend system handling member lifecycles, financial accounts, loan workflows, payment processing and automated direct debit collections.",
    role: "Backend architecture, payment engine, loan management, member services, microservices, PostgreSQL payment service, API design and business logic.",
    stack: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL", "REST APIs", "Paystack"],
    challenge:
      "Managing complex financial state across savings, loans and contributions for many members simultaneously — with correctness, concurrency control and audit trails as non-negotiable requirements.",
    solution:
      "Designed a microservice-based architecture separating the payment service (PostgreSQL) from the member service (MongoDB), with careful transaction handling, idempotency and reconciliation processes.",
    featured: true,
  },
  {
    id: "payment-infrastructure",
    number: "02",
    title: "Payment Processing Infrastructure",
    category: "Fintech · Backend Engineering · APIs",
    tags: ["Payments", "Paystack", "Webhooks", "Reconciliation"],
    description:
      "The underlying payment infrastructure powering fintech operations — from API integration to reconciliation.",
    problem:
      "Payment systems require more than just calling an API. Every transaction needs verification, every webhook needs handling, every failure needs a recovery path, and every settlement needs to reconcile.",
    built:
      "End-to-end payment infrastructure covering transaction initiation, verification, webhook processing, direct debit, bank transfers, payment splits, subaccounts and reconciliation logic.",
    role: "Designed and implemented the full payment layer — API integration, channel management, webhook handlers, internal transaction records, fee computation, subaccount management and reconciliation.",
    stack: ["Node.js", "TypeScript", "Paystack", "PostgreSQL", "MongoDB", "Redis"],
    challenge:
      "Handling webhook delivery failures, duplicate events and partial payment states without corrupting financial records or double-charging members.",
    solution:
      "Idempotent webhook handlers with deduplication, transactional record writes and a reconciliation pipeline to catch and resolve discrepancies between internal state and payment provider records.",
  },
  {
    id: "member-onboarding",
    number: "03",
    title: "Automated Member Onboarding",
    category: "Automation · Data Processing · Backend",
    tags: ["Automation", "Data Processing", "Backend"],
    description:
      "Bulk member onboarding workflow that ingests Excel files, validates and normalises data, then provisions member accounts programmatically.",
    problem:
      "Onboarding hundreds of cooperative members manually is error-prone and slow. Members arrive as Excel exports with inconsistent phone formats, missing fields and data quality issues.",
    built:
      "An automated pipeline: Excel Upload → Data Extraction → Validation → Phone Normalisation → Member Creation → Error Reporting.",
    role: "Designed and built the complete automation pipeline — file parsing, field validation, phone normalisation, bulk provisioning and structured error output for failed rows.",
    stack: ["Node.js", "TypeScript", "MongoDB", "ExcelJS"],
    challenge:
      "Phone numbers arrived in dozens of inconsistent formats across different mobile networks. Invalid rows needed to be isolated and reported without blocking the valid majority.",
    solution:
      "A normalisation step that resolves formats to E.164, followed by row-level validation with error accumulation — valid rows are processed, invalid rows are collected and returned in a structured error report.",
  },
  {
    id: "performance-optimization",
    number: "04",
    title: "Backend Performance Optimization",
    category: "Backend · MongoDB · Performance",
    tags: ["Performance", "MongoDB", "Optimisation", "Concurrency"],
    description:
      "Systematic investigation and improvement of database operation performance on a backend handling large datasets and complex queries.",
    problem:
      "As data volumes grew, certain operations became slow — queries that worked fine at small scale were taking unacceptable time on real production data.",
    built:
      "Targeted optimisations across query patterns, aggregation pipelines and bulk processing logic.",
    role: "Profiled slow operations, identified inefficient query patterns and refactored the code to use appropriate MongoDB operations and controlled concurrency.",
    stack: ["Node.js", "TypeScript", "MongoDB", "Mongoose", "p-limit"],
    challenge:
      "Identifying which operations were the actual bottleneck rather than guessing — and improving them without breaking correctness.",
    solution:
      "Replaced existence checks with lean .exists() queries, switched full document fetches to projection-only queries, replaced sequential loops with controlled-concurrency Promise.all using p-limit, and used findOneAndUpdate for atomic upserts instead of find-then-save patterns.",
  },
  {
    id: "axis-link",
    number: "05",
    title: "Axis Link",
    category: "Web3 · Backend · Social Platform",
    tags: ["Web3", "Backend", "Docker", "IPFS"],
    description:
      "A Web3 social platform inspired by Twitter — decentralised content, on-chain interactions and IPFS media storage.",
    role: "Backend architecture, authentication, Docker deployment, smart contract integration and infrastructure.",
    stack: ["Node.js", "TypeScript", "MongoDB", "Docker", "IPFS", "Web3.js"],
  },
  {
    id: "vobb",
    number: "06",
    title: "VOBB",
    category: "Education Technology · Backend",
    tags: ["EdTech", "Backend", "APIs"],
    description:
      "International student application management platform supporting agencies and sub-agents to process and track student applications.",
    role: "Backend architecture and API development using Node.js and TypeScript on MongoDB.",
    stack: ["Node.js", "TypeScript", "MongoDB"],
  },
  {
    id: "webcop",
    number: "07",
    title: "WebCop",
    category: "Web Compliance · Full Stack",
    tags: ["Compliance", "Full Stack", "GDPR"],
    description:
      "Enterprise web compliance platform covering GDPR, SSL certificates, cookie policies and legal document generation for businesses.",
    role: "Full-stack development — backend APIs, frontend integration and compliance rule logic.",
    stack: ["Next.js", "React", "JavaScript"],
  },
  {
    id: "algoexchange",
    number: "08",
    title: "AlgoExchange",
    category: "Web3 · Cryptocurrency",
    tags: ["Web3", "Crypto", "Algorand"],
    description:
      "Centralised cryptocurrency exchange built on the Algorand blockchain, enabling asset trading via the Tatum API.",
    role: "Frontend engineering and blockchain API integration.",
    stack: ["React", "JavaScript", "Tatum API"],
  },
  {
    id: "wave-portal",
    number: "09",
    title: "Wave Portal",
    category: "Web3 · Ethereum",
    tags: ["Web3", "Ethereum", "Solidity"],
    description:
      "An Ethereum decentralised application — on-chain interactions via smart contracts with a React frontend.",
    role: "Smart contract development and Web3 frontend integration.",
    stack: ["Solidity", "React", "Web3.js"],
  },
  {
    id: "resource-edge",
    number: "10",
    title: "Resource Edge",
    category: "HR Technology",
    tags: ["HR Tech", "Backend", "Full Stack"],
    description:
      "HR management platform covering employee onboarding, people management and leave administration.",
    role: "Backend services and HR module development as part of a collaborative team at Genesys Tech Hub.",
    stack: ["React", "Node.js", "JavaScript"],
  },
];
