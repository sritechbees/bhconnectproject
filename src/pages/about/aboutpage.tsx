"use client";

import { useEffect, useRef, useState } from "react";
import App_layout from "@/layout/app_layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const missionRef = useRef<HTMLDivElement | null>(null);

  const heroImages = [
    "/home/aboutbg.jpeg",
    "/home/aboutbg.jpeg",
    "/home/aboutbg.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <App_layout>
      <div className="bg-black text-white overflow-hidden w-full">
        {/* ===================================================== */}
        {/* MOBILE VIEW */}
        {/* ===================================================== */}

        <div className="md:hidden relative w-full bg-black">
          {/* IMAGE SECTION */}

          <div className="relative w-full h-[340px] overflow-hidden">
            <Image
              src={heroImages[currentImage]}
              alt="About Hero Mobile"
              fill
              priority
              className="object-cover object-center max-sm:mt-8"
            />

            {/* BOTTOM GRADIENT */}

            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent z-[2]" />
          </div>

          {/* CONTENT BELOW IMAGE */}

          <div
            data-aos="fade-up"
            className="
              relative
              z-10
              px-5
              pt-8
              pb-12
              text-center
            "
          >
            {/* TAG */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                inline-flex
                items-center
                justify-center
                px-4
                py-2
                rounded-full
                border
                border-[#FFE992]/40
                bg-[#111111]
                text-[#FFE992]
                text-[10px]
                uppercase
                tracking-[2px]
                mb-5
              "
            >
              Premium Korean Innovation
            </motion.div>

            {/* TITLE */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                font-bold
                leading-[1.3]
                text-[32px]
              "
            >
              About BH Connected

              <br />

              <span className="text-[#FFE992]">
                Beauty & Health
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                mt-4
                text-[14px]
                text-gray-300
                leading-relaxed
              "
            >
              Premium Korean beauty and health innovations
              designed for the future of wellness and care.
            </motion.p>

            {/* BUTTON */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
                mt-7
                flex
                justify-center
              "
            >
              <button
                onClick={scrollToMission}
                className="
                  px-7
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#C8960C]
                  to-[#FFE992]
                  text-black
                  font-semibold
                  text-[13px]
                  shadow-[0_0_25px_rgba(255,233,146,0.35)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(255,233,146,0.55)]
                "
              >
                Explore More
              </button>
            </motion.div>

            {/* DOTS */}

            <div className="mt-8 flex justify-center items-center gap-2">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 rounded-full ${
                    currentImage === index
                      ? "w-6 h-2 bg-[#FFE992]"
                      : "w-2 h-2 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* DESKTOP VIEW */}
        {/* ===================================================== */}

        <section className="hidden md:flex relative min-h-[90vh] items-center justify-center text-center px-6 overflow-hidden bg-black">
          {/* Background Image */}

          <Image
            src="/home/aboutbg.jpeg"
            alt="About BH Connected"
            fill
            priority
            className="object-fill object-center"
          />

          {/* HERO CONTENT */}

          <div
            className="relative z-10 max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            {/* TAG */}

            <div
              className="
                inline-flex
                items-center
                justify-center
                px-5
                py-2
                rounded-full
                border
                border-[#FFE992]/30
                bg-[#FFE992]/10
                text-[#FFE992]
                text-sm
                tracking-[3px]
                uppercase
                mb-6
                backdrop-blur-md
              "
            >
              Premium Korean Innovation
            </div>

            {/* TITLE */}

            <h1 className="font-bold leading-tight text-5xl lg:text-6xl">
              About{" "}
              <span className="text-[#FFE992]">
                BH Connected
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
              Premium Korean beauty and health innovations designed
              for the future.
            </p>

            {/* BUTTON */}

            <div className="mt-10 flex items-center justify-center">
              <button
                onClick={scrollToMission}
                className="
                  group
                  relative
                  overflow-hidden
                  min-w-[220px]
                  px-10
                  py-4
                  rounded-full
                  bg-gradient-to-r
                  from-[#C8960C]
                  to-[#FFE992]
                  text-black
                  font-semibold
                  transition-all
                  duration-500
                  hover:scale-105
                  shadow-[0_0_30px_rgba(255,233,146,0.25)]
                  hover:shadow-[0_0_45px_rgba(255,233,146,0.45)]
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#FFE992]
                    to-[#C8960C]
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                ></span>

                <span className="relative z-10">
                  Explore More
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Fade */}

          <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        {/* ===================================================== */}
        {/* CONTENT SECTION */}
        {/* ===================================================== */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 space-y-20 sm:space-y-28 overflow-hidden">
          {/* OUR MISSION */}

          <div
            ref={missionRef}
            className="w-full flex items-center justify-center py-10 sm:py-16"
          >
            <div
              data-aos="fade-up"
              className="w-full max-w-3xl text-center"
            >
              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-bold
                  text-[#FFE992]
                  mb-4
                  sm:mb-6
                  leading-tight
                "
              >
                Our Mission
              </h2>

              <p
                className="
                  text-gray-300
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                  max-w-2xl
                  mx-auto
                  px-2
                "
              >
                Connecting Beauty, Health, and Human Care through
                innovative Korean wellness solutions.
              </p>

              <Link href="/democatalog/gallerypage">
                <button
                  className="
                    mt-6
                    sm:mt-8
                    px-6
                    sm:px-8
                    py-2.5
                    sm:py-3
                    rounded-full
                    bg-gradient-to-r
                    from-[#C8960C]
                    to-[#FFE992]
                    text-black
                    text-sm
                    sm:text-base
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                    shadow-[0_0_25px_rgba(255,233,146,0.25)]
                    hover:shadow-[0_0_35px_rgba(255,233,146,0.45)]
                  "
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* WHO WE ARE */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* IMAGE */}

            <div
              data-aos="fade-right"
              className="order-2 md:order-1"
            >
              <Image
                src="/home/who.png"
                alt="Who We Are"
                width={500}
                height={400}
                className="
                  rounded-2xl
                  object-cover
                  w-full
                  h-full
                "
              />
            </div>

            {/* CONTENT */}

            <div
              data-aos="fade-left"
              className="order-1 md:order-2"
            >
              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-semibold
                  text-[#FFE992]
                  mb-5
                "
              >
                Who We Are
              </h2>

              <p
                className="
                  text-gray-300
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                "
              >
                BH Connected is dedicated to delivering carefully
                selected beauty and health solutions from Korea.
                We introduce only products that meet high standards
                of quality, safety, and real-world effectiveness.
              </p>

              <p
                className="
                  text-gray-300
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                  mt-6
                "
              >
                To bring Korea’s most innovative and leading beauty
                and health solutions to the United States.
              </p>
            </div>
          </div>

          {/* PHILOSOPHY */}

          <div
            className="text-center"
            data-aos="fade-up"
          >
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-semibold
                text-[#FFE992]
                mb-6
              "
            >
              People Come First
            </h2>

            <p
              className="
                text-gray-300
                text-sm
                sm:text-base
                md:text-lg
                max-w-3xl
                mx-auto
                leading-relaxed
                px-2
              "
            >
              We believe great products should serve people,
              improve well-being, and create meaningful value
              in everyday life.
            </p>
          </div>

          {/* PURPOSE + BELIEF */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* CARD 1 */}

            <div
              data-aos="zoom-in"
              className="
                relative
                overflow-hidden
                p-6
                sm:p-8
                border
                border-[#FFE992]/20
                rounded-2xl
                bg-[#111111]
                group
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#C8960C]/0 via-[#C8960C]/10 to-[#FFE992]/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>

              <div className="relative z-10">
                <h3 className="text-2xl text-[#FFE992] mb-4">
                  Our Purpose
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Every solution we bring is chosen with one goal:
                  To enhance people’s lives through better beauty
                  and health.
                </p>
              </div>
            </div>

            {/* CARD 2 */}

            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="
                relative
                overflow-hidden
                p-6
                sm:p-8
                border
                border-[#FFE992]/20
                rounded-2xl
                bg-[#111111]
                group
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#C8960C]/0 via-[#C8960C]/10 to-[#FFE992]/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>

              <div className="relative z-10">
                <h3 className="text-2xl text-[#FFE992] mb-4">
                  Technology for People
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  We believe technology should serve people —
                  not the other way around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* CTA SECTION */}
        {/* ===================================================== */}

        <section className="py-16 sm:py-20 text-center bg-gradient-to-r from-black to-[#111111] overflow-hidden">
          <div data-aos="fade-up">
            <h2
              className="
                text-3xl
                md:text-4xl
                px-2
                font-semibold
                mb-4
              "
            >
              Discover the Future of Beauty & Health
            </h2>

            <p className="text-gray-400 mb-6 px-2 max-sm:px-4 text-sm sm:text-base">
              Connect with us to explore innovative solutions.
            </p>

            <Link href="/contact/contactsection">
              <button
                className="
                  px-8
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#C8960C]
                  to-[#FFE992]
                  text-black
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                  shadow-[0_0_25px_rgba(255,233,146,0.25)]
                  hover:shadow-[0_0_40px_rgba(255,233,146,0.45)]
                "
              >
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </div>
    </App_layout>
  );
}