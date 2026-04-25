"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PhilosophySection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-[#111111] text-white py-20 px-6 md:px-16 relative overflow-hidden">

      {/* 🔹 Subtle Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* 🔹 Left Side Content */}
        <div data-aos="fade-right">

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            People <span className="text-[#888888]">Come First</span>
          </h2>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-[#888888] mb-6"></div>

          {/* Text */}
          <p className="text-[#cccccc] text-lg leading-relaxed mb-4">
            Our philosophy is simple:
          </p>

          <p className="text-white text-xl font-medium mb-4">
            People come first.
          </p>

          <p className="text-[#888888] text-lg leading-relaxed">
            We believe that great products should serve people, improve well-being,
            and create meaningful value in everyday life.
          </p>

        </div>

        {/* 🔹 Right Side Visual Card */}
        <div data-aos="fade-left" className="relative">

          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-xl">

            {/* Highlight Quote Style */}
            <p className="text-white text-xl md:text-2xl leading-relaxed">
              “People come first.”
            </p>

            <div className="mt-6 h-[1px] bg-white/10"></div>

            <p className="text-[#888888] mt-6 text-sm">
              Our philosophy guides every decision we make.
            </p>

          </div>

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
}