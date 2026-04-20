"use client";

import App_layout from "@/layout/app_layout";
import { motion } from "framer-motion";
import WellnessPositioning from "./wellnesspositioning";
import BusinessValuePage from "./businessvalue";

export default function TMSOverviewPage() {
  return (
    <App_layout>
    <section className="bg-[#111111] mt-16 text-white min-h-screen py-20 px-4 sm:px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-semibold">
            TMS (Transcranial Magnetic Stimulation)
          </h1>

          <div className="w-16 h-[2px] bg-white mx-auto mt-6"></div>

          <p className="text-[#888888] mt-6 text-sm md:text-base">
            Brain & Mental Wellness Program for MedSpa-Based Care
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="border border-[#222] p-6 rounded-2xl">
              <p className="text-[#888888] leading-relaxed">
                Transcranial Magnetic Stimulation (TMS) is introduced as a
                non-invasive brain wellness technology that allows MedSpas to
                expand beyond aesthetics into mental and emotional wellness.
              </p>
            </div>

            <div className="border border-[#222] p-6 rounded-2xl">
              <p className="text-[#888888] leading-relaxed">
                This program is designed for wellness-focused, cash-based care,
                delivered in a calm MedSpa environment rather than a traditional
                psychiatric setting.
              </p>
            </div>
          </motion.div>

          {/* RIGHT VISUAL BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#181818] rounded-2xl p-10 flex items-center justify-center text-center"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-4">
                Non-Invasive
              </h2>
              <h2 className="text-xl md:text-2xl font-medium mb-4">
                Brain Wellness Technology
              </h2>
              <h2 className="text-xl md:text-2xl font-medium">
                MedSpa-Based Care
              </h2>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
    <WellnessPositioning/>
    <BusinessValuePage/>
    </App_layout>
  );
}