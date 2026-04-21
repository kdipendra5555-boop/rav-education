import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#050505]/70 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* 🔥 LOGO */}
        <h1 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
          Smart School
        </h1>

        {/* 📌 NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm md:text-base">

          <NavLink
            to="/"
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

        {/* 🚀 CTA BUTTON */}
        <NavLink
  to="/apply"
  className="px-5 py-2.5 rounded-xl border border-white/10 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300"
>
  Apply Now
</NavLink>

      </div>
    </nav>
  );
}