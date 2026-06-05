"use client";

import Head from "next/head";
import App_layout from "@/layout/app_layout";

import DemoHeroSection from "./demoherosection";
import Downloadcatalog from "./downloadcatalog";
import ProductDemonstrations from "./productdemonstrations";
import Link from "next/link";

export default function DemoCatalogPage() {
  return (
    <App_layout>
      <Head>
        <title>BH Connected | Product Demo & Catalog</title>
      </Head>

      <main className="bg-black text-white overflow-hidden">
        
        {/* Hero Section */}
        <DemoHeroSection />
         {/* Product Demonstrations */}
        <section className="">
          <ProductDemonstrations />
        </section>

        {/* Download Catalog */}
        <section className="">
          <Downloadcatalog />
        </section>

       

        {/* CTA Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fed42a]/5 via-transparent to-[#fed42a]/5" />

          <div
            data-aos="fade-up"
            className="
              relative z-10
              max-w-5xl
              mx-auto
              rounded-[30px]
              md:rounded-[40px]
              
              bg-gradient-to-br
              from-[#111111]
              to-black
              px-6
              sm:px-10
              md:px-20
              py-8
              md:py-16
              text-center
            "
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Need More Information?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Contact us for product inquiries, demonstrations,
              and detailed healthcare technology information.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              
              <Link href="/contact/contactsection">
                <button
                  className="
                    w-full sm:w-auto
                    px-8 py-4
                    rounded-full
                    bg-[#fed42a]
                    text-black
                    font-semibold
                    hover:bg-yellow-300
                    transition-all
                    duration-300
                  "
                >
                  Contact Us
                </button>
              </Link>

              <Link href="/democatalog/gallerypage">
                <button
                  className="
                    w-full sm:w-auto
                    px-8 py-4
                    rounded-full
                    border border-white/20
                    bg-white/5
                    backdrop-blur-md
                    hover:border-[#fed42a]
                    hover:text-[#fed42a]
                    transition-all
                    duration-300
                  "
                >
                  Explore Gallery
                </button>
              </Link>

            </div>
          </div>
        </section>
      </main>
    </App_layout>
  );
}