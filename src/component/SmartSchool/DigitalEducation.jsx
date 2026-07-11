import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

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

      <div className="max-w-[1400px] mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-12 md:gap-24">

        {/* RIGHT SIDE (Mobile first) */}
        <div className="order-1 md:order-2 relative md:sticky top-0 h-auto md:h-screen flex flex-col justify-center items-center md:items-start text-center md:text-left py-16 md:py-0">

          <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-green-500/20 blur-3xl rounded-full" />

          <div className="relative z-10 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-green-500/10 text-green-400 shadow-[0_0_40px_rgba(16,185,129,0.6)]">
            <BookOpen size={32} className="md:w-10 md:h-10" />
          </div>

          <h2 className="mt-6 md:mt-8 text-2xl md:text-5xl font-semibold text-white">
            Digital First Education
          </h2>

          <p className="mt-3 md:mt-4 text-gray-400 max-w-md text-sm md:text-lg">
            A modern approach where technology is the foundation of learning.
          </p>
        </div>

        {/* LEFT SIDE */}
        <div className="order-2 md:order-1">
          {groupedFeatures.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="min-h-[70vh] md:h-screen flex items-center"
            >
              <div className="flex flex-col gap-8 md:gap-10 max-w-xl border-l border-white/10 pl-4 md:pl-10">
                
                {group.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    viewport={{ amount: 0.3 }}
                  >
                    <span className="text-green-400 text-xs md:text-sm tracking-widest">
                      0{groupIndex * 3 + i + 1}
                    </span>

                    <h3 className="mt-1 md:mt-2 text-lg md:text-2xl font-semibold text-white">
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

      </div>
    </section>
  );
}