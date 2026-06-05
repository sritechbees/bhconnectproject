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

  return (
    <App_layout>
      <div className="bg-black dark:bg-black text-white min-h-screen overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative flex items-center justify-center min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen bg-black">

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

          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black/65" /> */}

          {/* Content */}
          <div className="relative z-10 w-full max-sm:8 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">

            {/* Badge */}
            <span
              data-aos="fade-down"
              className="inline-flex items-center px-4 py-2 rounded-full border border-[#fed42a]/40 bg-[#fed42a]/10 text-[#fed42a] text-xs sm:text-sm font-medium tracking-wider uppercase mb-6"
            >
              Product Collection
            </span>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="font-bold leading-tight"
            >
              <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Explore Our
              </span>

              <span className="block text-[#fed42a] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                Premium Products
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 max-w-3xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            >
              Discover innovative healthcare technologies including advanced TMS systems and modern Pain Management solutions.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/democatalog/tmsproductpage"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto max-sm:w-12 min-w-[220px] px-8 py-4 rounded-full bg-[#fed42a] text-black font-semibold transition-all duration-300 hover:scale-105">
                  TMS Products
                </button>
              </Link>

              <Link
                href="/democatalog/painmanagement"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto max-sm:w-12 min-w-[220px] px-8 py-4 rounded-full border border-[#fed42a] text-white font-semibold transition-all duration-300 hover:bg-[#fed42a] hover:text-black">
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