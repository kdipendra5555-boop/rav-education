import { motion } from "framer-motion";
import { BookOpen, Users, Sparkles } from "lucide-react";

export default function LibrarySection() {
  return (
    <section className="relative w-full py-28 px-4 overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#eef2f7] flex items-center justify-center">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-200 opacity-20 blur-3xl rounded-full top-[-100px] left-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-5xl w-full text-center">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center shadow-lg">
            <BookOpen size={30} />
          </div>
        </motion.div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-white/70 backdrop-blur shadow text-sm text-gray-600 mb-6">
          <Sparkles size={16} className="text-green-500" />
          Smart Learning Space
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          A Premium <span className="text-green-600">Smart Library</span>
        </h2>

        {/* Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-5 flex justify-center items-center gap-3 text-green-600 font-semibold text-xl"
        >
          <Users size={22} />
          <span>1000+ Seats Available for Students</span>
        </motion.div>

        {/* Description */}
        <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Designed for focus and productivity, our library offers a peaceful 
          environment with modern facilities, extensive book collections, and 
          digital learning support to help students grow academically and creatively.
        </p>

        {/* Glass Cards */}
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {[
            "Extensive collection of books & study materials",
            "Silent and distraction-free study zones",
            "Comfortable seating for long hours",
            "Digital resources & smart learning access",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>

      

      </div>
    </section>
  );
}