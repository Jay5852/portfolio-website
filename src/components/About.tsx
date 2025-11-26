import { useState, useEffect, useRef } from 'react';
import { Code2, Database, Wrench, Brain } from 'lucide-react';
import { motion } from 'motion/react';

const skills = {
  'Programming & Analytics': {
    icon: Code2,
    items: ['Python', 'SQL', 'C++', 'Data Structures and Algorithms', 'Embedded C', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI'],
    color: 'cyan'
  },
  'Tools and Platforms': {
    icon: Wrench,
    items: ['JupyterLab', 'MySQL', 'Git', 'GitHub', 'Adafruit IO', 'Arduino IDE'],
    color: 'emerald'
  },
  'IoT & EMBEDDED': {
    icon: Brain,
    items: ['Arduino', 'ESP32/ESP8266', 'Embedded C', 'Sensors & Modules', 'IoT Dashboards'],
    color: 'amber'
  }
};

const colorClasses = {
  cyan: {
    border: 'border-cyan-400',
    bg: 'bg-cyan-400/10',
    text: 'text-cyan-400',
    glow: 'shadow-cyan-400/20',
    hoverGlow: 'hover:shadow-cyan-400/40'
  },
  emerald: {
    border: 'border-emerald-400',
    bg: 'bg-emerald-400/10',
    text: 'text-emerald-400',
    glow: 'shadow-emerald-400/20',
    hoverGlow: 'hover:shadow-emerald-400/40'
  },
  amber: {
    border: 'border-amber-400',
    bg: 'bg-amber-400/10',
    text: 'text-amber-400',
    glow: 'shadow-amber-400/20',
    hoverGlow: 'hover:shadow-amber-400/40'
  }
};

export const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto"></div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-400/30 shadow-xl shadow-cyan-400/10 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed">
              Final-year Electronics and Telecommunication Engineering student with a growing specialization in Data Analytics, Machine Learning, and Python development, combining practical IoT and embedded systems experience with data-driven analytical skills to build real-world, end-to-end technical solutions with meaningful impact.
          </div>
        </motion.div>

        {/* Skills Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl text-center mb-12 text-gray-200"
          >
            Skills & Expertise
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data], index) => {
              const Icon = data.icon;
              const colors = colorClasses[data.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`group bg-gray-800/30 p-6 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg ${colors.glow} ${colors.hoverGlow}`}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center mb-4 border ${colors.border} group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Category Title */}
                  <h4 className={`text-xl mb-4 ${colors.text}`}>
                    {category}
                  </h4>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {data.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-gray-900/50 border ${colors.border} rounded-full text-sm text-gray-300 hover:${colors.bg} transition-colors`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Animated corner decoration */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${colors.border} opacity-20 rounded-bl-full border-r border-t group-hover:scale-150 transition-transform duration-500`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Decorative circuit lines */}
        <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-30"></div>
      </div>
    </section>
  );
};
