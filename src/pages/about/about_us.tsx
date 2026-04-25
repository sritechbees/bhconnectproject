"use client";

import App_layout from "@/layout/app_layout";
import { motion } from "framer-motion";
import AboutHero from "./abouthero";
import Aboutone from "./aboutone";

export default function About() {
  return (
    <App_layout>
      <AboutHero />
       <Aboutone/>

      <section className="bg-[#111111] text-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-24">

          {/* ABOUT GRID (HIGHLIGHT STYLE) */}
          <div className="grid md:grid-cols-3 gap-8">

            {[
              "B&H Connected is a premier company dedicated to bringing Korea’s most refined beauty and health innovations to the United States.",
              "We carefully select only the most exceptional companies and products—those that meet the highest standards of quality, safety, and true effectiveness.",
              "At the heart of everything we do is a simple belief: people come first.",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="border border-[#222] rounded-2xl p-6 hover:border-white/40 transition"
              >
                <p className="text-[#888888] text-sm leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}

          </div>

          {/* SPLIT SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT TITLE */}
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-4xl font-semibold"
            >
              Our Purpose
            </motion.h2>

            {/* RIGHT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4 text-[#888888]"
            >
              <p>
                Every solution we introduce is guided by a singular purpose:
                to elevate quality of life and inspire confidence through advanced beauty and health.
              </p>

              <p>
                We take great pride in the products we represent, standing behind them with integrity, trust, and a commitment to excellence.
              </p>

              <p>
                We are dedicated to building lasting relationships—grounded in trust, and growing together with you.
              </p>
            </motion.div>

          </div>

          {/* MISSION + PHILOSOPHY (CARD STYLE) */}
          <div className="grid md:grid-cols-2 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#181818] p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-[#888888]">
                Bring Korea’s most innovative and leading beauty and health solutions to the United States.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#181818] p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4">Our Philosophy</h3>
              <ul className="text-[#888888] space-y-2">
                <li>• People come first</li>
                <li>• Technology should serve people</li>
              </ul>
            </motion.div>

          </div>

          {/* BELIEF (CENTER STRONG TEXT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-6">
              What We Believe
            </h3>
            <p className="text-[#888888]">
              Great products should serve people, improve well-being, and create meaningful value in everyday life.
            </p>
            <p className="text-[#888888] mt-3">
              Every solution we bring is chosen with one purpose: to enhance people’s lives through better beauty and health.
            </p>
          </motion.div>

          {/* TAGLINE (BIG IMPACT) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-medium">
              Where Beauty & Health Come Together — We Support It
            </h2>
          </motion.div>

          {/* COMMITMENT (HIGHLIGHT BOX) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#181818] p-10 rounded-2xl text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-6">Our Commitment</h3>

            <p className="text-[#888888] mb-6">
              We are not simply distributors of machines. We act as curators of meaningful medical solutions designed to improve lives and support healthcare professionals.
            </p>

            <p className="text-[#888888]">
              If a technology does not help people — we do not introduce it.
            </p>

            <p className="text-white mt-2 font-medium">
              If it truly benefits lives — we proudly stand behind it.
            </p>
          </motion.div>

        </div>
      </section>
    </App_layout>
  );
}