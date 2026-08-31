import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

export default function OrbisNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/orbis-89723d89sdf8878sdfjfb"
          className="text-2xl font-semibold tracking-tight text-gray-950"
        >
          Orbis
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-gray-500 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/certifications"
            className="text-sm font-medium text-gray-500 transition hover:text-black"
          >
            Certifications
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/"
          className="group hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:scale-105 md:flex"
        >
          RAV
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 bg-white px-6 py-5">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-gray-100"
          >
            Home
          </Link>

          <Link
            to="/certifications"
            onClick={() => setOpen(false)}
            className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-gray-100"
          >
            Certifications
          </Link>

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
          >
            RAV
            <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}