"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WellnessPositioning() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
   
      <section className="bg-[#111111] text-white py-20 px-4 sm:px-6">

        <div className="max-w-6xl mx-auto space-y-20">

          {/* TITLE */}
          <div data-aos="fade-up" className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Wellness Positioning
            </h1>
            <div className="w-16 h-[2px] bg-white mx-auto mt-6"></div>
          </div>

          {/* TOP STATEMENT */}
          <div
            data-aos="fade-up"
            className="max-w-3xl mx-auto text-center text-[#888888]"
          >
            <p>
              In this model, TMS is not positioned as psychiatric treatment, but
              as a brain and mental wellness service focused on:
            </p>
          </div>

          {/* FEATURES GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            {[
              "Mental clarity",
              "Emotional balance",
              "Stress resilience",
              "Focus wellness",
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="border border-[#222] rounded-2xl p-6 text-center hover:border-white/40 transition"
              >
                <p className="text-white font-medium">{item}</p>
              </div>
            ))}

          </div>

          {/* HIGHLIGHT STATEMENT */}
          <div
            data-aos="fade-up"
            className="text-center space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-medium">
              This is not psychiatry.
            </h2>

            <p className="text-[#888888] max-w-2xl mx-auto">
              This is next-generation wellness technology, delivered in a calm,
              premium MedSpa environment.
            </p>
          </div>

          {/* BENEFITS STRIP */}
          <div className="grid sm:grid-cols-3 gap-6 text-center">

            {[
              "Non-Invasive",
              "No Medication",
              "No Downtime",
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
                className="bg-[#181818] rounded-2xl p-8"
              >
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}

          </div>

        </div>

      </section>
   
  );
}