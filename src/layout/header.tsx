"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================================
  // PAGE CHECK
  // =========================================

  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isHomePage
          ? scrolled
            ? "bg-[#0b0b0b]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent border-b border-transparent"
          : "bg-[#0b0b0b]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between py-4">

          {/* ========================================= */}
          {/* LOGO */}
          {/* ========================================= */}

          <Link
            href="/"
            className="flex items-center flex-shrink-0"
          >
            <Image
              src="/home/logoo.png"
              alt="BH Connected"
              width={170}
              height={60}
              priority
              className="w-[120px] sm:w-[145px] lg:w-[200px] h-auto object-contain"
            />
          </Link>

          {/* ========================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ========================================= */}

          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 group ${
                    isActive
                      ? "text-[#fed42a]"
                      : "text-white hover:text-[#fed42a]"
                  }`}
                >
                  {link.name}

                  {/* Underline Animation */}

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
              className="group relative overflow-hidden rounded-full px-7 py-3 bg-[#fed42a] text-black text-sm font-semibold transition-all duration-500 hover:scale-105"
            >

              {/* Hover Background */}

              <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

              {/* Text */}

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
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 relative z-50"
          >

            <span
              className={`w-6 h-[2px] bg-[#fed42a] transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-[7px]"
                  : ""
              }`}
            />

            <span
              className={`w-6 h-[2px] bg-[#fed42a] transition-all duration-300 ${
                menuOpen
                  ? "opacity-0"
                  : ""
              }`}
            />

            <span
              className={`w-6 h-[2px] bg-[#fed42a] transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45 -translate-y-[7px]"
                  : ""
              }`}
            />

          </button>

        </div>
      </div>

      {/* ========================================= */}
      {/* MOBILE MENU */}
      {/* ========================================= */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        } ${
          isHomePage && !scrolled
            ? "bg-black/90 backdrop-blur-xl"
            : "bg-[#0b0b0b]/95 backdrop-blur-xl"
        }`}
      >

        <div className="px-6 pt-2 pb-8 flex flex-col gap-6">

          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#fed42a]"
                    : "text-white hover:text-[#fed42a]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* MOBILE BUTTON */}

          <Link
            href="/contact/inquiryform"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-fit px-7 py-3 rounded-full bg-[#fed42a] text-black text-sm font-semibold hover:scale-105 transition-all duration-300"
          >
            Inquiry
          </Link>

        </div>

      </div>
    </header>
  );
}