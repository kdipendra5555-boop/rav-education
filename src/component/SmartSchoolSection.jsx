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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SmartSchoolSection = () => {
  const text = "A New Era of Smart Learning".split(" ");

  return (
    <section className="relative bg-[#0b0f1a] text-white py-32 px-6 md:px-20 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🔥 LEFT CONTENT */}
        <div>
          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-semibold leading-[1.25] pb-2"
          >
            {text.map((wordText, index) => (
              <motion.span
                key={index}
                variants={word}
                className="inline-block mr-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              >
                {wordText}
              </motion.span>
            ))}
          </motion.h2>

          {/* Moto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-xl font-semibold text-white"
          >
             Be Your Own Light
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <Link
              to="/smart-school"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-medium hover:scale-105 hover:bg-gray-200 transition-all duration-300 shadow-lg"
            >
              Explore Smart School
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* 🔥 RIGHT SIDE ANIMATION (FIXED POSITION) */}
        <div className="relative hidden md:flex justify-center items-center h-[400px]">

          {/* Orb 1 */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 30, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[260px] h-[260px] bg-blue-500/30 rounded-full blur-3xl"
          />

          {/* Orb 2 */}
          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, -40, 40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[220px] h-[220px] bg-purple-500/30 rounded-full blur-3xl"
          />

          {/* Orb 3 */}
          <motion.div
            animate={{
              y: [0, -30, 30, 0],
              x: [0, 20, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[180px] h-[180px] bg-green-400/30 rounded-full blur-3xl"
          />

          {/* Center element */}
          <div className="relative w-[120px] h-[120px] border border-white/10 rounded-full backdrop-blur-md" />
        </div>

      </div>
    </section>
  );
};

export default SmartSchoolSection;