"use client";

import { useRef } from "react";
import App_layout from "@/layout/app_layout";
import Image from "next/image";
import Link from "next/link";
import Herosection from "@/common/herosection";

export default function AboutPage() {

  const missionRef = useRef<HTMLDivElement | null>(null);

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <App_layout>
        {/* <Herosection/> */}
      <div className="bg-black text-white overflow-hidden w-full">

        {/* ====================================================== */}
        {/* HERO SECTION */}
        {/* ====================================================== */}

        <section className="relative min-h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden bg-black">

          {/* Background Image */}

          <Image
            src="/home/aboutbg.jpeg"
            alt="About BH Connected"
            fill
            priority
            className="object-fill object-center"
          />

          {/* Dark Overlay */}

          {/* <div className="absolute inset-0"></div> */}

          {/* Gradient Overlay */}

          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>

          {/* HERO CONTENT */}

          <div
            className="relative z-10 max-w-4xl mx-auto w-full"
            data-aos="fade-up"
          >

            {/* Small Tag */}

            <div
              className="
                inline-flex
                items-center
                justify-center
                px-4 max-sm:mt-8
                sm:px-5
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
                sm:tracking-[3px]
                uppercase
                mb-5
                sm:mb-6
                backdrop-blur-md
              "
            >
              Premium Korean Innovation
            </div>

            {/* Title */}

            <h1
              className="
                font-bold
                leading-tight
                text-[34px]
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              About{" "}

              <span className="text-[#fed42a]">
                BH Connected
              </span>

            </h1>

            {/* Description */}

            <p
              className="
                text-gray-300
                mt-5
                max-w-2xl
                mx-auto
                leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
                px-2
              "
            >
              Premium Korean beauty and health innovations designed
              for the future.
            </p>

            {/* Explore Button */}

            <div className="mt-8 sm:mt-10 flex items-center justify-center w-full px-2">

              <button
                onClick={scrollToMission}
                className="
                  group
                  relative
                  overflow-hidden
                  w-full
                  sm:w-auto
                  min-w-[220px]
                  px-6
                  sm:px-10
                  py-3
                  sm:py-4
                  rounded-full
                  border
                  border-[#fed42a]/40
                  bg-[#fed42a]/10
                  backdrop-blur-md
                  text-white
                  font-medium
                  text-sm
                  sm:text-base
                  transition-all
                  duration-500
                  hover:scale-105
                  flex
                  items-center
                  justify-center max-sm:w-12
                "
              >

                {/* Button Overlay */}

                <span
                  className="
                    absolute
                    inset-0
                    bg-[#fed42a]
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform
                    duration-500
                  "
                ></span>

                {/* Text */}

                <span
                  className="
                    relative
                    z-10
                    group-hover:text-black
                    transition
                    duration-500
                  "
                >
                  Explore More
                </span>

              </button>

            </div>

          </div>

          {/* Bottom Fade */}

          <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-black to-transparent"></div>

        </section>

        {/* ====================================================== */}
        {/* CONTENT SECTION */}
        {/* ====================================================== */}

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
                  text-[#fed42a]
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
                    border
                    border-[#fed42a]
                    text-[#fed42a]
                    text-sm
                    sm:text-base
                    font-medium
                    hover:bg-[#fed42a]
                    hover:text-black
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Learn More
                </button>

              </Link>

            </div>

          </div>

          {/* WHO WE ARE */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Image */}

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

            {/* Content */}

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
                  text-[#fed42a]
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
                text-[#fed42a]
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

            {/* Card 1 */}

            <div
              data-aos="zoom-in"
              className="
                relative
                overflow-hidden
                p-6
                sm:p-8
                border
                border-yellow-500/20
                rounded-2xl
                bg-[#111111]
                group
              "
            >

              <div className="absolute inset-0 bg-gradient-to-r from-[#fed42a]/0 via-[#fed42a]/10 to-[#fed42a]/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>

              <div className="relative z-10">

                <h3 className="text-2xl text-yellow-400 mb-4">
                  Our Purpose
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Every solution we bring is chosen with one goal:
                  To enhance people’s lives through better beauty
                  and health.
                </p>

              </div>

            </div>

            {/* Card 2 */}

            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="
                relative
                overflow-hidden
                p-6
                sm:p-8
                border
                border-yellow-500/20
                rounded-2xl
                bg-[#111111]
                group
              "
            >

              <div className="absolute inset-0 bg-gradient-to-r from-[#fed42a]/0 via-[#fed42a]/10 to-[#fed42a]/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>

              <div className="relative z-10">

                <h3 className="text-2xl text-yellow-400 mb-4">
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

        {/* ====================================================== */}
        {/* CTA SECTION */}
        {/* ====================================================== */}

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
                  bg-yellow-400
                  text-black
                  font-medium
                  hover:bg-yellow-300
                  transition
                  rounded-full
                  hover:scale-105
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