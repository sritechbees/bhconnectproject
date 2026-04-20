"use client";

import { motion } from "framer-motion";

export default function SalusPage2() {
  return (
    
      <section className="bg-[#111111] text-white min-h-screen py-20 px-4">

        <div className="max-w-6xl mx-auto space-y-16">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold text-center"
          >
            Pain Management
          </motion.h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

            {[
              "Tennis elbow",
              "Golfer’s elbow",
              "Shoulder pain and stiffness",
              "Chronic joint and muscle pain",
              "Overuse and repetitive strain injuries",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="border border-[#222] p-6 rounded-2xl text-center"
              >
                {item}
              </motion.div>
            ))}

          </div>

          <div className="text-center text-[#888888] max-w-3xl mx-auto">
            <p>
              These are conditions where patients often seek relief beyond
              medication or injections—and where simple, repeatable,
              non-invasive therapy is highly effective.
            </p>
          </div>

        </div>

      </section>
    
  );
}