import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CareerCTA() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-lg"
        >
          
          {/* ✅ Mobile Background */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center sm:hidden"
            style={{
              backgroundImage: "url('/images/desk-bg.png')",
              backgroundSize: "cover",
            }}
          ></div>

          {/* ✅ Desktop Background */}
          <div
            className="hidden sm:block absolute inset-0 bg-no-repeat bg-left md:bg-center"
            style={{
              backgroundImage: "url('/images/career-bg.png')",
              backgroundSize: "contain",
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/40"></div>

          {/* Content */}
          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 text-center">
            
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              WE'RE HIRING
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              Build Careers. Build Futures.
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              Be a part of our mission to deliver quality education, nurture potential, 
              and create a better tomorrow.
            </p>

            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            >
              Explore Opportunities →
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}