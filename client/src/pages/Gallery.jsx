import React from "react";
import imageOne from "../assets/hero-img/imageone.jpeg";
import imageTwo from "../assets/hero-img/imagetwo.png";
import imageThree from "../assets/hero-img/imagethree.jpeg";
import imageFour from "../assets/hero-img/imagefour.jpeg";
import imageFive from "../assets/hero-img/imagefive.jpeg";
import imageSix from "../assets/hero-img/imagesix.jpeg";
export default function PhotoSection() {
  //Mock array representing your photoshoot gallery / portfolio items
  const photos = [
    {
      id: "01",
      title: "Sukhauda",
      category: "Travel / Portrait",
      src: imageOne,
    },
    {
      id: "02",
      title: "Chitwan National Park",
      category: "Jungle Resort",
      src: imageSix,
    },
    {
      id: "03",
      title: "Butwal",
      category: "Villa Resort",
      src: imageFive,
    },
  ];

  return (
    <section
      id="photo"
      className="w-full py-16 md:py-24 bg-[#1c1c1c] text-white font-sans border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* --- Header Section --- */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 relative">
          <div>
            <span className="text-[#dfb76c] uppercase text-xs tracking-widest font-bold block mb-2">
              02 // Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-none">
              Featured <br /> Photography
            </h2>
          </div>

          {/* Muted Subtitle/Description */}
          <p className="text-[#a0a0a0] text-xs md:text-sm max-w-xs mt-4 sm:mt-0 leading-relaxed tracking-wide">
            Some memories of 2026.
          </p>

          {/* Thin layout line crossing the header section */}
          <div className="absolute right-0 bottom-[-1.5rem] left-0 h-[1px] bg-white/10 hidden sm:block" />
        </div>

        {/* --- Photo Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          {photos.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col w-full cursor-pointer"
            >
              {/* Image Box Container */}
              <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-900 relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover brightness-100 contrast-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-100"
                />
                {/* Number Overlay Badge */}
                <span className="absolute top-4 left-4 text-xs font-mono bg-[#1c1c1c]/80 text-[#dfb76c] px-2 py-1 tracking-wider backdrop-blur-sm">
                  {item.id}
                </span>
              </div>

              {/* Photo Caption / Info Section */}
              <div className="mt-4 flex flex-col pt-2 relative">
                {/* Thin top accent frame line per element */}
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#dfb76c] transition-all duration-500 group-hover:w-full" />

                <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#dfb76c] transition duration-300 mt-2">
                  {item.title}
                </h3>

                <span className="text-xs text-[#a0a0a0] tracking-wide mt-1">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* --- Section Footer Counter --- */}
        <div className="mt-16 flex justify-end">
          <span className="text-xs text-neutral-600 tracking-widest select-none">
            Page | 02
          </span>
        </div>
      </div>
    </section>
  );
}
