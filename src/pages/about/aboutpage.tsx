"use client";

import App_layout from "@/layout/app_layout";
import Image from "next/image";

export default function AboutPage() {
  return (
<App_layout>
    <div className="bg-black text-white">

      {/* 🔹 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6">
        <Image
          src="/home/products.jpg"
          alt="About BH Connected"
          fill
          className="object-cover opacity-40"
        />
        <div className="relative z-10" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            About BH Connected
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Premium Korean beauty and health innovations designed for the future.
          </p>
        </div>
      </section>

      {/* 🔹 CONTENT SECTIONS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-28">

        {/* 🔸 Our Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To bring Korea’s most innovative and leading beauty and health
              solutions to the United States.
            </p>

            <button className="mt-6 px-6 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
              Learn More
            </button>
          </div>

          <div data-aos="fade-left">
            <Image
              src="/home/tms treatment-3.jpg"
              alt="Mission"
              width={500}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* 🔸 Who We Are */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right" className="order-2 md:order-1">
            <Image
              src="/home/tms treatment-3.jpg"
              alt="Who We Are"
              width={500}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>

          <div data-aos="fade-left" className="order-1 md:order-2">
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

        {/* 🔸 Philosophy */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
            People Come First
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We believe great products should serve people, improve well-being,
            and create meaningful value in everyday life.
          </p>
        </div>

        {/* 🔸 Purpose + Belief (Cards Style) */}
        <div className="grid md:grid-cols-2 gap-10">

          <div
            data-aos="zoom-in"
            className="p-8 border border-yellow-500/20 rounded-xl bg-gradient-to-br from-black to-[#111111] hover:scale-105 transition"
          >
            <h3 className="text-2xl text-yellow-400 mb-4">
              Our Purpose
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Every solution we bring is chosen with one goal:
              To enhance people’s lives through better beauty and health.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="p-8 border border-yellow-500/20 rounded-xl bg-gradient-to-br from-black to-[#111111] hover:scale-105 transition"
          >
            <h3 className="text-2xl text-yellow-400 mb-4">
              Technology for People
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We believe technology should serve people — not the other way around.
            </p>
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

          <button className="px-8 py-3 bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition">
            Contact Us
          </button>
        </div>
      </section>

    </div>
    </App_layout>
  );
}