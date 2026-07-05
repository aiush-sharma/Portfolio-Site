import React from 'react';
import { IoBarbellSharp, IoMusicalNotesSharp, IoCodeSlashSharp } from 'react-icons/io5';

export default function AboutMe() {
  // Passions/Pillars array mapping out your lifestyle traits
  const traits = [
    {
      icon: <IoCodeSlashSharp className="text-xl text-[#dfb76c]" />,
      title: "The Logic // Full-Stack MERN",
      desc: "Architecting slick, robust apps with MongoDB, Express, React, and Node.js. Pushing out clean code and seamless web layouts is what I do best."
    },
    {
      icon: <IoBarbellSharp className="text-xl text-[#dfb76c]" />,
      title: "The Grit // Gym Freak",
      desc: "Fitness is my anchor. Crushing heavy lifting workouts gives me the intense focus and everyday discipline needed to crack tough logic problems."
    },
    {
        title: "The Vibe // Music Lover",
      icon: <IoMusicalNotesSharp className="text-xl text-[#dfb76c]" />,
      desc: "Always plugged into a deep soundtrack. Good tracks dictate the rhythm and timing behind every creative line of code I craft."
    }
  ];

  return (
    <section id="about" className="w-full py-20 md:py-28 bg-[#1c1c1c] text-white font-sans border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* --- Layout Split Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT PANEL: Casual Bio & Large Editorial Heading (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-[#dfb76c] uppercase text-xs tracking-widest font-bold block mb-3">
                03 Inside Me
              </span>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none mb-8">
                Who Am I? <br />
              </h2>
              
              {/* Your Polished Casual Description */}
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed tracking-wide mb-8 lg:mb-12">
                Hey! I'm a <span className="text-[#dfb76c] font-medium">Full-Stack MERN Developer</span> who loves building clean, smooth web apps. When I'm not writing code or debugging, you can usually find me crushing a workout at the gym or locked into a great music playlist.
              </p>
            </div>

            {/* Premium Grayscale Frame for Local Workspace/Aesthetic Image */}
            <div className="w-full aspect-[16/10] bg-neutral-900 border border-white/5 relative overflow-hidden group hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600" // Swap with a local photo like ../assets/about-pic.jpg
                alt="Workspace aesthetic" 
                className="w-full h-full object-cover grayscale brightness-[0.7] contrast-105 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* RIGHT PANEL: Identity Pillars Stack (7 Columns) */}
          <div className="lg:col-span-7 space-y-4 w-full">
            {traits.map((trait, index) => (
              <div 
                key={index} 
                className="group p-6 sm:p-8 bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
              >
                {/* Thin vertical accent frame line on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#dfb76c] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                
                {/* Utility Icon Wrapper Card */}
                <div className="p-3 bg-[#1c1c1c] border border-white/5 group-hover:border-[#dfb76c]/30 rounded-none transition-colors duration-300 flex items-center justify-center shrink-0">
                  {trait.icon}
                </div>

                {/* Trait Title & Copy */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#dfb76c] transition-colors duration-300">
                    {trait.title}
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mt-2 tracking-wide">
                    {trait.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Aesthetic Page Index Footers */}
            <div className="pt-6 flex justify-between items-center text-xs text-neutral-600 select-none tracking-widest font-mono">
              <span>DISCIPLINE & DEV FLOW</span>
              <span>PAGE // 03</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}