import { motion } from "framer-motion";

export default function FreeForEveryone() {
  return (
    <section className="w-full bg-[#050505] py-56 md:py-80 relative overflow-hidden text-center">

      {/* Animated Background Glow */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* 🔥 BIG GRADIENT HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-7xl md:text-9xl lg:text-[120px] font-semibold leading-[1.05]"
        >
          <span className="gradient-text">
            Free for Everyone
          </span>
        </motion.h2>

        {/* 💬 HASHTAG */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-white text-xl md:text-2xl tracking-wider"
        >
          #free_education
        </motion.p>

        {/* ✨ SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 text-gray-400 text-xl md:text-2xl max-w-4xl leading-relaxed"
        >
          Education should never be limited by money. We provide high-quality,
          modern digital learning completely free for every student — because
          knowledge should be accessible to all.
        </motion.p>

      </div>

      {/* 🔥 SMOOTH LEFT → RIGHT GRADIENT ANIMATION */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            90deg,
            #22c55e,
            #3b82f6,
            #8b5cf6,
            #22c55e
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 12s linear infinite;
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>

    </section>
  );
}