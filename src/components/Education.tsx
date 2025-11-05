import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const educationData = [
  {
    institution: "P.E.S. Modern College of Engineering, Pune",
    degree: "Bachelor of Engineering",
    field: "Electronics and Telecommunication Engineering",
    period: "Aug 2023 – Present",
    achievement: "SGPA: 8.26",
    icon: GraduationCap,
    color: 'cyan'
  },
  {
    institution: "Government Polytechnic, Pune",
    degree: "Diploma",
    field: "Electronics and Telecommunication Engineering",
    period: "Jul 2020 – Jul 2023",
    achievement: "Percentage: 84.39%",
    icon: Award,
    color: 'emerald'
  },
  {
    institution: "V.S. Satav High School, Wagholi",
    degree: "SSC Board",
    field: "Secondary Education",
    period: "Mar 2020",
    achievement: "Percentage: 91.20%",
    icon: Award,
    color: 'amber'
  }
];

const colorClasses = {
  cyan: 'from-cyan-400 to-cyan-600',
  emerald: 'from-emerald-400 to-emerald-600',
  amber: 'from-amber-400 to-amber-600'
};

export const Education = () => {
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
    <section id="education" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-emerald-400 to-amber-400 opacity-30"></div>

          {/* Education items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm">
                      {/* Icon and period */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 bg-gradient-to-br ${colorClasses[edu.color as keyof typeof colorClasses]} rounded-lg shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>

                      {/* Institution */}
                      <h3 className="text-xl text-gray-200 mb-2">
                        {edu.institution}
                      </h3>

                      {/* Degree */}
                      <p className="text-cyan-400 mb-1">
                        {edu.degree}
                      </p>

                      {/* Field */}
                      <p className="text-gray-400 text-sm mb-3">
                        {edu.field}
                      </p>

                      {/* Achievement */}
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400">
                            {edu.achievement}
                          </span>
                        </div>
                      </div>

                      {/* Hover effect decoration */}
                      <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-br from-cyan-400/0 to-emerald-400/0 group-hover:from-cyan-400/5 group-hover:to-emerald-400/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full border-4 border-[#0A0A14] shadow-lg shadow-cyan-400/50 z-10"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 border-2 border-emerald-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-cyan-400 rotate-45 opacity-20"></div>
      </div>
    </section>
  );
};
