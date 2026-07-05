import React, { useState } from "react";
import { FiExternalLink, FiMaximize2, FiX } from "react-icons/fi";
import certificate1 from "../assets/certificates/backendcertificate.jpg";
import certificate2 from "../assets/certificates/cybersecurity.jpeg";
import certificate3 from "../assets/certificates/frontendcertificate.jpeg";
import training from "../assets/certificates/training.jpg";
export default function Achievements() {
  const [activeImg, setActiveImg] = useState(null);

  // Array configured for your 3 image certificates
  const certificates = [
    {
      id: "01",
      title: "Full-Stack MERN Architecture",
      issuer: "Verified Credential",
      // Replace these strings with your actual image paths (e.g., '/images/cert1.jpg')
      imgSrc: certificate1,
    },
    {
      id: "02",
      title: "Advanced React & State Engineering",
      issuer: "Verified Credential",
      imgSrc: certificate2,
    },
    {
      id: "03",
      title: "Backend Logic & Database Security",
      issuer: "Verified Credential",
      imgSrc: certificate3,
    },
    {
      id: "04",
      title: "Backend Logic & Database Security",
      issuer: "Verified Credential",
      imgSrc: training,
    },
  ];

  return (
    <section
      id="certificates"
      className="w-full py-20 md:py-28 bg-[#1c1c1c] text-white font-sans border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative pb-6">
          <div>
            <span className="text-[#dfb76c] uppercase text-xs tracking-widest font-bold block mb-2">
              04 // Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-none">
              Verified <br /> Achievements
            </h2>
          </div>
          <p className="text-[#a0a0a0] text-xs md:text-sm max-w-xs mt-4 md:mt-0 leading-relaxed tracking-wide">
            Visual proof of full-stack expertise, specialized training, and
            production-ready architecture standards.
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />
        </div>

        {/* --- 3-Column Image Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 p-4 flex flex-col justify-between"
            >
              {/* Image Frame Container */}
              <div
                className="w-full aspect-[4/3] bg-neutral-950 border border-white/5 overflow-hidden relative cursor-pointer"
                onClick={() => setActiveImg(cert.imgSrc)}
              >
                <img
                  src={cert.imgSrc}
                  alt={cert.title}
                  className="w-full h-full object-cover brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                />

                {/* Hover Maximize Overlay Overlay */}
                <div className="absolute inset-0 bg-neutral-950/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest bg-[#1c1c1c] border border-white/10 px-4 py-2 text-white">
                    <FiMaximize2 className="text-[#dfb76c]" />
                    <span>Expand</span>
                  </div>
                </div>
              </div>

              {/* Certificate Details Meta Text */}
              <div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-[#dfb76c] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] font-mono uppercase text-neutral-500 mt-1 tracking-wider">
                    {cert.issuer}
                  </p>
                </div>
                <span className="text-xs font-mono text-neutral-600">
                  [{cert.id}]
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* --- Layout Footer Counter --- */}
        <div className="mt-16 flex justify-between items-center text-xs text-neutral-600 select-none tracking-widest font-mono">
          <span>SECURE IMAGE VERIFICATION LOGS</span>
          <span>PAGE // 04</span>
        </div>
      </div>

      {/* --- Lightbox Modal View Frame (Triggers when image clicked) --- */}
      {activeImg && (
        <div className="fixed inset-0 bg-neutral-950/90 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 transition-all duration-300 animate-fadeIn">
          {/* Close button zone outside image */}
          <button
            className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors p-2 bg-neutral-900 border border-white/10"
            onClick={() => setActiveImg(null)}
          >
            <FiX className="text-xl" />
          </button>

          {/* Certificate Max-Resolution Image Canvas */}
          <div className="max-w-4xl max-h-[85vh] border border-white/10 bg-neutral-900 p-2">
            <img
              src={activeImg}
              alt="Expanded credential"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
