// src/app/page.tsx
import About from "@/components/widgets/About";
import Hero from "@/components/widgets/Hero";
import SidebarNav from "@/components/widgets/SidebarNav";
import TechStack from "@/components/widgets/TechStack";
import ParallaxSection from "@/components/ui/ParallaxSection"; // Our new component

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <SidebarNav />
      
      {/* Hero usually stays static or has a different effect */}
      <Hero />

      {/* Wrap your widgets with the ParallaxSection for the movement effect */}
      <ParallaxSection>
        <About />
      </ParallaxSection>
      
      <ParallaxSection>
        <TechStack />
      </ParallaxSection>
    </main>
  );
}