export const profile = {
  name: "Su Myat Noe",
  nickname: "Su",
  title: "IT Business Analyst",
  location: "Danang, Vietnam",
  email: "sumyatnoe906@gmail.com",
  linkedin: "linkedin.com/in/sumyatnoe99",
  linkedinUrl: "https://linkedin.com/in/sumyatnoe99",
  portfolioUrl:
    "https://docs.google.com/presentation/d/1LOJYo4AJrLa5Bhab63gskIR90-znFLl7/edit?usp=sharing&ouid=104894193063481364532&rtpof=true&sd=true",
  availability: "1 month",
  summary:
    "Three years of progressive experience as a fully remote Business Analyst, successfully leading multiple complex projects from initiation to deployment. Specializing in financial technology and leveraging strong analytical and technical skills (Postman, Python, Advanced Excel, JIRA) to translate business needs into executable technical specifications and drive data-backed process improvements across diverse industries.",
};

export const experience = [
  {
    role: "Business System Analyst",
    company: "Alphared Solutions, Malaysia",
    mode: "Remote",
    period: "Feb 2026 – Now",
    bullets: [] as string[],
  },
  {
    role: "Business Analyst",
    company: "Nexstack, Singapore",
    mode: "Remote · 3 years",
    period: "Mar 2022 – Feb 2025",
    bullets: [
      "Collaborated with remote stakeholders across 5 global time zones to gather, analyze, and document comprehensive business requirements, producing over 50 detailed user stories and functional specifications for financial advisory products.",
      "Managed the full product lifecycle within an Agile/Scrum framework. Utilized JIRA extensively for backlog grooming, sprint planning, and issue tracking, ensuring all development activities aligned with stakeholder priorities and delivery timelines.",
      "Designed and executed test cases for system APIs and backend services using Postman, significantly reducing integration errors and validating data accuracy for complex financial calculations.",
      "Built and maintained advanced Excel models (leveraging array formulas, pivot tables), and Power BI for detailed financial reporting and forecasting. Utilized SQL and Python to automate the extraction and transformation of large datasets, reducing manual reporting time by 20%.",
      "Maintained clear and professional communication with senior management and technical teams, serving as the critical link between high-level business goals and technical execution across both local and remote setups.",
    ],
  },
  {
    role: "QA Tester",
    company: "Myanmar Institute of Business",
    mode: "Internship · 3 months",
    period: "Apr 2020 – Jun 2020",
    bullets: [
      "Executed manual and automated test cases to verify software functionality against design specifications, identifying and documenting defects and issues.",
      "Gained foundational knowledge in system development life cycles (SDLC) and testing methodologies, contributing to a more stable and reliable internal system.",
      "Assisted the Senior in tracing the bugs and assigned the bugs to the relevant developer.",
      "Brainstormed with the Designer for the Design Development and attended the workshops with the client.",
    ],
  },
];

export const technicalSkills = [
  "Requirement Management & Elicitation",
  "SQL and Database Querying",
  "Data Visualization (Power BI)",
  "Python (Pandas), Statistics",
  "Agile/Scrum Methodologies",
  "Process Modeling (BPMN)",
  "Jira/Confluence, ClickUp",
  "User Stories, Use Cases",
  "Lucidchart, Draw.io, Figma",
];

export const softSkills = [
  "Stakeholder Management",
  "Cross-Functional Collaboration",
  "Problem Solving",
  "Critical Thinking",
  "Decision-making",
  "Negotiation, Conflict Resolution",
  "Adaptability, Flexibility",
  "Teamwork",
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metric: string;
  role: string;
  timeline: string;
  problem: string;
  approach: string[];
  impact: string[];
};

