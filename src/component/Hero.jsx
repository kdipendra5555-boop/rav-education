import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
  BookOpen,
  Heart,
} from "lucide-react";

import Navbar from "./Navbar";

export default function Hero() {
  const features = [
    {
      title: "Experienced & Caring Faculty",
      desc: "Mentors for a brighter future",
      icon: Users,
    },
    {
      title: "Smart Classrooms",
      desc: "Technology enabled learning",
      icon: BookOpen,
    },
    {
      title: "Safe & Secure Campus",
      desc: "A safe space to grow",
      icon: ShieldCheck,
    },
    {
      title: "Quality Education",
      desc: "Focused on overall development",
      icon: Sparkles,
    },
    {
      title: "Free Education",
      desc: "Equal opportunity for every child",
      icon: Heart,
    },
  ];

  return (
    <section className="relative min-h-[760px] overflow-hidden text-white">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg.png')",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r
                   from-[#03184a]/95
                   via-[#073b96]/80
                   to-[#073b96]/25"
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-48
                   bg-gradient-to-t
                   from-[#03184a]/80
                   to-transparent"
      />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div className="relative z-50">
        <Navbar />
      </div>


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="min-h-[650px] flex items-center">

          <div className="w-full grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >

              {/* Badge */}

              <div
                className="inline-flex items-center gap-2
                           px-4 py-2
                           mb-6
                           rounded-full
                           bg-white/10
                           border border-white/20
                           backdrop-blur-md"
              >

                <GraduationCap size={17} />

                <span className="text-sm text-blue-100">
                  A Brighter Tomorrow, Together
                </span>

              </div>


              {/* TITLE — ONE LINE */}

              <h1
                className="whitespace-nowrap
                           text-[42px]
                           sm:text-[52px]
                           md:text-[60px]
                           lg:text-[54px]
                           xl:text-[68px]
                           font-bold
                           tracking-[-0.035em]
                           leading-none"
              >
                Raman Arnava Vidyalaya
              </h1>


              {/* Subtitle */}

              <p
                className="mt-7
                           text-xl
                           lg:text-2xl
                           font-medium
                           text-blue-100"
              >
                Nurturing Young Minds with{" "}

                <span className="text-blue-200">
                  Knowledge, Values & Excellence
                </span>
              </p>


              {/* Description */}

              <p
                className="mt-5
                           max-w-2xl
                           text-base
                           lg:text-lg
                           leading-8
                           text-blue-100/75"
              >
                A modern educational institution committed to
                holistic development, academic excellence, and
                character building from early learning to higher
                classes.
              </p>


              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-9">

                <Link
                  to="/admission-process"
                  className="group inline-flex items-center gap-2
                             bg-white
                             text-blue-700
                             px-7 py-3.5
                             rounded-xl
                             font-semibold
                             shadow-xl
                             hover:bg-blue-50
                             hover:-translate-y-1
                             transition-all duration-300"
                >
                  Admission Process

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1
                               transition-transform"
                  />
                </Link>


                <Link
                  to="/work-progress"
                  className="px-7 py-3.5
                             rounded-xl
                             font-semibold
                             bg-white/10
                             border border-white/25
                             backdrop-blur-md
                             hover:bg-white/20
                             hover:-translate-y-1
                             transition-all duration-300"
                >
                  Work Progress
                </Link>


                <Link
                  to="/orbis-89723d89sdf8878sdfjfb"
                  className="px-7 py-3.5
                             rounded-xl
                             font-semibold
                             border border-white/40
                             hover:bg-white
                             hover:text-blue-700
                             hover:-translate-y-1
                             transition-all duration-300"
                >
                  ORBIS
                </Link>

              </div>


              {/* Stats */}

              <div className="flex flex-wrap gap-8 mt-12">

                <div>
                  <h3 className="text-3xl font-bold">
                    1000+
                  </h3>

                  <p className="text-sm text-blue-200 mt-1">
                    Students
                  </p>
                </div>


                <div className="h-12 w-px bg-white/20" />


                <div>
                  <h3 className="text-3xl font-bold">
                    50+
                  </h3>

                  <p className="text-sm text-blue-200 mt-1">
                    Faculty
                  </p>
                </div>


                <div className="h-12 w-px bg-white/20" />


                <div>
                  <h3 className="text-3xl font-bold">
                    16+
                  </h3>

                  <p className="text-sm text-blue-200 mt-1">
                    Classrooms
                  </p>
                </div>


                <div className="h-12 w-px bg-white/20" />


                <div>
                  <h3 className="text-3xl font-bold">
                    100%
                  </h3>

                  <p className="text-sm text-blue-200 mt-1">
                    Holistic Growth
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}