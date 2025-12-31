// src/app/page.tsx
import About from "@/components/widgets/About";
import Hero from "@/components/widgets/Hero";
import SidebarNav from "@/components/widgets/SidebarNav";
import TechStack from "@/components/widgets/TechStack";
import ParallaxSection from "@/components/ui/ParallaxSection"; // Our new component
import Projects from "@/components/widgets/Projects";
import Experience from "@/components/widgets/Experience";
import Certificates from "@/components/widgets/Certificates";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen md:ml-28">
      <SidebarNav />

      <Hero />

      <ParallaxSection>
        <About />
      </ParallaxSection>

      <ParallaxSection>
        <TechStack />
      </ParallaxSection>

      <ParallaxSection>
        <Projects />
      </ParallaxSection>
      
      <ParallaxSection>
        <Experience/>
      </ParallaxSection>

      <ParallaxSection>
        <Certificates/>
      </ParallaxSection>

    </main>
  );
}
