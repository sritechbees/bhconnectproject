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

        {/* ================================================= */}
        {/* HERO SECTION */}
        {/* ================================================= */}

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/home/gallery-banner.jpg"
              alt="Gallery Banner"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75"></div>

          {/* Glow */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#fed42a]/20 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#fed42a]/10 blur-[120px] rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 text-center mt-16 px-4 sm:px-6 max-w-5xl">

            <span
              data-aos="fade-down"
              className="inline-block px-5 py-2 rounded-full bg-[#fed42a]/10 border border-[#fed42a]/20 text-[#fed42a] text-xs sm:text-sm tracking-[2px] uppercase mb-6"
            >
              Product Collection
            </span>

            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight"
            >
              Explore Our <br />
              Premium Products
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Discover innovative healthcare technologies including
              advanced TMS systems and modern Pain Management solutions.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
            >

              {/* TMS BUTTON */}
              <Link href="/democatalog/tmsproductpage">
              <button
                onClick={() => scrollToSection(tmsRef)}
                className="group relative overflow-hidden px-8 sm:px-10 py-4 rounded-full bg-[#fed42a] text-black font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(254,212,42,0.35)]"
              >
                <span className="relative z-10">
                  TMS Products
                </span>

                <div className="absolute inset-0 bg-yellow-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </button></Link>

              {/* PAIN MANAGEMENT BUTTON */}
              <Link href="/democatalog/painmanagement">

                <button className="group relative overflow-hidden px-8 sm:px-10 py-4 rounded-full border border-[#fed42a]/40 bg-white/5 backdrop-blur-md hover:scale-105 transition-all duration-300">

                  <span className="relative z-10 group-hover:text-[#fed42a] transition">
                    Pain Management
                  </span>

                  <div className="absolute inset-0 bg-[#fed42a]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                </button>

              </Link>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

        </section>

       
           </div>
    </App_layout>
  );
}