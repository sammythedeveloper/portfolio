// src/app/page.tsx
import Hero from "@/components/widgets/Hero";
import SidebarNav from "@/components/widgets/SidebarNav";
import Navbar from "@/components/widgets/SidebarNav";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Your reusable Hero section */}
      <Hero />
      <SidebarNav />
      
      {/* You will add more sections here later, e.g., <Projects /> */}
    </main>
  );
}