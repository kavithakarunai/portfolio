import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroPortrait from '../assets/hero/kavitha_hero_clean.jpg';

const Hero = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen bg-[#070707] text-white flex items-center justify-center overflow-hidden pt-36 pb-20 md:pt-40 md:pb-28">
      
      {/* Background Ambient Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,42,42,0.15),rgba(255,255,255,0))] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Decorative Blur Spheres */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff2a2a]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Headlines & Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Pill */}
          <div 
            data-aos="fade-down"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">
              Available for Backend & Python Roles
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-4"
          >
            Hi, I’m <br />
            <span className="text-white drop-shadow-md">Kavitha K</span>
            <span className="block text-[#ff2a2a] text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-1">
              Backend Developer
            </span>
          </h1>

          {/* Bio Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl"
          >
            I build fast, scalable and modern web applications using <span className="text-white font-semibold underline decoration-[#ff2a2a] decoration-2 underline-offset-4">Django & Python</span>. Specialized in building secure RESTful APIs, optimized database schemas, and multi-tenant SaaS features.
          </p>

          {/* Quick Technical Badges */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap gap-2 mb-8"
          >
            {['Python', 'Django', 'Django REST (DRF)', 'pgAdmin', 'PostgreSQL', 'MySQL', 'Postman'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects" 
              className="px-7 py-3.5 rounded-full bg-[#ff2a2a] text-white font-bold text-sm sm:text-base hover:bg-red-600 transition-all duration-300 shadow-[0_0_25px_rgba(255,42,42,0.4)] hover:shadow-[0_0_35px_rgba(255,42,42,0.7)] transform hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <span>View My Work</span>
              <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            {/* Resume Button */}
            <a 
              href="/Kavitha_K_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 transition-all duration-300 backdrop-blur-md flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </a>

            {/* Contact Button */}
            <a 
              href="#contact" 
              className="px-6 py-3.5 rounded-full border border-white/20 text-gray-300 hover:text-white font-semibold text-sm sm:text-base hover:border-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Quick Metrics Strip */}
          <div 
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10 w-full max-w-lg"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">1+ Yr</div>
              <div className="text-xs text-gray-400 font-medium">Production Exp</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#ff2a2a]">REST</div>
              <div className="text-xs text-gray-400 font-medium">APIs & Microservices</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">RBAC</div>
              <div className="text-xs text-gray-400 font-medium">Multi-Tenant SaaS</div>
            </div>
          </div>

        </div>

        {/* Right Column: High-Resolution Edited Portrait Showcase (5 cols) */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="300"
          className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0"
        >
          {/* Outer Glowing Glass Frame */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[3/4] rounded-3xl p-3 bg-gradient-to-b from-white/15 to-white/5 border border-white/20 shadow-[0_0_50px_rgba(255,42,42,0.2)] backdrop-blur-xl group">
            
            {/* Viewfinder Corner Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ff2a2a] rounded-tl-lg pointer-events-none"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#ff2a2a] rounded-tr-lg pointer-events-none"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#ff2a2a] rounded-bl-lg pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ff2a2a] rounded-br-lg pointer-events-none"></div>

            {/* Inner Image Wrapper */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-900">
              <img 
                src={heroPortrait} 
                alt="Kavitha K - Backend Developer" 
                className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] transform group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                onClick={() => setIsImageModalOpen(true)}
              />

              {/* Gradient Vignette at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
              
              {/* Overlay Label on Card */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left pointer-events-none">
                <div>
                  <p className="text-xs uppercase tracking-wider text-red-400 font-bold">Python / Django</p>
                  <p className="text-white font-black text-lg">Kavitha K</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#ff2a2a]/80 backdrop-blur-md flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Chip 1: Python & Django */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-black/90 border border-white/20 text-white rounded-2xl px-4 py-2 shadow-2xl backdrop-blur-xl flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
              <div className="w-3 h-3 rounded-full bg-[#ff2a2a]"></div>
              <div className="text-xs font-bold tracking-tight">
                Backend Architect
              </div>
            </div>

            {/* Floating Chip 2: Foyer Technologies */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-black/90 border border-white/20 text-white rounded-2xl px-4 py-2.5 shadow-2xl backdrop-blur-xl flex items-center gap-3">
              <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center text-[#ff2a2a] font-bold text-xs">
                FT
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Experience</p>
                <p className="text-xs font-bold text-white">Foyer Technologies</p>
              </div>
            </div>

          </div>
        </div>

      </div>



      {/* High-Resolution Modal View if User Clicks Photo */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-2xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <img 
              src={heroPortrait} 
              alt="Kavitha K Full Resolution" 
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button 
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#ff2a2a] transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;
