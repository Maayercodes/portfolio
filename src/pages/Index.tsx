import { useEffect } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { ScrollTop } from "@/components/portfolio/ScrollTop";
import { useGlobalReveal } from "@/hooks/use-reveal";

const TITLE = "Maayer Hassan — AI Developer & Machine Learning Engineer";
const DESCRIPTION ="Maayer Hassan — BS Artificial Intelligence student at Superior University Lahore. Passionate about Machine Learning and AI. Skilled in Python, Scikit-learn, Pandas, NumPy, and Flask. Building real-world ML pipelines and intelligent systems.";

const Index = () => {
  useGlobalReveal();

  useEffect(() => {
    document.title = TITLE;
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", DESCRIPTION);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Maayer Hassan",
      jobTitle: "AI Developer & Machine Learning Engineer",
      description: DESCRIPTION,
      url: "https://maayer-portfolio.vercel.app/",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "Pakistan",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Superior University Lahore",
      },
      sameAs: [
        "https://www.linkedin.com/in/maayerhassan786",
        "https://github.com/Maayercodes",
        "https://maayer-portfolio.vercel.app/"
      ],
      knowsAbout: [
        "Python",
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Flask",
        "Feature Engineering",
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
      ],
    };

    const existing = document.getElementById("person-jsonld");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "person-jsonld";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden grain">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollTop />
    </main>
  );
};

export default Index;
