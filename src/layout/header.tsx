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
    { name: "About", href: "/about/about_us" },
    { name: "Products", href: "/products/producthero" },
    { name: "Resources", href: "/resources/resourceshero" },
    { name: "Core Program", href: "/coreprogram/corehero" },
    { name: "Contact", href: "/contact/contactsection" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111] shadow-lg border-b border-[#2A2A2A]"
          : "bg-[#111111]/80 backdrop-blur-md border-b border-[#2A2A2A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* 🔥 LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/home/logo3.png"
            alt="BH Connected Logo"
            width={160}
            height={60}
            priority
          />
        </Link>

        {/* 💻 DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group transition ${
                  isActive ? "text-[#C9A14A]" : "hover:text-[#C9A14A]"
                }`}
              >
                {link.name}

                {/* Gold underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-[#C9A14A] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* 🚀 CTA BUTTON */}
        <div className="hidden md:flex items-center pr-2">
          <Link
            href="/contact/inquiryform"
            className="relative flex items-center justify-start
            pl-7 pr-5 py-2.5 rounded-full font-medium 
            text-black bg-[#C9A14A] border border-[#C9A14A] 
            overflow-hidden group transition-all duration-500 
            hover:text-[#C9A14A]"
          >
            {/* Hover Animation */}
            <span className="absolute inset-0 bg-white scale-x-0 origin-left 
            group-hover:scale-x-100 transition-transform duration-500" />

            {/* Text shifted right */}
            <span className="relative z-10 tracking-wide text-center">
              Inquiry
            </span>
          </Link>
        </div>

        {/* 📱 MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-[2px] bg-[#C9A14A]" />
          <span className="w-6 h-[2px] bg-[#C9A14A]" />
          <span className="w-6 h-[2px] bg-[#C9A14A]" />
        </button>

      </div>

      {/* 📱 MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        } bg-[#111111] border-t border-[#2A2A2A]`}
      >
        <div className="flex flex-col px-6 py-6 space-y-6 text-gray-300 font-medium">

          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  isActive ? "text-[#C9A14A]" : "hover:text-[#C9A14A]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <Link
            href="/contact/inquiryform"
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-fit self-start px-6 py-2.5 rounded-full font-medium 
            text-black bg-[#C9A14A]"
          >
            Inquiry
          </Link>

        </div>
      </div>
    </header>
  );
}