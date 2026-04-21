import { motion } from "framer-motion";
import { Server, Cpu, Database, Wifi } from "lucide-react";

const features = [
    {
        icon: Cpu,
        title: "Central Processing Power",
        desc: "All systems run on a powerful centralized server ensuring smooth and efficient performance.",
    },
    {
        icon: Database,
        title: "Secure Data Management",
        desc: "All student data and work is securely stored and managed in one unified system.",
    },
    {
        icon: Wifi,
        title: "Instant Connectivity",
        desc: "All desks are connected in real-time with zero delay and seamless communication.",
    },
    {
        icon: Server,
        title: "Zero Maintenance Setup",
        desc: "No need for individual system maintenance — everything is handled centrally.",
    },
];

export default function CentralServer() {
    return (
        <section className="w-full bg-[#050505] py-32 relative overflow-hidden">

            {/* Animated Background Glow */}
            <motion.div
                animate={{
                    background: [
                        "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)",
                        "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
                        "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)",
                        "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)",
                    ],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute inset-0 blur-3xl"
            />

            <div className="max-w-[1300px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* 🔥 LEFT SIDE (SERVER + HEADING) */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">

                    {/* SERVER CORE */}
                    <div className="relative flex items-center justify-center mb-12">

                        {/* Glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
                        />

                        {/* Soft Glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.4, 0.8, 0.4],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute w-56 h-56 bg-blue-500/20 rounded-full blur-3xl"
                        />

                        {/* Core */}
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 40px rgba(59,130,246,0.6)",
                                    "0 0 60px rgba(139,92,246,0.7)",
                                    "0 0 50px rgba(6,182,212,0.6)",
                                    "0 0 40px rgba(59,130,246,0.6)",
                                ],
                            }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="relative z-10 w-28 h-28 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl text-blue-400"
                        >
                            <Server size={48} />
                        </motion.div>

                    </div>

                    {/* HEADING */}
                    <h2 className="text-3xl md:text-5xl font-semibold text-white">
                        Central Server System
                    </h2>

                    <p className="mt-4 text-gray-400 text-base md:text-lg max-w-md">
                        A powerful backbone that connects every desk, ensuring speed, security and seamless digital learning experience.
                    </p>

                </div>

                {/* 🚀 RIGHT SIDE (FEATURES GRID) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {features.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ amount: 0.4 }}
                                whileHover={{ scale: 1.06 }}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl transition"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-blue-400 mb-4 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition">
                                    <Icon size={22} />
                                </div>

                                <h3 className="text-lg font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-gray-400 text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}