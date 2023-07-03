export type Project = {
  title: string;
  description: string;
  githubLink: string;
  projectLink: string;
  pageLink: string;
  tech: string[];
};

const ProjectsData: Project[] = [
  {
    title: "TEAMMATES",
    description:
      "An online feedback management system for education used by more than 800,000 users worldwide.",
    githubLink: "https://github.com/TEAMMATES/teammates",
    projectLink: "https://teammatesv4.appspot.com/",
    pageLink: "",
    tech: ["Angular", "Typescript", "Java", "Google Cloud"],
  },
  {
    title: "Source Academy",
    description:
      "A computer-mediated learning environment for studying the structure and interpretation of computer programs.",
    githubLink: "",
    projectLink: "https://sourceacademy.org/sicpjs/index",
    pageLink: "",
    tech: ["React", "Node.js"],
  },
  {
    title: "Code Reuse Detector (CrED)",
    description: "A tool designed as part of my final year project to aid plagiarism detection in brownfield software project variants. Currently used in a software engineering course at NUS.",
    githubLink: "",
    projectLink: "",
    pageLink: "",
    tech: ["Flask", "ANTLR", "Python"],
  },
  {
    title: "StrawHats",
    description:
      "A web auction site for collectibles with live video streaming and real-time bidding capabilities.",
    githubLink: "https://github.com/StrawHats12/CS3219_strawhats",
    projectLink: "",
    pageLink: "",
    tech: ["React", "Express", "Redis", "AWS", "Docker"],
  },
  {
    title: "Carbon Economy",
    description:
      "A web and mobile application that helps tackle carbon pollution by incentivising businesses and consumers to make greener decisions through a green credits system and smart visualisation dashboard backed by a cryptographically verifiable transactions.",
    githubLink: "https://github.com/CarbonEconomy/CarbonEconomy",
    projectLink: "",
    pageLink: "",
    tech: ["React", "Express", "deck.gl", "AWS"],
  },
  {
    title: "The Summarizer",
    description: "The Summarizer summarizes YouTube videos into short summaries.",
    githubLink: "https://github.com/samuelfangjw/hnr2023",
    projectLink: "",
    pageLink: "",
    tech: ["React", "Express", "AssemblyAI"],
  },
  {
    title: "CoLaB",
    description:
      "CoLAB (Command Line Address Book) is a desktop app for students currently enrolled in a university to manage their school projects. It is optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI).",
    githubLink: "https://github.com/samuelfangjw/tp",
    projectLink: "https://samuelfangjw.github.io/tp",
    pageLink: "",
    tech: ["Java", "JavaFX"],
  },
  {
    title: "LuminDER",
    description:
      "LuminDER is a dating app for NUS students made in 24 hours for Hack & Roll 2020. Its name is a wordplay on Tinder and it takes on the familiar interface of LumiNUS, NUS' learning management system (LMS).",
    githubLink: "https://github.com/samuelfangjw/luminder",
    projectLink: "",
    pageLink: "",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    title: "FoodCache",
    description:
      "FoodCache is a food management mobile app that helps reduce food wastage by keeping track of expiring ingredients, suggesting recipes for meals to minimize food waste and acting as a platform to share excess food and ingredients with friends and family.",
    githubLink: "https://github.com/samuelfangjw/FoodCache",
    projectLink: "",
    pageLink: "",
    tech: ["Android Studio", "Java"],
  },
];

export default ProjectsData;
