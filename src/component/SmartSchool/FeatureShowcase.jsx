import { motion } from "framer-motion";
import { Code, Cpu, BookOpen, Sparkles } from "lucide-react";
import { useState } from "react";

const features = [
    {
        icon: <Code size={24} />,
        title: "Practical Coding",
        desc: "Students learn by building real projects, not just theory.",
        glow: "from-blue-500/20 to-cyan-500/20",
    },
    {
        icon: <Cpu size={24} />,
        title: "Smart AI System",
        desc: "AI-powered tools help students learn faster and better.",
        glow: "from-purple-500/20 to-pink-500/20",
    },
    {
        icon: <BookOpen size={24} />,
        title: "Structured Learning",
        desc: "Well-designed curriculum for school-level digital education.",
        glow: "from-green-500/20 to-emerald-500/20",
    },
    {
        icon: <Sparkles size={24} />,
        title: "Modern Classrooms",
        desc: "Fully digital classrooms with smooth and engaging experience.",
        glow: "from-orange-500/20 to-yellow-500/20",
    },
];

export default function FeatureShowcase() {

    const [open, setOpen] = useState(false);

    return (
        <section className="relative py-20 md:py-32 px-4 md:px-6 bg-[#020617] overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/20 rounded-full blur-[120px] md:blur-[140px] top-[-100px] left-[-100px]" />
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-500/20 rounded-full blur-[120px] md:blur-[140px] bottom-[-100px] right-[-100px]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0f172a,_#020617)]" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">

                <h2 className="text-3xl md:text-6xl font-bold leading-tight">
                    <span
                        className="block text-4xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-gray-500 via-white to-blue-300 bg-clip-text text-transparent mt-2"
                        style={{
                            backgroundSize: "200% 200%",
                            animation: "gradientMove 4s ease infinite",
                        }}
                    >
                        Coderz Cafe
                    </span>

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

                <p className="text-gray-400 mt-4 md:mt-6 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
                    Coderz Cafe is our advanced digital learning system designed for
                    modern schools. It transforms traditional classrooms into smart,
                    interactive, and practical learning environments.
                </p>
            </div>

            {/* Cards */}
            <div className="relative z-10 mt-12 md:mt-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
                {features.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className="relative rounded-xl md:rounded-2xl p-[1px]"
                    >
                        <div
                            className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.glow} blur-lg md:blur-xl opacity-70`}
                        />

                        <div className="relative bg-[#020617]/80 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 text-center transition-all duration-300">

                            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto flex items-center justify-center rounded-lg md:rounded-xl bg-white/5 text-blue-400 mb-3 md:mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-white font-semibold text-sm md:text-lg mb-1 md:mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-xs md:text-sm leading-snug">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-12 md:mt-20 flex justify-center">
                <button 
                    onClick={() => setOpen(true)}
                    className="px-6 md:px-8 py-2.5 md:py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm md:text-base font-medium shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300"
                >
                    Visit Coderz Cafe
                </button>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center shadow-xl">
                        
                        <h3 className="text-lg font-semibold text-gray-800">
                            Coderz Cafe will be live soon
                        </h3>
                        
                        <p className="text-sm text-gray-500 mt-2">
                            Thanks for your patience.
                        </p>

                        <button
                            onClick={() => setOpen(false)}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
}