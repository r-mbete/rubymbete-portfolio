import Navbar from "@/components/layout/Navbar";
import SectionRail from "@/components/ui/SectionRail";
import Seam from "@/components/ui/Seam";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

// Fields alternate plum and periwinkle; each Seam dissolves one into the next.
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <SectionRail />
      <Hero />
      <Work />
      <Seam from="peri" seed={11} />
      <Experience />
      <Seam from="plum" seed={23} />
      <Skills />
      <Seam from="peri" seed={42} />
      <Contact />
      <Footer />
    </main>
  );
}
