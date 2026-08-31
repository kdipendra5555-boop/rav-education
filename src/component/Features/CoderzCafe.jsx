import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CoderzCafeHero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#eef2f7] to-[#f8fafc] px-4 md:px-10 py-16">
      
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <img
            src="/images/coderz-cafe.png"
            alt="Coderz Cafe"
            className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl object-contain"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white shadow text-sm text-gray-600 mb-4">
            💻 Coding & Logic Learning
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Build Strong <span className="text-green-600">Coding & Logic</span> <br />
            from the Start
          </h1>

          {/* Description */}
          <p className="text-gray-500 mt-4 md:mt-6 text-sm sm:text-base md:text-lg max-w-xl">
            Coderz Cafe helps kids learn coding fundamentals and logical thinking
            in a fun and easy way. We focus on building strong basics so students
            can confidently move towards advanced technology.
          </p>

          {/* Features */}
          <div className="mt-5 md:mt-6 space-y-2 md:space-y-3">
            {[
              "Beginner-friendly coding concepts",
              "Strong focus on logic building",
              "Fun and interactive learning",
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
                <CheckCircle className="text-green-500" size={16} />
                <span className="text-gray-700 text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 md:mt-8">
            <button className="bg-green-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-xl shadow hover:bg-green-700 transition text-sm md:text-base">
              Start Coding Journey
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}