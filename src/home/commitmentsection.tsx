"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CommitmentSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-[#111111] text-white py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden">

      {/* 🔹 Background Glow */}
      <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-white/5 blur-[120px] rounded-full top-20 left-0"></div>
      <div className="absolute w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white/5 blur-[100px] rounded-full bottom-10 right-0"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* 🔹 Title */}
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight"
        >
          Where Beauty & Health Come Together -{" "}
          <span className="text-[#888888]">We Support It</span>
        </h2>

        {/* Divider */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-16 sm:w-20 h-[2px] bg-[#888888] mx-auto my-6"
        ></div>

        {/* 🔹 Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12">

          {/* 🔹 Card 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative group overflow-hidden bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 sm:p-8 text-left"
          >
            {/* Overlay */}
            <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

            {/* Content */}
            <p className="relative z-10 text-[#cccccc] text-base sm:text-lg leading-relaxed group-hover:text-black transition duration-300">
              We carefully select only the most exceptional companies and
              products—those that meet the highest standards of quality,
              safety, and true effectiveness.
            </p>
          </div>

          {/* 🔹 Card 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="relative group overflow-hidden bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 sm:p-8 text-left"
          >
            {/* Overlay */}
            <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

            {/* Content */}
            <p className="relative z-10 text-[#888888] text-base sm:text-lg leading-relaxed group-hover:text-black transition duration-300">
              We partner exclusively with brands and solutions that genuinely
              enhance well-being and create meaningful value in people’s lives.
            </p>
          </div>

        </div>

        {/* 🔹 Image */}
        <div
          data-aos="zoom-in"
          data-aos-delay="700"
          className="mt-12 sm:mt-16 overflow-hidden rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1400&auto=format&fit=crop"
            alt="Medical Beauty"
            className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover opacity-80 hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}