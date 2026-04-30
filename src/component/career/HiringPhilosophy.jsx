import {
  Heart,
  Brain,
  Handshake,
  Sprout
} from "lucide-react";

export default function HiringPhilosophy() {
  const items = [
    {
      icon: Heart,
      title: "Passion over Degrees",
      desc: "We value dedication and love for teaching more than just qualifications."
    },
    {
      icon: Brain,
      title: "Innovation in Teaching",
      desc: "We encourage creative and modern teaching methods for better learning."
    },
    {
      icon: Handshake,
      title: "Student-first Mindset",
      desc: "Every decision we make is focused on student growth and success."
    },
    {
      icon: Sprout,
      title: "Continuous Growth",
      desc: "We support constant learning and professional development."
    }
  ];

  return (
    <section className="relative bg-[#f8fafc] py-20 md:py-24 px-4 sm:px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-100/40 blur-xl rounded-full" />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-800 tracking-tight">
          Our Hiring Philosophy
        </h2>

        <p className="mt-4 text-gray-500 max-w-xl md:max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
          We’re building a team driven by purpose, innovation, and a deep commitment to student success.
        </p>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 text-left transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-md md:hover:shadow-lg"
              >

                {/* ICON */}
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg md:rounded-xl bg-blue-50 mb-3 md:mb-5">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-500" strokeWidth={1.8} />
                </div>

                {/* TITLE */}
                <h3 className="text-sm md:text-lg font-semibold text-gray-800 leading-snug">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-xs md:text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}