"use client";

import { useEffect } from "react";
import Image from "next/image";
import App_layout from "@/layout/app_layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TMSPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <App_layout>
      <div className="bg-[#050505] text-white overflow-hidden">

        {/* ================================================= */}
        {/* HERO SECTION */}
        {/* ================================================= */}

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

          {/* VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/tms1.mp4" type="video/mp4" />
          </video>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* GLOW EFFECT */}
          <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#fed42a]/20 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#fed42a]/10 blur-[140px] rounded-full"></div>

          {/* CONTENT */}
          <div
            data-aos="fade-up"
            className="relative z-10 text-center px-6 max-w-6xl"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-[#fed42a]/30 bg-[#fed42a]/10 text-[#fed42a] text-xs sm:text-sm tracking-[3px] uppercase mb-6">
              Advanced Psychiatry Technology
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
              Transcranial <br className="hidden sm:block" />
              Magnetic Stimulation
            </h1>
          </div>

          {/* BOTTOM FADE */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent"></div>
        </section>

        {/* ================================================= */}
        {/* TMS THERAPY */}
        {/* ================================================= */}

        <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#050505] relative overflow-hidden">

          {/* BG GLOW */}
          <div className="absolute top-20 left-0 w-[250px] h-[250px] bg-[#fed42a]/10 blur-[120px] rounded-full"></div>

          <div className="max-w-7xl mx-auto relative z-10">

            {/* TITLE */}
            <div
              data-aos="fade-up"
              className="text-center mb-14"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                TMS Therapy Is Recommended For
              </h2>

              <p className="mt-5 text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Treatment outcomes may vary depending on the indication and individual patient condition.
              </p>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  image: "/tms product/tms treatment-1.jpg",
                  title:
                    "Patients who have not responded to or have difficulty with medication therapy",
                },
                {
                  image: "/tms product/tms treatment-2.jpg",
                  title:
                    "Patients vulnerable to anesthesia, pain, or medications",
                },
                {
                  image: "/tms product/tms treatment-3.jpg",
                  title:
                    "Busy individuals with limitations on hospitalization",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 120}
                  className="group overflow-hidden rounded-[30px] bg-[#111111] border border-white/5 hover:border-[#fed42a]/40 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-[280px] sm:h-[330px] overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  </div>

                  <div className="p-5 text-center min-h-[130px] flex items-center justify-center">
                    <h3 className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* TMS PRODUCTS */}
        {/* ================================================= */}

        <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0b0b0b] relative overflow-hidden">

          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#fed42a]/10 blur-[140px] rounded-full"></div>

          <div className="max-w-7xl mx-auto relative z-10">

            {/* TITLE */}
            <div
              data-aos="fade-up"
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                TMS
              </h2>

              <p className="mt-5 text-gray-400 text-sm sm:text-base md:text-lg">
                A Treatment Solution Without Anesthesia or Incision
              </p>
            </div>

            {/* PRODUCTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  image: "/tms product/ALTMS.jpg",
                  title: "ALTMS",
                },
                {
                  image: "/tms product/BrainStim.jpg",
                  title: "BrainStim",
                },
                {
                  image: "/tms product/BrainStim 100.jpg",
                  title: "BrainStim 100",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group overflow-hidden rounded-[32px] bg-[#121212] border border-white/5 hover:border-[#fed42a]/40 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-[320px] sm:h-[380px] overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-6 group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="pb-7 text-center">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* TMS ACCESSORIES */}
        {/* ================================================= */}

        <section className="relative py-24 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">

          {/* BG IMAGE */}
          <div className="absolute inset-0">

            <Image
              src="/tms product/tms-bg.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/80"></div>

          {/* GLOW */}
          <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#fed42a]/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto">

            {/* TITLE */}
            <div
              data-aos="fade-up"
              className="text-center mb-16"
            >
              <span className="text-[#fed42a] uppercase tracking-[5px] text-xs sm:text-sm">
                TMS Universe
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
                TMS Accessories
              </h2>
            </div>

            {/* ACCESSORIES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

              {[
                {
                  image: "/tms product/TMS Coils.png",
                  title: "TMS Coils",
                },
                {
                  image: "/tms product/Brain Eyes.png",
                  title: "BrainEyes",
                },
                {
                  image: "/tms product/Myo1.png",
                  title: "Myo1",
                },
                {
                  image: "/tms product/Treatment Chair.png",
                  title: "Treatment Chair",
                },
                {
                  image: "/tms product/Robot Arm.png",
                  title: "Robot Arm",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group overflow-hidden rounded-[28px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#fed42a]/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-[260px] sm:h-[300px] overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-6 group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="pb-6 text-center px-2">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </App_layout>
  );
}