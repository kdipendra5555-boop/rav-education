import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function CareerNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-xl font-semibold text-gray-800">
          Raman Arnava
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          <Link
            to="/"
            className={`${isActive("/") ? "text-blue-500 font-medium" : "text-gray-700 hover:text-blue-500"}`}
          >
            RAV
          </Link>

          <Link
            to="/careers"
            className={`${isActive("/careers") ? "text-blue-500 font-medium" : "text-gray-700 hover:text-blue-500"}`}
          >
            Home
          </Link>

          <Link
            to="/careers-job"
            className={`${isActive("/careers-job") ? "text-blue-500 font-medium" : "text-gray-700 hover:text-blue-500"}`}
          >
            Careers
          </Link>

          <Link
            to="/contact"
            className={`${isActive("/contact") ? "text-blue-500 font-medium" : "text-gray-700 hover:text-blue-500"}`}
          >
            Contact
          </Link>

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

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">

          <div className="px-6 py-6 space-y-5 text-center">

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`${isActive("/") ? "text-blue-500 font-medium" : "text-gray-700"}`}
            >
              RAV
            </Link>

            <Link
              to="/careers"
              onClick={() => setOpen(false)}
              className={`${isActive("/careers") ? "text-blue-500 font-medium" : "text-gray-700"}`}
            >
              Home
            </Link>

            <Link
              to="/careers-job"
              onClick={() => setOpen(false)}
              className={`${isActive("/careers-job") ? "text-blue-500 font-medium" : "text-gray-700"}`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={`${isActive("/contact") ? "text-blue-500 font-medium" : "text-gray-700"}`}
            >
              Contact
            </Link>

            {/* CTA */}
            <Link
              to="/careers-job"
              onClick={() => setOpen(false)}
              className="block mt-4 px-6 py-3 bg-blue-500 text-white rounded-xl"
            >
              Apply Now
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}