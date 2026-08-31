import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Process />
        <Experience />
        <Certifications />
        <Testimonials />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
