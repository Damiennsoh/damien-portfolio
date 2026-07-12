// Portfolio Data - Damien Nsoh Ayine

export const personalInfo = {
  name: "Damien Nsoh Ayine",
  titles: ["Software Engineer", "DevOps Engineer", "Cybersecurity Analyst"],
  email: "dnsoh20@gmail.com",
  phone: "+233 540 564 567",
  location: "Kumasi, Ghana",
  linkedin: "https://linkedin.com/in/damienayine",
  github: "https://github.com/Damiennsoh",
  tagline: "From Public Health to Tech — Building Impact-Driven Solutions with AI, Cloud & Code",
  resumePath: "/resume.pdf",
}

export const stats = [
  { value: "99.5%", label: "API Uptime on AWS EC2" },
  { value: "50%", label: "Reduction in Manual Server Checks" },
  { value: "25%", label: "Reduction in Security Incidents" },
  { value: "40%", label: "Malaria Incidence Reduction" },
  { value: "15+", label: "Rural Clinics Digitized" },
  { value: "2TB+", label: "Genomic Data Processed" },
  { value: "60%", label: "Faster NGO Proposal Writing" },
  { value: "50+", label: "Engineers Mentored" },
]

export const aboutStory = {
  intro: `I started my career in public health with the Ghana Health Service, spending over 7 years on the frontlines of healthcare delivery. I digitized clinic reporting systems, analyzed epidemiological data, and implemented interventions that reduced malaria incidence by 40% in target communities.`,
  transition: `Driven by a passion for technology's transformative potential, I pivoted into software engineering — bringing with me a deep understanding of real-world problems, user needs, and the importance of data-driven decision making.`,
  mission: `Today, I build AI-native applications, cloud infrastructure, and secure systems that bridge the gap between technology and human impact. My unique background gives me a holistic, empathy-driven perspective that informs every line of code I write.`,
}

