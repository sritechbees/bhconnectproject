"use client";

import { useState } from "react";
import App_layout from "@/layout/app_layout";
import Image from "next/image";
import Link from "next/link";

export default function DemoCatalogPage() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <App_layout>
      <div className="bg-black text-white">

        {/* 🔹 HEADER */}
        <section className="relative py-32 text-center px-6 overflow-hidden">
          <Image
            src="/home/products.jpg"
            alt="Background"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 max-w-3xl mx-auto" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Product Demo & Catalog
            </h1>
            <p className="text-gray-300 mt-4">
              Explore detailed demonstrations and download product catalogs.
            </p>
          </div>
        </section>

        {/* 🔹 DEMO SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div data-aos="fade-right" className="space-y-5">
            <h2 className="text-3xl font-semibold text-yellow-400">
              Product Demonstrations
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Watch how our solutions work in real-world applications.
            </p>

            <button
              onClick={() => setPlayVideo(!playVideo)}
              className="px-8 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300 rounded-md"
            >
              {playVideo ? "Close Demo" : "Watch Demo"}
            </button>
          </div>

          {/* VIDEO / IMAGE */}
          <div
            data-aos="fade-left"
            className="relative w-full h-[260px] sm:h-[320px] md:h-[350px] rounded-xl overflow-hidden border border-yellow-500/20"
          >
            {!playVideo ? (
              <>
                <Image
                  src="/home/tms treatment-3.jpg"
                  alt="Demo"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    onClick={() => setPlayVideo(true)}
                    className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center cursor-pointer hover:scale-110 transition"
                  >
                    ▶
                  </div>
                </div>
              </>
            ) : (
              <video
                key={playVideo ? "play" : "stop"}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/vedio1.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </section>

        {/* 🔹 CATALOG SECTION */}
        <section className="bg-gradient-to-b from-black to-[#111111] py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">

            <h2 className="text-3xl md:text-4xl text-yellow-400 mb-4">
              Download Catalog
            </h2>

            <p className="text-gray-400 mb-12">
              Access detailed product specifications and information.
            </p>

            {/* ✅ PERFECT 2-COLUMN CENTERED */}
            <div className="grid sm:grid-cols-2 gap-10">

              {/* PRODUCT 1 */}
              <div className="p-6 border border-yellow-500/20 rounded-xl hover:scale-105 transition bg-black text-left">
                <Image
                  src="/home/tms_brochure.jpg"
                  alt="TMS"
                  width={400}
                  height={250}
                  className="rounded-md mb-4 w-full"
                />

                <h3 className="text-xl mb-2">TMS Catalog</h3>

                <p className="text-gray-400 text-sm mb-4">
                  Detailed specifications and guide.
                </p>

                <a
                  href="/home/tms_brochure.jpg"
                  download
                  className="inline-block px-6 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition rounded"
                >
                  Download
                </a>
              </div>

              {/* PRODUCT 2 */}
              <div className="p-6 border border-yellow-500/20 rounded-xl hover:scale-105 transition bg-black text-left">
                <Image
                  src="/home/ems_brochure.jpg"
                  alt="PMS"
                  width={400}
                  height={250}
                  className="rounded-md mb-4 w-full"
                />

                <h3 className="text-xl mb-2">PMS Catalog</h3>

                <p className="text-gray-400 text-sm mb-4">
                  Complete details and features.
                </p>

                <a
                  href="/home/ems_brochure.jpg"
                  download
                  className="inline-block px-6 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition rounded"
                >
                  Download
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 🔹 CTA */}
        <section className="py-20 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4">
              Need More Information?
            </h2>

            <p className="text-gray-400 mb-6">
              Contact us for product inquiries.
            </p>

            <Link href="/contact">
              <button className="px-8 py-3 bg-yellow-400 text-black hover:bg-yellow-300 transition rounded-md">
                Contact Us
              </button>
            </Link>
          </div>
        </section>

      </div>
    </App_layout>
  );
}