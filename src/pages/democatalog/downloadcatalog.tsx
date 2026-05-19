"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Download,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function Downloadcatalog() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const brochures = [
    {
      title: "TMS Device Brochure",
      desc: "Learn more about Transcranial Magnetic Stimulation technology and its role in modern brain and mental wellness programs.",
      file: "/home/tms_brochure.jpg",
      icon: <FileText className="w-6 h-6" />,
    },

    {
      title: "Electromagnetic Stimulation",
      desc: "Explore how electromagnetic stimulation devices support pain management and therapeutic recovery.",
      file: "/home/ems_brochure.jpg",
      icon: <ShieldCheck className="w-6 h-6" />,
    },

    {
      title: "E-flyer",
      desc: "Download the complete product catalog including device details and technical specifications.",
      file: "/home/TMS e-flyer.PDF",
      file2: "/home/Pain Management e-flyer.pdf",
      icon: <Download className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative bg-black py-24 mt-4 px-4 sm:px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#fed42a]/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p
            data-aos="fade-up"
            className="text-[#fed42a] uppercase tracking-[6px] text-sm mb-4"
          >
            Resources
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Catalog & <span className="text-[#fed42a]">Brochures</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="max-w-3xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Access detailed brochures and product catalogs to explore our
            advanced beauty and healthcare technologies.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {brochures.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#111111] to-black p-8 transition duration-500 hover:border-[#fed42a]/50 hover:-translate-y-2"
            >

              {/* Gold Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#fed42a]/0 via-[#fed42a]/5 to-[#fed42a]/20 transition duration-700"></div>

              {/* Content */}
              <div className="relative z-10">

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#fed42a]/10 border border-[#fed42a]/20 flex items-center justify-center text-[#fed42a] mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>

                {/* Download Buttons */}
                <div className="flex flex-wrap gap-4">

                  {/* First Download */}
                  <a
                    href={item.file}
                    download
                    className="group/button relative inline-flex items-center gap-3 overflow-hidden px-6 py-3 rounded-full border border-[#fed42a]/30 bg-[#fed42a]/10 text-white font-medium transition-all duration-500 hover:scale-105"
                  >

                    {/* Button Overlay */}
                    <span className="absolute inset-0 bg-[#fed42a] translate-y-full group-hover/button:translate-y-0 transition-transform duration-500"></span>

                    {/* Button Text */}
                    <span className="relative z-10 group-hover/button:text-black transition duration-500">
                      {item.file2 ? "Download (TMS)" : "Download"}
                    </span>

                    <Download className="relative z-10 w-4 h-4 group-hover/button:text-black transition duration-500" />

                  </a>

                  {/* Second Download Only for E-flyer */}
                  {item.file2 && (
                    <a
                      href={item.file2}
                      download
                      className="group/button relative inline-flex items-center gap-3 overflow-hidden px-6 py-3 rounded-full border border-[#fed42a]/30 bg-[#fed42a]/10 text-white font-medium transition-all duration-500 hover:scale-105"
                    >

                      {/* Button Overlay */}
                      <span className="absolute inset-0 bg-[#fed42a] translate-y-full group-hover/button:translate-y-0 transition-transform duration-500"></span>

                      {/* Button Text */}
                      <span className="relative z-10 group-hover/button:text-black transition duration-500">
                        Download (PMS)
                      </span>

                      <Download className="relative z-10 w-4 h-4 group-hover/button:text-black transition duration-500" />

                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}