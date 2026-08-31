import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RedNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "RAV", path: "/" },
    { name: "redByte", path: "/initiatives/redByte" },
    { name: "Courses", path: "/redbyte/courses" },
    { name: "Programs", path: "/programs" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black">

      {/* NAVBAR */}
      <nav className="relative mx-auto flex max-w-7xl items-center px-6 py-5 sm:px-8 lg:px-12">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/redbyte.png"
            alt="RedByte"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="ml-16 hidden items-center gap-10 md:flex">

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="
                py-2
                text-sm
                font-medium
                text-gray-400
                hover:text-white
              "
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* CTA */}
        <div className="ml-auto hidden md:block">
          <Link
            to="/redbyte/student/join/wings"
            className="
              px-6
              py-3
              text-sm
              font-bold
              text-gray-400
              hover:text-white
            "
          >
            Join RedByte
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            ml-auto
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-gray-700
            bg-gray-950
            text-gray-300
            hover:text-white
            md:hidden
          "
          aria-label="Toggle menu"
        >
          <div className="relative h-4 w-5">

            <span
              className={`absolute left-0 h-px w-5 bg-current ${
                menuOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />

            <span
              className={`absolute left-0 top-2 h-px w-5 bg-current ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 h-px w-5 bg-current ${
                menuOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />

          </div>
        </button>

        {/* WHITE LINE */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-px
            w-screen
            -translate-x-1/2
            bg-white/40
          "
        />

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="bg-black md:hidden">
          <div className="border-t border-gray-800 px-6 py-5">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  border-b
                  border-gray-800
                  py-4
                  text-sm
                  font-medium
                  text-gray-400
                  hover:text-white
                "
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/redbyte/student/join/wings"
              onClick={() => setMenuOpen(false)}
              className="
                mt-5
                block
                border
                border-gray-700
                px-5
                py-3
                text-center
                text-sm
                font-bold
                text-gray-400
                hover:border-white
                hover:text-white
              "
            >
              Join RedByte
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}