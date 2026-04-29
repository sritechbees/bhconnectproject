"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <Image
                src="/home/logoo.jpeg"
                alt="iMESUSA Logo"
                width={140}
                height={40}
                className="object-contain"
              />

              <p className="text-sm text-[#888888] leading-relaxed">
                Advanced medical technologies designed to improve healthcare outcomes
                and support modern wellness environments.
              </p>
            </motion.div>
          </Link>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about/aboutsection" },
                { name: "Products", link: "/products/twoproductsection" },
                { name: "Resources", link: "/resources/resouceshero" },
                { name: "Contact", link: "/contact/contacthero" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="text-[#888888] hover:text-white transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RESOURCES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-4">
              Resources
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                { name: "Catalog & Brochures", link: "/resources/downloadcatalog" },
                { name: "Product Videos", link: "/resources/viewresourse" },
                { name: "FDA & Compliance", link: "/resources/fdafooter" },
                { name: "Technology Overview", link: "/resources/techoverview" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="text-[#888888] hover:text-white transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-[#888888]">
              <li className="hover:text-white transition">
                sales@iMESusa.com
              </li>
              <li className="hover:text-white transition">
                949.838.7924
              </li>
              <li>United States</li>
            </ul>
          </motion.div>

        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#222] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#888888]"
        >

          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} iMESUSA. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-white transition">
              Terms of Service
            </span>
          </div>

        </motion.div>

      </div>
    </footer>
  );
}