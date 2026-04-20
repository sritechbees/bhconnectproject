"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import App_layout from "@/layout/app_layout";

export default function ProductHero() {

  const [text, setText] = useState("");
  const fullText = "Wellness Technology";

  // Typing effect (optional – can remove if not needed)
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, []);

  return (
    <App_layout>
      <section className="relative mt-16 w-full h-[85vh] bg-[#111111] flex items-center justify-center text-center px-4">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/product/benefits.jpeg"
            alt="Product"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl">

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            Advanced Medical{" "}
            <span className="text-[#888888]">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* SUBTITLE */}
          <h2 className="mt-4 text-base sm:text-lg md:text-xl text-[#888888]">
            TMS & SALUS Talent Pro
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#CCCCCC]">
            Discover innovative non-invasive medical technologies designed for
            brain wellness and pain management solutions for modern MedSpa and
            clinical environments.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <Link href="/products/tmsoverview">
              <button className="px-8 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition">
                Explore TMS
              </button>
            </Link>

            <Link href="/products/saluspage1">
              <button className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
                Explore SALUS Talent Pro
              </button>
            </Link>

          </div>

        </div>

      </section>
    </App_layout>
  );
}