export const experiences = [
  {
    id: 1,
    role: "Lead AI Developer",
    company: "NGO Proposal Builder (AI-Native SaaS)",
    period: "2024 – Present",
    type: "Personal Project / Production",
    summary: "Owned product from specification to production — an AI-native SaaS tool that enables NGOs to create donor-specific proposals via natural language input.",
    achievements: [
      "Reduced NGO proposal writing time by 60% through AI-driven content synthesis",
      "Built responsive React 19 UI with real-time AI suggestion streams and drag-and-drop form builders",
      "Architected REST APIs for AI content generation, budget calculation, and multi-format export (Docx/CSV/PDF)",
      "Deployed on Firebase with Firestore for real-time collaboration; implemented IndexedDB for offline-first functionality",
      "Added EU/USAID donor-specific logic frames that increased proposal acceptance rates",
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Gemini 2.5 Flash", "Node.js", "Python", "Firebase", "Firestore", "IndexedDB"],
  },
  {
    id: 2,
    role: "Lead Developer",
    company: "Afia Health Assistant (AI-Powered PWA)",
    period: "2023 – 2024",
    type: "Bachelor's Thesis / Production",
    summary: "Architected an offline-first progressive web app for clinical decision support in 15+ rural Ghana clinics, using Google Gemini AI.",
    achievements: [
      "Achieved <100ms zero-latency search using Web Workers and precomputed vector embeddings across 500+ GHS protocols",
      "Built REST APIs for patient registration, symptom assessment, and AI treatment recommendations aligned with GHS/NHIS standards",
      "Engineered a hybrid sync engine between IndexedDB (local) and Firebase (cloud) with 100% data consistency for 10,000+ patient records",
      "Improved clinical workflow efficiency by 50% through direct collaboration with healthcare workers",
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Gemini AI", "IndexedDB", "Firebase", "Web Workers", "Vector Embeddings"],
  },
  {
    id: 3,
    role: "Cybersecurity Analyst / IT Support Engineer",
    company: "Lillup",
    period: "September 2023 – Present",
    type: "Remote, Paris, France",
    summary: "Managing cloud infrastructure, security compliance, and technical support for client applications.",
    achievements: [
      "Managed AWS EC2 deployments, S3 storage, and CloudWatch monitoring for client applications",
      "Conducted internal audits identifying 15 critical vulnerabilities; implemented ISO 27001 and GDPR-compliant controls",
      "Reduced security incidents by 25% within the first year of deployment",
      "Developed Python automation scripts reducing manual server checks by 50%",
      "Improved incident response times by 30% through streamlined alerting and automated escalation protocols",
    ],
    tech: ["AWS EC2", "S3", "CloudWatch", "Python", "Bash", "SIEM (Mandiant)", "Cloudflare", "ISO 27001", "GDPR"],
  },
  {
    id: 4,
    role: "Technical Mentor",
    company: "ALX Africa",
    period: "July 2023 – Present",
    type: "Remote",
    summary: "Mentoring software engineering students through Python, ML, and full-stack curricula.",
    achievements: [
      "Mentor 50+ software engineers through structured curricula",
      "Guide students through service specification, architecture design, implementation, and deployment",
      "Achieve 90%+ cohort completion rate through structured code reviews and one-on-one coaching",
      "Maintain open-source learning resources and code review guidelines on GitHub",
    ],
    tech: ["Python", "Machine Learning", "Full-Stack Development", "Git/GitHub", "Code Review"],
  },
  {
    id: 5,
    role: "Python Software Developer (Internship)",
    company: "Achaeobyte",
    period: "April 2022 – May 2023",
    type: "India",
    summary: "Developed and deployed REST APIs and automated infrastructure monitoring systems.",
    achievements: [
      "Developed and deployed REST APIs using Python, Django, and Flask on AWS EC2",
      "Served 1,000+ daily API requests with 99.5% uptime",
      "Built Python and Bash scripts for data processing and server health monitoring, reducing manual intervention by 50%",
      "Integrated AWS CloudWatch APIs for real-time CPU/memory tracking, reducing downtime incidents by 35%",
    ],
    tech: ["Python", "Django", "Flask", "AWS EC2", "CloudWatch", "Bash", "REST API"],
  },
  {
    id: 6,
    role: "Systems Support & Disease Control Officer",
    company: "Ghana Health Service",
    period: "2014 – 2021",
    type: "Bibiani, Ghana",
    summary: "Pioneered digital health systems and data-driven interventions in rural healthcare.",
    achievements: [
      "Pioneered a digital reporting system from user requirements through deployment, adopted by 15 clinics serving 10,000+ patients",
      "Analyzed health data using STATA and SQL to implement targeted interventions",
      "Reduced malaria incidence by 40% in target communities over 3 years",
      "Managed hardware deployment, software installation, and user training across multiple healthcare facilities",
    ],
    tech: ["STATA", "SQL", "Digital Health Systems", "Data Analysis", "Healthcare IT"],
  },
]

export const projects = [
  {
    id: 1,
    title: "NGO Proposal Builder",
    description: "An AI-native SaaS platform that enables NGOs to create donor-specific proposals via natural language input. Features real-time AI suggestion streams, drag-and-drop form builders, budget-sync engines, and multi-format export.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Gemini 2.5 Flash", "Node.js", "Python", "Firebase", "Firestore"],
    liveUrl: "https://ngo-proposal-builder.vercel.app/",
    githubUrl: "https://github.com/Damiennsoh/NGO_Proposal_Builder",
    highlights: ["60% faster proposal writing", "EU/USAID donor logic", "Offline-first with IndexedDB"],
  },
  {
    id: 2,
    title: "Afia Health Assistant",
    description: "An offline-first progressive web app for clinical decision support in rural Ghana clinics. Uses Google Gemini AI for symptom assessment and treatment recommendations aligned with national health standards.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Gemini AI", "IndexedDB", "Firebase", "Web Workers"],
    liveUrl: "https://afia-health-assistant-bw-lilac.vercel.app/",
    githubUrl: "https://github.com/Damiennsoh/afia-health-assistant-bw",
    highlights: ["<100ms search latency", "15+ clinics deployed", "10,000+ patient records"],
  },
  {
    id: 3,
    title: "Genomic Analysis Pipeline",
    description: "Collaboration with Stanford School of Medicine to process genomic datasets using distributed computing on AWS EMR. Built ensemble ML models for disease prediction and designed end-to-end ETL pipelines.",
    tech: ["AWS EMR", "Spark", "Hadoop", "Python", "Scikit-learn", "Pandas", "Machine Learning"],
    liveUrl: "#",
    githubUrl: "https://github.com/Damiennsoh",
    highlights: ["2TB+ data processed", "85% prediction accuracy", "Weeks to 48 hours analysis time"],
  },
  {
    id: 4,
    title: "Student Management Hub",
    description: "A comprehensive full-stack AI-native student management system with real-time data sync, bulk data processing, and administrative dashboards.",
    tech: ["Next.js", "TypeScript", "Firebase", "SQL", "Tailwind CSS"],
    liveUrl: "https://v0-school-management-app-hh.vercel.app/",
    githubUrl: "https://github.com/Damiennsoh/Student_Enrollment_System-1m",
    highlights: ["50% reduced admin time", "Real-time sync", "Bulk data processing"],
  },
]

