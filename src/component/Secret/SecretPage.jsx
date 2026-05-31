import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SecretPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white overflow-hidden px-6">

      {/* 🔥 BACKGROUND BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f3d] via-[#071428] to-black" />

      {/* 💜 CENTER SOFT GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full" />

      {/* 🔵 SIDE GLOW (subtle) */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full top-[-100px] right-[-100px]" />

      {/* ✨ LIGHT GRID (very subtle) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-5xl">

        {/* 🔤 HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-semibold"
        >
          A Deep Love For
        </motion.h2>

        {/* ❤️ SUB TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-gray-400 text-xl md:text-2xl"
        >
          <span className="text-red-500">❤️</span>
        </motion.p>

        {/* 🔥 DOPS TEXT */}
        <motion.h1
          className="mt-6 
  text-[120px] md:text-[200px] lg:text-[260px] xl:text-[320px]
  font-extrabold leading-none tracking-tight
  bg-gradient-to-r from-pink-400 via-white to-pink-400 bg-[length:200%_100%] 
  text-transparent bg-clip-text 
  drop-shadow-[0_0_40px_rgba(236,72,153,0.6)]"

          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          DOPS
        </motion.h1>

        {/* 🚀 BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4"
        >

          <Link
            to="/admin-events-secret"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl transition"
          >
            ➕ Add Event
          </Link>

          <Link
            to="/events"
            className="px-6 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition"
          >
            View Events
          </Link>

          {/* 📢 ADD NOTICE */}
          <Link
            to="/admin-notice-secret"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl transition"
          >
            📢 Add Notice
          </Link>

        </motion.div>

      </div>

    </div>
  );
}