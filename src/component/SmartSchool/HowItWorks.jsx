import { motion } from "framer-motion";
import Navbar from "../SmartSchool/Navbar";
import { Cpu, Monitor, Server, Activity, Sparkles, Wifi } from "lucide-react";

const steps = [
  {
    icon: Monitor,
    title: "Student Login",
    desc: "Secure login system ensures that every student gets access to their own personalized digital workspace. Once logged in, students can view their courses, assignments, performance insights, and saved progress. The system maintains complete data privacy while enabling seamless access across all smart desks within the school environment.",
  },
  {
    icon: Cpu,
    title: "Smart Desk Activation",
    desc: "As soon as the student logs in, the smart desk instantly loads a fully customized learning environment tailored to their class, subjects, and progress level. It eliminates manual setup and reduces time wastage, allowing students to directly focus on learning with pre-configured tools, content, and interactive modules.",
  },
  {
    icon: Sparkles,
    title: "Interactive Learning",
    desc: "Students engage with a modern learning system that includes AI-powered tools, coding environments, real-time quizzes, and multimedia lessons. This interactive approach replaces traditional passive learning and encourages creativity, problem-solving, and active participation in the classroom.",
  },
  {
    icon: Server,
    title: "Central Server Sync",
    desc: "All classrooms are connected to a powerful central server that manages data, content distribution, and system performance. This ensures ultra-fast access, secure storage, and the ability to operate even in offline-first environments, reducing dependency on constant internet connectivity.",
  },
  {
    icon: Activity,
    title: "Track Progress",
    desc: "The system continuously tracks student performance, assignments, attendance, and learning behavior. Teachers and administrators can easily monitor progress through dashboards, helping them identify strengths, weaknesses, and areas that need improvement for each individual student.",
  },
  {
    icon: Wifi,
    title: "Connected System",
    desc: "All smart desks remain interconnected through a stable network, enabling seamless communication between devices, teachers, and servers. This connectivity allows real-time updates, collaborative learning, instant content sharing, and a smooth digital classroom experience without interruptions.",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">

      <Navbar />

      {/* 🔥 BIG HERO */}
      <section className="pt-40 pb-32 text-center px-6 relative overflow-hidden">

        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/20 blur-[140px] rounded-full" />

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-[70px] md:text-[120px] lg:text-[150px] font-semibold leading-[1.05] tracking-tight"
        >
          How It Works
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          A powerful system designed to transform traditional classrooms into smart digital environments.
        </motion.p>

      </section>

      {/* 🚀 PREMIUM FLOW (ONE BY ONE) */}
      <section className="px-6 snap-y snap-mandatory">

        <div className="max-w-6xl mx-auto relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;

            return (
             <motion.div
  key={i}
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ amount: 0.6 }}
  transition={{ duration: 0.6 }}
  className={`min-h-screen flex items-center ${
    isLeft ? "md:justify-start" : "md:justify-end"
  }`}
>
  <div className="w-full grid md:grid-cols-3 items-center">

    {/* LEFT SIDE */}
    {isLeft ? (
      <>
        {/* CARD */}
        <div className="md:col-span-1 md:pr-10">
          <div className="relative group">

            <div className="absolute inset-0 bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition rounded-3xl" />

            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Icon size={26} />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold">
                {step.title}
              </h3>
            </div>
          </div>
        </div>

        {/* CENTER DOT */}
        <div className="hidden md:flex justify-center">
          <div className="w-10 h-10 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] flex items-center justify-center">
            {i + 1}
          </div>
        </div>

        {/* RIGHT DESCRIPTION */}
        <div className="md:col-span-1 md:pl-10">
        <p className="text-gray-400 text-xl leading-relaxed max-w-md">
            {step.desc}
          </p>
        </div>
      </>
    ) : (
      <>
        {/* LEFT DESCRIPTION */}
        <div className="md:col-span-1 md:pr-10 text-right">
          <p className="text-gray-400 text-lg leading-relaxed max-w-md ml-auto">
            {step.desc}
          </p>
        </div>

        {/* CENTER DOT */}
        <div className="hidden md:flex justify-center">
          <div className="w-10 h-10 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] flex items-center justify-center">
            {i + 1}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="md:col-span-1 md:pl-10">
          <div className="relative group">

            <div className="absolute inset-0 bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition rounded-3xl" />

            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <Icon size={26} />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold">
                {step.title}
              </h3>
            </div>
          </div>
        </div>
      </>
    )}

  </div>
</motion.div>
            );
          })}

        </div>
      </section>

      {/* 🎯 FINAL */}
      <section className="py-40 text-center px-6 relative">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 blur-2xl" />

        <h2 className="text-5xl md:text-7xl font-semibold">
          Smart Learning Flow
        </h2>

        <p className="mt-8 text-gray-400 text-xl max-w-2xl mx-auto">
          A seamless journey from login to learning — powered by modern technology.
        </p>

      </section>

    </div>
  );
}