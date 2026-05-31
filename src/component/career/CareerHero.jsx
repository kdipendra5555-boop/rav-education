import { Link } from "react-router-dom";

export default function CareerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">

      {/* LIGHT GRADIENT (BEHIND CONTENT) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-100 rounded-full opacity-40 -z-10" />

      {/* DOT GRID */}
      <div className="hidden md:grid absolute top-20 right-10 grid-cols-4 gap-3 opacity-30">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-300 rounded-full" />
        ))}
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 items-center gap-12">
{/* LEFT */}
<div className="flex flex-col justify-center text-center md:text-left">
  
  <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 leading-tight">
    Build Your Future <br />
    <span className="text-blue-500">With Our Smart School</span>
  </h1>

  <p className="mt-6 text-gray-500 text-lg max-w-md md:max-w-lg mx-auto md:mx-0">
    Join a modern learning environment where innovation meets education.
  </p>

  <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
    
    {/* Explore Careers */}
    <Link
      to="/careers-job"
      className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition inline-block"
    >
      Explore Careers
    </Link>

    {/* Learn More */}
    <Link
      to="/feature-career"
      className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition inline-block"
    >
      Learn More
    </Link>

  </div>

</div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end items-center">
          <img
            src="/images/career-illustration.png"
            alt="Career Illustration"
            className="w-[360px] sm:w-[480px] md:w-[600px] lg:w-[700px] h-auto object-contain"
          />
        </div>

      </div>

    </section>
  );
}