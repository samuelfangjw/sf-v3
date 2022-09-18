import { Grid, GridItem } from "@chakra-ui/react";
import Section from "../section";
import ProjectCard, { Project } from "./project-card";

const projectsData: Project[] = [
  {
    title: "TEAMMATES",
    description:
      "An online feedback management system for education used by more than 800,000 users worldwide.",
    githubLink: "https://github.com/TEAMMATES/teammates",
    projectLink: "https://teammatesv4.appspot.com/",
    pageLink: "/",
    tech: ["Angular", "Java", "Google Cloud"],
  },
  {
    title: "Source Academy",
    description:
      "A computer-mediated learning environment for studying the structure and interpretation of computer programs.",
    githubLink: "",
    projectLink: "https://sourceacademy.org/sicpjs/index",
    pageLink: "/",
    tech: ["React", "Node.js"],
  },
];

const Projects = () => {
  const projectCards = projectsData.map((project, idx) => (
    <GridItem key={idx}>
      <ProjectCard
        title={project.title}
        description={project.description}
        githubLink={project.githubLink}
        projectLink={project.projectLink}
        pageLink={project.pageLink}
        tech={project.tech}
      />
    </GridItem>
  ));

  return (
    <Section id="projects" title="Some Projects I've Worked On">
      <Grid
        templateColumns={{ base: "1f1", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
        gap={4}
        marginY={4}
      >
        {projectCards}
      </Grid>
    </Section>
  );
};

export default Projects;
