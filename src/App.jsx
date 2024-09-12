import { useState } from "react";
import img from "./assets/newton.jpg";
import { animate, motion } from "framer-motion";
import "./App.scss";
import Hero from "./Pages/Hero/Hero";

import Services from "./Pages/Services/Services";
import Portfolio1 from "./Pages/Portolio/Portfolio1";
import Portfolio2 from "./Pages/Contact/Contact";
import Contact from "./Pages/Contact/Contact";
import NavBar from "./Components/Navbar/NavBar";
import Skills from "./Pages/Skills/Skills";
import Certificate from "./Components/Certificate";

function App() {
  const variants = {};
  return (
    <div>
      <motion.section id="Home">
        <NavBar />
        <Hero />
      </motion.section>

      <motion.section id="Skills" className="mt-20">
        <Skills />
      </motion.section>
      <motion.section id="Certificate" className="mt-10">
        <Certificate />
      </motion.section>
      <motion.section id="Projects" className="mt-32">
        <Portfolio1 />
      </motion.section>
      <motion.section id="Services" className="mt-10">
        <Services />
      </motion.section>

      <motion.section id="Contact" className="mt-10">
        <Contact />
      </motion.section>
    </div>
  );
}

export default App;
