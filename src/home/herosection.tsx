"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#111111] text-white overflow-hidden flex items-center justify-center">

      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111111] to-black opacity-90"></div>

      {/* Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-wide"
        >
          We bring Korea’s finest beauty and health innovations
          <br className="hidden md:block" />
          to power modern medspas
        </motion.h1>

        {/* Divider line (Tesla style minimal) */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-[2px] bg-white mx-auto mt-6"
        ></motion.div>

        {/* Subtle spacing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-[#888888] text-sm md:text-base max-w-2xl mx-auto"
        >
          {/* Keeping minimal as Tesla style — no extra content */}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition">
            Explore Products
          </button>

          <button className="px-8 py-3 border border-white text-sm rounded-full hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </motion.div>

      </div>

      {/* Bottom fade (premium touch) */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
}