"use client";

import Link from "next/link";
import { PlayCircle, Download } from "lucide-react";

export default function DemoHeroSection() {
  return (
    <section className="relative py-16 md:py-24 flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
      {/* Glow Effects */}

      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#fed42a]/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      {/* Content */}

      <div
        className="relative z-10 max-w-4xl mx-auto"
        data-aos="fade-up"
      >
        <h1 className="text-4xl sm:text-5xl text-white md:text-6xl font-bold leading-tight">
          Product Demo &{" "}
          <span className="text-[#fed42a]">
            Catalog
          </span>
        </h1>

        <p className="text-gray-300 mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Explore detailed product demonstrations and download advanced
          healthcare & beauty technology catalogs.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Watch Demo */}

          <Link href="/democatalog/demodemonstrations">
            <button
              className="
                group
                relative
                overflow-hidden
                px-8
                py-4
                rounded-full
                border
                border-[#fed42a]/40
                bg-[#fed42a]/10
                backdrop-blur-md
                text-white
                font-medium
                transition-all
                duration-500
                hover:scale-105
              "
            >
              <span className="absolute inset-0 bg-[#fed42a] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition duration-500">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </span>
            </button>
          </Link>

          {/* Download Catalog */}

          <Link href="/democatalog/demopage">
            <button
              className="
                group
                relative
                overflow-hidden
                px-8
                py-4
                rounded-full
                border
                border-white/20
                bg-white/5
                backdrop-blur-md
                text-white
                font-medium
                transition-all
                duration-500
                hover:scale-105
              "
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition duration-500">
                <Download className="w-5 h-5" />
                Download Catalog
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Fade */}

      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div> */}
    </section>
  );
}