import Navbar from "../component/Navbar";

export default function WorkProgressPage() {

  const collected = 5655;
  const target = 20000;
  const percent = Math.min((collected / target) * 100, 100);

  const progress = [
    { title: "Trust Registration", status: "In Progress" },
    { title: "Land", status: "Survey" },
    { title: "Infrastructure", status: "Pending" },
    { title: "Staff Recruitment", status: "Upcoming" },
  ];

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-[#f8fafc] pt-16 md:pt-28 py-10 md:py-20 px-4 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-100/40 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">

          {/* LEFT */}
          <div className="text-center md:text-left">

            <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 leading-tight">
              Building the Future <br />
              <span className="text-blue-500">of Education</span>
            </h1>

            <p className="mt-4 text-gray-500 text-sm md:text-base max-w-md mx-auto md:mx-0">
              Raman Arnava Vidyalaya is under development.
              Every step is bringing us closer to a smarter learning environment.
            </p>

            {/* FUND */}
            <div className="mt-10 bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm">

              <div className="flex justify-between text-sm text-gray-600">
                <span>₹{collected.toLocaleString()}</span>
                <span>₹{target.toLocaleString()}</span>
              </div>

              <div className="mt-3 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-700"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <p className="mt-3 text-xs text-gray-400 text-center md:text-left">
                {percent.toFixed(0)}% of intitial required fund collected
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">

            <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center md:text-left">
              Development Progress
            </h3>

            <div className="space-y-6">

              {progress.map((item, i) => (
                <div key={i} className="flex items-start gap-4">

                  <div
                    className={`mt-1 w-3 h-3 rounded-full ${
                      item.status === "Completed"
                        ? "bg-green-500"
                        : item.status === "In Progress"
                        ? "bg-blue-500"
                        : item.status === "Pending"
                        ? "bg-gray-400"
                        : "bg-yellow-500"
                    }`}
                  />

                  <div className="flex-1 flex items-center justify-between border-b pb-3">
                    <p className="text-gray-700 text-sm md:text-base">
                      {item.title}
                    </p>
                    <span className="text-xs text-gray-400">
                      {item.status}
                    </span>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* THANK YOU */}
        <div className="mt-16 md:mt-20 flex flex-col items-center text-center max-w-2xl mx-auto px-2">

          <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50">
            <svg
              className="w-6 h-6 text-blue-500 animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
               2 6 4 4 6.5 4 
               8.04 4 9.54 4.81 10.35 6.09 
               11.16 4.81 12.66 4 14.2 4 
               16.7 4 18.7 6 18.7 8.5 
               18.7 12.28 15.3 15.36 10.55 20.04L12 21.35z" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold text-blue-500">
            Thank You for Your Support
          </h2>

          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Your contribution is helping us build a better future for education.
          </p>

          <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5 text-left shadow-sm">

            <p className="text-sm font-semibold text-gray-800 mb-2">
              Note
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              At this early stage, contributions are being collected through an individual account 
              to support initial development work. Once the total fund reaches 
              <span className="font-medium text-blue-600"> ₹20,000</span>, the entire amount will be transferred 
              to the official trust account.
            </p>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Thereafter, all donations will be accepted exclusively through the trust account, 
              ensuring complete transparency and proper financial management.
            </p>

          </div>

        </div>

      </section>
    </>
  );
}