import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import WelcomeKitSections from "../component/Features/WelcomeKitSections";
import Footer from "../component/Footer";

export default function WelcomeKitHero() {
  return (
    <>
      {/* ✅ Navbar always outside */}
      <Navbar />

      <section className="bg-[#f8fafc] pt-20 md:pt-28 pb-12 md:pb-20 px-4 overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-semibold text-gray-800 leading-tight"
            >
              Your Smart <br />
              <span className="text-blue-500">Welcome Kit</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-gray-500 text-sm md:text-base max-w-md mx-auto md:mx-0"
            >
              A complete starter experience designed to give every student the
              tools, access, and confidence to begin their smart learning journey.
            </motion.p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-[260px] sm:w-[320px] md:w-[400px]"
            >

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-green-100 rounded-full blur-3xl opacity-50"
              />

              <motion.img
                src="/images/welcome-kit.png"
                alt="Welcome Kit Illustration"
                className="relative w-full h-auto object-contain drop-shadow-xl"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
              />

            </motion.div>
          </motion.div>

        </div>

      </section>

      <WelcomeKitSections/>
      <Footer/>
    </>
  );
}