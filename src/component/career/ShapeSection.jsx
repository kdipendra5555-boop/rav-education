export default function ShapeSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">

      {/* 🔥 ANIMATION STYLES */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          .float-slow {
            animation: float 8s ease-in-out infinite;
          }

          .float-mid {
            animation: float 6s ease-in-out infinite;
          }

          .float-fast {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* BIG BLUR CIRCLES */}
      <div className="absolute top-10 left-5 md:left-10 w-48 md:w-64 h-48 md:h-64 bg-blue-100 rounded-full opacity-40 blur-2xl float-slow" />

      <div className="absolute bottom-10 right-5 md:right-10 w-52 md:w-72 h-52 md:h-72 bg-green-100 rounded-full opacity-40 blur-2xl float-mid" />

      {/* MEDIUM CIRCLES */}
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-50 float-fast" />
      <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-green-200 rounded-full opacity-50 float-slow" />

      {/* SMALL DOTS */}
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-70 float-fast" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-400 rounded-full opacity-70 float-mid" />
      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-300 rounded-full opacity-70 float-fast" />

      {/* TRIANGLES */}
      <div className="absolute top-20 right-10 md:right-20 w-0 h-0 border-l-[18px] border-r-[18px] border-b-[28px] border-l-transparent border-r-transparent border-b-blue-200 opacity-60 rotate-12 float-mid" />

      <div className="absolute bottom-20 left-5 md:left-20 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-green-200 opacity-60 -rotate-12 float-fast" />

      {/* EXTRA TRIANGLE */}
      <div className="absolute top-1/2 left-10 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[22px] border-l-transparent border-r-transparent border-b-blue-300 opacity-50 float-slow" />

      {/* RING (CIRCLE BORDER) */}
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-blue-200 rounded-full opacity-40 float-mid" />

      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-green-200 rounded-full opacity-40 float-fast" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
    Start Your Journey With Us
  </h3>

  <p className="mt-3 text-gray-500 text-sm md:text-base max-w-xl mx-auto">
    We’re building a team of passionate educators and innovators. 
    While recruitment is currently in progress, exciting opportunities 
    will be opening soon — stay connected and be part of our journey.
  </p>
</div>

    </section>
  );
}