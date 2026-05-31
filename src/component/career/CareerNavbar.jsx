import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function CareerNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // prevent scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="text-lg font-semibold text-gray-800">
            Raman Arnava Vidyalaya
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className={isActive("/") ? "text-blue-500 font-medium" : "text-gray-700 hover:text-blue-500"}>RAV</Link>
            <Link to="/careers" className={isActive("/careers") ? "text-blue-500 font-medium" : "text-gray-700 hover:text-blue-500"}>Home</Link>
            <Link to="/careers-job" className={isActive("/careers-job") ? "text-blue-500 font-medium" : "text-gray-700 hover:text-blue-500"}>Careers</Link>
            <Link to="/contact" className={isActive("/contact") ? "text-blue-500 font-medium" : "text-gray-700 hover:text-blue-500"}>Contact</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/careers-job"
              className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Apply Now
            </Link>
          </div>

          {/* ✅ MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-800 z-50"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />

        {/* SIDE PANEL */}
        <div
          className={`absolute top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <span className="text-lg font-semibold text-gray-800">
              Menu
            </span>

            <button
              onClick={() => setOpen(false)}
              className="text-xl"
            >
              ✕
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col px-6 py-6 gap-5 text-base">

            <Link to="/" onClick={() => setOpen(false)} className={isActive("/") ? "text-blue-500 font-medium" : "text-gray-700"}>RAV</Link>

            <Link to="/careers" onClick={() => setOpen(false)} className={isActive("/careers") ? "text-blue-500 font-medium" : "text-gray-700"}>Home</Link>

            <Link to="/careers-job" onClick={() => setOpen(false)} className={isActive("/careers-job") ? "text-blue-500 font-medium" : "text-gray-700"}>Careers</Link>

            <Link to="/contact" onClick={() => setOpen(false)} className={isActive("/contact") ? "text-blue-500 font-medium" : "text-gray-700"}>Contact</Link>

            {/* CTA */}
            <Link
              to="/careers-job"
              onClick={() => setOpen(false)}
              className="mt-4 px-5 py-3 bg-blue-500 text-white rounded-lg text-center"
            >
              Apply Now
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}