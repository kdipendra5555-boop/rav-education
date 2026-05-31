import {
  Sparkles,
  Laptop,
  Smile,
  MessageCircle,
  DollarSign,
  Monitor,
  TrendingUp,
  Users
} from "lucide-react";

export default function WhoAndOffer() {
  const lookingFor = [
    { icon: Sparkles, text: "Creative teachers" },
    { icon: Laptop, text: "Tech-friendly educators" },
    { icon: Smile, text: "Positive attitude" },
    { icon: MessageCircle, text: "Good communication" }
  ];

  const offers = [
    { icon: DollarSign, text: "Competitive salary" },
    { icon: Monitor, text: "Smart classrooms" },
    { icon: TrendingUp, text: "Growth opportunities" },
    { icon: Users, text: "Friendly environment" }
  ];

  return (
    <section className="bg-[#f8fafc] py-20 overflow-hidden">

      {/* 🔥 INLINE CSS (UPDATED) */}
      <style>
        {`
          @keyframes marqueeLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }

          /* DESKTOP SPEED */
          .marquee-left {
            animation: marqueeLeft 25s linear infinite;
          }

          .marquee-right {
            animation: marqueeRight 25s linear infinite;
          }

          /* 🔥 MOBILE FAST SPEED */
          @media (max-width: 768px) {
            .marquee-left {
              animation: marqueeLeft 10s linear infinite;
            }
            .marquee-right {
              animation: marqueeRight 10s linear infinite;
            }
          }

          /* HOVER PAUSE */
          .pause:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* HEADING */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Join Our Team
        </h2>
        <p className="mt-3 text-gray-500 text-sm">
          Not just qualification, but mindset matters
        </p>
      </div>

      {/* ROW 1 */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="flex gap-6 marquee-left pause">
          {[...lookingFor, ...lookingFor].map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-3"
              >
                <Icon className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ROW 2 */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex gap-6 marquee-right pause">
          {[...offers, ...offers].map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-3"
              >
                <Icon className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}