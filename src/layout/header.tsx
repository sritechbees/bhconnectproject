"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/aboutpage" },
    { name: "Products", href: "/products/productpage" },
    { name: "Demo & Catalog", href: "/democatalog/democatalogpage" },
    { name: "Contact", href: "/contact/contactsection" },
   
  ];

  // CLOSE MENU ON DESKTOP

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // BODY SCROLL LOCK

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

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          h-[120px]
          py-2
          bg-black
      
        
          shadow-lg
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              flex
              items-center
              justify-between
              h-[70px]
              sm:h-[78px]
              lg:h-[88px]
            "
          >
            {/* ===================================== */}
            {/* LOGO */}
            {/* ===================================== */}

            <Link
              href="/"
              className="flex items-center flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/home/bhlogo1.png"
                  alt="BH Connected"
                  width={160}
                  height={60}
                  priority
                  className="
                    w-[90px]
                    sm:w-[95px]
                    md:w-[110px]
                    lg:w-[135px]
                    xl:w-[145px]
                    h-auto
                    object-contain mt-4
                  "
                />
              </motion.div>
            </Link>

            {/* ===================================== */}
            {/* DESKTOP NAVIGATION */}
            {/* ===================================== */}

            <nav className="hidden lg:flex items-center gap-7 mt-4 xl:gap-9">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      relative
                      group
                      text-[14px]
                      xl:text-[15px]
                      font-medium
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

            {/* ===================================== */}
            {/* DESKTOP BUTTON */}
            {/* ===================================== */}

            
            <Link href="/contact/inquiryform">
<button
      className="group relative overflow-hidden max-sm:hidden px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium transition-all duration-500 hover:scale-105"
    >
      {/* Overlay */}
      <span className="absolute inset-0 bg-[#fed42a] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

      {/* Text */}
      <span className="relative z-10 transition duration-500 group-hover:text-black">
        Inquiry
      </span>
    </button></Link>
            {/* ===================================== */}
            {/* MOBILE MENU BUTTON */}
            {/* ===================================== */}

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
              {/* TOP */}

              <span
                className={`
                  absolute
                  w-6
                  h-[2px]
                  bg-[#fed42a]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "rotate-45"
                      : "-translate-y-2"
                  }
                `}
              />

              {/* MIDDLE */}

              <span
                className={`
                  absolute
                  w-6
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
                  w-6
                  h-[2px]
                  bg-[#fed42a]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "-rotate-45"
                      : "translate-y-2"
                  }
                `}
              />
            </button>
          </div>
        </div>

        {/* ===================================== */}
        {/* MOBILE MENU */}
        {/* ===================================== */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.35 }}
              className="
                lg:hidden
                fixed
                top-[100px]
                sm:top-[78px]
                left-0
                w-full
                h-[calc(100vh-70px)]
                sm:h-[calc(100vh-78px)]
                bg-black
                
                overflow-y-auto
              "
            >
              <div className="flex flex-col px-6 sm:px-8 py-4">
                {/* MOBILE LINKS */}

                <div className="flex flex-col gap-7">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.08,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`
                            text-[18px]
                            sm:text-[20px]
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
                    delay: 0.3,
                  }}
                  className="mt-8"
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
                    "
                  >
                    Inquiry
                  </Link>
                </motion.div>

                {/* BOTTOM GLOW */}

                <div className="mt-16 flex justify-center">
                  <div
                    className="
                      w-44
                      h-44
                      rounded-full
                      bg-[#fed42a]/10
                      blur-3xl
                    "
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HEADER SPACING */}

      <div className="h-[70px] sm:h-[78px] lg:h-[88px]" />
    </>
  );
}