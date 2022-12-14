export type Job = {
  company: string;
  roles: string[];
  achievements: string[];
};

const JobDetails: Job[] = [
  {
    company: "Voltality",
    roles: [
      "Software Engineer (Part Time) | Aug - Dec 2022",
      "Software Engineer Intern | May - July 2022",
    ],
    achievements: [
      "Designed and developed a customer facing system using Go, PostgreSQL, Redis, RabbitMQ and Nuxt.js to process specific transactions, aggregate statistics and run asynchronous tasks.",
      "Worked with a senior engineer to plan and execute the splitting of a Monolitic system into Microservices as well as a migration from MongoDB to PostgreSQL.",
      "Built a Redis based asynchronous task queue in Node.js to process and automatically schedule long running jobs.",
    ],
  },
  {
    company: "TEAMMATES (Open Source)",
    roles: ["Maintainer/Contributor | June 2021 - Present"],
    achievements: [
      "Maintainer for an online feedback management system for education used by more than 800,000 users worldwide.",
      "Designed and planned multiple major feature enhancements.",
      "Tech Stack: Angular, Typescript, Java, Google Cloud",
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
