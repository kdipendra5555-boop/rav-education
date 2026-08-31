import { motion } from "framer-motion";

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-green-50 py-24 md:py-40 px-4 sm:px-6">
      
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-green-200 rounded-full blur-3xl opacity-30"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start"
        >

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm text-xs sm:text-sm text-gray-600">
            ✨ Future Ready Education
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] md:leading-[1.05] mb-6 tracking-tight">
            A Brighter Future with <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-yellow-500 via-green-400 to-green-600 bg-clip-text text-transparent">
              Smart Learning
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-md md:max-w-xl leading-relaxed">
            Blending innovation, creativity, and technology to build a next-generation 
            learning ecosystem where students don’t just study — they explore, create, 
            and grow with real-world confidence.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 md:mt-10"
          >
            <button className="group relative inline-flex items-center gap-3 px-7 py-3.5 md:px-8 md:py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium shadow-lg hover:shadow-2xl transition-all duration-300">

              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-30 blur transition duration-300"></span>

              <span className="relative z-10">
                Take a Tour of School
              </span>

              <span className="relative z-10 transform group-hover:translate-x-1 transition">
                →
              </span>

            </button>
          </motion.div>

          {/* Accent Line */}
          <div className="mt-8 md:mt-10 h-[2px] md:h-[3px] w-24 md:w-28 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full mx-auto md:mx-0"></div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >

          {/* Glow */}
          <div className="absolute w-[70%] h-[70%] md:w-[80%] md:h-[80%] bg-green-200 rounded-full blur-3xl opacity-30"></div>

          <img
            src="/images/smart.png"
            alt="Smart Learning"
            className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl drop-shadow-2xl scale-105 md:scale-110 hover:scale-110 md:hover:scale-115 transition duration-500"
          />

        </motion.div>

      </div>
    </section>
  );
}