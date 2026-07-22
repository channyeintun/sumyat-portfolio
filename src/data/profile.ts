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
    bullets: [
      "Current appointment with Alphared Solutions in Malaysia, working remotely as a Business System Analyst since February 2026. Verified project scope and outcomes will be added as the engagement progresses.",
    ],
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

export type ProjectEvidence = {
  kind: "Delivery record" | "Public work sample";
  title: string;
  description: string;
  facts: { label: string; value: string }[];
  images?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
  sourceUrl: string;
  sourceLabel: string;
  note: string;
};

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
  evidence: ProjectEvidence;
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
    evidence: {
      kind: "Delivery record",
      title: "Requirements package on record",
      description:
        "The published résumé records the requirements package delivered for this engagement. Original client documents are not part of the public portfolio.",
      facts: [
        { label: "Volume", value: "50+ user stories" },
        { label: "Formats", value: "Stories + functional specs" },
        { label: "Collaboration", value: "5 global time zones" },
      ],
      sourceUrl: "/resume.pdf",
      sourceLabel: "Open résumé source ↗",
      note: "Résumé-backed delivery evidence; client requirement content remains unpublished.",
    },
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
    evidence: {
      kind: "Public work sample",
      title: "Singapore HDB resale market dashboard",
      description:
        "A separate public portfolio sample demonstrates the same dashboard discipline: turning a large property dataset into trend, location, pricing, and market-density views.",
      facts: [
        { label: "Dataset", value: "962K transactions" },
        { label: "Views", value: "Trend + town + map" },
        { label: "Tool", value: "Power BI" },
      ],
      images: [
        {
          src: "/evidence/hdb-resale-dashboard.png",
          alt: "Power BI dashboard showing Singapore HDB resale price trends, town comparisons, transaction distribution, and a location map",
          caption:
            "Public sample · Singapore HDB resale market overview in Power BI",
          width: 1417,
          height: 797,
        },
      ],
      sourceUrl: profile.portfolioUrl,
      sourceLabel: "Open supporting portfolio deck ↗",
      note: "Separate capability sample; this is not a Nexstack client deliverable.",
    },
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
    evidence: {
      kind: "Public work sample",
      title: "Transformation and SQL work samples",
      description:
        "Two separate public samples show the mechanics behind repeatable reporting: a Power Query transformation workflow and a consolidated SQL customer-order view.",
      facts: [
        { label: "Power Query", value: "962,213 matched rows" },
        { label: "SQL", value: "3-table consolidated view" },
        { label: "Pattern", value: "Clean → model → query" },
      ],
      images: [
        {
          src: "/evidence/hdb-power-query-workflow.png",
          alt: "Power Query editor showing a multi-step transformation workflow for Singapore HDB resale data",
          caption:
            "Public sample · Power Query data-wrangling and transformation steps",
          width: 1882,
          height: 765,
        },
        {
          src: "/evidence/ecommerce-sql-view.png",
          alt: "SQL statement creating a customer order summary view from orders, customers, and product items",
          caption:
            "Public sample · SQL view consolidating customer, order, and product data",
          width: 447,
          height: 347,
        },
      ],
      sourceUrl: profile.portfolioUrl,
      sourceLabel: "Open supporting portfolio deck ↗",
      note: "Separate capability samples; these are not the Nexstack production pipeline.",
    },
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
    evidence: {
      kind: "Delivery record",
      title: "API validation record",
      description:
        "The published résumé records Postman test design and execution for system APIs and backend services, including data-accuracy checks for complex financial calculations.",
      facts: [
        { label: "Tool", value: "Postman" },
        { label: "Scope", value: "APIs + backend services" },
        { label: "Result", value: "Fewer integration errors" },
      ],
      sourceUrl: "/resume.pdf",
      sourceLabel: "Open résumé source ↗",
      note: "Résumé-backed delivery evidence; client endpoints and response data remain unpublished.",
    },
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

// Written as direct, self-contained answers — these double as the visible FAQ
// and as FAQPage structured data that answer engines quote verbatim.
export const faqs = [
  {
    q: "What does Su Myat Noe specialize in?",
    a: "Su Myat Noe is an IT Business Analyst specializing in financial technology. Her focus areas are requirements elicitation and management, BPMN workflow modeling, and financial reporting and business intelligence — turning business needs into clear, executable technical specifications.",
  },
  {
    q: "How much experience does she have?",
    a: "She has 3+ years of progressive, fully remote experience as a Business Analyst, leading multiple complex projects from initiation to deployment while collaborating with stakeholders across five global time zones.",
  },
  {
    q: "Is Su available for new roles or remote work?",
    a: "Yes. She is open to Business Analyst opportunities — remote or on-site — and can typically start within about one month's notice. She has worked fully remotely for over three years.",
  },
  {
    q: "What tools and technologies does she use?",
    a: "JIRA, Confluence and ClickUp for Agile delivery; Postman for API testing; SQL and Python (Pandas) for data automation; Power BI and advanced Excel for reporting and forecasting; and Lucidchart, Draw.io and Figma for BPMN and process modeling.",
  },
  {
    q: "What measurable impact has she delivered?",
    a: "Among other results, she documented 50+ user stories and functional specs for fintech advisory products, built Power BI dashboards giving management real-time KPI visibility, and automated data pipelines with SQL and Python that cut manual reporting time by roughly 20%.",
  },
  {
    q: "Where is she based and how can I contact her?",
    a: "She is based in Da Nang, Vietnam and available for remote roles worldwide. The best way to reach her is by email at sumyatnoe906@gmail.com or via LinkedIn at linkedin.com/in/sumyatnoe99.",
  },
];
