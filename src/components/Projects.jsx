import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 'crm-erp',
      title: 'Multi-Tenant CRM/ERP & HRM SaaS Platform',
      category: 'Backend & SaaS',
      role: 'Backend Developer (Python/Django)',
      duration: 'Sep 2025 – Present',
      description: 'Engineered high-performance RESTful APIs and normalized database architectures for an enterprise CRM/ERP suite across HRM, Superadmin, and CRM-IT verticals.',
      highlights: [
        'Employee attendance tracking & automated leave management APIs',
        'Fine-grained Role-Based Access Control (RBAC) across client tenants',
        'Optimized Django ORM models with MySQL referential integrity',
        'End-to-end API test automation via Postman collections'
      ],
      techStack: ['Python', 'Django', 'Django REST Framework', 'MySQL', 'Postman', 'Git'],
      github: 'https://github.com/kavithakarunai',
      isFeatured: true,
      badge: 'Production Software'
    },
    {
      id: 'ai-drone',
      title: 'AI-Enabled Drone for Human Movement Detection',
      category: 'AI & Vision',
      role: 'Python Developer — Academic Project',
      duration: 'Academic Project',
      description: 'Constructed an intelligent surveillance pipeline using Deep Learning and Convolutional Neural Networks (CNNs) to analyze live drone camera feeds.',
      highlights: [
        'Real-time inference pipeline on streaming video frames',
        'High-accuracy human detection under varying daylight conditions',
        'Optimized frame extraction and spatial motion tracking algorithms'
      ],
      techStack: ['Python', 'CNNs', 'OpenCV', 'TensorFlow/Keras', 'NumPy'],
      github: 'https://github.com/kavithakarunai',
      isFeatured: true,
      badge: 'Computer Vision'
    },
    {
      id: 'iot-lighting',
      title: 'Weather-Adaptive Smart Street Lighting System',
      category: 'IoT & Embedded',
      role: 'Embedded Systems & Backend',
      duration: 'IoT Project',
      description: 'Engineered an ESP32-powered automated lighting network that reads live ambient telemetry and optimizes municipal energy consumption.',
      highlights: [
        'Real-time sensor data ingest (light intensity, temperature, humidity)',
        'Adaptive PWM luminance scaling reducing energy draw by up to 40%',
        'Fail-safe autonomous state machine with remote telemetry reporting'
      ],
      techStack: ['ESP32', 'Python', 'C/C++', 'IoT Sensors', 'Telemetry'],
      github: 'https://github.com/kavithakarunai',
      isFeatured: false,
      badge: 'Smart City IoT'
    }
  ];

  const categories = ['All', 'Backend & SaaS', 'AI & Vision', 'IoT & Embedded'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="bg-[#0c0c0c] text-white py-32 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/5">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ff2a2a]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-red-400 mb-4">
              <span>●</span> Featured Work & Engineering
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              My Work &amp; <span className="text-[#ff2a2a]">Builds.</span>
            </h2>
          </div>

          <p className="text-gray-400 max-w-md text-sm sm:text-base leading-relaxed">
            Real-world backend architectures, multi-tenant SaaS features, and automated software engineered with Python & Django.
          </p>
        </div>

        {/* Filter Pills */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === cat 
                  ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.5)]' 
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-neutral-900/80 rounded-3xl border border-white/10 p-7 flex flex-col justify-between hover:border-[#ff2a2a]/60 hover:shadow-[0_15px_45px_rgba(255,42,42,0.15)] transition-all duration-500 group relative backdrop-blur-xl"
              >
                {/* Top Badge & Duration */}
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-red-300 border border-white/10">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500">
                      {project.duration}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <p className="text-xs font-semibold text-gray-400 mb-4">
                    {project.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-300 font-normal leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-400 leading-snug">
                        <span className="text-[#ff2a2a] mt-0.5 font-bold">✓</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Stack & Action Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-6">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-end">

                    <span className="text-[10px] font-mono text-gray-600">
                      #{idx + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub Footer Banner */}
        <div 
          data-aos="fade-up" 
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-neutral-900 to-neutral-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-xl font-bold text-white mb-1">
              Looking for more backend projects & code snippets?
            </h4>
            <p className="text-xs text-gray-400">
              Visit my GitHub profile for API samples, Python scripts, and database configurations.
            </p>
          </div>
          <a
            href="https://github.com/kavithakarunai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-gray-200 transition-all duration-300 whitespace-nowrap shadow-md flex items-center gap-2"
          >
            <span>github.com/kavithakarunai</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
