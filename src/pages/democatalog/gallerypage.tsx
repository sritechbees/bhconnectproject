"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import App_layout from "@/layout/app_layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GalleryPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <App_layout>
      <div className="bg-black text-white overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative bg-black overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/home/gallery-banner.jpg"
              alt="Gallery Banner"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black/70" /> */}

          {/* Content */}
          <div
            className="
              relative z-10
              max-w-6xl mx-auto
              px-5 sm:px-8 lg:px-12
              pt-28 sm:pt-32 lg:pt-36
              pb-20 sm:pb-24 lg:pb-32
              flex flex-col
              items-center
              text-center
            "
          >
            {/* Badge */}
            <span
              data-aos="fade-down"
              className="
                inline-flex items-center
                px-5 py-2.5
                rounded-full
                border border-[#fed42a]/40
                bg-[#fed42a]/10
                text-[#fed42a]
                text-xs sm:text-sm
                font-medium
                tracking-[2px]
                uppercase
                mb-6
              "
            >
              Product Collection
            </span>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="font-bold leading-[1.1]"
            >
              <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Explore Our
              </span>

              <span className="block text-[#fed42a] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                Premium Products
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                mt-6
                max-w-3xl
                text-gray-300
                text-base
                sm:text-lg
                md:text-xl
                leading-relaxed
              "
            >
              Discover innovative healthcare technologies including
              advanced TMS systems and modern Pain Management
              solutions.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                gap-5
                w-full
              "
            >
              <Link
                href="/democatalog/tmsproductpage"
                className="w-full sm:w-auto"
              >
                <button
                  className="
                    w-full sm:w-auto
                    min-w-[260px]
                    px-8 py-4
                    rounded-full
                    bg-[#fed42a]
                    text-black
                    text-lg
                    font-semibold
                    transition-all
                    duration-300
                      max-sm:w-12
                    hover:scale-105
                  "
                >
                  TMS Products
                </button>
              </Link>

              <Link
                href="/democatalog/painmanagement"
                className="w-full sm:w-auto"
              >
                <button
                  className="
                    w-full sm:w-auto
                    min-w-[260px]
                    px-8 py-4
                    rounded-full
                    border border-[#fed42a]
                    text-white
                    text-lg
                    font-semibold
                    transition-all
                    duration-300
                    max-sm:w-12
                    hover:bg-[#fed42a]
                    hover:text-black
                  "
                >
                  Pain Management
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </App_layout>
  );
}