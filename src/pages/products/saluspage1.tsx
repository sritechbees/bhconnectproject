"use client";

import { motion } from "framer-motion";
import App_layout from "@/layout/app_layout";
import SalusPage2 from "./saluspage2";
import SalusPage3 from "./saluspage3";
import SalusPage4 from "./saluspage4";

export default function SalusPage1() {
  return (
    <App_layout>
      <section className="bg-[#111111] mt-16 text-white min-h-screen py-20 px-4">

        <div className="max-w-5xl mx-auto space-y-16 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold"
          >
            SALUS TALENT PRO
          </motion.h1>

          <div className="text-[#888888] space-y-4">
            <p>Pro-level performance, features, therapeutic effects</p>
            <p>Premium electromagnetic field stimulator</p>
          </div>

          <div className="border border-[#222] rounded-2xl p-8">
            <p className="text-[#CCCCCC] leading-relaxed">
              The premium version of the Talent series, offers more precise pain
              relief through stimulation of both overall and localized areas
              using two different applicators.
            </p>
          </div>

        </div>

      </section>
      <SalusPage2/>
      <SalusPage3/>
      <SalusPage4/>
    </App_layout>
  );
}