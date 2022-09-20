import { Grid, GridItem } from "@chakra-ui/react";
import Section from "../section";
import ProjectCard from "./project-card";
import ProjectsData from "./project-details";

const Projects = () => {
  const projectCards = ProjectsData.map((project, idx) => (
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
        templateColumns={{
          base: "minmax(0, 1fr)",
          sm: "repeat(2, minmax(0, 1fr))",
          md: "repeat(3, minmax(0, 1fr))",
        }}
        gap={4}
        marginY={4}
      >
        {projectCards}
      </Grid>
    </Section>
  );
};

export default Projects;
