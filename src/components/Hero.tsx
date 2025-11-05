import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'IoT & Embedded Systems Specialist';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    // Simulate resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Jay_Dukare_Resume.pdf';
    alert('Resume download feature - Connect to actual PDF file');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Circuit board decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-emerald-400 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-cyan-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-cyan-400 text-lg">Hello, I'm</span>
          </motion.div>

          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
          >
            Jay Dukare
          </motion.h1>

          {/* Typing effect subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 h-12 flex items-center justify-center"
          >
            <span className="font-mono">{displayText}</span>
            <span className="animate-pulse ml-1 text-cyan-400">|</span>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 mb-12"
          >
            Electronics & Telecommunication Engineering Student | Pune, Maharashtra, India
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <button
              onClick={handleDownloadResume}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Contact Me
            </button>
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400/10 transition-all duration-300"
            >
              View Projects
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-6 justify-center mb-12"
          >
            <a
              href="https://github.com/Jay5852"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300 border border-gray-700 hover:border-cyan-400 group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/jaydukare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300 border border-gray-700 hover:border-cyan-400 group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:jaydukare2003@gmail.com"
              className="p-4 bg-gray-800/50 rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300 border border-gray-700 hover:border-cyan-400 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 text-cyan-400 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
