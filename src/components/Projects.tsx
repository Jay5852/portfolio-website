import { useState, useEffect, useRef } from 'react';
import { Fingerprint, Mic, Wifi, Lock, X, ExternalLink, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  // 1️⃣ IoT Project
  {
    id: 1,
    title: "Attendify – IoT-Based Biometric Attendance System",
    period: "Aug 2025 - Present",
    icon: Fingerprint,
    color: 'cyan',
    shortDesc: "IoT attendance system with real-time sync and dashboard",
    fullDesc: "Built using ESP32, R307 sensor, and rechargeable battery. Features include recording time/date, real-time synchronization, and a teacher dashboard with email and Excel export capabilities.",
    technologies: ["ESP32", "R307 Sensor", "IoT", "Real-time Sync", "Dashboard"],
    achievement: "80% reduction in manual attendance time",
    link: null
  },

  // 2️⃣ Data Project
  {
    id: 2,
    title: "Retail Sales Analysis",
    period: "2025",
    icon: TrendingUp,
    color: 'emerald',
    shortDesc: "EDA on retail sales data to find trends and customer behavior",
    fullDesc: "Analyzed retail sales data using Python, Pandas, Seaborn, and Power BI to uncover customer purchasing behavior, high-performing products, seasonal trends, and revenue insights through end-to-end exploratory data analysis and dashboard creation.",
    technologies: ["Python", "Pandas", "Seaborn", "Power BI", "Excel", "EDA"],
    achievement: "Identified top 10 revenue-driving products improving decision speed",
    link: "#"
  },

  // 3️⃣ IoT / AI Project
  {
    id: 3,
    title: "Jarvis AI Virtual Assistant",
    period: "2025",
    icon: Mic,
    color: 'emerald',
    shortDesc: "Python-based voice assistant with AI integration",
    fullDesc: "Python-based voice assistant using SpeechRecognition, gTTS, and Google Gemini AI. Features context-aware voice responses and task automation including browsing, music playback, and data retrieval.",
    technologies: ["Python", "SpeechRecognition", "gTTS", "Google Gemini AI", "Automation"],
    achievement: "70% improvement in task completion speed",
    link: "#"
  },

  // 4️⃣ Data Project
  {
    id: 4,
    title: "Global Debt Analysis",
    period: "2024",
    icon: Database,
    color: 'violet',
    shortDesc: "Explored international debt data for economic insights",
    fullDesc: "Explored international debt datasets using Python, Pandas, Matplotlib, and Excel by cleaning macroeconomic indicators, identifying top debtor nations, visualizing long-term financial trends, detecting global economic patterns, and deriving insights for policy analysis.",
    technologies: ["Python", "Pandas", "Matplotlib", "Excel"],
    achievement: "Revealed 20-year patterns in global debt growth",
    link: "#"
  },

  // 5️⃣ IoT Project
  {
    id: 5,
    title: "IoT Cable Fault Detection",
    period: "2025",
    icon: Wifi,
    color: 'amber',
    shortDesc: "Precise cable fault detection and monitoring system",
    fullDesc: "System using Arduino UNO, ESP8266, and Adafruit IO for real-time cable fault detection and monitoring. Provides accurate fault location detection and remote monitoring capabilities.",
    technologies: ["Arduino UNO", "ESP8266", "Adafruit IO", "IoT", "Real-time Monitoring"],
    achievement: "±1 km accuracy, 60% reduction in fault isolation time",
    link: "#"
  },

  // 6️⃣ Data Project
  {
    id: 6,
    title: "Financial Time Series Insights",
    period: "2024",
    icon: TrendingUp,
    color: 'cyan',
    shortDesc: "Stock market trend and volatility analysis",
    fullDesc: "Conducted stock market time series analysis using Python, yfinance, Pandas, and Matplotlib by generating moving averages, volatility tracking, price trend comparisons, and daily return analytics to identify patterns and short-term predictability.",
    technologies: ["Python", "yfinance", "Pandas", "Matplotlib", "Time Series Analysis"],
    achievement: "Improved trend detection accuracy using SMA/EMA",
    link: "#"
  },

  // 7️⃣ IoT Project
  {
    id: 7,
    title: "Smart Door Lock",
    period: "2024",
    icon: Lock,
    color: 'cyan',
    shortDesc: "IoT-based smart lock with camera and audio",
    fullDesc: "IoT-based door lock system featuring ESP32, camera module, two-way audio communication, and mobile app control. Enables 24/7 remote access and monitoring for enhanced security.",
    technologies: ["ESP32", "Camera Module", "Two-way Audio", "Mobile App", "IoT"],
    achievement: "24/7 remote access capability",
    link: null
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

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = colorClasses[project.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border ${colors.border} backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg ${colors.glow} hover:shadow-xl cursor-pointer relative overflow-hidden`}
                onClick={() => openProject(project.id)}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center mb-4 shadow-lg relative z-10`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Period */}
                <p className="text-gray-400 text-sm mb-2 relative z-10">{project.period}</p>

                {/* Title */}
                <h3 className={`text-xl mb-3 ${colors.text} relative z-10`}>
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-300 mb-4 relative z-10">
                  {project.shortDesc}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 ${colors.bg} border ${colors.border} rounded text-xs text-gray-300`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Achievement */}
                <div className={`flex items-center gap-2 ${colors.text} text-sm mb-4 relative z-10`}>
                  <TrendingUp className="w-4 h-4" />
                  <span>{project.achievement}</span>
                </div>

                {/* CTA */}
                <div className="flex gap-3 relative z-10">
                  <button
                    className={`flex-1 px-4 py-2 ${colors.bg} border ${colors.border} rounded-lg ${colors.text} hover:bg-opacity-20 transition-all`}
                  >
                    View Details
                  </button>
                  {project.link && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link!, '_blank');
                      }}
                      className={`px-4 py-2 bg-gradient-to-r ${colors.gradient} text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProjectData && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeProject}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-cyan-400 shadow-2xl shadow-cyan-400/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              {/* Icon */}
              {(() => {
                const Icon = selectedProjectData.icon;
                const colors = colorClasses[selectedProjectData.color as keyof typeof colorClasses];
                return (
                  <div className={`w-20 h-20 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                );
              })()}

              {/* Title */}
              <h3 className="text-3xl mb-2 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {selectedProjectData.title}
              </h3>

              {/* Period */}
              <p className="text-gray-400 mb-6">{selectedProjectData.period}</p>

              {/* Full Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProjectData.fullDesc}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg text-cyan-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech, idx) => {
                    const colors = colorClasses[selectedProjectData.color as keyof typeof colorClasses];
                    return (
                      <span
                        key={idx}
                        className={`px-3 py-1 ${colors.bg} border ${colors.border} rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Achievement */}
              <div className="mb-6 p-4 bg-emerald-400/10 border border-emerald-400 rounded-lg">
                <div className="flex items-center gap-2 text-emerald-400">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-lg">{selectedProjectData.achievement}</span>
                </div>
              </div>

              {/* Link */}
              {selectedProjectData.link && (
                <button
                  onClick={() => window.open(selectedProjectData.link!, '_blank')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Project
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
