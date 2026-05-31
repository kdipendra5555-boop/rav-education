import { motion } from "framer-motion";

export default function SmartAISection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-green-50 via-white to-blue-50">

      {/* Glow Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/images/ai-class.png"
            alt="AI Smart Class"
            className="w-full max-w-md md:max-w-xl drop-shadow-2xl hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >

          {/* Tag */}
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-sm text-gray-600 shadow-sm">
            🤖 AI Powered Learning
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            A Truly <span className="text-green-600">Smart School</span> <br />
            with AI Enabled Classes
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
            Our classrooms are powered by artificial intelligence, interactive learning tools, 
            and real-time feedback systems that help students understand concepts faster, 
            smarter, and more effectively.
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-3 text-gray-700 text-sm sm:text-base">

            <div>✔ AI-based personalized learning</div>
            <div>✔ Smart boards & digital classrooms</div>
            <div>✔ Real-time student progress tracking</div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}