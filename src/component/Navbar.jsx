import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg"; // ✅ jpg import

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    isActive
      ? "text-blue-700 font-semibold"
      : "text-gray-700 hover:text-blue-700 transition";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Raman Arnava Vidyalaya Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">

          {/* 🟢 SMART SCHOOL */}
          <NavLink
            to="/smart-school"
            className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition font-semibold"
          >
            Smart School
          </NavLink>

          {/* 🔵 DONATE */}
          <NavLink
            to="/pay"
            className="ml-4 bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition font-semibold"
          >
            Donate
          </NavLink>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow">
          <nav className="flex flex-col px-4 py-4 gap-3">

            {/* 🟢 SMART SCHOOL */}
            <NavLink
              onClick={() => setOpen(false)}
              to="/smart-school"
              className="bg-green-600 text-white px-4 py-2 rounded-xl text-center font-semibold"
            >
              Smart School
            </NavLink>

            {/* 🔵 DONATE */}
            <NavLink
              onClick={() => setOpen(false)}
              to="/pay"
              className="mt-2 bg-blue-700 text-white px-4 py-2 rounded-xl text-center font-semibold"
            >
              Donate
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
}