export const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: "Cloud",
    items: ["AWS (EC2, S3, EMR, CloudWatch, Lambda)", "GCP (BigQuery, Cloud Storage)", "Firebase", "Docker", "CI/CD", "Linux/Windows Server Admin"],
  },
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    items: ["LLM Integration (Gemini 2.0/2.5 Flash, OpenAI)", "RAG Architecture", "Vector Search & Embeddings", "Prompt Engineering", "Ensemble ML Models", "Python (Scikit-learn, Pandas, NumPy)"],
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    items: ["Next.js 15", "React 19", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5/CSS3", "PWA Development"],
  },
  {
    category: "Backend Development",
    icon: "Server",
    items: ["Python (Django, Flask)", "Node.js", "RESTful API Design", "GraphQL", "Authentication (JWT, OAuth)", "Microservices Architecture"],
  },
  {
    category: "Database & Data",
    icon: "Database",
    items: ["SQL (MySQL, PostgreSQL)", "NoSQL (Firebase, IndexedDB)", "Data Modeling", "Query Optimization", "ETL Pipelines", "Data Quality Management"],
  },
  {
    category: "Security & Compliance",
    icon: "Shield",
    items: ["ISO 27001", "GDPR", "SIEM (Mandiant)", "Threat Detection", "Vulnerability Management", "Cloudflare CDN"],
  },
  {
    category: "AI-Native Development",
    icon: "Sparkles",
    items: ["Coding Agents (Codex, Claude Code)", "Generative AI APIs", "AI Agent Development", "No-Code Automation Logic", "Natural Language Interface Design"],
  },
  {
    category: "DevOps & Tools",
    icon: "Wrench",
    items: ["Git/GitHub", "Docker", "Bash Scripting", "Server Monitoring", "Automated Testing", "Technical Documentation", "Agile/Scrum"],
  },
]

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Maharishi Markandeshwar University, Mullana, India",
    year: "Graduated: June 2024",
    honors: "1st Class Honors with Distinction",
    coursework: "Data Structures & Algorithms, Software Engineering, Database Management Systems, Computer Networks, Operating Systems, Web Development, Machine Learning",
  },
  {
    degree: "AI/ML in Precision Medicine",
    institution: "Stanford University",
    year: "2024",
    honors: "",
    coursework: "",
  },
  {
    degree: "Diploma in Disease Control",
    institution: "College of Health and Wellbeing, Kintampo, Ghana",
    year: "2013",
    honors: "",
    coursework: "",
  },
]

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google Cybersecurity Professional Certificate",
  "(ISC)² Certified in Cybersecurity (CC)",
  "Google IT Support Professional Certificate",
  "Software Engineering (Python Specialization) — ALX / Holberton Inc",
]
