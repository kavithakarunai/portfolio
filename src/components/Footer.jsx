import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/10">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1.5">
          <p className="text-white font-bold uppercase tracking-wider">Backend Architecture & APIs</p>
          <p className="text-gray-400">Python • Django • Django REST Framework</p>
          <p className="text-gray-400">PostgreSQL • MySQL • Postman • Git</p>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-center">
          <p className="text-white font-bold">Backend Developer @ Foyer Technologies</p>
          <a href="#projects" className="underline text-red-400 hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">
            Explore Projects
          </a>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-end">
          <p className="text-white font-bold">Chennai, Tamil Nadu</p>
          <p className="text-gray-400">Open to Full-Time & Remote Roles</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <h2 className="text-[17vw] md:text-[15vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-neutral-800 hover:text-[#ff2a2a]/20 transition-colors duration-500 w-full text-center">
          kavitha k
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <a href="#home" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Home</a>
            <a href="#about" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">About</a>
            <a href="#projects" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Projects</a>
            <a href="/Kavitha_K_Resume.pdf" target="_blank" rel="noopener noreferrer" className="underline text-red-400 hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Resume CV</a>
          </div>
          <p className="text-white/40 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Kavitha K | Backend Developer • Python & Django
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:kavianandham27@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">
            kavianandham27@gmail.com
          </a>
        </div>
        
        <div className="flex flex-row gap-6 md:items-end md:justify-end">
          <a href="https://linkedin.com/in/kavitha-k27" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
            LinkedIn
          </a>
          <a href="https://github.com/kavithakarunai" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
