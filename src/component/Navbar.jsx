import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    isActive
      ? "text-white font-semibold text-sm"
      : "text-white/85 hover:text-white transition text-sm";

  return (
    <header className="relative z-50 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">

        <div className="flex items-center justify-between">

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            className="flex items-center shrink-0"
          >
            <img
              src="/images/logo.jpg"
              alt="Raman Arnava Vidyalaya"
              className="hidden md:block h-14 w-auto object-contain"
            />

            <img
              src="/images/raman_logo.png"
              alt="Raman Arnava Vidyalaya"
              className="block md:hidden h-11 w-auto object-contain"
            />
          </Link>


          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden md:flex items-center gap-7">

            <NavLink to="/" className={navItemClass}>
              Home
            </NavLink>

            <NavLink to="/events" className={navItemClass}>
              Events
            </NavLink>

            <NavLink to="/feature-career" className={navItemClass}>
              Features
            </NavLink>

            <NavLink to="/careers" className={navItemClass}>
              Careers
            </NavLink>

            <NavLink to="/smart-school" className={navItemClass}>
              Smart School
            </NavLink>

            <NavLink to="/joinmission" className={navItemClass}>
              Join Mission
            </NavLink>

            <NavLink to="/admission" className={navItemClass}>
              Admission
            </NavLink>

            {/* CTA */}

            <Link
              to="/pay"
              className="ml-2
                         px-5 py-2.5
                         rounded-xl
                         bg-white
                         text-blue-700
                         text-sm
                         font-semibold
                         shadow-lg
                         hover:bg-blue-50
                         hover:-translate-y-0.5
                         transition-all duration-300
                         inline-flex items-center gap-2"
            >
              Donate
              <span>→</span>
            </Link>

          </nav>


          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden
                       w-10 h-10
                       rounded-xl
                       bg-white/10
                       border border-white/20
                       backdrop-blur-md
                       flex items-center justify-center
                       text-white"
            aria-label="Toggle menu"
          >

            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}

          </button>

        </div>
      </div>


      {/* ================= MOBILE MENU ================= */}

      {open && (
        <div
          className="md:hidden
                     absolute top-full left-4 right-4
                     rounded-2xl
                     bg-[#06245f]/95
                     backdrop-blur-xl
                     border border-white/15
                     shadow-2xl"
        >

          <nav className="flex flex-col px-6 py-6 gap-5">

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="text-white font-medium"
            >
              Home
            </NavLink>

            <NavLink
              to="/events"
              onClick={() => setOpen(false)}
              className="text-white/85"
            >
              Events
            </NavLink>

            <NavLink
              to="/feature-career"
              onClick={() => setOpen(false)}
              className="text-white/85"
            >
              Features
            </NavLink>

            <NavLink
              to="/careers"
              onClick={() => setOpen(false)}
              className="text-white/85"
            >
              Careers
            </NavLink>

            <NavLink
              to="/smart-school"
              onClick={() => setOpen(false)}
              className="text-white/85"
            >
              Smart School
            </NavLink>

            <NavLink
              to="/joinmission"
              onClick={() => setOpen(false)}
              className="text-white/85"
            >
              Join Mission
            </NavLink>

            <NavLink
              to="/admission"
              onClick={() => setOpen(false)}
              className="text-white/85"
            >
              Admission
            </NavLink>

            <Link
              to="/pay"
              onClick={() => setOpen(false)}
              className="mt-1
                         text-center
                         bg-white
                         text-blue-700
                         px-5 py-3
                         rounded-xl
                         font-semibold"
            >
              Donate →
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}