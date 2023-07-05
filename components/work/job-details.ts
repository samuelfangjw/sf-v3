export type Job = {
  company: string;
  roles: string[];
  achievements: string[];
};

const JobDetails: Job[] = [
  {
    company: "TEAMMATES (Open Source)",
    roles: ["Project Lead | June 2021 - Present"],
    achievements: [
      "Project lead for an online feedback management system for education used by more than 800,000 users worldwide.",
      "Currently spearheading a major system redesign which includes a migration from a NoSQL to a SQL database expected to significantly improve performance of the system.",
      "Designed and implemented multiple major feature enhancements including a deadline extension and account request feature.",
      "Tech Stack: Angular, Typescript, Java, Google Cloud",
    ],
  },
  {
    company: "Voltality",
    roles: [
      "Software Engineer (Part Time) | Aug - Dec 2022",
      "Software Engineer Intern | May - July 2022",
    ],
    achievements: [
      "Designed and developed a customer facing rewards system using Go, Nuxt.js, PostgreSQL and Redis.",
      "Planned and executed the splitting of a Monolithic system into Microservices as well as a migration from MongoDB to PostgreSQL.",
      "Built a Redis based asynchronous task queue in Node.js to process and automatically schedule long running jobs.",
    ],
  },
  {
    company: "Source Academy",
    roles: ["Web Developer | May 2021 - Apr 2022"],
    achievements: [
      "Designed and developed an award winning interactive online textbook used by thousands of students and multiple university courses worldwide.",
      "Application allows readers to play with code snippets without leaving the context of the textbook as well as use various tools to visualise data structures and reason about programs.",
      "Tech Stack: React, Typescript, Node.js",
    ],
  },
];
export default JobDetails;
