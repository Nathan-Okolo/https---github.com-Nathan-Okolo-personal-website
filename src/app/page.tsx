import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import HowIThink from "@/components/sections/HowIThink";
import SelectedWork from "@/components/sections/SelectedWork";
import LiveProjects from "@/components/sections/LiveProjects";
import Experience from "@/components/sections/Experience";
import TechnicalExpertise from "@/components/sections/TechnicalExpertise";
import Collaboration from "@/components/sections/Collaboration";
import Mentorship from "@/components/sections/Mentorship";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <HowIThink />
        <SelectedWork />
        <LiveProjects />
        <Experience />
        <TechnicalExpertise />
        <Collaboration />
        <Mentorship />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
