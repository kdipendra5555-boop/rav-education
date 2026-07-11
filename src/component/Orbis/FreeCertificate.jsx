import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function FreeCertificationHeading() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
            <Sparkles size={16} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-600 md:text-xs">
              Free AI Certifications
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-7xl">
            Build AI Skills.
            <br />
            <span className="text-gray-400">
              Earn Recognized Certificates.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 md:mt-8 md:text-lg md:leading-8">
            Discover the best free AI certifications from Google, Microsoft,
            IBM, AWS, Oracle, Salesforce, HP, and top universities to
            strengthen your resume and prepare for future opportunities.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/certifications"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:scale-105"
            >
              Explore Certificates
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/roadmap"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-4 text-sm font-semibold text-gray-700 transition hover:border-black hover:text-black"
            >
              AI Roadmap
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm md:p-10"
        >
          <div className="space-y-6 md:space-y-8">
            {[
              ["24+", "Industry Certifications"],
              ["8", "Global Providers"],
              ["100%", "Free Learning"],
              ["Verified", "Completion Certificates"],
            ].map(([value, label], index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-100 pb-6 last:border-none last:pb-0"
              >
                <div>
                  <h3 className="text-3xl font-bold text-black md:text-4xl">
                    {value}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 md:text-base">
                    {label}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white md:h-12 md:w-12">
                  <BadgeCheck size={20} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}