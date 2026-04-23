import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import GlobalBackground from "@/components/ui/GlobalBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GlobalBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
