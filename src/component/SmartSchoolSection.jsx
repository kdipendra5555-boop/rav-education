import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const word = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SmartSchoolSection() {
  const text = "A New Era of Smart Learning".split(" ");

  return (
    <section className="relative overflow-hidden bg-[#040816] px-5 py-20 text-white sm:px-8 md:px-12 lg:px-20 lg:py-28">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_28%)]"></div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT */}
        <div className="relative">

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] font-medium tracking-wide text-blue-200 backdrop-blur-xl sm:text-sm"
          >
            Smart Education Platform
          </motion.div>

         {/* Heading */}
<motion.h2
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    mt-7
    max-w-5xl
    overflow-visible
    text-[3rem]
    font-[500]
    leading-[1.12]
    tracking-[-2.5px]
    text-white
    sm:text-[4.5rem]
    md:text-[6rem]
  "
>
  {text.map((wordText, index) => (
    <motion.span
      key={index}
      variants={word}
      className="
        mr-3
        inline-block
        pb-[0.18em]
        align-top
        bg-gradient-to-b
        from-white
        via-slate-200
        to-slate-500
        bg-clip-text
        text-transparent
      "
      style={{
        lineHeight: "1.12",
      }}
    >
      {wordText}
    </motion.span>
  ))}
</motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-7 max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-lg"
          >
            Experience immersive classrooms, AI-powered learning,
            digital collaboration, and next-generation education
            designed for future innovators.
          </motion.p>

          {/* Motto */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center gap-3"
          >

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-[10px] w-[10px] rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]"
            />

            <p className="text-base font-medium text-white sm:text-lg">
              Be Your Own Light
            </p>

          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-10"
          >

            <Link
              to="/smart-school"
              className="group inline-flex h-[56px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-gray-100"
            >
              Explore Smart School

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </motion.div>

        </div>

        {/* RIGHT VISUAL */}
       {/* FUTURISTIC SERVER + DATABASE NETWORK */}
{/* FUTURISTIC SERVER VISUAL ONLY */}
<div className="relative flex h-[420px] items-center justify-center overflow-hidden sm:h-[560px] md:h-[700px]">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)]" />

  {/* Ambient Blur */}
  <motion.div
    animate={{
      scale: [1, 1.12, 1],
      opacity: [0.25, 0.45, 0.25],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute h-[240px] w-[240px] rounded-full bg-cyan-500/20 blur-[90px] sm:h-[420px] sm:w-[420px]"
  />

  {/* OUTER RING */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute h-[240px] w-[240px] rounded-full border border-cyan-400/10 sm:h-[420px] sm:w-[420px]"
  />

  {/* SECOND RING */}
  <motion.div
    animate={{ rotate: -360 }}
    transition={{
      duration: 50,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute h-[180px] w-[180px] rounded-full border border-cyan-400/10 sm:h-[320px] sm:w-[320px]"
  />

  {/* FLOATING PARTICLES */}
  {[1, 2, 3, 4].map((item, index) => (
    <motion.div
      key={item}
      animate={{
        y: [0, -18, 0],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 4 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${
        index === 0
          ? "left-[18%] top-[22%]"
          : index === 1
          ? "right-[20%] top-[28%]"
          : index === 2
          ? "bottom-[24%] left-[22%]"
          : "bottom-[18%] right-[18%]"
      }`}
    >
      <div className="h-[10px] w-[10px] rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]" />
    </motion.div>
  ))}

  {/* SERVER STACK */}
  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-30 flex flex-col gap-5"
  >

    {[1, 2, 3].map((item) => (
      <motion.div
        key={item}
        whileHover={{
          scale: 1.03,
        }}
        className="group relative h-[78px] w-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] shadow-[0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-3xl sm:h-[90px] sm:w-[340px] md:h-[100px] md:w-[420px]"
      >

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-[28px] border border-cyan-400/10" />

        {/* Moving Shine */}
        <motion.div
          animate={{ x: [-200, 500] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 h-full w-[90px] bg-white/10 blur-2xl"
        />

        {/* Top Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-transparent opacity-70" />

        <div className="relative flex h-full items-center justify-between px-5 sm:px-7 md:px-8">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* Server Indicator */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: item * 0.3,
              }}
              className="h-[12px] w-[12px] rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]"
            />

            {/* Mini Bars */}
            <div className="space-y-2">
              <div className="h-[5px] w-[70px] rounded-full bg-white/15 sm:w-[90px]" />
              <div className="h-[5px] w-[50px] rounded-full bg-white/10 sm:w-[70px]" />
            </div>

          </div>

          {/* RIGHT DATA FLOW */}
          <div className="relative h-[7px] w-[70px] overflow-hidden rounded-full bg-white/10 sm:w-[120px] md:w-[150px]">

            <motion.div
              animate={{ x: [-50, 180] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 h-full w-[40px] rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"
            />

          </div>

        </div>

      </motion.div>
    ))}

  </motion.div>

</div>

      </div>
    </section>
  );
}