import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#050505]/70 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* 🔥 LOGO */}
        <h1 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
          Smart School
        </h1>

        {/* 📌 NAV LINKS (Desktop same) */}
        <div className="hidden md:flex items-center gap-8 text-sm md:text-base">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
          >
            RAV
          </NavLink>

           <NavLink
            to="/smart-school"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/classroom"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
          >
            Classroom
          </NavLink>

          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
          >
            How It Works
          </NavLink>

          <NavLink
            to="/why-us"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`
            }
          >
            Why Us
          </NavLink>

        </div>

        {/* 🚀 CTA BUTTON (Desktop same) */}
        <NavLink
          to="/apply"
          className="hidden md:block px-5 py-2.5 rounded-xl border border-white/10 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300"
        >
          Apply Now
        </NavLink>

        {/* 📱 MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-5">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white transition"
          >
            RAV
          </NavLink>

          <NavLink
            to="/smart-school"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/classroom"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white transition"
          >
            Classroom
          </NavLink>

          <NavLink
            to="/how-it-works"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white transition"
          >
            How It Works
          </NavLink>

          <NavLink
            to="/why-us"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white transition"
          >
            Why Us
          </NavLink>

          {/* CTA mobile */}
          <NavLink
            to="/apply"
            onClick={() => setOpen(false)}
            className="block text-center mt-4 px-5 py-3 rounded-xl border border-white/10 text-white bg-white/5 hover:bg-white/10 transition"
          >
            Apply Now
          </NavLink>

        </div>
      )}
    </nav>
  );
}