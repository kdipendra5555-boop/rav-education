import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

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
    title: "Coding from Early Classes",
    desc: "Students start learning coding from a young age, building logic, creativity and problem-solving skills step by step.",
  },
  {
    title: "AI & Modern Tools",
    desc: "Hands-on experience with AI tools, automation and modern technologies to prepare students for the future.",
  },
  {
    title: "Project-Based Learning",
    desc: "Students create real-world projects instead of just theory, making learning practical and engaging.",
  },
  {
    title: "Digital Assignments",
    desc: "Assignments, tests and submissions are managed digitally for better tracking and efficiency.",
  },
  {
    title: "Interactive Content",
    desc: "Learning through videos, simulations and smart content for better understanding and retention.",
  },
  {
    title: "Future Ready Skills",
    desc: "Focus on skills like critical thinking, problem solving, creativity and digital literacy.",
  },
];

const groupedFeatures = chunkArray(features, 3);

export default function DigitalEducation() {
  return (
    <section className="w-full bg-[#050505]">

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24">

        {/* LEFT SIDE (NOW FEATURES) */}
        <div>
          {groupedFeatures.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="h-[80vh] md:h-screen flex items-center"
            >
              <div className="flex flex-col gap-10 max-w-xl border-l border-white/10 pl-6 md:pl-10">
                
                {group.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ amount: 0.4 }}
                  >
                    <span className="text-green-400 text-sm tracking-widest">
                      0{groupIndex * 3 + i + 1}
                    </span>

                    <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-400 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}

              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (NOW STICKY) */}
        <div className="sticky top-0 h-[80vh] md:h-screen flex flex-col justify-center items-center md:items-start text-center md:text-left">

          <div className="absolute w-72 h-72 bg-green-500/20 blur-3xl rounded-full" />

          <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-green-500/10 text-green-400 shadow-[0_0_40px_rgba(16,185,129,0.6)]">
            <BookOpen size={40} />
          </div>

          <h2 className="mt-8 text-3xl md:text-5xl font-semibold text-white">
            Digital First Education
          </h2>

          <p className="mt-4 text-gray-400 max-w-md text-base md:text-lg">
            A modern approach where technology is the foundation of learning.
          </p>
        </div>

      </div>
    </section>
  );
}