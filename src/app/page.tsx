import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Stats from "@/components/Stats";
import Attorneys from "@/components/Attorneys";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <PracticeAreas />
      <Stats />
      <Attorneys />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
