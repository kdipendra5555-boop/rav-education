import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../SmartSchool/Navbar";

export default function BookVisit() {
    const [type, setType] = useState("individual");

    return (
        <div className="bg-[#050505] text-white min-h-screen">

            <Navbar />

            <section className="pt-32 pb-32 px-6 relative overflow-hidden">

                <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[140px] rounded-full" />

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative text-center md:text-left"
                    >

                        {/* Glow Layer */}
                        <div className="absolute -top-20 -left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

                        {/* Small Tag */}
                        <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-6">
                            Smart School Visit
                        </span>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
                            Experience the <br />
                            <span className="text-blue-400">Future Classroom</span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-gray-400 text-lg max-w-md leading-relaxed">
                            Step into a modern learning environment where technology meets education.
                            See how students learn faster, smarter and more effectively.
                        </p>

                        {/* Divider */}
                        <div className="mt-10 h-px w-20 bg-white/10" />

                        {/* Points */}
                        <div className="mt-10 space-y-5">

                            {[
                                "Hands-on smart desk experience",
                                "Live digital learning system",
                                "Real-time classroom interaction",
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-2.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                    <p className="text-gray-300">{item}</p>
                                </motion.div>
                            ))}

                        </div>

                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-3xl" />

                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Visit Type */}
                                <select
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="md:col-span-2 input text-blue-400 bg-[#0b0b0b]"
                                >
                                    <option value="individual" className="bg-[#0b0b0b] text-white">
                                        Individual
                                    </option>
                                    <option value="team" className="bg-[#0b0b0b] text-white">
                                        Team
                                    </option>
                                    <option value="school" className="bg-[#0b0b0b] text-white">
                                        School
                                    </option>
                                </select>

                                {/* 🔥 DYNAMIC FIELDS */}

                                {type === "individual" && (
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input md:col-span-2"
                                    />
                                )}

                                {type === "team" && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Organisation Name"
                                            className="input"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Manager Name"
                                            className="input"
                                        />
                                    </>
                                )}

                                {type === "school" && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="School Name"
                                            className="input"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Principal Name"
                                            className="input"
                                        />
                                    </>
                                )}

                                {/* COMMON FIELDS */}
                                <input type="text" placeholder="Phone Number" className="input" />
                                <input type="email" placeholder="Gmail Address" className="input" />

                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="input md:col-span-2"
                                />

                                <input type="date" className="input" />
                                <input type="time" className="input" />

                                <textarea
                                    rows="4"
                                    placeholder="Purpose / Motive of Visit"
                                    className="input md:col-span-2"
                                />

                                {/* Submit */}
                                <div className="md:col-span-2">
                                    <button className="w-full mt-2 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition text-lg font-medium">
                                        Submit Request
                                    </button>
                                </div>

                            </form>

                        </div>
                    </motion.div>

                </div>
            </section>

            {/* INPUT STYLE */}
            <style jsx>{`
        .input {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 12px 16px;
          color: white;
          outline: none;
          transition: all 0.3s;
        }

        .input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
      `}</style>

        </div>
    );
}