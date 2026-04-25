"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full h-[90vh] mt-16 flex items-center justify-center bg-[#111111] overflow-hidden">

      {/* 🔹 Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
          alt="Medical Beauty"
          className="w-full h-full object-cover scale-105 opacity-50"
        />
      </div>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* 🔹 Subtle Gradient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        {/* Title */}
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-semibold text-white leading-tight"
        >
          Our <span className="text-[#888888]">Mission</span>
        </h1>

        {/* Divider */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-20 h-[2px] bg-[#888888] mx-auto my-6"
        ></div>

        {/* Text */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-[#cccccc] text-lg md:text-xl leading-relaxed"
        >
          Our mission is to bring Korea’s most innovative and leading beauty
          and health solutions to the United States.
        </p>

        {/* 🔹 Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-10 flex justify-center"
        >
          <button className="relative px-8 py-3 border border-white text-white overflow-hidden group rounded-full">

            {/* Sliding Overlay */}
            <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

            {/* Text */}
            <span className="relative z-10 group-hover:text-black transition duration-300">
              Explore More
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}