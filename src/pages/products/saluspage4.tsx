"use client";

import { motion } from "framer-motion";

export default function SalusPage4() {
  return (
   
      <section className="bg-[#111111] text-white min-h-screen py-20 px-4">

        <div className="max-w-4xl mx-auto text-center space-y-12">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold"
          >
            Healthcare Value & Outcomes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#888888] leading-relaxed"
          >
            In IPA- and PCP-led HMO settings, improved patient comfort and
            healing can lead to higher patient satisfaction and a variety of
            positive clinical and operational outcomes.
          </motion.p>

        </div>

      </section>
   
  );
}