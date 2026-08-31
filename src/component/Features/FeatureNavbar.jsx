import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeatureNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-xl font-bold text-green-700">
          Raman Arnava Vidyalaya
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-green-600 transition">
            RAV
          </Link>

          <Link to="/feature-career" className="hover:text-green-600 transition">
            Home
          </Link>
          
          
          <Link to="/contact" className="hover:text-green-600 transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-md hover:shadow-lg transition">
            Visit School
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl px-6 pb-6 space-y-4 text-gray-700 font-medium shadow-md">

          <Link to="/" className="block">
            RAV
          </Link>

          <Link to="/feature-career" className="block">
            Home
          </Link>
        
          <Link to="/contact" className="block">
            Contact
          </Link>

          <button className="w-full mt-3 px-5 py-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-md">
            Visit School
          </button>
        </div>
      )}
    </header>
  );
}