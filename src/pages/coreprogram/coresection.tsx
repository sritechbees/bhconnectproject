"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function CoreProgramsSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const programs = [
    {
      title: "TMS Brain & Mental Wellness Program",
      desc: "Non-invasive brain wellness technology designed for MedSpa-based care focusing on mental clarity, emotional balance, stress resilience, and focus wellness.",
    },
    {
      title: "SALUS Talent Pro Pain Management Program",
      desc: "Premium electromagnetic stimulation system for precise pain relief across both localized and full-body treatment areas.",
    },
    {
      title: "MedSpa Integration Model",
      desc: "Programs are designed for wellness-focused, cash-based care delivered in a calm, premium MedSpa environment.",
    },
    {
      title: "Patient-Centered Wellness Programs",
      desc: "Focused on improving overall well-being through non-invasive, repeatable, and practical care solutions.",
    },
  ];

  return (
    <section className="bg-[#111111] text-white py-20 px-4 sm:px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#888888]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-sm uppercase tracking-widest text-[#888888] mb-3"
          >
            Core Programs
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl md:text-5xl font-semibold"
          >
            Program Structure
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {programs.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="group border border-[#222] rounded-2xl p-6 hover:border-white/40 transition duration-300"
            >

              {/* Number */}
              <div className="text-3xl font-semibold text-[#888888] mb-4">
                0{i + 1}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium mb-3 group-hover:text-white transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#888888] text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Hover line */}
              <div className="mt-6 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-20 text-center"
        >
            <Link href="/coreprogram/coreprogramfull">
          <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
            Explore Programs
          </button></Link>
        </div>

      </div>
    </section>
  );
}