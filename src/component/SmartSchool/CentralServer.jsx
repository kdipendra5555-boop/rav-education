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
        <section className="w-full bg-[#050505] py-20 md:py-32 relative overflow-hidden">

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

            <div className="max-w-[1300px] mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

                {/* LEFT */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">

                    <div className="relative flex items-center justify-center mb-8 md:mb-12">

                        <motion.div
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute w-52 h-52 md:w-72 md:h-72 bg-blue-500/20 rounded-full blur-3xl"
                        />

                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.4, 0.8, 0.4],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute w-40 h-40 md:w-56 md:h-56 bg-blue-500/20 rounded-full blur-3xl"
                        />

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
                            className="relative z-10 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl text-blue-400"
                        >
                            <Server size={36} className="md:w-12 md:h-12" />
                        </motion.div>

                    </div>

                    <h2 className="text-2xl md:text-5xl font-semibold text-white">
                        Central Server System
                    </h2>

                    <p className="mt-3 md:mt-4 text-gray-400 text-sm md:text-lg max-w-md">
                        A powerful backbone that connects every desk, ensuring speed, security and seamless digital learning experience.
                    </p>

                </div>

                {/* RIGHT (2 cards on phone) */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">

                    {features.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ amount: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                className="group bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-xl transition"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg md:rounded-xl bg-white/10 text-blue-400 mb-3 md:mb-4">
                                    <Icon size={18} className="md:w-5 md:h-5" />
                                </div>

                                <h3 className="text-sm md:text-lg font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-1 md:mt-2 text-gray-400 text-xs md:text-sm leading-snug">
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