export const projects: Project[] = [
  {
    id: "financial-advisory-suite",
    title: "Financial Advisory Product Suite",
    category: "Requirements & Delivery",
    description:
      "Led end-to-end requirements for a fintech advisory platform, translating stakeholder goals across 5 time zones into 50+ user stories and functional specs delivered through Agile/Scrum.",
    tags: ["JIRA", "User Stories", "BPMN", "Agile"],
    metric: "50+ user stories",
    role: "Business Analyst",
    timeline: "Nexstack · 2022–2024",
    problem:
      "Stakeholders across five global time zones held conflicting priorities and no single source of truth for what the advisory platform needed to deliver, causing rework and misaligned releases.",
    approach: [
      "Ran structured elicitation sessions and documented a shared backlog of 50+ user stories with clear acceptance criteria.",
      "Modeled core advisory workflows in BPMN so business and engineering shared one visual language.",
      "Facilitated backlog grooming and sprint planning in JIRA, sequencing work against stakeholder priorities.",
    ],
    impact: [
      "Delivered functional specs that engineering could execute without ambiguity.",
      "Kept releases aligned to stakeholder priorities across all five time zones.",
      "Reduced requirement-related rework through testable acceptance criteria.",
    ],
  },
  {
    id: "reporting-dashboards",
    title: "Financial Reporting & Forecasting Dashboards",
    category: "Data Visualization",
    description:
      "Built advanced Excel models and Power BI dashboards for detailed financial reporting and forecasting, giving senior management a real-time view of key performance metrics.",
    tags: ["Power BI", "Advanced Excel", "Forecasting"],
    metric: "Real-time reporting",
    role: "Business Analyst",
    timeline: "Nexstack · 2022–2024",
    problem:
      "Senior management relied on slow, manually assembled spreadsheets that were often out of date by the time decisions were made.",
    approach: [
      "Designed advanced Excel models using array formulas and pivot tables for complex financial calculations.",
      "Built Power BI dashboards surfacing the KPIs leadership cared about most.",
      "Established a repeatable reporting structure that non-analysts could read at a glance.",
    ],
    impact: [
      "Gave management a real-time view of financial performance.",
      "Replaced fragile manual spreadsheets with maintainable models.",
      "Improved the speed and confidence of financial decision-making.",
    ],
  },
  {
    id: "data-pipeline",
    title: "Automated Data Pipeline",
    category: "Process Automation",
    description:
      "Used SQL and Python (Pandas) to automate extraction and transformation of large datasets, cutting manual reporting effort and improving data accuracy for financial calculations.",
    tags: ["Python", "SQL", "Pandas", "ETL"],
    metric: "−20% reporting time",
    role: "Business Analyst",
    timeline: "Nexstack · 2022–2024",
    problem:
      "Analysts spent hours each cycle manually pulling and reshaping large datasets, introducing errors into downstream financial calculations.",
    approach: [
      "Wrote SQL queries to extract large datasets directly from source systems.",
      "Automated cleaning and transformation with Python and Pandas.",
      "Standardized the pipeline so outputs fed reporting models consistently.",
    ],
    impact: [
      "Cut manual reporting time by roughly 20%.",
      "Improved data accuracy for complex financial calculations.",
      "Freed analyst time for higher-value analysis.",
    ],
  },
  {
    id: "api-test-framework",
    title: "API Test Automation Framework",
    category: "Quality Assurance",
    description:
      "Designed and executed test cases for system APIs and backend services using Postman, significantly reducing integration errors and validating complex financial calculations.",
    tags: ["Postman", "API Testing", "Validation"],
    metric: "Fewer integration errors",
    role: "Business Analyst",
    timeline: "Nexstack · 2022–2024",
    problem:
      "Integration errors between services were surfacing late, and complex financial calculations were hard to validate manually.",
    approach: [
      "Designed API test cases for system endpoints and backend services in Postman.",
      "Validated data accuracy for complex financial calculations against expected results.",
      "Executed tests as part of delivery to catch regressions early.",
    ],
    impact: [
      "Significantly reduced integration errors.",
      "Validated the accuracy of complex financial calculations.",
      "Increased confidence in each release.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Technology (B.C.Tech)",
  school: "Computer University, Loikaw",
  period: "2015 – 2025",
  note: "Extended due to Covid and political situation",
};

export const certifications = [
  "Microsoft Business Analyst [Microsoft]",
  "IBM Data Analyst [IBM]",
  "Seed For the Future, 2020 [Huawei]",
  "Foundations of Software Testing and Validation [University of Leeds]",
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Burmese", level: "Native" },
  { name: "Japanese / Korean", level: "Basic" },
];
