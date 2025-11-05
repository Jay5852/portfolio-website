import { useState, useEffect, useRef } from 'react';
import { Trophy, Users, Target, Award } from 'lucide-react';
import { motion } from 'motion/react';

const accomplishments = [
  {
    id: 1,
    title: "Head, IoT Hackathon 2023-24",
    organization: "Mpulse Xtronica, PESMCOE",
    description: "Led event planning, logistics, and evaluation for 50+ participants",
    icon: Users,
    color: 'cyan',
    metric: '50+',
    metricLabel: 'Participants'
  },
  {
    id: 2,
    title: "Finalist – CircuitVista 2K25",
    organization: "Project Competition",
    description: "Recognized as finalist in competitive project showcase",
    icon: Trophy,
    color: 'amber',
    metric: null,
    metricLabel: null
  },
  {
    id: 3,
    title: "Participant – IoT Hackathon 2023",
    organization: "Technical Competition",
    description: "Competed in IoT-focused hackathon challenge",
    icon: Target,
    color: 'emerald',
    metric: null,
    metricLabel: null
  },
  {
    id: 4,
    title: "Soft Skills Program",
    organization: "Cognitive Exchange",
    description: "Completed professional development program",
    icon: Award,
    color: 'cyan',
    metric: null,
    metricLabel: null
  }
];

const colorClasses = {
  cyan: {
    gradient: 'from-cyan-400 to-cyan-600',
    border: 'border-cyan-400',
    text: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    glow: 'shadow-cyan-400/20'
  },
  emerald: {
    gradient: 'from-emerald-400 to-emerald-600',
    border: 'border-emerald-400',
    text: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    glow: 'shadow-emerald-400/20'
  },
  amber: {
    gradient: 'from-amber-400 to-amber-600',
    border: 'border-amber-400',
    text: 'text-amber-400',
    bg: 'bg-amber-400/10',
    glow: 'shadow-amber-400/20'
  }
};

export const Accomplishments = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
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

  // Animated counter
  useEffect(() => {
    if (isVisible && count < 50) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + 2, 50));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count]);

  return (
    <section id="accomplishments" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Accomplishments
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto"></div>
        </motion.div>

        {/* Accomplishments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accomplishments.map((accomplishment, index) => {
            const Icon = accomplishment.icon;
            const colors = colorClasses[accomplishment.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={accomplishment.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border ${colors.border} backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg ${colors.glow} hover:shadow-xl relative overflow-hidden`}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  {/* Icon and Metric */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {accomplishment.metric && (
                      <div className={`text-right ${colors.bg} px-4 py-2 rounded-lg border ${colors.border}`}>
                        <div className={`text-2xl ${colors.text}`}>
                          {accomplishment.id === 1 ? `${count}+` : accomplishment.metric}
                        </div>
                        <div className="text-xs text-gray-400">{accomplishment.metricLabel}</div>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl mb-2 ${colors.text}`}>
                    {accomplishment.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-gray-400 text-sm mb-3">
                    {accomplishment.organization}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm">
                    {accomplishment.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 ${colors.border} opacity-10 rounded-tl-full border-r-2 border-b-2 group-hover:scale-150 transition-transform duration-500`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-24 h-24 border-2 border-amber-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 border-2 border-cyan-400 rotate-45 opacity-10"></div>
      </div>
    </section>
  );
};
