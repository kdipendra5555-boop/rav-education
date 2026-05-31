import { NavLink } from "react-router-dom";

export default function SmartNavbar() {
  return (
    <div className="w-full flex justify-center sticky top-20 sm:top-24 md:top-28 z-40 px-2 sm:px-4">

      <div className="w-full max-w-5xl flex justify-center">

        <div className="flex items-center justify-center px-2 sm:px-5 py-2
                        rounded-xl sm:rounded-full
                        bg-white/80 dark:bg-[#0B0F19]/85
                        backdrop-blur-2xl
                        border border-gray-200 dark:border-white/10
                        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                        dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]
                        w-full sm:w-fit">

          <div className="flex items-center justify-between sm:justify-center gap-1 sm:gap-2 w-full sm:w-auto">

            {[
              { to: "/smart-school", label: "Home" },
              { to: "/classroom", label: "Classroom" },
              { to: "/how-it-works", label: "How It Works" },
              { to: "/why-us", label: "Why Us" },
            ].map((item, i) => (
              <NavLink
                key={i}
                to={item.to}
                className={({ isActive }) =>
                  `flex-1 sm:flex-none text-center whitespace-nowrap px-2 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-600 dark:text-gray-400 hover:text-blue-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/apply"
              className="flex-1 sm:flex-none text-center whitespace-nowrap px-2 sm:px-4 py-1.5 rounded-full bg-blue-600 text-white text-[11px] sm:text-sm hover:bg-blue-700 transition"
            >
              Apply
            </NavLink>

          </div>
        </div>

      </div>
    </div>
  );
}