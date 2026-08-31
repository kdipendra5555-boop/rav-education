import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  ScanLine,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Secure by Design",
    desc: "Enterprise-grade security ensures every certificate remains protected, authentic and tamper-proof.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "Instant Verification",
    desc: "Verify credentials in seconds using a unique identity and cryptographic verification.",
  },
  {
    number: "03",
    icon: ScanLine,
    title: "QR Ready",
    desc: "Every certificate includes a QR code for quick and effortless validation.",
  },
  {
    number: "04",
    icon: Globe,
    title: "Share Anywhere",
    desc: "Publish credentials to LinkedIn, resumes, portfolios or your own website with one click.",
  },
];

export default function OrbisFeatures() {
  return (
    <section className="bg-white py-36">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-[420px_1fr] gap-24">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Why Orbis
            </p>

            <h2 className="mt-6 text-5xl font-semibold tracking-tight text-black md:text-6xl">
              Built for
              <br />
              trust.
            </h2>

            <p className="mt-8 max-w-sm text-lg leading-8 text-gray-500">
              A modern credential platform designed to issue, verify and
              manage certificates with simplicity and confidence.
            </p>
          </motion.div>

          {/* Right */}

          <div>

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group border-t border-gray-200 py-12 cursor-pointer"
                >

                  <div className="flex justify-between items-start">

                    {/* Left */}

                    <div className="flex gap-8">

                      <span className="text-sm font-medium text-gray-300 w-8">
                        {item.number}
                      </span>

                      <div>

                        <div className="flex items-center gap-4">

                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 group-hover:bg-black group-hover:border-black">
                            <Icon
                              size={20}
                              className="text-black transition-all duration-300 group-hover:text-white"
                            />
                          </div>

                          <h3 className="text-2xl font-semibold text-black">
                            {item.title}
                          </h3>

                        </div>

                        <p className="mt-5 max-w-xl leading-8 text-gray-500">
                          {item.desc}
                        </p>

                      </div>

                    </div>

                    {/* Arrow */}

                    <ArrowUpRight
                      className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"
                      size={22}
                    />

                  </div>

                </motion.div>
              );
            })}

            <div className="border-t border-gray-200"></div>

          </div>

        </div>

        

      </div>
    </section>

    
  );
}