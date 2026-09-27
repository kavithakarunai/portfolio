// import React, { useRef, useState } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const Contact = () => {
//   const ref = useRef(null);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: ''
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   // Parallax translation for the big text
//   const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.email || !formData.message) {
//       alert("Please fill in your email and message.");
//       return;
//     }
//     // Launch mailto fallback
//     const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.firstName || 'Client'}`);
//     const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
//     window.location.href = `mailto:kavianandham27@gmail.com?subject=${subject}&body=${body}`;
//     setSubmitted(true);
//   };

//   return (
//     <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex flex-col ">

//       {/* Huge Background Text */}
//       <motion.div
//         style={{ y }}
//         className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
//       >
//         <h1
//           className="text-[25vw] leading-[0.75] font-black text-white/5 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
//           style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
//         >
//           Contact
//         </h1>
//       </motion.div>

//       {/* Info Strip */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mb-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

//           <a
//             href="mailto:kavianandham27@gmail.com"
//             className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff2a2a] transition-colors group text-left"
//           >
//             <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 block mb-1">Direct Email</span>
//             <span className="text-white text-sm font-bold block truncate group-hover:text-red-400 transition-colors">
//               kavianandham27@gmail.com
//             </span>
//           </a>

//           <a
//             href="tel:+918098820531"
//             className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff2a2a] transition-colors group text-left"
//           >
//             <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 block mb-1">Phone / Mobile</span>
//             <span className="text-white text-sm font-bold block truncate group-hover:text-red-400 transition-colors">
//               +91 8098820531
//             </span>
//           </a>

//           <a
//             href="https://linkedin.com/in/kavitha-k27"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff2a2a] transition-colors group text-left"
//           >
//             <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 block mb-1">LinkedIn</span>
//             <span className="text-white text-sm font-bold block truncate group-hover:text-red-400 transition-colors">
//               linkedin.com/in/kavitha-k27
//             </span>
//           </a>

//           <a
//             href="https://github.com/kavithakarunai"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff2a2a] transition-colors group text-left"
//           >
//             <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 block mb-1">GitHub</span>
//             <span className="text-white text-sm font-bold block truncate group-hover:text-red-400 transition-colors">
//               github.com/kavithakarunai
//             </span>
//           </a>

//         </div>
//       </div>

//       {/* Form Card Overlay */}
//       <div className="relative z-10 w-full flex justify-end items-end">
//         <div
//           data-aos="fade-up"
//           className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
//         >
//           <div className="flex justify-between items-center mb-10 md:mb-16">
//             <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">
//               Get in Touch
//             </div>
//             {/* <div className="text-xs font-mono bg-black/20 px-3 py-1 rounded-full">
//               📍 Chennai, Tamil Nadu
//             </div> */}
//           </div>

//           {submitted ? (
//             <div className="py-16 text-center">
//               <h3 className="text-3xl font-black mb-3">Thank you for reaching out!</h3>
//               <p className="text-red-100 max-w-md mx-auto text-sm">
//                 Your email client was opened to complete sending. You can also write directly to <strong>kavianandham27@gmail.com</strong>.
//               </p>
//               <button
//                 onClick={() => setSubmitted(false)}
//                 className="mt-6 px-6 py-2 rounded-full bg-white text-black font-bold text-xs"
//               >
//                 Send Another Message
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-14 w-full">
//               <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
//                 {/* Left Column */}
//                 <div className="flex-1 flex flex-col gap-8">
//                   <div className="relative">
//                     <input
//                       type="text"
//                       id="firstName"
//                       value={formData.firstName}
//                       onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                       placeholder="First Name"
//                       required
//                       className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
//                     />
//                   </div>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       id="lastName"
//                       value={formData.lastName}
//                       onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                       placeholder="Last Name"
//                       className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
//                     />
//                   </div>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       id="email"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       placeholder="Email Address"
//                       required
//                       className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
//                     />
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="flex-1 flex flex-col">
//                   <div className="relative h-full flex flex-col">
//                     <textarea
//                       id="message"
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       placeholder="Type your message or project requirements here..."
//                       required
//                       className="w-full h-full min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium resize-none rounded-none"
//                     ></textarea>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Section */}
//               <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between pt-4 border-t border-white/20">
//                 <p className="text-xs text-white/80 max-w-md">
//                   I typically respond within 24 hours. For urgent inquiries, please call or WhatsApp me at <strong>+91 8098820531</strong>.
//                 </p>

