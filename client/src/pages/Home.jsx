import React, { useState, useEffect, useCallback } from "react";
import { FaGithub } from "react-icons/fa";

import ProfileImg from "../assets/profile-img/profile.jpeg";
export default function Home() {
  const [imageScale, setImageScale] = useState(1.1);

  useEffect(() => {
    const handleUpdate = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        setImageScale(1);
        return;
      }
      const scrollY = window.scrollY;
      const newScale = Math.max(1, 1.1 - (scrollY / 300) * 0.1);
      setImageScale(newScale);
    };

    handleUpdate();
    window.addEventListener("scroll", handleUpdate, { passive: true });
    window.addEventListener("resize", handleUpdate);
    return () => {
      window.removeEventListener("scroll", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
    };
  }, []);

  function redirectToGithub() {
    // Opens URL in a new tab
    window.open("https://github.com/aiush-sharma", "_blank");
  }
  return (
    <main className="w-full min-h-screen md:h-screen bg-[#1c1c1c] text-white flex flex-col md:flex-row font-sans pt-20 md:overflow-hidden">
      {/* Left Side: Profile Image */}
      <div
        className="w-full md:w-1/2 h-[45vh] md:h-full overflow-hidden relative shrink-0"
        style={{ WebkitFontSmoothing: "antialiased" }}
      >
        <img
          src={ProfileImg}
          alt="Hero image"
          className="w-full h-full object-cover transition-transform duration-100 ease-out will-change-transform"
          style={{
            transform: `scale(${imageScale})`,
            filter:
              "contrast(1.12) brightness(1.08) saturate(1.15) drop-shadow(0 0 0.5px rgba(0,0,0,0.1))",
            imageRendering: "crisp-edges",
            WebkitOptimizeContrast: "auto",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
            textRendering: "geometricPrecision",
            WebkitTransformZ: "0",
          }}
        />
      </div>

      {/* Right Side: Showcase Content & Text */}
      <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-y-auto">
        {/* Main Heading Layer with Decorative Editorial Line */}
        <div className="relative mb-8 w-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] relative z-10 select-none">
            My <br /> Portfolio
          </h1>

          {/* Elegant thin line extending all the way to the right screen margin */}
          <div className="absolute left-[35%] top-[28%] right-[-2rem] md:right-[-4rem] lg:right-[-6rem] h-[1px] bg-white/20 hidden sm:block z-0" />
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
          <button
            className="bg-white text-[#1a1a1a] px-8 py-3.5 font-bold text-xs md:text-sm tracking-widest uppercase transition duration-300 hover:bg-neutral-200 active:scale-95 shadow-md cursor-pointer"
            onClick={() =>
              window.open("https://www.linkedin.com/in/aiush-sharma/", "_blank")
            }
          >
            Hire Me
          </button>

          {/* Secondary Play Video Interaction Trigger */}
          <button
            className="flex items-center gap-3 group text-xs md:text-sm font-bold tracking-widest uppercase text-white opacity-90 hover:opacity-100 transition duration-300 cursor-pointer"
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
