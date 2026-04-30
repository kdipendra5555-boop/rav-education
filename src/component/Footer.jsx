import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white pt-24 pb-12 px-6 md:px-16">

      {/* 🔷 TOP SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* 🔷 BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-5">

            <div>
              <h2 className="font-semibold text-xl">
                Raman Arnava Vidyalaya
              </h2>
              <p className="text-sm text-blue-200">
                Education with Values
              </p>
            </div>
          </div>

          <p className="text-sm text-blue-200 leading-relaxed mb-5">
            Building future-ready students with modern education
            and strong values.
          </p>

          {/* SOCIAL */}

          <div className="flex gap-4 text-lg">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rav_education/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61589159485496"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-300 cursor-pointer transition" />
            </a>

          </div>
        </motion.div>

        {/* 🔷 QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-medium mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm text-blue-200">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/smart-school" className="hover:text-white transition">Smart School</Link></li>
            <li><Link to="/admission" className="hover:text-white transition">Admission</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </motion.div>

        {/* 🔷 RESOURCES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-medium mb-5">Resources</h3>
          <ul className="space-y-3 text-sm text-blue-200">
            <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
            <li><Link to="/events" className="hover:text-white transition">Events</Link></li>
          </ul>
        </motion.div>

        {/* 🔷 NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-medium mb-5">Stay Updated</h3>

          <div className="flex bg-white/10 rounded-lg overflow-hidden mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 text-sm outline-none w-full placeholder:text-blue-200"
            />
            <button className="bg-white text-blue-700 px-4 text-sm font-medium hover:bg-blue-100 transition">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-blue-200 leading-relaxed">
            📍 Ghazipur, Uttar Pradesh <br />
            {/* 📞 +91 98765 43210 */}
          </p>
        </motion.div>
      </div>

      {/* 🔷 BOTTOM */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-blue-700 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-blue-300 text-center md:text-left">
          © {new Date().getFullYear()} Raman Arnava Vidyalaya. All rights reserved.
        </p>

        <Link
          to="/pay"
          className="bg-white text-blue-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition shadow inline-block"
        >
          Donate Now
        </Link>
      </div>
    </footer>
  );
}