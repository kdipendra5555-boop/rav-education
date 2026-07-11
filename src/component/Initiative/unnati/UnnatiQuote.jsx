import React from "react";
import { motion } from "framer-motion";

export default function UnnatiQuote() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f4] py-28 md:py-40">

      {/* Decorative Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C89C4B]/5 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-[#C89C4B] text-xs md:text-sm"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          UNNATI
        </motion.p>

        {/* Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-[#C89C4B] mx-auto mt-6"
        />

        {/* Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            mt-12
            text-[34px]
            sm:text-[42px]
            md:text-[58px]
            lg:text-[66px]
            leading-[1.45]
            text-[#081936]
            font-light
          "
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          <span className="block">
            सपने गाँवों में भी जन्म लेते हैं,
          </span>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
            className="block mt-4"
          >
            उन्हें उड़ान देने का नाम है
            <span className="text-[#C89C4B]"> UNNATI</span>।
          </motion.span>
        </motion.h2>

        {/* Bottom Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-px bg-[#C89C4B] mx-auto mt-14"
        />

        {/* Small Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-500 text-sm tracking-[3px] uppercase"
        >
          Rural Education Initiative
        </motion.p>

      </div>
    </section>
  );
}