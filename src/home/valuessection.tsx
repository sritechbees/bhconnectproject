"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ValuesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-[#111111] text-white py-24 px-6 md:px-16 relative overflow-hidden">

      {/* 🔹 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* 🔹 Title */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          <span className="text-white">Integrity</span>,{" "}
          <span className="text-[#888888]">Trust</span>, and{" "}
          <span className="text-white">Excellence</span>
        </h2>

        {/* 🔹 Divider */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-20 h-[2px] bg-[#888888] mx-auto my-6"
        ></div>

        {/* 🔹 Main Text */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-[#cccccc] text-lg md:text-xl leading-relaxed"
        >
          We take great pride in the products we represent, standing behind them
          with integrity, trust, and a commitment to excellence.
        </p>

        {/* 🔹 Secondary Text */}
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-[#888888] text-lg md:text-xl leading-relaxed mt-6"
        >
          At B&H Connected, we are dedicated to building lasting relationships—
          grounded in trust, and growing together with you.
        </p>

        {/* 🔹 Bottom Accent Line */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="w-32 h-[1px] bg-white/20 mx-auto mt-10"
        ></div>

      </div>
    </section>
  );
}