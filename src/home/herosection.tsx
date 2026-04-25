"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen mt-16 flex items-center justify-center bg-[#111111] overflow-hidden px-4 sm:px-6">

      {/* 🔹 Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home/Beauty_Health.jpg"
          alt="Beauty & Health"
          fill
          priority
          className="object-cover opacity-70"
        />
      </div>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔹 Subtle Glow (neutral, not yellow) */}
      <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-white/5 blur-[120px] rounded-full top-10 left-0"></div>
      <div className="absolute w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white/5 blur-[100px] rounded-full bottom-10 right-0"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-4xl text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          We bring Korea’s finest{" "}
          <span className="text-[#888888]">beauty and health</span>{" "}
          innovations to power modern medspas
        </motion.h1>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 sm:mt-6 text-[#cccccc] text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        >
          B&H Connected is a company dedicated to bringing carefully selected
          Beauty and Health solutions from Korea to the United States.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >

          {/* 🔹 Button 1 (Primary) */}
          <Link href="/products/producthero">
            <button className="relative px-6 sm:px-8 py-3 rounded-full bg-white text-black font-semibold overflow-hidden group">

              <span className="absolute inset-0 bg-[#111111] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>

              <span className="relative z-10 group-hover:text-white transition">
                Explore Solutions
              </span>
            </button>
          </Link>

          {/* 🔹 Button 2 (Secondary) */}
          <Link href="/contact/contactsection">
            <button className="px-6 sm:px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition duration-300">
              Contact Us
            </button>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}