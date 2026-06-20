import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function UnnatiSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f4] py-20 lg:py-0 lg:min-h-screen flex items-center">

      {/* Decorative Dots */}
      <div className="hidden lg:grid absolute bottom-12 left-8 grid-cols-4 gap-4 opacity-60">
        {[...Array(16)].map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-[#C89C4B]" />
        ))}
      </div>

      <div className="w-full px-5 sm:px-8 lg:pl-24 xl:pl-40 lg:pr-0">
        <div className="grid lg:grid-cols-[42%_58%] gap-14 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-[650px] order-2 lg:order-1"
          >
            <h1
              className="text-[56px] sm:text-[80px] md:text-[110px] lg:text-[120px] leading-none font-medium tracking-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              <span className="text-[#081936]">UNN</span>
              <span className="text-[#C89C4B]">Ā</span>
              <span className="text-[#081936]">TI</span>
            </h1>

            <div className="flex items-center gap-3 md:gap-5 mt-4">
              <div className="w-8 md:w-14 h-px bg-[#C89C4B]" />

              <p
                className="uppercase tracking-[3px] md:tracking-[8px] text-[#081936] text-[10px] md:text-sm whitespace-nowrap"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Beyond The Classroom
              </p>

              <div className="w-8 md:w-14 h-px bg-[#C89C4B]" />
            </div>

            <h2
              className="mt-8 md:mt-10 text-[32px] sm:text-[42px] md:text-[56px] leading-tight text-[#C89C4B]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Empowering Every Student to
              Learn, Grow and Succeed.
            </h2>

            <p className="mt-6 md:mt-8 text-gray-600 text-base md:text-lg leading-8 md:leading-10 max-w-xl">
              UNNATI is Raman Arnava Vidyalaya's academic support initiative
              designed to provide personalized guidance, concept clarity and
              continuous learning opportunities beyond regular classroom
              teaching.
            </p>

            <Link
              to="/unnati/student/enroll"
              className="group mt-8 md:mt-10 bg-[#081936] text-white px-6 md:px-8 py-4 md:py-5 rounded-xl shadow-xl flex items-center gap-3 md:gap-4 uppercase tracking-[2px] md:tracking-[3px] hover:scale-105 transition-all duration-300 w-fit text-sm"
            >
             Enroll Here
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end h-[320px] sm:h-[450px] md:h-[550px] lg:h-[620px] order-1 lg:order-2"
          >
            {/* Gold Border */}
            <div
              className="
                absolute
                inset-2
                md:inset-5
                lg:inset-8
                border
                border-[#C89C4B]
                rounded-tl-[80px]
                rounded-bl-[80px]
                md:rounded-tl-[140px]
                md:rounded-bl-[140px]
                lg:rounded-tl-[220px]
                lg:rounded-bl-[220px]
              "
            />

            {/* Image */}
            <div
              className="
                relative
                overflow-hidden
                h-full
                w-full
                max-w-[760px]
                bg-white
                rounded-tl-[80px]
                rounded-bl-[80px]
                md:rounded-tl-[140px]
                md:rounded-bl-[140px]
                lg:rounded-tl-[220px]
                lg:rounded-bl-[220px]
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              <img
                src="/images/unnati.png"
                alt="UNNATI"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}