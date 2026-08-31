import React from "react";
import { Link } from "react-router-dom";

export default function RedFooter() {
  return (
    <footer className="w-full bg-black text-white">

      {/* Line */}
      <div className="h-px w-full bg-white/20" />

      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

          {/* Message */}
          <div>
            <p className="text-sm font-medium text-white">
              Your potential deserves a chance.
            </p>

            <p className="mt-2 text-xs text-white/40">
              Keep learning. Keep building. Keep going.
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/redbyte/student/join/wings"
            className="
              w-fit
              border
              border-red-600
              bg-red-600
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition-colors
              duration-200
              hover:border-white
              hover:bg-white
              hover:text-black
            "
          >
            Start Your Journey →
          </Link>

        </div>

      </div>

    </footer>
  );
}