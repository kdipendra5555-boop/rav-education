import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Raman Arnava Vidyalaya
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-6">
            Nurturing Young Minds with Knowledge, Values & Excellence
          </p>

          <p className="text-sm text-blue-200 max-w-lg mb-8">
            A modern educational institution committed to holistic
            development, academic excellence, and character building
            from early learning to higher classes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/admission"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition"
            >
              Pre Registration 
            </Link>

            <Link
              to="/pay"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Donate
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <ul className="space-y-3 text-blue-100">
              <li>✔ Experienced & Caring Faculty</li>
              <li>✔ Smart Classrooms</li>
              <li>✔ Safe & Secure Campus</li>
              <li>✔ Affordable Quality Education</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}