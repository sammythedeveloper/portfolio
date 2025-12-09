// src/app/page.tsx
import Hero from "@/components/widgets/Hero";
import Navbar from "@/components/widgets/Nav";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Your reusable Hero section */}
      <Hero />
      <Navbar/>
      
      {/* You will add more sections here later, e.g., <Projects /> */}
    </main>
  );
}