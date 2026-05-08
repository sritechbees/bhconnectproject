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
        <section className="relative h-[90vh] flex items-center justify-center text-center px-6 mt-16 overflow-hidden">

          {/* Background Image */}
          <Image
            src="/home/tmsproduct.jpeg"
            alt="About BH Connected"
            fill
            className="object-cover opacity-40"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Gold Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#fed42a]/10 to-black"></div>

          {/* Content */}
          <div
            className="relative z-10"
            data-aos="fade-up"
          >

            <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              About BH Connected
            </h1>

            <p className="text-gray-300 mt-4 max-w-xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
              Premium Korean beauty and health innovations designed for the future.
            </p>

            {/* Explore Button */}
            <div className="mt-8 flex items-center justify-center">

              <button
                onClick={scrollToMission}
                className="group relative overflow-hidden px-8 py-4 rounded-full border border-[#fed42a]/40 bg-[#fed42a]/10 backdrop-blur-md text-white font-medium transition-all duration-500 hover:scale-105"
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

        </section>

        {/* 🔹 CONTENT SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-28">

          {/* 🔸 OUR MISSION */}
          <div
            ref={missionRef}
            className="grid md:grid-cols-2 gap-10 items-center"
          >

            {/* Left Content */}
            <div data-aos="fade-right">

              <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
                Our Mission
              </h2>

              <p className="text-gray-300 leading-relaxed">
                To bring Korea’s most innovative and leading beauty and health
                solutions to the United States.
              </p>

              <button className="mt-6 px-6 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300 rounded-full">
                Learn More
              </button>

            </div>

            {/* Right Image */}
            <div data-aos="fade-left">

              <Image
                src="/home/tms treatment-1.jpg"
                alt="Mission"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full"
              />

            </div>

          </div>

          {/* 🔸 WHO WE ARE */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div
              data-aos="fade-right"
              className="order-2 md:order-1"
            >

              <Image
                src="/home/tms treatment-3.jpg"
                alt="Who We Are"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full"
              />

            </div>

            {/* Content */}
            <div
              data-aos="fade-left"
              className="order-1 md:order-2"
            >

              <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
                Who We Are
              </h2>

              <p className="text-gray-300 leading-relaxed">
                BH Connected is dedicated to delivering carefully selected beauty
                and health solutions from Korea. We introduce only products that
                meet high standards of quality, safety, and real-world effectiveness.
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

            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
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