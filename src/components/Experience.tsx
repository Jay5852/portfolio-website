import { useState, useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto"></div>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-400 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300 relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-emerald-400/0 group-hover:from-cyan-400/5 group-hover:to-emerald-400/5 transition-all duration-300"></div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 relative z-10">
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl text-gray-200 mb-2">
                    Industrial Automation Intern
                  </h3>
                  <p className="text-cyan-400 text-lg mb-2">
                    Pretech Automation Pvt. Ltd.
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Pune, India
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Jul 2022 – Sept 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="relative z-10">
              <p className="text-gray-300 leading-relaxed mb-6">
                Supported PLC wiring, panel assembly, and testing processes in industrial automation systems. Gained hands-on experience with industrial control systems and automation technologies.
              </p>

              {/* Key Responsibilities */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Assisted in PLC (Programmable Logic Controller) wiring and configuration
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Participated in control panel assembly and integration
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Conducted testing and troubleshooting of industrial automation systems
                  </p>
                </div>
              </div>

              {/* Skills gained */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-emerald-400 mb-3">Skills Gained</h4>
                <div className="flex flex-wrap gap-2">
                  {['PLC Systems', 'Panel Assembly', 'System Testing', 'Industrial Automation', 'Troubleshooting'].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cyan-400/20 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-emerald-400/20 rounded-bl-2xl"></div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cyan-400 rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-emerald-400 rotate-45 opacity-10"></div>
      </div>
    </section>
  );
};
