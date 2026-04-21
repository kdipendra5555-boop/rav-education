import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Server, Users, Sparkles, Brain } from "lucide-react";
import Navbar from "../SmartSchool/Navbar";

const reasons = [
  {
    icon: Zap,
    title: "Blazing Fast System",
    desc: "Our smart school infrastructure is engineered for ultra-fast performance, ensuring instant response, zero lag, and seamless classroom operations across all environments.",
  },
  {
    icon: Server,
    title: "Fully Local Server",
    desc: "Runs entirely on a secure local server, eliminating internet dependency while ensuring maximum reliability, privacy, and uninterrupted access.",
  },
  {
    icon: Brain,
    title: "AI Powered Learning",
    desc: "Students experience next-generation education with integrated AI tools that enhance creativity, coding ability, and real-world problem solving.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    desc: "Advanced security systems protect all data with complete control, ensuring a safe and private digital learning environment.",
  },
  {
    icon: Users,
    title: "Teacher Friendly",
    desc: "Designed with simplicity and power, enabling teachers to manage classrooms, monitor progress, and deliver content effortlessly.",
  },
  {
    icon: Sparkles,
    title: "Modern Experience",
    desc: "A visually rich and interactive interface designed to make learning immersive, engaging, and future-ready.",
  },
];

export default function WhyUs() {

  // ✅ STATE ANDAR LAO
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="bg-[#050505] text-white h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar />

      {/* 🔥 HEADER */}
      <div className="min-h-screen snap-start flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-[120px] font-semibold tracking-tight leading-[1.05] bg-gradient-to-r from-white via-blue-200 to-blue-400 text-transparent bg-clip-text"
        >
          Why Choose Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-2xl md:text-3xl lg:text-4xl max-w-3xl leading-[1.6] font-light bg-gradient-to-r from-gray-300 via-blue-200 to-blue-400 text-transparent bg-clip-text"
        >
          Built for performance, designed for the future, and crafted to transform education into a powerful smart digital experience.
        </motion.p>
      </div>

      {/* 🔥 STEPS */}
      {reasons.map((item, i) => {
        const Icon = item.icon;
        const isLeft = i % 2 === 0;

        return (
          <motion.div
            key={i}
            className={`min-h-screen snap-start flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-16 ${
              !isLeft ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div className="flex-1 text-center md:text-left max-w-xl">
              <div className="w-16 h-16 mx-auto md:mx-0 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 mb-6 shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                <Icon size={30} />
              </div>

              <h3 className="text-4xl md:text-5xl font-semibold mb-6">
                {item.title}
              </h3>

              <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
                {item.desc}
              </p>
            </motion.div>

            <motion.div className="flex-1 max-w-md w-full">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10 blur-3xl opacity-60 group-hover:opacity-90 transition rounded-3xl" />

                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-16 backdrop-blur-xl h-[300px] flex items-center justify-center transition group-hover:scale-105">
                  <Icon size={80} className="text-blue-400 opacity-90" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* 🔥 DOPS SECTION */}
      <motion.div className="min-h-screen snap-start flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-blue-500/20 blur-[140px] rounded-full" />

        <div className="z-10 max-w-5xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold">
            Powering the Future of Smart Education
          </h2>

          <p className="mt-10 text-gray-400 text-2xl md:text-3xl">
            In love with{" "}
            <span
              onClick={() => setOpen(true)}
              className="cursor-pointer hover:scale-110 transition"
            >
              ❤️
            </span>
          </p>

          <motion.h1
  className="mt-6 text-[80px] md:text-[140px] lg:text-[200px] font-bold 
  bg-gradient-to-r from-pink-500 via-white to-pink-500 bg-[length:200%_100%] 
  text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]"
  
  animate={{
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  }}

  transition={{
    duration: 8, // 🔥 slow kar diya
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  DOPS
</motion.h1>
        </div>
      </motion.div>

      {/* 🔐 MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 w-full max-w-md text-center">

            <h2 className="text-3xl mb-6">Enter Access 🔒</h2>

            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10"
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-6 p-3 rounded-xl bg-white/5 border border-white/10"
            />

            <button
              onClick={() => {
                if (email === "admin@gmail.com" && password === "1234") {
                  window.location.href = "/secret";
                } else {
                  alert("Invalid Credentials ❌");
                }
              }}
              className="w-full py-3 bg-blue-500 rounded-xl"
            >
              Unlock
            </button>
          </div>
        </div>
      )}
    </section>
  );
}