// src/app/page.tsx
import Hero from "@/components/widgets/Hero";
import SidebarNav from "@/components/widgets/SidebarNav";
import TechStack from "@/components/widgets/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen g">

      <SidebarNav />
      <Hero />
      <TechStack/>
   
      

    </main>
  );
}