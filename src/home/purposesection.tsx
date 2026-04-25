"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function PurposeSectionAlt() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative bg-[#111111] text-white py-20 px-4 sm:px-6 md:px-16 overflow-hidden">

      {/* 🔹 Background Glow */}
      <div className="absolute w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-white/5 blur-[140px] rounded-full top-10 -left-20"></div>
      <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-white/5 blur-[120px] rounded-full bottom-10 -right-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* 🔹 Image Side */}
        <div data-aos="fade-right" className="relative group">

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/home/tms1.png" // 👉 put image in /public/purpose.jpg
              alt="Purpose"
              width={400}
              height={300}
              className="object-cove w-[450px] h-[300px] sm:h-[400px] md:h-[500px] transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"></div>
        </div>

        {/* 🔹 Content Side */}
        <div data-aos="fade-left">

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Enhancing Lives Through{" "}
            <span className="text-[#888888]">Beauty and Health</span>
          </h2>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-[#888888] mb-6"></div>

          {/* Main Text */}
          <p className="text-[#cccccc] text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            Every solution we bring is chosen with one purpose:
            <br />
            to enhance people’s lives through better beauty and health.
          </p>

          {/* Secondary Text */}
          <p className="text-[#888888] text-base sm:text-lg md:text-xl leading-relaxed">
            We also believe:
            <br />
            Technology should serve people — not the other way around.
          </p>

        </div>

      </div>
    </section>
  );
}