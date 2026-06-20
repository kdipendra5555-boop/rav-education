  import React from "react";
  import { ArrowRight } from "lucide-react";
  import { motion } from "framer-motion";
  import { Link } from "react-router-dom";

  export default function UnnatiSection() {
    return (
    <section className="relative overflow-hidden bg-[#f8f7f4] min-h-screen flex items-center">

    {/* Dots */}
    <div className="absolute bottom-12 left-8 grid grid-cols-4 gap-4 opacity-60">
      {[...Array(16)].map((_, i) => (
        <span key={i} className="w-1 h-1 rounded-full bg-[#C89C4B]" />
      ))}
    </div>

  <div className="w-full pl-12 lg:pl-32 xl:pl-40">
      <div className="grid lg:grid-cols-[42%_58%] items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[650px]"
        >
          <h1
            className="text-[80px] md:text-[120px] leading-none font-medium tracking-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            <span className="text-[#081936]">UNN</span>
            <span className="text-[#C89C4B]">Ā</span>
            <span className="text-[#081936]">TI</span>
          </h1>

          <div className="flex items-center gap-5 mt-3">
            <div className="w-14 h-px bg-[#C89C4B]" />
            <p
              className="uppercase tracking-[8px] text-[#081936] text-sm"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Beyond The Classroom
            </p>
            <div className="w-14 h-px bg-[#C89C4B]" />
          </div>

          <h2
            className="mt-10 text-[32px] md:text-[56px] leading-tight text-[#C89C4B]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Empowering Every Student to
            Learn, Grow and Succeed.
          </h2>

          <p className="mt-8 text-gray-600 text-lg leading-10 max-w-xl">
            UNNATI is Raman Arnava Vidyalaya's academic support initiative
            designed to provide personalized guidance, concept clarity and
            continuous learning opportunities beyond regular classroom teaching.
          </p>

          <Link
  to="/unnati/student/enroll"
  className="group mt-10 bg-[#081936] text-white px-8 py-5 rounded-xl shadow-xl flex items-center gap-4 uppercase tracking-[3px] hover:scale-105 transition-all duration-300 w-fit"
>
  Discover Unnati
  <ArrowRight size={20} />
</Link>
        </motion.div>

        {/* RIGHT */}
        <motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative flex justify-end h-[620px]"
  >
    {/* Gold Border */}
    <div
      className="
        absolute
        inset-40
        border
        border-[#C89C4B]
        rounded-tl-[220px]
        rounded-bl-[220px]
    
        scale-[1.02]
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
        rounded-tl-[220px]
        rounded-bl-[220px]
      
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >
      <img
        src="/images/unnati.png"
        alt="UNNATI"
        className="
          w-full
          h-full
          object-cover
          object-center
        "
      />
    </div>
  </motion.div>

      </div>
    </div>
  </section>
    );
  }