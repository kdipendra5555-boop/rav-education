import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OrbisHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">

      {/* Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gray-100 via-white to-gray-50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="mb-8 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm"
        >
          <span className="text-xs font-medium tracking-wide text-gray-600 uppercase">
            Trusted Digital Credentials
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          className="max-w-5xl text-5xl font-semibold tracking-tight text-gray-950 md:text-7xl lg:text-8xl"
        >
          Build
          <span className="mx-3 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
            Trust
          </span>
          into every
          <br />
          certificate you issue.
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .25 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-gray-500"
        >
          Issue, verify and manage digital certificates through a secure,
          developer-friendly platform designed for organizations, universities
          and modern teams.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="group flex items-center gap-2 rounded-xl bg-gray-950 px-7 py-3 text-sm font-medium text-white transition hover:scale-[1.02]">
            Start Building
            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </button>

          <button className="rounded-xl border border-gray-300 bg-white px-7 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
            Documentation
          </button>
        </motion.div>

        

      </div>
    </section>
  );
}