"use client";

import { useRef } from "react";
import App_layout from "@/layout/app_layout";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {

  // ✅ Fixed TypeScript Ref Error
  const missionRef = useRef<HTMLDivElement | null>(null);

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <App_layout>

      <div className="bg-black text-white overflow-hidden">

        {/* 🔹 HERO SECTION */}
        <section className="relative h-[90vh] flex items-center justify-center text-center px-6 mt-16 overflow-hidden bg-black">

  {/* Background Image */}
  <Image
    src="/home/aboutbg.jpeg"
    alt="About BH Connected"
    fill
    className="object-cover opacity-80 scale-105"
    priority
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Gold Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-[#fed42a]/20 to-black"></div>

  {/* Glow Effects */}
  <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#fed42a]/20 blur-[140px] rounded-full"></div>

  <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#fed42a]/10 blur-[140px] rounded-full"></div>

  {/* Content */}
  <div
    className="relative z-10 max-w-4xl mx-auto"
    data-aos="fade-up"
  >

    {/* Small Tag */}
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#fed42a]/30 bg-[#fed42a]/10 text-[#fed42a] text-xs sm:text-sm tracking-[3px] uppercase mb-6 backdrop-blur-md">
      Premium Korean Innovation
    </div>

    {/* Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
      About{" "}
      <span className="text-[#fed42a]">
        BH Connected
      </span>
    </h1>

    {/* Description */}
    <p className="text-gray-300 mt-5 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
      Premium Korean beauty and health innovations designed for the future.
    </p>

    {/* Explore Button */}
    <div className="mt-10 flex items-center justify-center">

      <button
        onClick={scrollToMission}
        className="group relative overflow-hidden px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-[#fed42a]/40 bg-[#fed42a]/10 backdrop-blur-md text-white font-medium transition-all duration-500 hover:scale-105"
      >

        {/* Button Overlay */}
        <span className="absolute inset-0 bg-[#fed42a] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

        {/* Text */}
        <span className="relative z-10 group-hover:text-black transition duration-500">
          Explore More
        </span>

      </button>

    </div>

  </div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

</section>

        {/* 🔹 CONTENT SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-28">

          {/* 🔸 OUR MISSION */}
         <div
  ref={missionRef}
  className="w-full flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10"
>

  <div
    data-aos="fade-up"
    className="w-full max-w-3xl text-center"
  >

    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#fed42a] mb-4 sm:mb-6 leading-tight">
      Our Mission
    </h2>

    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
      Connecting Beauty, Health, and Human Care through innovative Korean wellness solutions.
    </p>

    <Link href="/democatalog/gallerypage">
      <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-[#fed42a] text-[#fed42a] text-sm sm:text-base font-medium hover:bg-[#fed42a] hover:text-black transition-all duration-300 hover:scale-105">
        Learn More
      </button>
    </Link>

  </div>

</div>
          {/* 🔸 WHO WE ARE */}
         <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

  {/* Image */}
  <div
    data-aos="fade-right"
    className="order-2 md:order-1"
  >

    <Image
      src="/home/who.png"
      alt="Who We Are"
      width={500}
      height={400}
      className="rounded-2xl object-cover w-full h-full"
    />

  </div>

  {/* Content */}
  <div
    data-aos="fade-left"
    className="order-1 md:order-2"
  >

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#fed42a] mb-5">
      Who We Are
    </h2>

    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
      BH Connected is dedicated to delivering carefully selected beauty
      and health solutions from Korea. We introduce only products that
      meet high standards of quality, safety, and real-world effectiveness.
    </p>

    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mt-6">
      To bring Korea’s most innovative and leading beauty and health
      solutions to the United States.
    </p>

  </div>

</div>

          {/* 🔸 PHILOSOPHY */}
          <div
            className="text-center"
            data-aos="fade-up"
          >

            <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
              People Come First
            </h2>
 
            <p className="text-gray-300 text-sm sm:text-base md:text-lg  max-w-3xl mx-auto leading-relaxed">
              We believe great products should serve people, improve well-being,
              and create meaningful value in everyday life.
            </p>

          </div>

          {/* 🔸 PURPOSE + BELIEF */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Card 1 */}
            <div
              data-aos="zoom-in"
              className="relative overflow-hidden p-8 border border-yellow-500/20 rounded-2xl bg-[#111111] group"
            >

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#fed42a]/0 via-[#fed42a]/10 to-[#fed42a]/30 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>

              <div className="relative z-10">

                <h3 className="text-2xl text-yellow-400 mb-4">
                  Our Purpose
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Every solution we bring is chosen with one goal:
                  To enhance people’s lives through better beauty and health.
                </p>

              </div>

            </div>

            {/* Card 2 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="relative overflow-hidden p-8 border border-yellow-500/20 rounded-2xl bg-[#111111] group"
            >

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#fed42a]/0 via-[#fed42a]/10 to-[#fed42a]/30 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>

              <div className="relative z-10">

                <h3 className="text-2xl text-yellow-400 mb-4">
                  Technology for People
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  We believe technology should serve people — not the other way around.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* 🔹 CTA SECTION */}
        <section className="py-20 text-center bg-gradient-to-r from-black to-[#111111]">

          <div data-aos="fade-up">

            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Discover the Future of Beauty & Health
            </h2>

            <p className="text-gray-400 mb-6">
              Connect with us to explore innovative solutions.
            </p>

            <Link href="/contact/contactsection">

              <button className="px-8 py-3 bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition rounded-full">
                Contact Us
              </button>

            </Link>

          </div>

        </section>

      </div>

    </App_layout>
  );
}