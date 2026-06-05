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
        <section className="relative min-h-[60vh] sm:min-h-[75vh] lg:min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-14 lg:py-0 bg-black">

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
  <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Badge */}
    <span
      data-aos="fade-down"
      className="inline-block px-4 py-2 rounded-full border border-[#fed42a]/30 bg-[#fed42a]/10 text-[#fed42a] max-sm:mt-8 text-xs sm:text-sm tracking-wider uppercase mb-5"
    >
      Product Collection
    </span>

    {/* Heading */}
    <h1
      data-aos="fade-up"
      className="font-bold leading-tight"
    >
      <span className="block text-3xl sm:text-5xl md:text-6xl text-white">
        Explore Our
      </span>

      <span className="block text-3xl sm:text-5xl md:text-6xl text-[#fed42a] mt-1">
        Premium Products
      </span>
    </h1>

    {/* Description */}
    <p
      data-aos="fade-up"
      data-aos-delay="200"
      className="mt-5 text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
    >
      Discover innovative healthcare technologies including advanced
      TMS systems and modern Pain Management solutions.
    </p>

    {/* Buttons */}
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
    >
      <Link
        href="/democatalog/tmsproductpage"
        className="w-full sm:w-auto"
      >
        <button className="w-full sm:w-auto min-w-[220px] max-sm:w-12 px-8 py-3.5 rounded-full bg-[#fed42a] text-black font-semibold hover:scale-105 transition-all duration-300">
          TMS Products
        </button>
      </Link>

      <Link
        href="/democatalog/painmanagement"
        className="w-full sm:w-auto"
      >
        <button className="w-full sm:w-auto min-w-[220px] max-sm:w-12 px-8 py-3.5 rounded-full border border-[#fed42a] text-white hover:bg-[#fed42a] hover:text-black transition-all duration-300">
          Pain Management
        </button>
      </Link>
    </div>
  </div>

 </section>

      </div>
    </App_layout>
  );
}