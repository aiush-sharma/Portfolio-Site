import React from "react";
import {
  IoBarbellSharp,
  IoMusicalNotesSharp,
  IoCodeSlashSharp,
} from "react-icons/io5";
import imageFour from "../assets/hero-img/imagefour.jpeg";
export default function AboutMe() {
  // Professional traits mapping
  const traits = [
    {
      icon: <IoCodeSlashSharp className="text-xl text-[#dfb76c]" />,
      title: "Full-Stack Developer",
      desc: "Engineering scalable applications using MongoDB, Express, React, and Node.js. My primary focus is delivering clean code and exceptional user experiences.",
    },
    {
      icon: <IoBarbellSharp className="text-xl text-[#dfb76c]" />,
      title: "Fitness Enthusiast",
      desc: "Physical fitness is foundational to my work ethic. The discipline and dedication required in the gym directly translate into my approach to solving complex engineering challenges.",
    },
    {
      title: "Audiophile",
      icon: <IoMusicalNotesSharp className="text-xl text-[#dfb76c]" />,
      desc: "Music provides the soundtrack to my development process. A curated audio environment fosters deep work states and enhances creative problem-solving.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 md:py-28 bg-[#1c1c1c] text-white font-sans border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* --- Layout Split Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT PANEL: Professional Bio & Large Editorial Heading (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-[#dfb76c] uppercase text-xs tracking-widest font-bold block mb-3">
                03 About Me
              </span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none mb-8">
                My <br /> Experience
              </h2>

              {/* Refined Professional Description */}
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed tracking-wide mb-8 lg:mb-12">
                Hello, I'm a{" "}
                <span className="text-[#dfb76c] font-medium">
                  Full-Stack MERN Developer
                </span>{" "}
                passionate about building performant, modern web applications.
                When I'm away from the keyboard, I cultivate focus through
                weight training and maintain creative inspiration through music.
                I believe that a balanced, disciplined lifestyle is the key to
                producing high-quality software architecture.
              </p>
            </div>

            {/* Premium Grayscale Frame for Local Workspace/Aesthetic Image */}
            <div className="w-full aspect-[16/10] bg-neutral-900 border border-white/5 relative overflow-hidden group hidden sm:block shadow-2xl">
              <img
                src={imageFour}
                alt="Professional Workspace"
                className="w-full h-full object-cover brightness-[0.7] contrast-105 transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* RIGHT PANEL: Identity Pillars Stack (7 Columns) */}
          <div className="lg:col-span-7 space-y-4 w-full">
            {traits.map((trait, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-neutral-900/40 border border-white/5 hover:border-white/10 hover:bg-neutral-900/60 transition-all duration-300 relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start shadow-sm hover:shadow-md"
              >
                {/* Thin vertical accent frame line on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#dfb76c] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                {/* Utility Icon Wrapper Card */}
                <div className="p-4 bg-[#1c1c1c] border border-white/5 group-hover:border-[#dfb76c]/40 rounded-sm transition-colors duration-300 flex items-center justify-center shrink-0">
                  {trait.icon}
                </div>

                {/* Trait Title & Copy */}
                <div className="flex flex-col pt-1">
                  <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#dfb76c] transition-colors duration-300">
                    {trait.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mt-2 tracking-wide">
                    {trait.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Aesthetic Page Index Footers */}
            <div className="pt-6 flex justify-between items-center text-xs text-neutral-600 select-none tracking-widest font-mono">
              <span>WORK ETHIC & METHODOLOGY</span>
              <span>PAGE 03</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
