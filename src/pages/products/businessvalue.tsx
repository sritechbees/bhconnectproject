"use client";

import { motion } from "framer-motion";


export default function BusinessValuePage() {
  return (
    
      <section className="bg-[#111111] text-white py-20 px-4 sm:px-6">

        <div className="max-w-6xl mx-auto space-y-20">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-semibold">
              Business Value & Market
            </h1>
            <div className="w-16 h-[2px] bg-white mx-auto mt-6"></div>
          </motion.div>

          {/* GLOBAL TRUST */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <p className="text-[#888888]">
              REMED TMS is a globally trusted system
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-8 mt-6">

              <div className="border border-[#222] rounded-2xl px-10 py-6">
                <p className="text-2xl font-semibold">90%</p>
                <p className="text-[#888888] text-sm mt-2">
                  market share in Korea
                </p>
              </div>

              <div className="border border-[#222] rounded-2xl px-10 py-6">
                <p className="text-2xl font-semibold">50+</p>
                <p className="text-[#888888] text-sm mt-2">
                  Countries Worldwide
                </p>
              </div>

            </div>
          </motion.div>

          {/* VALUE POINTS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Differentiate from traditional aesthetic services",
              "Attract high-value, wellness-focused patients",
              "Build recurring, membership-based programs",
              "Expand beyond skin into total mind-body optimization",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="border border-[#222] rounded-2xl p-6 hover:border-white/40 transition"
              >
                <p className="text-[#CCCCCC] text-sm leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}

          </div>

          {/* TAGLINES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-medium">
              High-end practices
            </h2>

            <p className="text-[#888888]">
              Clarity, Calm, Focus and Emotional Balance
            </p>

            <p className="text-white font-medium mt-4">
              Your patients are asking for
            </p>
          </motion.div>

        </div>

      </section>
   
  );
}