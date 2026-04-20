"use client";

import { motion } from "framer-motion";

export default function SalusPage3() {
  return (
    
      <section className="bg-[#111111] text-white min-h-screen py-20 px-4">

        <div className="max-w-4xl mx-auto space-y-12 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold"
          >
            Clinical Positioning
          </motion.h1>

          <div className="space-y-6 text-[#888888]">

            <p>
              We strongly recommend this device to physicians who specialize in
              pain management.
            </p>

            <p>
              We are confident that you will see highly satisfactory results.
            </p>

            <p>
              It can also be used as a practical care device to help reduce pain
              in senior patients.
            </p>

          </div>

        </div>

      </section>
    
  );
}