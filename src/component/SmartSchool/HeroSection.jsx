import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function HeroSection() {
  return (
    <div className="w-full h-screen bg-[#0b0b0b] flex items-center justify-center relative overflow-hidden">
      
      {/* Animated Glow Background */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
            "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)",
            "linear-gradient(to right, #22c55e, #3b82f6, #8b5cf6)",
            "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
          ],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
      />

      {/* Content */}
      <div className="relative w-full max-w-6xl px-6 flex flex-col items-center justify-center text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-green-400/30 text-green-400 text-sm flex items-center gap-2 backdrop-blur-sm bg-white/5"
        >
          ✨ Nurturing Minds Since 2027
        </motion.div>

        {/* Main Heading (Bigger) */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-white font-semibold leading-tight text-6xl md:text-7xl lg:text-8xl"
        >
          Shaping Minds for the Digital Future.
        </motion.h1>

        {/* Sub Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-gray-300 text-base md:text-lg lg:text-xl tracking-[0.25em] uppercase font-medium"
        >
          BE YOUR OWN LIGHT
        </motion.p>

        {/* Buttons (Moved Down) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-4 mt-10"
        >
          <Link
  to="/book-visit"
  className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-full text-sm md:text-base font-medium shadow-lg hover:scale-105 transition inline-block"
>
  Book A Tech Visit
</Link>

          <button className="px-7 py-3 rounded-full border border-white/20 text-gray-300 text-sm md:text-base font-medium hover:bg-white/10 transition">
            Watch Video
          </button>
        </motion.div>

      </div>
    </div>
  );
}