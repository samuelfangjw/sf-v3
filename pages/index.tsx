import type { NextPage } from "next";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Work from "../components/work/work";
import Hero from "../components/hero/hero";
import Projects from "../components/projects/projects";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
