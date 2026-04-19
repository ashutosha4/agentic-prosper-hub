import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Ashutosh A — AI Product Manager | Agentic AI & RAG Systems";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "AI Product Manager with 7+ years building agentic AI, RAG, and decision-support platforms in insurance and banking. Case studies, experience, and contact.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
