"use client";

import { useEffect } from "react";
import Image from "next/image";
import App_layout from "@/layout/app_layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PainManagementPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
            <source
              src="/videos/painmangment1.mp4"
              type="video/mp4"
            />
          </video>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* GLOW EFFECTS */}
          <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#fed42a]/20 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#fed42a]/10 blur-[140px] rounded-full"></div>

          {/* CONTENT */}
          <div
            data-aos="fade-up"
            className="relative z-10 text-center px-6 max-w-5xl"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-[#fed42a]/30 bg-[#fed42a]/10 text-[#fed42a] text-xs sm:text-sm tracking-[2px] mb-6">
              ADVANCED PAIN MANAGEMENT
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Innovative <br />
              Pain Therapy Solutions
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Modern non-invasive rehabilitation and therapeutic
              technologies designed for advanced healthcare treatment.
            </p>
          </div>

          {/* BOTTOM GRADIENT */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent"></div>
        </section>

        {/* ================================================= */}
        {/* PMS */}
        {/* ================================================= */}

        <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#050505] overflow-hidden">

          <div className="max-w-7xl mx-auto">

            <div
              data-aos="fade-up"
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fed42a]">
                PMS
              </h2>

              <p className="mt-4 text-gray-400 text-sm sm:text-base">
                Effective Treatment Without Surgery
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* CARD 1 */}
              <div
                data-aos="zoom-in"
                className="group overflow-hidden rounded-[28px] bg-[#111111] border border-[#fed42a]/10 hover:border-[#fed42a] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-[260px] sm:h-[320px] overflow-hidden">

                  <Image
                    src="/pain_managment/Wrist Pain.png"
                    alt="Wrist Pain"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Wrist Pain
                  </h3>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                className="group overflow-hidden rounded-[28px] bg-[#111111] border border-[#fed42a]/10 hover:border-[#fed42a] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-[260px] sm:h-[320px] overflow-hidden">

                  <Image
                    src="/pain_managment/Chronic Lower Back Pain.png"
                    alt="Back Pain"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Chronic Lower Back Pain
                  </h3>
                </div>
              </div>

              {/* CARD 3 */}
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="group overflow-hidden rounded-[28px] bg-[#111111] border border-[#fed42a]/10 hover:border-[#fed42a] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-[260px] sm:h-[320px] overflow-hidden">

                  <Image
                    src="/pain_managment/Plantar Fasciitis.png"
                    alt="Plantar Fasciitis"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Plantar Fasciitis
                  </h3>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* RF */}
        {/* ================================================= */}

        <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0b0b0b]">

          <div className="max-w-7xl mx-auto">

            <div
              data-aos="fade-up"
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fed42a]">
                RF
              </h2>

              <p className="mt-4 text-gray-400 text-sm sm:text-base">
                Three Treatment Modalities Without Surgery
              </p>
            </div>

            <div
              data-aos="zoom-in"
              className="group overflow-hidden rounded-[35px] border border-[#fed42a]/10 hover:border-[#fed42a] transition-all duration-500"
            >
              <div className="relative h-[280px] sm:h-[450px] md:h-[550px] overflow-hidden">

                <Image
                  src="/pain_managment/Smart TMT.jpg"
                  alt="RF"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
                    Smart TMT
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* rPMS */}
        {/* ================================================= */}

        <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#050505]">

          <div className="max-w-7xl mx-auto">

            <div
              data-aos="fade-up"
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fed42a]">
                rPMS
              </h2>

              <p className="mt-4 text-gray-400 text-sm sm:text-base">
                Musculoskeletal Pain Treatment
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

              {[
                {
                  image: "/pain_managment/Salus-Talent.jpg",
                  title: "Salus-Talent",
                },
                {
                  image: "/pain_managment/Salus-Talent-A.jpg",
                  title: "Salus-Talent-A",
                },
                {
                  image: "/pain_managment/Salus-Talent-Pro.jpg",
                  title: "Salus-Talent-Pro",
                },
                {
                  image: "/pain_managment/Salus Exms-A.jpg",
                  title: "Salus Exms-A",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group overflow-hidden rounded-[28px] bg-[#111111] border border-[#fed42a]/10 hover:border-[#fed42a] transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-[260px] sm:h-[320px] overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* ESWT */}
        {/* ================================================= */}

        <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0b0b0b]">

          <div className="max-w-7xl mx-auto">

            <div
              data-aos="fade-up"
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fed42a]">
                ESWT
              </h2>

              <p className="mt-4 text-gray-400 text-sm sm:text-base">
                Customized Treatment System
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {[
                {
                  image: "/pain_managment/Salus RSWT.jpg",
                  title: "Salus RSWT",
                },
                {
                  image: "/pain_managment/Salus-RSWT-A.jpg",
                  title: "Salus-RSWT-A",
                },
                {
                  image: "/pain_managment/Salus-FSWT-A.jpg",
                  title: "Salus-FSWT-A",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group overflow-hidden rounded-[28px] bg-[#111111] border border-[#fed42a]/10 hover:border-[#fed42a] transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-[280px] sm:h-[350px] overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* HYBRID */}
        {/* ================================================= */}

        <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#050505]">

          <div className="max-w-7xl mx-auto">

            <div
              data-aos="fade-up"
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fed42a]">
                Hybrid Devices
              </h2>

              <p className="mt-4 text-gray-400 text-sm sm:text-base">
                Dual Energy Treatment System
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {[
                {
                  image: "/pain_managment/Optimus Pro.jpg",
                  title: "Optimus Pro",
                },
                {
                  image: "/pain_managment/Salus FSWT Duet.jpg",
                  title: "Salus FSWT Duet",
                },
                {
                  image: "/pain_managment/Salus ESWT Expert.jpg",
                  title: "Salus ESWT Expert",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group overflow-hidden rounded-[28px] bg-[#111111] border border-[#fed42a]/10 hover:border-[#fed42a] transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-[280px] sm:h-[350px] overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="text-lg sm:text-xl font-semibold">
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