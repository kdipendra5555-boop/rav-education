import { motion } from "framer-motion";
import {
  Monitor,
  Wifi,
  Server,
  Activity,
  Droplets,
  Gamepad2,
  Trees,
  ShieldCheck,
} from "lucide-react";

const facilities = [
  {
    icon: <Gamepad2 size={24} />,
    title: "Indoor Play Area",
    desc: "Safe and engaging indoor games for students.",
  },
  {
    icon: <Trees size={24} />,
    title: "Outdoor Playground",
    desc: "Spacious ground for sports and activities.",
  },
  {
    icon: <Activity size={24} />,
    title: "Medical Support",
    desc: "On-campus basic healthcare facility.",
  },
  {
    icon: <Server size={24} />,
    title: "Central Server",
    desc: "Smart system for digital classrooms.",
  },
  {
    icon: <Wifi size={24} />,
    title: "High-Speed Internet",
    desc: "Fast and reliable connectivity.",
  },
  {
    icon: <Droplets size={24} />,
    title: "RO Water",
    desc: "Clean drinking water available.",
  },
  {
    icon: <Monitor size={24} />,
    title: "Computer Labs",
    desc: "Modern labs for coding learning.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Secure Campus",
    desc: "24/7 safety and monitoring.",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="w-full py-20 px-4 bg-[#f8fafc]">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          World-Class Facilities
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-lg">
          Everything students need to grow and learn
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {facilities.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="group bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow border border-gray-100 hover:shadow-xl transition duration-300"
          >
            {/* Icon */}
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg md:rounded-xl bg-green-100 text-green-600 mb-3 md:mb-4 group-hover:scale-110 transition">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm md:text-lg font-semibold text-gray-800">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[11px] md:text-sm text-gray-500 mt-1 md:mt-2 leading-snug md:leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}