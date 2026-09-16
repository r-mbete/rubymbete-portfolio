import Navbar from "@/components/layout/Navbar";
import EditorialGrid from "@/components/ui/EditorialGrid";
import SectionRail from "@/components/ui/SectionRail";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <EditorialGrid fixed />
      <ScrollProgress />
      <SectionRail />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
