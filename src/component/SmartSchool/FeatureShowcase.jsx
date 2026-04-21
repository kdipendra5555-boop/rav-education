import { motion } from "framer-motion";
import { Code, Cpu, BookOpen, Sparkles } from "lucide-react";

const features = [
    {
        icon: <Code size={28} />,
        title: "Practical Coding",
        desc: "Students learn by building real projects, not just theory.",
        glow: "from-blue-500/20 to-cyan-500/20",
    },
    {
        icon: <Cpu size={28} />,
        title: "Smart AI System",
        desc: "AI-powered tools help students learn faster and better.",
        glow: "from-purple-500/20 to-pink-500/20",
    },
    {
        icon: <BookOpen size={28} />,
        title: "Structured Learning",
        desc: "Well-designed curriculum for school-level digital education.",
        glow: "from-green-500/20 to-emerald-500/20",
    },
    {
        icon: <Sparkles size={28} />,
        title: "Modern Classrooms",
        desc: "Fully digital classrooms with smooth and engaging experience.",
        glow: "from-orange-500/20 to-yellow-500/20",
    },
];

export default function FeatureShowcase() {
    return (
        <section className="relative py-32 px-6 bg-[#020617] overflow-hidden">

            {/* 🔵 Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] top-[-100px] left-[-100px]" />
            <div className="absolute w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[140px] bottom-[-100px] right-[-100px]" />

            {/* 🔷 Radial Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0f172a,_#020617)]" />

            {/* 🔥 Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span
                        className="block text-5xl md:text-8xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-gray-500 via-white to-blue-300 bg-clip-text text-transparent mt-2"
                        style={{
                            backgroundSize: "200% 200%",
                            animation: "gradientMove 4s ease infinite",
                        }}
                    >
                        Coderz Cafe
                    </span>

                    {/* Keyframes inside same component */}
                    <style>
                        {`
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
                    </style>
                </h2>
                {/* Description */}
                <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
                    Coderz Cafe is our advanced digital learning system designed for
                    modern schools. It transforms traditional classrooms into smart,
                    interactive, and practical learning environments.
                </p>
            </div>

            {/* 🔥 Cards */}
            <div className="relative z-10 mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {features.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -12, scale: 1.05 }}
                        className="relative rounded-2xl p-[1px]"
                    >
                        {/* 🌈 Glow Border */}
                        <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.glow} blur-xl opacity-70`}
                        />

                        {/* Card */}
                        <div className="relative bg-[#020617]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:border-white/20">

                            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-white/5 text-blue-400 mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-white font-semibold text-lg mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 🚀 CTA Button */}
            <div className="relative z-10 mt-20 flex justify-center">
                <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300">
                    Visit Coderz Cafe
                </button>
            </div>

        </section>
    );
}