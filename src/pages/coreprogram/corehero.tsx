"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/layout/app_layout";
import Link from "next/link";
import CoreProgramsSection from "./coresection";

export default function CoreProgramHero() {

  const [text, setText] = useState("");
  const fullText = "Core Programs";

  // Typing Effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, []);

  // AOS Init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <App_layout>
      <section className="relative bg-[#111111] text-white mt-16 py-24 md:py-32 px-4 sm:px-6 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#888888]/10 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">

          {/* SMALL TITLE */}
          <p
            data-aos="fade-up"
            className="text-sm tracking-widest uppercase text-[#888888] mb-4"
          >
            Core Programs
          </p>

          {/* MAIN TITLE */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight"
          >
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          {/* DESCRIPTION (from doc) */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-6 text-[#CCCCCC] max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Please note that TL and SR programs may involve some treatment discomfort.
            Patients who prefer a more comfortable experience may choose optional procedural anesthesia administered by a board-certified anesthesiologist.
          </p>

          {/* BUTTONS */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >

            <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-[#dddddd] transition hover:scale-105">
              View Programs
            </button>
                   <Link href="/contact/inquiryform">
            <button className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition hover:scale-105">
              Book Consultation
            </button></Link>

          </div>

        </div>

      </section>
      <CoreProgramsSection/>
    </App_layout>
  );
}