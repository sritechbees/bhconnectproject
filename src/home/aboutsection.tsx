"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-[#111111] text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🔹 Image */}
        <div data-aos="fade-right" className="relative">
          <img
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop"
            alt="Beauty Innovation"
            className="rounded-2xl object-cover w-full h-[400px] shadow-xl"
          />
          <div className="absolute inset-0 rounded-2xl border border-white/10"></div>
        </div>

        {/* 🔹 Content */}
        <div data-aos="fade-left">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            About <span className="text-[#888888]">B&H Connected</span>
          </h2>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-[#888888] mb-6"></div>

          {/* Always Visible Text */}
          <p className="text-[#cccccc] leading-relaxed text-lg mb-4">
            B&H Connected is a company dedicated to bringing carefully selected
            Beauty and Health solutions from Korea to the United States.
          </p>

          {/* Hidden / Toggle Text */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              showMore ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[#888888] leading-relaxed text-lg">
              We focus on introducing only products and technologies that meet
              high standards of quality, safety, and real-world effectiveness.
            </p>
          </div>

          {/* Button */}
          <div className="mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-full"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
            
          </div>

        </div>
      </div>
    </section>
  );
}