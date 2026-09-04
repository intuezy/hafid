import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import CvCallout from "@/components/CvCallout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      {/* Top Header / Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 01 About Section */}
        <About />

        {/* 02 Core Competencies / Expertise Grid */}
        <Expertise />

        {/* 03 Career Track Record / Experience */}
        <Experience />

        {/* 04 Credentials, Licenses, and Formal Education */}
        <Certifications />

        {/* 05 Dedicated CV Download Highlight */}
        <CvCallout />

        {/* 06 Direct Contact & Office Details */}
        <Contact />
      </main>

      {/* Footer & Professional Colophon */}
      <Footer />
    </div>
  );
}
