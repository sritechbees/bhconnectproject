"use client";

import { useEffect } from "react";
import Image from "next/image";
import App_layout from "@/layout/app_layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TMSPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <App_layout>
      <div className="bg-[#050505] text-white overflow-x-hidden w-full">

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
          <div className="absolute inset-0 bg-black/65"></div>

          {/* CONTENT */}
          <div
            data-aos="fade-up"
            className="
              relative
              z-10
              w-full
              max-w-7xl
              mx-auto
              px-4
              sm:px-6
              md:px-10
              lg:px-14
              text-center
              pt-28
              sm:pt-32
              md:pt-36
              pb-20
              sm:pb-24
            "
          >

            {/* TAG */}
            <div
              className="
                inline-flex
                items-center
                justify-center
                px-4
                sm:px-5
                md:px-6
                py-2
                rounded-full
                border
                border-[#fed42a]/30
                bg-[#fed42a]/10
                text-[#fed42a]
                text-[10px]
                sm:text-xs
                md:text-sm
                tracking-[2px]
                sm:tracking-[4px]
                uppercase
                mb-5
                sm:mb-6
                backdrop-blur-md
              "
            >
              Advanced Psychiatry Technology
            </div>

            {/* TITLE */}
            <h1
              className="
                text-[30px]
                leading-[1.2]
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                font-bold
                px-1
              "
            >
              Transcranial
              <br className="hidden sm:block" />

              <span className="text-[#fed42a]">
                {" "}Magnetic Stimulation
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                sm:mt-6
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                text-gray-300
                max-w-3xl
                mx-auto
                leading-relaxed
                px-2
                sm:px-4
              "
            >
              Advanced non-invasive therapy technology designed for
              modern neurological and psychiatric treatment solutions.
            </p>

          </div>

          {/* BOTTOM FADE */}
          <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-[#050505] to-transparent"></div>

        </section>

        {/* ================================================= */}
        {/* TMS THERAPY */}
        {/* ================================================= */}

        <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-14 overflow-hidden bg-[#050505]">

          <div className="max-w-7xl mx-auto">

            {/* TITLE */}
            <div
              data-aos="fade-up"
              className="text-center mb-12 sm:mb-16"
            >

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                TMS Therapy Is Recommended For
              </h2>

              <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
                Treatment outcomes may vary depending on the indication and
                individual patient condition.
              </p>

            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

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
                  data-aos-delay={index * 100}
                  className="
                    group
                    overflow-hidden
                    rounded-[24px]
                    sm:rounded-[30px]
                    bg-[#111111]
                    border
                    border-white/5
                    hover:border-[#fed42a]/40
                    transition-all
                    duration-500
                    hover:-translate-y-2
                  "
                >

                  {/* IMAGE */}
                  <div className="relative h-[240px] sm:h-[300px] md:h-[320px] overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-6 text-center min-h-[130px] sm:min-h-[150px] flex items-center justify-center">

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

<section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-14 overflow-hidden bg-[#0b0b0b]">

  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <div
      data-aos="fade-up"
      className="text-center mb-12 sm:mb-16"
    >

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        TMS
      </h2>

      <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg px-2">
        A Treatment Solution Without Anesthesia or Incision
      </p>

    </div>

    {/* PRODUCT CARDS */}
    <div className="flex flex-wrap justify-center gap-6 lg:gap-8">

      {[
        {
          image: "/tms product/ALTMS.jpg",
          title: "ALTMS",
        },
        {
          image: "/home/tms1.png",
          title: "TMS Coils",
        },
        {
          image: "/home/tmsproduct.jpeg",
          title: "Robot Arm",
        },
      ].map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="
            group
            overflow-hidden
            rounded-[26px]
            sm:rounded-[32px]
            bg-[#121212]
            border
            border-white/5
            hover:border-[#fed42a]/40
            transition-all
            duration-500
            hover:-translate-y-2
            w-full
            sm:w-[48%]
            lg:w-[31%]
            max-w-md
          "
        >

          {/* IMAGE */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[380px] overflow-hidden">

            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain p-4 sm:p-6 group-hover:scale-110 transition duration-700"
            />

          </div>

          {/* CONTENT */}
          <div className="pb-6 sm:pb-8 text-center px-4">

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              {item.title}
            </h3>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>

        {/* ================================================= */}
        {/* ACCESSORIES */}
        {/* ================================================= */}

        <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-14 overflow-hidden bg-[#050505]">

          <div className="max-w-7xl mx-auto">

            {/* TITLE */}
            <div
              data-aos="fade-up"
              className="text-center mb-12 sm:mb-16"
            >

              <span className="text-[#fed42a] uppercase tracking-[3px] sm:tracking-[4px] text-[10px] sm:text-sm">
                TMS Universe
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
                TMS Accessories
              </h2>

            </div>

            {/* ACCESSORIES GRID */}
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
                  className="
                    group
                    overflow-hidden
                    rounded-[24px]
                    sm:rounded-[28px]
                    bg-[#111111]
                    border
                    border-white/10
                    hover:border-[#fed42a]/50
                    transition-all
                    duration-500
                    hover:-translate-y-2
                  "
                >

                  {/* IMAGE */}
                  <div className="relative h-[220px] sm:h-[250px] md:h-[270px] overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-5 sm:p-6 group-hover:scale-110 transition duration-700"
                    />

                  </div>

                  {/* TITLE */}
                  <div className="pb-5 sm:pb-6 text-center px-3">

                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">
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