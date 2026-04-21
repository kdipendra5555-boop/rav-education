import { motion } from "framer-motion";
import { Monitor } from "lucide-react";

// helper: chunk into groups of 3
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const features = [
  {
    title: "Personal Workspace",
    desc: "Every student gets their own secure digital workspace with login access, personal storage, and customized environment for focused learning.",
  },
  {
    title: "Built-in Monitor & PC Setup",
    desc: "Each desk comes with an integrated monitor and connected system, removing the need for separate computer labs.",
  },
  {
    title: "Fast & Lag-Free Performance",
    desc: "Powered by a central server system ensuring smooth, high-speed and uninterrupted performance across all desks.",
  },
  {
    title: "Internet Available",
    desc: "Access to internet when needed for research, learning resources, and real-time knowledge exploration.",
  },
  {
    title: "Interactive Learning",
    desc: "Students engage with coding, AI tools, simulations and digital activities for better understanding and creativity.",
  },
  {
    title: "Future Ready Education",
    desc: "Preparing students for tomorrow with modern technology, digital skills and innovation-driven learning methods.",
  },
];

// 👇 grouping
const groupedFeatures = chunkArray(features, 3);

export default function SmartFeatures() {
  return (
    <section className="w-full bg-[#0b0b0b]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE (Sticky) */}
        <div className="sticky top-0 h-[80vh] md:h-screen flex flex-col justify-center items-center md:items-start text-center md:text-left">

          <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

          <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 shadow-[0_0_40px_rgba(37,99,235,0.6)]">
            <Monitor size={40} />
          </div>

          <h2 className="mt-8 text-3xl md:text-5xl font-semibold text-white leading-tight">
            Smart Learning Desk
          </h2>

          <p className="mt-4 text-gray-400 max-w-md text-base md:text-lg">
            A complete digital desk system designed to transform traditional classrooms into smart, interactive and future-ready learning spaces.
          </p>
        </div>

        {/* RIGHT SIDE (Scroll Steps - grouped) */}
        <div>
          {groupedFeatures.map((group, groupIndex) => (
            <div key={groupIndex} className="h-[80vh] md:h-screen flex items-center">
              
              <div className="max-w-xl border-l border-white/10 pl-6 md:pl-10 flex flex-col gap-10">

                {group.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.2 }}
                    viewport={{ amount: 0.5 }}
                  >
                    <span className="text-blue-400 text-sm tracking-widest">
                      0{groupIndex * 3 + i + 1}
                    </span>

                    <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}