import React from 'react';
import badgeImage from '../assets/about/kavitha_badge.png';
import pythonIcon from '../assets/skills/python.png';
import djangoIcon from '../assets/skills/django.png';
import postgresIcon from '../assets/skills/postgresql.png';
import postmanIcon from '../assets/skills/postman.png';
import swaggerIcon from '../assets/skills/swagger.png';
import gitIcon from '../assets/skills/git.svg';

const About = () => {
  const techSkills = [
    { name: 'Python', icon: pythonIcon, desc: 'Core Language & Scripting' },
    { name: 'Django', icon: djangoIcon, desc: 'REST Framework (DRF) & ORM' },
    { name: 'PostgreSQL', icon: postgresIcon, desc: 'Relational DB & Queries' },
    { name: 'Postman', icon: postmanIcon, desc: 'API Testing & Validation' },
    { name: 'Swagger', icon: swaggerIcon, desc: 'API Docs & OpenAPI Spec' },
    { name: 'Git & GitHub', icon: gitIcon, desc: 'Version Control & Agile' },
  ];

  return (
    <section id="about" className="bg-[#ff2a2a] pt-24 pb-44 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-700/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-10">
        
        {/* Left Side: Hanging ID Badge */}
        <div className="flex flex-col items-center w-full lg:w-[360px] shrink-0 mt-8 lg:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-4 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0 flex items-center justify-center">
              <span className="text-[7px] text-white/50 tracking-widest font-mono uppercase rotate-90 whitespace-nowrap">
                BACKEND ENGINEER
              </span>
            </div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-7 h-12 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-950 w-full max-w-[290px] rounded-2xl p-4 shadow-[0_25px_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-950 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center border-t border-x border-white/10">
                <div className="w-8 h-2 bg-black/80 rounded-full shadow-inner"></div>
              </div>

              {/* Company / Header strip */}
              <div className="flex justify-between items-center pb-3 pt-1 border-b border-gray-800">
                <span className="text-[10px] font-mono text-red-500 font-bold tracking-wider uppercase">DEV ACCESS</span>
                <span className="text-[10px] font-mono text-gray-400">ID: 809882</span>
              </div>

              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-900 border border-gray-800 my-3 relative group">
                <img 
                  src={badgeImage} 
                  alt="Kavitha K ID Badge" 
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[9px] font-mono text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Active
                </div>
              </div>

              {/* Badge Footer Info */}
              <div className="text-center pt-1">
                <h3 className="text-white font-black text-lg tracking-tight">Kavitha K</h3>
                <p className="text-red-400 text-xs font-semibold uppercase tracking-wider">Backend Developer</p>
                <div className="mt-3 pt-2 border-t border-gray-800/80 flex items-center justify-between text-[9px] text-gray-400 font-mono">
                  <span>Python / Django</span>
                  <span>Chennai, TN</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Side: Professional Summary & Experience */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white relative z-20">
          
          <div className="inline-block px-3.5 py-1 rounded-full bg-black/20 backdrop-blur-md border border-black/10 text-xs font-bold uppercase tracking-widest text-black mb-3">
            About Me
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-4">
            Hello, World!
          </h2>

          <p className="text-lg sm:text-xl font-bold mb-6 leading-relaxed text-white drop-shadow-sm">
            Hi, my name is <span className="text-black bg-white px-2 py-0.5 rounded mx-1 text-xl font-black tracking-wide uppercase inline-block shadow-sm">Kavitha K</span>, a dedicated Backend Developer based in <span className="text-black font-extrabold underline decoration-white">Chennai, Tamil Nadu</span>, specializing in building secure, high-throughput, and scalable web applications using <span className="text-black font-extrabold">Python & Django</span>.
          </p>

          <p className="text-base text-red-50 font-medium leading-relaxed mb-8 max-w-3xl">
            With hands-on experience developing RESTful APIs and database-driven architectures for multi-tenant CRM/ERP and HRM SaaS products at <strong>Foyer Technologies</strong>, I specialize in designing normalized database schemas, Django ORM models, and granular Role-Based Access Control (RBAC).
          </p>

          {/* Quick Experience & Education Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="p-4 rounded-2xl bg-black/20 border border-white/20 backdrop-blur-md text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-black/80 font-bold block mb-1">Current Position</span>
              <h4 className="text-white font-extrabold text-base">Backend Developer</h4>
              <p className="text-xs text-red-100 font-medium mt-0.5">Foyer Technologies Pvt. Ltd. (Chennai)</p>
              <p className="text-[11px] text-black/70 font-semibold mt-1">HRM & CRM-IT Modules • RBAC • MySQL</p>
            </div>

            <div className="p-4 rounded-2xl bg-black/20 border border-white/20 backdrop-blur-md text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-black/80 font-bold block mb-1">Education</span>
              <h4 className="text-white font-extrabold text-base">B.E. — Electronics & Comm.</h4>
              <p className="text-xs text-red-100 font-medium mt-0.5">Ponnaiyah Ramajayam Eng. College</p>
              <p className="text-[11px] text-black/70 font-semibold mt-1">80% Aggregate • Practical Python Stack at QSpiders</p>
            </div>
          </div>

          {/* Technical Skills Header */}
          <div id="skills" className="mb-4 pt-4">
            <h3 className="text-xl font-black text-black uppercase tracking-tight flex items-center gap-2">
              <span>Core Tech Stack</span>
              <span className="text-xs font-mono font-normal text-white/90 lowercase bg-black/30 px-2 py-0.5 rounded-full">
                hover icons
              </span>
            </h3>
          </div>

          {/* Horizontal Skills Row with Real PNG Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2">
            {techSkills.map((skill, idx) => (
              <div 
                key={skill.name}
                data-aos="zoom-in" 
                data-aos-delay={250 + idx * 70}
                className="bg-white/10 hover:bg-white border border-white/20 hover:border-white rounded-2xl p-3.5 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-2 rounded-lg overflow-hidden">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <span className="text-xs font-bold text-white group-hover:text-black transition-colors leading-tight">
                  {skill.name}
                </span>
                <span className="text-[9px] text-red-100 group-hover:text-gray-600 transition-colors mt-0.5 leading-tight">
                  {skill.desc}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
