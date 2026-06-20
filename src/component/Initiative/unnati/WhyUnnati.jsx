import React from "react";
import { motion } from "framer-motion";

export default function WhyUnnati() {
  const points = [
    {
      no: "01",
      title: "Free Educational Support",
      desc: "Quality learning assistance for students who lack access to coaching and academic guidance after school hours.",
    },
    {
      no: "02",
      title: "Equal Opportunities",
      desc: "Ensuring every child, regardless of background or income, receives the support needed to thrive academically.",
    },
    {
      no: "03",
      title: "Mentorship & Guidance",
      desc: "Helping students stay motivated, focused, and confident through continuous teacher support.",
    },
    {
      no: "04",
      title: "Holistic Development",
      desc: "Building confidence, communication skills, leadership qualities, and a growth mindset beyond academics.",
    },
  ];

  return (
    <section className="bg-[#f8f7f4] py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p
            className="uppercase tracking-[8px] text-[#C89C4B] text-sm"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Why Unnati
          </p>

          <h2
            className="mt-6 text-[60px] md:text-[100px] leading-none text-[#081936]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Because Talent Exists
            <br />
            Everywhere.
          </h2>

          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-9">
            But opportunities do not. UNNATI was created to ensure that
            students from rural communities receive the educational support,
            mentorship, and guidance they deserve beyond regular school hours.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-[52%_48%] gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {points.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#d8c7a0] py-10 flex gap-8"
              >
                <span
                  className="text-[48px] md:text-[64px] text-[#C89C4B] leading-none"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {item.no}
                </span>

                <div>
                  <h3
                    className="text-[34px] text-[#081936]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 text-lg leading-8">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-end"
          >
            {/* Gold Border */}
            <div
              className="
                absolute
                -left-10
                top-1/2
                -translate-y-1/2
                w-[90%]
                h-[80%]
                border
                border-[#C89C4B]
                rounded-[180px]
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[180px]
                h-[750px]
                w-full
                max-w-[720px]
                shadow-[0_25px_80px_rgba(0,0,0,0.08)]
              "
            >
              <img
                src="/images/rural-students.png"
                alt="Unnati Students"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-32
            bg-[#081936]
            rounded-[50px]
            p-12 md:p-20
            relative
            overflow-hidden
          "
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C89C4B]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C89C4B]/10 rounded-full blur-3xl" />

          <p
            className="uppercase tracking-[8px] text-[#C89C4B]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Our Mission
          </p>

          <h3
            className="mt-8 text-[42px] md:text-[72px] text-white leading-tight max-w-5xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Empowering Rural Students
            Through Education,
            Guidance & Opportunity.
          </h3>

          <p className="mt-10 text-gray-300 text-lg leading-9 max-w-4xl">
            UNNATI is a free educational initiative dedicated to helping
            students from rural communities continue learning beyond school
            hours. Through academic support, mentorship, and personal
            development opportunities, we aim to create a future where every
            child has the chance to succeed regardless of their circumstances.
          </p>
        </motion.div>
      </div>
    </section>
  );
}