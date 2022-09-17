import type { NextPage } from "next";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Experience from "../components/experience/experience";
import Hero from "../components/hero/hero";
import Projects from "../components/projects/projects";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
