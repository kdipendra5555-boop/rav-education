import React from "react";
import { ArrowRight } from "lucide-react";

export default function EventCTA() {
  return (
    <section className="w-full bg-[#f5f7fb] px-4 py-6 sm:px-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1600px]">

        <div className="relative overflow-hidden rounded-[28px] md:rounded-[42px] border border-[#e7ebf3] bg-white">

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-purple-50/60"></div>

          {/* Glow */}
          <div className="absolute -top-24 right-0 h-[260px] w-[260px] md:h-[420px] md:w-[420px] rounded-full bg-blue-100 blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 left-0 h-[220px] w-[220px] md:h-[300px] md:w-[300px] rounded-full bg-purple-100 blur-3xl opacity-60"></div>

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT */}
            <div className="px-5 py-8 sm:px-7 md:px-12 md:py-14 lg:px-20">

              {/* Small Text */}
              <p className="text-[13px] sm:text-sm font-medium tracking-wide text-blue-600">
                National Innovation Event
              </p>

              {/* Heading */}
              <h1 className="mt-4 max-w-4xl text-[2.6rem] leading-[0.95] tracking-[-2px] font-[500] text-[#0f172a] sm:text-[4rem] md:text-[5.2rem]">
                Building The
                <br />
                Next Generation
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-base md:text-lg">
                Explore coding competitions, AI innovation,
                robotics, creativity, and future technology
                challenges designed for students across India.
              </p>

             

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">

                <div className="rounded-[24px] border border-gray-100 bg-white/90 px-5 py-4 shadow-sm backdrop-blur-xl">
                  <h3 className="text-xl md:text-2xl font-[600] text-[#0f172a]">
                    1K+
                  </h3>

                  <p className="mt-1 text-[11px] md:text-xs text-slate-500">
                    Participants
                  </p>
                </div>

                <div className="rounded-[24px] border border-gray-100 bg-white/90 px-5 py-4 shadow-sm backdrop-blur-xl">
                  <h3 className="text-xl md:text-2xl font-[600] text-[#0f172a]">
                    5+
                  </h3>

                  <p className="mt-1 text-[11px] md:text-xs text-slate-500">
                    Challenges
                  </p>
                </div>

                <div className="rounded-[24px] border border-gray-100 bg-white/90 px-5 py-4 shadow-sm backdrop-blur-xl col-span-2 sm:col-span-1">
                  <h3 className="text-xl md:text-2xl font-[600] text-[#0f172a]">
                     EARLY CODING & LOGIC
                  </h3>

                  <p className="mt-1 text-[11px] md:text-xs text-slate-500">
                    Innovation Focus
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end px-4 pb-4 lg:px-0 lg:pb-0">

              {/* Blur */}
              <div className="absolute right-5 top-10 h-[80%] w-[80%] rounded-[40px] bg-gradient-to-br from-blue-100 to-purple-100 blur-2xl opacity-70"></div>

              {/* Image Card */}
              <div className="relative w-full max-w-[580px] overflow-hidden rounded-[26px] md:rounded-t-[38px] border border-white bg-white p-2 md:p-3 shadow-[0_25px_80px_rgba(15,23,42,0.08)] lg:rounded-l-[38px] lg:rounded-tr-none">

                <div className="relative overflow-hidden rounded-[22px] md:rounded-[30px]">

                  {/* Image */}
                  {/* Image */}
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop"
                    alt="Student"
                    className="
    w-full
    h-[300px]
    sm:h-[420px]
    md:h-[700px]
    object-cover
    object-top
  "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent"></div>

                  {/* Top Tag */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/85 px-4 py-2 backdrop-blur-xl shadow-lg">

                    <p className="text-[11px] font-medium text-gray-700">
                      Raman Arnava Vidyalaya
                    </p>

                  </div>

                  {/* Bottom Glass */}
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-7">

                    <div className="max-w-sm rounded-[24px] md:rounded-[30px] border border-white/20 bg-white/15 p-4 md:p-5 backdrop-blur-2xl">

                      <h2 className="text-[28px] leading-[0.95] tracking-[-1px] font-[500] text-white md:text-4xl">
                        Future
                        <br />
                        Innovators
                      </h2>

                      <p className="mt-3 text-[12px] leading-relaxed text-slate-200 md:text-sm">
                        Empowering creators, coders, innovators,
                        and future technology leaders.
                      </p>

                      <a
                        href="/events"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-900 transition-all hover:bg-gray-100"
                      >
                        View Event
                        <ArrowRight className="h-4 w-4" />
                      </a>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}