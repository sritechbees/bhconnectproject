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
    <footer className="bg-[#0a0a0a] text-white overflow-hidden">

      {/* ========================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">

        {/* ========================================= */}
        {/* MAIN GRID */}
        {/* ========================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-10">

          {/* ========================================= */}
          {/* LOGO + ABOUT */}
          {/* ========================================= */}

          <div
            data-aos="fade-up"
            className="
              flex
              flex-col
              items-center
              md:items-start
              text-center
              md:text-left
            "
          >
            <Link href="/">
              <div className="group flex flex-col items-center md:items-start gap-5 cursor-pointer">

                {/* LOGO */}

                <Image
                  src="/home/BH logo4.png"
                  alt="BH Connected Logo"
                  width={185}
                  height={60}
                  className="
                    w-[140px]
                    sm:w-[160px]
                    md:w-[175px]
                    lg:w-[185px]
                    h-auto
                    object-contain
                    transition-all
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* ABOUT TEXT */}

                <p className="text-sm sm:text-[15px] text-gray-400 leading-7 max-w-sm">
                  Advanced medical technologies designed to improve healthcare
                  outcomes and support modern wellness environments through
                  innovation and quality.
                </p>

              </div>
            </Link>
          </div>

          {/* ========================================= */}
          {/* QUICK LINKS */}
          {/* ========================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="
              flex
              flex-col
              items-center
              text-center
            "
          >
            <h3 className="text-[22px] font-semibold mb-8 text-[#fed42a]">
              Quick Links
            </h3>

            <ul className="space-y-5 text-sm sm:text-[15px]">

              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about/aboutpage" },
                { name: "Products", link: "/products/productpage" },
                {
                  name: "Demo & Catalog",
                  link: "/democatalog/democatalogpage",
                },
                { name: "Contact", link: "/contact/contactsection" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="
                      group
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      text-gray-400
                      hover:text-[#fed42a]
                      transition-all
                      duration-300
                    "
                  >

                    {/* ANIMATED LINE */}

                    <span className="w-0 group-hover:w-4 h-[1.5px] bg-[#fed42a] transition-all duration-300"></span>

                    {/* LINK TEXT */}

                    <span className="group-hover:translate-x-1 transition duration-300">
                      {item.name}
                    </span>

                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* ========================================= */}
          {/* CONTACT INFORMATION */}
          {/* ========================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="
              flex
              flex-col
              items-center
              md:items-start
              text-center
              md:text-left
            "
          >
            <h3 className="text-[22px] font-semibold mb-6 text-[#fed42a]">
              Contact Information
            </h3>

            <div className="text-sm sm:text-[15px] text-gray-400 leading-relaxed space-y-5">

              {/* PHONE */}

              <div>
                <p className="text-white font-medium mb-1">
                  Phone
                </p>

                <p className="hover:text-[#fed42a] transition duration-300">
                  949.838.7924
                </p>
              </div>

              {/* EMAIL */}

              <div>
                <p className="text-white font-medium mb-1">
                  Email
                </p>

                <a
                  href="mailto:Sales@BHconnected.com"
                  className="hover:text-[#fed42a] transition duration-300 break-all"
                >
                  Sales@BHconnected.com
                </a>
              </div>

              {/* ADDRESS */}

              <div>
                <p className="text-white font-medium mb-1">
                  Address
                </p>

                <p className="leading-7">
                  Aliso Viejo,<br />
                  CA 92656,<br />
                  USA
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================= */}
        {/* DIVIDER */}
        {/* ========================================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-14 pt-8 border-t border-white/10"
        >

          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

            {/* COPYRIGHT */}

            <div className="flex items-center gap-3 text-center lg:text-left">

              <div className="w-2 h-2 rounded-full bg-[#fed42a] animate-pulse"></div>

              <p className="text-sm sm:text-[15px] text-gray-300 tracking-wide">
                © BH Connected. All Rights Reserved.
              </p>

            </div>

            {/* FOOTER LINKS */}

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-[15px]">

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