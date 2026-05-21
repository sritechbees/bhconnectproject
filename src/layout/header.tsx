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
  ];

  // =========================================
  // SCROLL EFFECT
  // =========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isHomePage
            ? scrolled
              ? "bg-[#0b0b0b]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
              : "bg-transparent"
            : "bg-[#0b0b0b]/95 backdrop-blur-2xl border-b border-white/10 shadow-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] sm:h-[82px] lg:h-[92px]">
            
            {/* ========================================= */}
            {/* LOGO */}
            {/* ========================================= */}

            <Link
              href="/"
              className="relative flex items-center flex-shrink-0 group"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/home/BH logoo.png"
                  alt="BH Connected"
                  width={180}
                  height={70}
                  priority
                  className="
                    w-[110px]
                    xs:w-[120px]
                    sm:w-[145px]
                    md:w-[155px]
                    lg:w-[175px]
                    xl:w-[185px]
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

            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative group font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-[#fed42a]"
                        : "text-white hover:text-[#fed42a]"
                    } text-[15px] xl:text-[16px]`}
                  >
                    {link.name}

                    {/* Animated Underline */}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-[#fed42a] transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
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
                  px-6 xl:px-7
                  py-2.5 xl:py-3
                  bg-[#fed42a]
                  text-black
                  text-sm xl:text-[15px]
                  font-semibold
                  transition-all
                  duration-500
                  hover:scale-105
                  shadow-[0_0_25px_rgba(254,212,42,0.25)]
                "
              >
                {/* Hover Effect */}

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
                w-10
                h-10
              "
              aria-label="Toggle Menu"
            >
              <span
                className={`absolute w-6 h-[2px] bg-[#fed42a] transition-all duration-300 ${
                  menuOpen
                    ? "rotate-45"
                    : "-translate-y-2"
                }`}
              />

              <span
                className={`absolute w-6 h-[2px] bg-[#fed42a] transition-all duration-300 ${
                  menuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              <span
                className={`absolute w-6 h-[2px] bg-[#fed42a] transition-all duration-300 ${
                  menuOpen
                    ? "-rotate-45"
                    : "translate-y-2"
                }`}
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
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
              className="
                lg:hidden
                fixed
                top-[72px]
                sm:top-[82px]
                left-0
                w-full
                h-[calc(100vh-72px)]
                sm:h-[calc(100vh-82px)]
                bg-[#050505]/95
                backdrop-blur-2xl
                border-t
                border-white/10
                overflow-y-auto
              "
            >
              <div className="flex flex-col px-6 sm:px-8 py-10">
                
                {/* NAVIGATION LINKS */}

                <div className="flex flex-col gap-7">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.08,
                          duration: 0.4,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`relative text-[18px] sm:text-[20px] font-semibold tracking-wide transition-all duration-300 ${
                            isActive
                              ? "text-[#fed42a]"
                              : "text-white hover:text-[#fed42a]"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* MOBILE BUTTON */}

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.4,
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
                      px-8
                      py-3.5
                      text-black
                      text-sm
                      sm:text-[15px]
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

                {/* EXTRA MOBILE EFFECT */}

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