//                 <button
//                   type="submit"
//                   className="px-9 py-3.5 rounded-full bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-all duration-300 group whitespace-nowrap shadow-lg self-start sm:self-auto cursor-pointer"
//                 >
//                   Send Message
//                   <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </button>
//               </div>
//             </form>
//           )}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20%", "30%"]
  );

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      alert("Please fill in your email and message.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.firstName || "Client"}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}

Message:
${formData.message}`
    );

    window.location.href = `mailto:kavianandham27@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] border-t border-gray-900 px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* =====================================================
          BACKGROUND CONTACT TEXT
      ====================================================== */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center overflow-hidden pt-10 sm:pt-16"
      >
        <h1
          className="select-none whitespace-nowrap text-[24vw] font-black uppercase leading-[0.75] tracking-tighter text-white/[0.04] sm:text-[20vw] md:text-[18vw]"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            transform: "scaleY(1.4)",
            transformOrigin: "top center",
          }}
        >
          Contact
        </h1>
      </motion.div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center">

        {/* ===================================================
            CONTACT INFORMATION CARDS
        ==================================================== */}
        <div className="mb-10 w-full">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Email */}
            <a
              href="mailto:kavianandham27@gmail.com"
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff2a2a]"
            >
              <span className="mb-1 block text-[10px] font-mono uppercase tracking-wider text-red-400">
                Direct Email
              </span>

              <span className="block truncate text-sm font-bold text-white transition-colors group-hover:text-red-400">
                kavianandham27@gmail.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+918098820531"
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff2a2a]"
            >
              <span className="mb-1 block text-[10px] font-mono uppercase tracking-wider text-red-400">
                Phone / Mobile
              </span>

              <span className="block truncate text-sm font-bold text-white transition-colors group-hover:text-red-400">
                +91 8098820531
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/kavitha-k27"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff2a2a]"
            >
              <span className="mb-1 block text-[10px] font-mono uppercase tracking-wider text-red-400">
                LinkedIn
              </span>

              <span className="block truncate text-sm font-bold text-white transition-colors group-hover:text-red-400">
                linkedin.com/in/kavitha-k27
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kavithakarunai"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff2a2a]"
            >
              <span className="mb-1 block text-[10px] font-mono uppercase tracking-wider text-red-400">
                GitHub
              </span>

              <span className="block truncate text-sm font-bold text-white transition-colors group-hover:text-red-400">
                github.com/kavithakarunai
              </span>
            </a>

          </div>
        </div>

        {/* ===================================================
            CONTACT FORM
        ==================================================== */}
        <div className="w-full max-w-5xl">
          <div className="rounded-2xl bg-[#ff2a2a] p-6 text-white shadow-2xl sm:p-8 md:p-12 lg:p-14">

            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-90">
                Get in Touch
              </div>
            </div>

            {/* =================================================
                SUCCESS MESSAGE
            ================================================== */}
            {submitted ? (
              <div className="py-16 text-center">

                <h3 className="mb-3 text-3xl font-black">
                  Thank you for reaching out!
                </h3>

                <p className="mx-auto max-w-md text-sm text-red-100">
                  Your email client was opened to complete sending.
                  You can also write directly to{" "}
                  <strong>kavianandham27@gmail.com</strong>.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);

                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      message: "",
                    });
                  }}
                  className="mt-6 rounded-full bg-white px-6 py-2 text-xs font-bold text-black transition-all duration-300 hover:bg-black hover:text-white"
                >
                  Send Another Message
                </button>

              </div>
            ) : (

              /* =================================================
                 FORM
              ================================================== */
              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-10"
              >

                {/* Form fields */}
                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">

                  {/* LEFT SIDE */}
                  <div className="flex flex-col gap-8">

                    {/* First Name */}
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                        className="w-full rounded-none border-0 border-b border-white/40 bg-transparent pb-3 text-lg font-medium text-white outline-none transition-colors placeholder:text-white/80 focus:border-white"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full rounded-none border-0 border-b border-white/40 bg-transparent pb-3 text-lg font-medium text-white outline-none transition-colors placeholder:text-white/80 focus:border-white"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="w-full rounded-none border-0 border-b border-white/40 bg-transparent pb-3 text-lg font-medium text-white outline-none transition-colors placeholder:text-white/80 focus:border-white"
                      />
                    </div>

                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex min-h-[180px] flex-col">

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message or project requirements here..."
                      required
                      className="h-full min-h-[180px] w-full resize-none rounded-none border-0 border-b border-white/40 bg-transparent pb-3 text-lg font-medium text-white outline-none transition-colors placeholder:text-white/80 focus:border-white"
                    />

                  </div>

                </div>

                {/* =================================================
                    BOTTOM AREA
                ================================================== */}
                <div className="flex flex-col gap-6 border-t border-white/20 pt-6 md:flex-row md:items-center md:justify-between">

                  {/* Description */}
                  <p className="max-w-md text-xs leading-relaxed text-white/80">
                    I typically respond within 24 hours. For urgent
                    inquiries, please call or WhatsApp me at{" "}
                    <strong className="text-white">
                      +91 8098820531
                    </strong>
                    .
                  </p>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-9 py-3.5 font-black text-black shadow-lg transition-all duration-300 hover:bg-black hover:text-white sm:w-auto"
                  >
                    Send Message

                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>

                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;