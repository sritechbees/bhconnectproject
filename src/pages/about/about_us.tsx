"use client";

import { useEffect } from "react";
import App_layout from "@/layout/app_layout";
import AboutHero from "./abouthero";
import Aboutone from "./aboutone";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <App_layout>
      <div className="overflow-hidden bg-[#111111] text-white">

        {/* Top Sections */}
        <AboutHero />
        <Aboutone />
        

        {/* Main Content */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col gap-20">

            {/* BELIEF */}
            <div
              data-aos="zoom-in"
              className="text-center max-w-3xl mx-auto"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-5">
                What We Believe
              </h3>
              <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
                Great products should serve people, improve well-being, and create meaningful value in everyday life.
              </p>
              <p className="text-[#888888] mt-3 text-sm sm:text-base leading-relaxed">
                Every solution we bring is chosen with one purpose: to enhance people’s lives through better beauty and health.
              </p>
            </div>

            {/* TAGLINE */}
            <div
              data-aos="fade-up"
              className="text-center px-2"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug">
                Where Beauty & Health Come Together — We Support It
              </h2>
            </div>

            {/* COMMITMENT */}
            <div
              data-aos="fade-up"
              className="bg-[#181818] p-6 sm:p-10 rounded-2xl text-center max-w-4xl mx-auto shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-5">
                Our Commitment
              </h3>

              <p className="text-[#888888] mb-5 text-sm sm:text-base leading-relaxed">
                We are not simply distributors of machines. We act as curators of meaningful medical solutions designed to improve lives and support healthcare professionals.
              </p>

              <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
                If a technology does not help people — we do not introduce it.
              </p>

              <p className="text-white mt-3 font-medium text-sm sm:text-base">
                If it truly benefits lives — we proudly stand behind it.
              </p>
            </div>

          </div>
        </section>

      </div>
    </App_layout>
  );
}