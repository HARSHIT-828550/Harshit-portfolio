import type { HeroData, AboutData, Experience, Project, Education, Skill, ContactInfo } from '../types';

export const heroData: HeroData = {
  greeting: "Hello, I'm",
  name: "Harshit Rajput",
  title: ".NET Core Full Stack Developer",
  tagline: "Building scalable web applications & REST APIs for Healthcare & Fintech.",
  description:
    "Results-oriented .NET Full Stack Developer with 4.5+ years of experience building scalable applications, REST APIs, and microservices using C#, .NET Core, and SQL Server across healthcare and microfinance domains.",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/HARSHIT-828550", icon: "🐙" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/harshit-rajput-0b8b17193", icon: "💼" },
    { name: "Email", url: "mailto:harshit828550@gmail.com", icon: "📧" }
  ]
};

export const aboutData: AboutData = {
  description:
    "Results-oriented .NET Full Stack Developer with 4.5+ years of experience building scalable applications using C#, .NET Core, ASP.NET MVC, Web API, and SQL Server. Skilled in REST API design, microservices, database design & optimization, and secure authentication (JWT, OAuth 2.0, RBAC). Experienced across healthcare and microfinance/loan-management domains.",
  stats: [
    { number: "4.5+", label: "Years Experience" },
    { number: "15+", label: "REST APIs" },
    { number: "100+", label: "Stored Procedures" },
    { number: "5+", label: "Enterprise Projects" }
  ]
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Full Stack Developer (.NET Core)",
    company: "Microware Computing And Consulting Pvt. Ltd.",
    period: "Oct 2022 – Present",
    location: "Gurgaon, Haryana",
    description:
      "Building and maintaining healthcare & microfinance web applications, REST APIs, and microservices using .NET Core and SQL Server.",
    highlights: [
      "Built and maintained healthcare & microfinance web applications, REST APIs, and microservices using .NET Core and SQL Server.",
      "Designed normalized DB schemas, 100+ stored procedures, and dynamic MIS/reporting dashboards.",
      "Implemented JWT authentication & RBAC across services."
    ],
    technologies: ["C#", ".NET Core", "Web API", "Microservices", "SQL Server", "JWT", "RBAC"]
  }
];

export const projects: Project[] = [
  {
    id: "loan-management-api",
    title: "Loan Management API",
    description:
      "REST API for a microfinance Loan Management System with JWT auth, role-based access control, repository pattern, and EMI logic.",
    icon: "💸",
    accent: ["#667eea", "#764ba2"],
    technologies: [".NET 8", "JWT", "EF Core", "RBAC", "Swagger"],
    role: "Backend Developer",
    codeUrl: "https://github.com/HARSHIT-828550"
  },
  {
    id: "psc-microfinance",
    title: "Planned Social Concern (PSC) — Microfinance / LMS",
    description:
      "Loan Origination (LOS) & Loan Management (LMS) systems automating the end-to-end loan lifecycle for 5,000+ borrowers, with MIS dashboards and reporting.",
    icon: "🏦",
    accent: ["#11998e", "#38ef7d"],
    technologies: [".NET Framework", "Monolithic", "MSSQL"],
    role: "Software Developer"
  },
  {
    id: "iwin-cahp-healthcare",
    title: "iWIN & CAHP — Healthcare",
    description:
      "Microservices-based maternal & adolescent health platform with REST APIs, RBAC, and comprehensive MSSQL reporting.",
    icon: "🩺",
    accent: ["#f093fb", "#f5576c"],
    technologies: [".NET Core 5", "Microservices", "JWT"],
    role: "Full Stack Developer"
  },
  {
    id: "vikalp-nhm",
    title: "VIKALP — NHM Field Data Platform",
    description:
      "REST APIs with complex role-based data access, location-based filtering, and offline-first mobile sync.",
    icon: "📍",
    accent: ["#4facfe", "#00f2fe"],
    technologies: [".NET 9", "MVC", "MSSQL"],
    role: "Full Stack Developer"
  },
  {
    id: "creches-school-management",
    title: "Child Creches & School Management",
    description:
      "Tracks children's attendance, nutrition, and growth with REST APIs and analytics reports.",
    icon: "🧒",
    accent: ["#fa709a", "#fee140"],
    technologies: [".NET 9", "Clean Architecture"],
    role: "Full Stack Developer"
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Master of Computer Applications (MCA)",
    institution: "IFTM University, Moradabad",
    duration: "2021 - 2023",
    description: "Focused on advanced software engineering, .NET technologies, database design, and project development.",
    icon: "🎓"
  },
  {
    id: "2",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "MJP Rohilkhand University, Bareilly",
    duration: "2014 - 2017",
    description: "Completed BCA with a focus on software fundamentals, database management, and web technologies.",
    icon: "💻"
  }
];

export const skills: Skill[] = [
  {
    category: "Backend",
    skills: [
      { name: "C#", icon: "🔧" },
      { name: ".NET Core", icon: "🌐" },
      { name: ".NET Framework", icon: "🧩" },
      { name: "ASP.NET MVC", icon: "🧱" },
      { name: "Web API", icon: "🔌" },
      { name: "Entity Framework", icon: "🗄️" },
      { name: "Dapper", icon: "⚡" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "Angular", icon: "🅰️" },
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "📘" },
      { name: "HTML5", icon: "📄" },
      { name: "CSS3", icon: "🎨" },
      { name: "Bootstrap", icon: "🅱️" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MS SQL Server", icon: "🗃️" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "T-SQL", icon: "📊" },
      { name: "Schema Design", icon: "🧮" },
      { name: "ER Modeling", icon: "🔗" },
      { name: "Query Optimization", icon: "🚀" },
      { name: "Stored Procedures", icon: "📦" }
    ]
  },
  {
    category: "Security & Auth",
    skills: [
      { name: "JWT", icon: "🔑" },
      { name: "OAuth 2.0", icon: "🛡️" },
      { name: "ASP.NET Core Identity", icon: "👤" },
      { name: "RBAC", icon: "🚦" }
    ]
  },
  {
    category: "Architecture",
    skills: [
      { name: "Microservices", icon: "🧬" },
      { name: "Clean Architecture", icon: "🏛️" },
      { name: "MVC", icon: "🗂️" },
      { name: "Repository Pattern", icon: "🗄️" },
      { name: "REST API Design", icon: "🔌" },
      { name: "SOLID", icon: "💡" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2/S3/RDS)", icon: "☁️" },
      { name: "GCP", icon: "🌩️" },
      { name: "Docker", icon: "🐳" },
      { name: "CI/CD", icon: "🔄" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "📚" },
      { name: "Visual Studio", icon: "💻" },
      { name: "VS Code", icon: "🧠" },
      { name: "Postman", icon: "📨" },
      { name: "Unit Testing", icon: "✅" },
      { name: "Agile/Scrum", icon: "🏃" }
    ]
  }
];

export const contactInfo: ContactInfo = {
  email: "harshit828550@gmail.com",
  phone: "+91 90846 32065",
  location: "Gurgaon, Haryana, India",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/HARSHIT-828550", icon: "🐙" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/harshit-rajput-0b8b17193", icon: "💼" }
  ]
};
