"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/aboutpage" },
    { name: "Products", href: "/products/productpage" },
    { name: "Demo & Catalog", href: "/democatalog/democatalogpage" },
    { name: "Contact", href: "/contact/contactsection" },
     { name: "samplehero", href: "/samplehero/herosection" },
  ];

  // =========================================
  // SCROLL EFFECT
  // =========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================================
  // CLOSE MENU ON RESIZE
  // =========================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // =========================================
  // BODY SCROLL LOCK
  // =========================================

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const isHomePage = pathname === "/";

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${
            isHomePage
              ? scrolled
                ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-xl"
                : "bg-transparent"
              : "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-xl"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px] sm:h-[74px] lg:h-[96px]">

            {/* ========================================= */}
            {/* LOGO */}
            {/* ========================================= */}

            <Link
              href="/"
              className="relative flex items-center flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/home/BH logo4.png"
                  alt="BH Connected"
                  width={160}
                  height={60}
                  priority
                  className="
                    w-[90px]
                    xs:w-[100px]
                    sm:w-[115px]
                    md:w-[125px]
                    lg:w-[145px]
                    xl:w-[155px]
                    h-auto
                    object-contain
                    transition-all
                    duration-300
                  "
                />
              </motion.div>
            </Link>

            {/* ========================================= */}
            {/* DESKTOP NAVIGATION */}
            {/* ========================================= */}

            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      relative
                      group
                      font-medium
                      tracking-wide
                      transition-all
                      duration-300
                      text-[14px]
                      xl:text-[15px]
                      ${
                        isActive
                          ? "text-[#fed42a]"
                          : "text-white hover:text-[#fed42a]"
                      }
                    `}
                  >
                    {link.name}

                    {/* UNDERLINE */}

                    <span
                      className={`
                        absolute
                        left-0
                        -bottom-2
                        h-[2px]
                        bg-[#fed42a]
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ========================================= */}
            {/* DESKTOP BUTTON */}
            {/* ========================================= */}

            <div className="hidden lg:flex items-center">
              <Link
                href="/contact/inquiryform"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  px-5
                  xl:px-6
                  py-2.5
                  bg-[#fed42a]
                  text-black
                  text-sm
                  font-semibold
                  transition-all
                  duration-500
                  hover:scale-105
                  shadow-[0_0_20px_rgba(254,212,42,0.20)]
                "
              >
                <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                <span className="relative z-10">
                  Inquiry
                </span>
              </Link>
            </div>

            {/* ========================================= */}
            {/* MOBILE MENU BUTTON */}
            {/* ========================================= */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                lg:hidden
                relative
                z-[60]
                flex
                flex-col
                justify-center
                items-center
                w-9
                h-9
              "
              aria-label="Toggle Menu"
            >
              {/* TOP */}

              <span
                className={`
                  absolute
                  w-5
                  h-[2px]
                  bg-[#fed42a]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "rotate-45"
                      : "-translate-y-1.5"
                  }
                `}
              />

              {/* MIDDLE */}

              <span
                className={`
                  absolute
                  w-5
                  h-[2px]
                  bg-[#fed42a]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              {/* BOTTOM */}

              <span
                className={`
                  absolute
                  w-5
                  h-[2px]
                  bg-[#fed42a]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "-rotate-45"
                      : "translate-y-1.5"
                  }
                `}
              />
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* MOBILE MENU */}
        {/* ========================================= */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="
                lg:hidden
                fixed
                top-[68px]
                sm:top-[74px]
                left-0
                w-full
                h-[calc(100vh-68px)]
                sm:h-[calc(100vh-74px)]
                bg-black/95
                backdrop-blur-2xl
                border-t
                border-white/10
                overflow-y-auto
              "
            >
              <div className="flex flex-col px-6 sm:px-8 py-10">

                {/* MOBILE NAV LINKS */}

                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.07,
                          duration: 0.35,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`
                            text-[17px]
                            sm:text-[18px]
                            font-semibold
                            tracking-wide
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "text-[#fed42a]"
                                : "text-white hover:text-[#fed42a]"
                            }
                          `}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* MOBILE BUTTON */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.35,
                  }}
                  className="mt-10"
                >
                  <Link
                    href="/contact/inquiryform"
                    onClick={() => setMenuOpen(false)}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fed42a]
                      px-7
                      py-3
                      text-black
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      hover:scale-105
                      shadow-[0_0_30px_rgba(254,212,42,0.25)]
                    "
                  >
                    Inquiry
                  </Link>
                </motion.div>

                {/* GLOW EFFECT */}

                <div className="mt-16 flex justify-center">
                  <div className="w-40 h-40 bg-[#fed42a]/10 blur-3xl rounded-full" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}