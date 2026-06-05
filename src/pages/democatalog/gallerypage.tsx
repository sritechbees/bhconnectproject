"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import App_layout from "@/layout/app_layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GalleryPage() {
  const tmsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <App_layout>
      <div className="bg-black text-white overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[65vh] sm:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-14 lg:py-0">

          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/home/gallery-banner.jpg"
              alt="Gallery Banner"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

         

          {/* Content */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            {/* Badge */}
            <span
              data-aos="fade-down"
              className="inline-block px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#fed42a]/10 border border-[#fed42a]/20 text-[#fed42a] text-[10px] sm:text-sm tracking-[1px] sm:tracking-[2px] uppercase mb-4 sm:mb-6"
            >
              Product Collection
            </span>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15]"
            >
              Explore Our <br />
              Premium Products
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-3 sm:mt-5 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Discover innovative healthcare technologies including advanced
              TMS systems and modern Pain Management solutions.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
            >
              {/* TMS Button */}
              <Link
                href="/democatalog/tmsproductpage"
                className="w-full sm:w-auto"
              >
                <button
                  onClick={() => scrollToSection(tmsRef)}
                  className="group relative overflow-hidden w-full sm:w-auto min-w-[220px] max-sm:w-12 px-6 sm:px-8 py-3.5 rounded-full bg-[#fed42a] text-black font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(254,212,42,0.35)]"
                >
                  <span className="relative z-10">
                    TMS Products
                  </span>

                  <div className="absolute inset-0 bg-yellow-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </button>
              </Link>

              {/* Pain Management Button */}
              <Link
                href="/democatalog/painmanagement"
                className="w-full sm:w-auto"
              >
                <button className="group relative overflow-hidden max-sm:w-12 w-full sm:w-auto min-w-[220px] px-6 sm:px-8 py-3.5 rounded-full border border-[#fed42a]/40 bg-white/5 backdrop-blur-md hover:scale-105 transition-all duration-300">
                  <span className="relative z-10 group-hover:text-[#fed42a] transition">
                    Pain Management
                  </span>

                  <div className="absolute inset-0 bg-[#fed42a]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </button>
              </Link>
            </div>
          </div>

           </section>

      </div>
    </App_layout>
  );
}