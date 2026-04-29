import { motion } from "framer-motion";
import { Monitor, Cpu, Wifi, Sparkles, BookOpen, LayoutGrid } from "lucide-react";
import Navbar from "../SmartSchool/Navbar";

export default function ClassroomPage() {
    return (
        <div className="bg-[#050505] text-white pt-20 md:pt-24 overflow-hidden">

            <Navbar/>

            {/* 🔥 HERO */}
            <section className="py-24 md:py-44 text-center px-4 md:px-6 relative">

                <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-blue-500/20 blur-[100px] md:blur-[140px] rounded-full" />

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl sm:text-6xl md:text-[150px] font-semibold leading-[1.1] md:leading-[1.02] tracking-tight"
                >
                    Modern <br className="block md:hidden" /> Classroom
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 md:mt-12 text-gray-400 text-base sm:text-lg md:text-3xl max-w-xl md:max-w-3xl mx-auto leading-relaxed"
                >
                    Designed for focus, powered by technology and built for the future.
                </motion.p>

            </section>

            {/* 🖥️ MAIN VISUAL + CONTENT */}
            <section className="py-20 md:py-32 px-4 md:px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">

                    {/* LEFT VISUAL */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-3xl"
                        />

                        {/* ✅ IMAGE */}
                        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden h-[260px] md:h-[450px] shadow-[0_0_60px_rgba(59,130,246,0.2)]">
                            <img
                                src="https://t3.ftcdn.net/jpg/10/88/26/38/360_F_1088263827_8SVIf5jOMtrcM8qnIH4KuB0GI06UEdZz.jpg"
                                alt="Smart Classroom"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-5xl font-semibold leading-tight">
                            Built for Deep Focus
                        </h2>

                        <p className="mt-4 md:mt-6 text-gray-400 text-sm md:text-lg max-w-lg">
                            A distraction-free digital environment where students learn faster,
                            smarter and more effectively with modern tools.
                        </p>

                        <div className="mt-8 md:mt-12 space-y-5 md:space-y-6">

                            {[
                                { icon: Monitor, text: "Personal smart desk for every student" },
                                { icon: Cpu, text: "Built-in monitor & digital workspace" },
                                { icon: Wifi, text: "Connected and fast learning system" },
                                { icon: Sparkles, text: "Clean and distraction-free environment" },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3 md:gap-4"
                                    >
                                        <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                            <Icon size={16} />
                                        </div>
                                        <p className="text-gray-300 text-sm md:text-base">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                );
                            })}

                        </div>

                    </motion.div>

                </div>
            </section>

            {/* ⚡ FEATURES GRID */}
            <section className="py-24 md:py-40 px-4 md:px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-2xl md:text-5xl font-semibold">
                        What Makes It Different
                    </h2>

                    <div className="mt-12 md:mt-24 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">

                        {[
                            { icon: LayoutGrid, text: "Individual Digital Workspace" },
                            { icon: Cpu, text: "High Performance System" },
                            { icon: Wifi, text: "Real-Time Learning Access" },
                            { icon: BookOpen, text: "No Physical Books Needed" },
                            { icon: Sparkles, text: "Organized & Clean Setup" },
                            { icon: Monitor, text: "Better Focus & Productivity" },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.03 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition rounded-2xl" />

                                    <div className="relative bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 backdrop-blur-xl text-left">

                                        <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                            <Icon size={18} />
                                        </div>

                                        <p className="text-gray-300 text-sm md:text-base">{item.text}</p>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>

                </div>
            </section>

            {/* 🎯 STATEMENT */}
            <section className="py-24 md:py-40 px-4 md:px-6 text-center relative">

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 blur-2xl" />

                <div className="max-w-3xl md:max-w-4xl mx-auto relative z-10">

                    <h2 className="text-3xl md:text-7xl font-semibold leading-tight">
                        A Better Way to Learn
                    </h2>

                    <p className="mt-4 md:mt-8 text-gray-400 text-base md:text-xl">
                        Students don’t just study — they create, explore and grow with modern tools.
                    </p>

                </div>

            </section>

        </div>
    );
}