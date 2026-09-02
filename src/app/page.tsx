// src/app/page.tsx
import About from "@/components/widgets/About";
import Hero from "@/components/widgets/Hero";
import Navbar from "@/components/widgets/Navbar";
import TechStack from "@/components/widgets/TechStack";
import ParallaxSection from "@/components/ui/ParallaxSection"; // Our new component
import Projects from "@/components/widgets/Projects";
import Education from "@/components/widgets/Education";
import Experience from "@/components/widgets/Experience";
import Contact from "@/components/widgets/Contact";
import Footer from "@/components/widgets/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Navbar />
      <Hero />
      <ParallaxSection>
        <TechStack />
      </ParallaxSection>
      <ParallaxSection>
        <Projects />
      </ParallaxSection>
      <ParallaxSection>
        <Experience />
      </ParallaxSection>
      <ParallaxSection>
        <About />
      </ParallaxSection>
      <ParallaxSection>
        <Education />
      </ParallaxSection>
      <ParallaxSection>
        <Contact />
      </ParallaxSection>
      <ParallaxSection>
        <Footer />
      </ParallaxSection>
    </main>
  );
}
