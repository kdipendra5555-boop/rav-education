import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-10 px-5 md:px-16">

      {/* 🔷 TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* 🔷 BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col items-start mb-5">

           <img
  src="/images/raman_logo.png"
  alt="Raman Arnava Vidyalaya"
  className="w-24 h-20 md:w-38 md:h-30 mb-3 object-contain -ml-4"
/>

            <div>
              <h2 className="font-semibold text-xl leading-tight">
                Raman Arnava Vidyalaya
              </h2>

              <p className="text-sm text-blue-200 mt-1">
                Education with Values
              </p>
            </div>
          </div>

          <p className="text-sm text-blue-200 leading-relaxed mb-5 max-w-xs">
            Building future-ready students with modern education
            and strong values.
          </p>

          {/* 🔷 SOCIAL */}
          <div className="flex gap-4 text-xl">

            <a
              href="https://www.instagram.com/rav_education/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="http://www.youtube.com/@RamanArnavaVidyalaya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61589159485496"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaFacebook />
            </a>

          </div>
        </motion.div>

        {/* 🔷 QUICK LINKS + RESOURCES */}
        <div className="grid grid-cols-2 gap-8 md:contents">

          {/* 🔷 QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-semibold mb-5 text-base">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-blue-200">

              <li>
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/smart-school"
                  className="hover:text-white transition"
                >
                  Smart School
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="hover:text-white transition"
                >
                  Career
                </Link>
              </li>

              <li>
                <Link
                  to="/feature-career"
                  className="hover:text-white transition"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  to="/joinmission"
                  className="hover:text-white transition"
                >
                  Join Mission
                </Link>
              </li>

            </ul>
          </motion.div>

          {/* 🔷 RESOURCES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-semibold mb-5 text-base">
              Resources
            </h3>

            <ul className="space-y-3 text-sm text-blue-200">

              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="hover:text-white transition"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to="/work-progress"
                  className="hover:text-white transition"
                >
                  Work Progress
                </Link>
              </li>

              <li>
                <Link
                  to="/admission"
                  className="hover:text-white transition"
                >
                  Admission
                </Link>
              </li>

            </ul>
          </motion.div>
        </div>

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:pl-4"
        >
          <h3 className="font-semibold mb-5 text-base">
            Stay Updated
          </h3>

          <div className="flex bg-white/10 rounded-xl overflow-hidden mb-5 border border-white/10">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-3 text-sm outline-none w-full placeholder:text-blue-200"
            />

            <button className="bg-white text-blue-700 px-5 text-sm font-medium hover:bg-blue-100 transition whitespace-nowrap">
              Subscribe
            </button>

          </div>

          <p className="text-sm text-blue-200 leading-relaxed">
            📍 Uttar Pradesh
          </p>
        </motion.div>
      </div>

      {/* 🔷 BOTTOM */}
      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-blue-700 flex flex-col md:flex-row items-center justify-between gap-5">

        <p className="text-sm text-blue-300 text-center md:text-left">
          © {new Date().getFullYear()} Raman Arnava Vidyalaya.
          All rights reserved.
        </p>

        <Link>
          <p className="text-sm text-blue-200 text-center">
            @ Run by Raman Arnava Foundation - under registration
          </p>
        </Link>

        <Link
          to="/pay"
          className="bg-white text-blue-700 px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-100 transition shadow-md inline-block"
        >
          Donate Now
        </Link>
      </div>
    </footer>
  );
}