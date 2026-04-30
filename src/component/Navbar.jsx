import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    isActive
      ? "text-blue-700 font-semibold text-base"
      : "text-gray-600 hover:text-blue-700 transition text-base";

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Raman Arnava Vidyalaya Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">

          {/* CAREERS */}
          <NavLink to="/careers" className={navItemClass}>
            Careers
          </NavLink>

          {/* SMART SCHOOL */}
          <NavLink
            to="/smart-school"
            className={({ isActive }) =>
              isActive
                ? "text-green-700 font-semibold text-base"
                : "text-gray-600 hover:text-green-600 transition text-base"
            }
          >
            Smart School
          </NavLink>

          {/* DONATE */}
          <NavLink
            to="/pay"
            className="ml-3 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-base font-medium hover:bg-blue-700 transition shadow-sm"
          >
            Donate
          </NavLink>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <nav className="flex flex-col px-6 py-6 gap-5 text-center text-base">

            {/* CAREERS */}
            <NavLink
              to="/careers"
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium"
            >
              Careers
            </NavLink>

            {/* SMART SCHOOL */}
            <NavLink
              to="/smart-school"
              onClick={() => setOpen(false)}
              className="text-green-600 font-medium"
            >
              Smart School
            </NavLink>

            {/* DONATE */}
            <NavLink
              to="/pay"
              onClick={() => setOpen(false)}
              className="mt-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium"
            >
              Donate
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
}