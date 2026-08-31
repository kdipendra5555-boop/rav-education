import { motion } from "framer-motion";

export default function FreeEducationHighlight() {
  return (
    <section className="relative overflow-hidden py-36 px-6 bg-gradient-to-br from-white via-green-50 to-yellow-50">

      {/* Soft Glow Background */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-yellow-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Glass Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200 shadow-sm text-sm text-gray-600 mb-10"
        >
          🌍 Education Without Limits
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
        >
          <span className="text-gray-900">Truly </span>

          <span className="relative inline-block">
            {/* Glow Behind FREE */}
            <span className="absolute inset-0 bg-gradient-to-r from-green-300 to-yellow-300 blur-2xl opacity-40 rounded-xl"></span>

            {/* FREE TEXT */}
            <span className="relative bg-gradient-to-r from-green-600 via-green-500 to-yellow-500 bg-clip-text text-transparent">
              FREE
            </span>
          </span>

          <br />

          <span className="text-gray-900">Education for Everyone</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          No hidden charges. No barriers. Just pure learning.  
          We provide access to quality education, technology, and opportunities — 
          completely free, because every child deserves a future.
        </motion.p>

        {/* Premium Info Cards */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">

          {[
            "Zero Fees",
            "Free Resources",
            "Equal Opportunity",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-gray-200 shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-800 font-semibold">{item}</p>
            </motion.div>
          ))}

        </div>

        {/* Bottom Highlight Line */}
        <div className="mt-14 h-[3px] w-32 mx-auto bg-gradient-to-r from-green-500 to-yellow-400 rounded-full"></div>

      </div>
    </section>
  );
}