"use client";

import { AnimatedBackground } from '../components/AnimatedBackground';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Education } from '../components/Education';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Accomplishments } from '../components/Accomplishments';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A14] text-white overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Accomplishments />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
