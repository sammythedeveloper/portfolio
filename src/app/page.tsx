import SidebarNav from "@/components/widgets/Navbar";
import Hero from "@/components/widgets/Hero";
import Projects from "@/components/widgets/Projects";
import CaseStudy from "@/components/widgets/CaseStudy";
import TechStack from "@/components/widgets/TechStack";
import Testimonials from "@/components/widgets/Testimonials";
import Footer from "@/components/widgets/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SidebarNav />
      <Hero />
      <Projects />
      <CaseStudy />
      <TechStack />
      <Testimonials />
      <Footer />
    </main>
  );
}
