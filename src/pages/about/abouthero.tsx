"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] mt-16 w-full bg-[#111111] text-white flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111111] to-black opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide"
        >
          About B&H Connected
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-[2px] bg-white mx-auto mt-6"
        />

        {/* Subtitle (client content only) */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-[#888888] text-sm md:text-base"
        >
          We bring Korea’s finest beauty and health innovations to power modern medspas
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10"
        >
          <Link href="/contact/contacthero">
            <button className="px-8 py-3 border border-white text-sm rounded-full hover:bg-white hover:text-black transition">
              Explore
            </button>
          </Link>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
}