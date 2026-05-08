"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-20 pb-8 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#fed42a]/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#fed42a]/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* LOGO + ABOUT */}
          <div
            data-aos="fade-up"
            className="group"
          >
            <Link href="/">
              <div className="flex flex-col gap-5 cursor-pointer">

                <Image
                  src="/home/logo.png"
                  alt="iMESUSA Logo"
                  width={180}
                  height={60}
                  className="object-contain transition duration-500 group-hover:scale-105"
                />

                <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                  Advanced medical technologies designed to improve healthcare
                  outcomes and support modern wellness environments through
                  innovation and quality.
                </p>

              </div>
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="text-xl font-semibold mb-6 text-[#fed42a]">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">

              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about/aboutpage" },
                { name: "Products", link: "/products/productpage" },
                { name: "Resources", link: "/democatalog/democatalogpage" },
                { name: "Contact", link: "/contact/contactsection" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-[#fed42a] transition duration-300"
                  >

                    {/* Animated Line */}
                    <span className="w-0 group-hover:w-3 h-[1.5px] bg-[#fed42a] transition-all duration-300"></span>

                    {/* Link Text */}
                    <span className="group-hover:translate-x-1 transition duration-300">
                      {item.name}
                    </span>

                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* CONTACT */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold mb-3 text-[#fed42a]">
              Contact Information
            </h3>

            <div className="text-sm text-gray-400 leading-relaxed">

              
              <div className="p-4 ">

                <p className="text-white font-medium mb-2">
                  Contact Details
                </p>

                <p>
                  Tel. 1588-7395
                </p>

                <p>
                  Fax. 031-606-5757
                </p>
              </div>

              <div className="p-4">

                <p className="text-white font-medium mb-2">
                  Address
                </p>

                <p className="leading-7">
                  21-7, Wiryeseo-1-gil, Seongnam-si,
                  Sujeong-gu, Gyeonggi-do, 13647,
                  Republic of Korea (Changgok-dong)
                </p>
              </div>

            </div>
          </div>

        </div>
{/* Divider */}
<div
  data-aos="fade-up"
  data-aos-delay="400"
  className="mt-16 pt-8 border-t border-gradient-to-r from-transparent via-white/10 to-transparent"
>

  <div className="flex flex-col md:flex-row items-center justify-between gap-5">

    {/* Copyright */}
    <div className="flex items-center gap-3">

      {/* Small Glow Dot */}
      <div className="w-2 h-2 rounded-full bg-[#fed42a] shadow-[0_0_12px_#fed42a] animate-pulse"></div>

      <p className="text-sm text-gray-300 text-center md:text-left tracking-wide">
        © REMED. All Rights Reserved.
      </p>

    </div>

    {/* Footer Links */}
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">

      <span className="relative cursor-pointer text-gray-500 hover:text-[#fed42a] transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#fed42a] hover:after:w-full after:transition-all after:duration-300">
        Privacy Policy
      </span>

      <div className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block"></div>

      <span className="relative cursor-pointer text-gray-500 hover:text-[#fed42a] transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#fed42a] hover:after:w-full after:transition-all after:duration-300">
        Terms of Service
      </span>

    </div>

  </div>
</div>
      </div>
    </footer>
  );
}