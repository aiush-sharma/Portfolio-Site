import React from "react";
import { FaGithub } from "react-icons/fa";

import ProfileImg from "../assets/profile-img/profile.jpeg";
export default function Home() {
  function redirectToGithub() {
    // Opens URL in a new tab
    window.open("https://github.com/aiush-sharma", "_blank");
  }
  return (
    <main className="w-full min-h-[calc(100vh-80px)] bg-[#1c1c1c] text-white grid grid-cols-1 md:grid-cols-2 items-center font-sans">
      <div className="w-full h-full min-h-[400px] md:min-h-0 relative">
        <img
          src={ProfileImg}
          alt="Hero image"
          className="w-full h-full object-cover  brightness-[0.85] contrast-[1.05]"
        />
      </div>

      {/* Right Side: Showcase Content & Text */}
      <div className="p-8 sm:p-12 md:p-20 lg:p-28 flex flex-col justify-center relative w-full h-full">
        {/* Main Heading Layer with Decorative Editorial Line */}
        <div className="relative mb-8 w-full">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] relative z-10 select-none">
            My <br /> Portfolio
          </h1>

          {/* Elegant thin line extending all the way to the right screen margin */}
          <div className="absolute left-[35%] top-[28%] right-[-2rem] md:right-[-5rem] lg:right-[-7rem] h-[1px] bg-white/20 hidden sm:block z-0" />
        </div>

        {/* Muted Paragraph Copy */}
        <p className="text-[#a0a0a0] text-sm md:text-base max-w-sm leading-relaxed mb-10 tracking-wide">
          Hello, its me Ayush Sharma. I am currently a Bsc. CSIT student at
          Butwal Multiple Campus. I am a full stack developer specializing in
          MongoDB, Express, React, and Node.js.
        </p>

        {/* Action Call to Buttons */}
        <div className="flex flex-wrap items-center gap-6">
          {/* Primary Explore Action Button */}
          <button className="bg-white text-[#1a1a1a] px-8 py-3.5 font-bold text-xs md:text-sm tracking-widest uppercase transition duration-300 hover:bg-neutral-200 active:scale-95 shadow-md">
            Hire Me
          </button>

          {/* Secondary Play Video Interaction Trigger */}
          <button
            className="flex items-center gap-3 group text-xs md:text-sm font-bold tracking-widest uppercase text-white opacity-90 hover:opacity-100 transition duration-300"
            onClick={redirectToGithub}
          >
            <FaGithub className="text-2xl text-white transition-transform duration-300 group-hover:scale-110" />
            <span>Github</span>
          </button>
        </div>
      </div>
    </main>
  );
}
