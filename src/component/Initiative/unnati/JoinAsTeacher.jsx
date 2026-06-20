import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function JoinAsTeacher() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f4] py-20 md:py-32">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 md:w-[450px] h-72 md:h-[450px] bg-[#C89C4B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 md:w-[450px] h-72 md:h-[450px] bg-[#C89C4B]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[58%_42%] gap-10 lg:gap-20 items-center"
        >

          {/* LEFT CONTENT */}
          <div>
            <p
              className="uppercase tracking-[5px] md:tracking-[8px] text-[#C89C4B] text-xs md:text-sm"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              For Educators
            </p>

            <h2
              className="
                mt-5
                text-[38px]
                sm:text-[52px]
                md:text-[68px]
                lg:text-[82px]
                leading-[0.95]
                text-[#081936]
              "
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Teach Beyond
              <br />
              The Classroom.
            </h2>

            <p className="mt-8 text-gray-600 text-base md:text-lg leading-8 md:leading-9 max-w-2xl">
              At UNNATI, teaching is not just about completing lessons.
              It is about mentoring students, building confidence and
              creating opportunities where they are needed most.
            </p>

            <div className="hidden lg:flex items-center gap-4 mt-12">
              <div className="w-24 h-px bg-[#C89C4B]" />
              <span className="text-sm tracking-[3px] uppercase text-[#C89C4B]">
                Join Our Mission
              </span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Border Accent */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C89C4B]/40 rounded-[32px] hidden md:block" />

            <div className="relative bg-white rounded-[28px] md:rounded-[36px] p-6 sm:p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-[#ece7db]">

              <span
                className="uppercase tracking-[4px] text-[#C89C4B] text-xs md:text-sm"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Join Our Mission
              </span>

              <h3
                className="
                  mt-5
                  text-[30px]
                  sm:text-[36px]
                  md:text-[46px]
                  leading-tight
                  text-[#081936]
                "
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Help a child
                <br />
                discover their
                <br />
                potential.
              </h3>

              <p className="mt-6 text-gray-600 leading-8 text-sm md:text-base">
                We are looking for passionate educators who believe that
                quality education should reach every student, regardless
                of their background or circumstances.
              </p>

              <Link
                to="/careers-job"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  mt-10
                  text-[#081936]
                  font-medium
                  text-sm
                  md:text-base
                "
              >
                Explore Opportunities

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}