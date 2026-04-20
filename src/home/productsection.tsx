"use client";

import { products } from "@/data/products";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductSection() {
  return (
    <section className="bg-[#111111] text-white py-20 px-4">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Our Products
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >

              {/* Video / Image */}
              <div className="relative overflow-hidden rounded-xl">

                {product.video ? (
                  <video
                    src={product.video}
                    autoPlay
                    muted
                    loop
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
                  />
                )}

              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-medium">
                  {product.name}
                </h3>

                <p className="text-[#888888] mt-2 text-sm">
                  {product.description}
                </p>

                <button className="mt-4 text-sm border-b border-[#888888] hover:border-white transition">
                  Learn More →
                </button>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}