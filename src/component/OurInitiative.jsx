import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function InitiativeSection() {
  const initiatives = [
    {
      title: "UNNATI",
      desc: "Free educational support and mentorship for students.",
      route: "/unnati",
    },
    {
      title: "Smart School",
      desc: "Digital learning ecosystem for future-ready education.",
      route: "/smart-school",
    },
    {
      title: "Teacher Fellowship",
      desc: "Empowering passionate educators and mentors.",
      route: "/teachers",
    },
    {
      title: "Scholarship Program",
      desc: "Supporting deserving students through opportunities.",
      route: "/scholarship",
    },
    {
      title: "Community Impact",
      desc: "Creating meaningful change through community initiatives.",
      route: "/community",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[38%_62%] gap-12 lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28 h-fit"
          >
            <span className="inline-flex items-center gap-2 text-[#2563EB] text-xs font-semibold uppercase tracking-[3px]">
              <span className="w-8 h-[2px] bg-[#2563EB]" />
              Our Initiatives
            </span>

            <h2 className="mt-5 text-[34px] sm:text-[42px] md:text-[52px] font-bold leading-[1.05] text-[#081936]">
              Creating
              <br />
              Opportunities.
              <br />
              Inspiring Change.
            </h2>

            <p className="mt-6 text-gray-600 text-sm md:text-base leading-7 max-w-md">
              Every initiative begins with a simple goal —
              creating opportunities where they are needed most.
              Through education, mentorship and community-driven
              programs, we strive to build a meaningful impact.
            </p>

            <div className="flex gap-8 mt-8">

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#081936]">
                  5+
                </h3>
                <p className="text-xs uppercase tracking-[2px] text-gray-500 mt-1">
                  Initiatives
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#081936]">
                  100%
                </h3>
                <p className="text-xs uppercase tracking-[2px] text-gray-500 mt-1">
                  Impact Driven
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />

            <div className="space-y-4">

              {initiatives.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={item.route}
                    className="group flex gap-4 sm:gap-5 items-start"
                  >

                    {/* Dot */}
                    <div
                      className="
                        relative z-10
                        w-6 h-6
                        rounded-full
                        border-2
                        border-[#2563EB]
                        bg-white
                        mt-4
                        shrink-0
                        hidden sm:block
                      "
                    />

                    {/* Card */}
                    <div
                      className="
                        flex-1
                        bg-[#f8fafc]
                        border
                        border-slate-200
                        rounded-2xl
                        p-5 md:p-6
                        transition-all
                        duration-300
                        hover:border-[#2563EB]
                        hover:shadow-lg
                        hover:-translate-y-1
                      "
                    >
                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-[#081936]">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm md:text-base text-gray-500 leading-6">
                            {item.desc}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={18}
                          className="
                            text-[#2563EB]
                            opacity-0
                            group-hover:opacity-100
                            transition-all
                            duration-300
                          "
                        />
                      </div>
                    </div>

                  </Link>
                </motion.div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}