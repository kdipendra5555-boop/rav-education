import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const steps = [
    {
        title: "Application Form Release",
        desc: "The admission form is officially released on our website. Students can apply online through a simple and guided process.",
    },
    {
        title: "Form Submission & Entrance Assessment",
        desc: "Applicants complete the form, undergo verification, and appear for an entrance assessment conducted online or offline.",
    },
    {
        title: "Result Announcement",
        desc: "Results are published on the website. Selected candidates move forward in the admission process.",
    },
    {
        title: "Document Verification",
        desc: "Students submit original documents for verification to finalize their admission profile.",
    },
    {
        title: "Admission Confirmation",
        desc: "Selected students receive an official confirmation call or message from the school.",
    },
    {
        title: "PTM Meeting & Welcome Kit Distribution",
        desc: "Students receive a curated welcome kit including academic materials and identity credentials.",
    },
    {
        title: "Welcome to RAV",
        desc: "You are now officially a part of Raman Arnava Vidyalaya — a future-ready smart education system.",
    },
];


const MotionLink = motion(Link);

export default function AdmissionProcess() {
    return (
        <>
            {/* NAVBAR */}
            <Navbar />

            {/* SECTION */}
            <section className="bg-[#FAFAFA] px-4 sm:px-6 md:px-16 pt-16 md:pt-0">

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">

                    {/* LEFT SECTION */}
                    <div className="relative">
                        <div className="md:sticky md:top-20 md:h-screen flex flex-col justify-start pt-10 md:pt-16">

                            {/* IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative w-full rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.08)] group"
                            >
                                <img
                                    src="/images/admission.png"
                                    alt="Students learning"
                                    className="w-full h-[40vh] sm:h-[45vh] md:h-[55vh] object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                            </motion.div>

                            {/* CONTENT */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-6 md:mt-8 px-1 md:px-2"
                            >
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
                                    What’s inside the Welcome Kit
                                </h3>

                                <MotionLink
                                    to="/wel-kit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="mt-4 md:mt-6 inline-block bg-black text-white px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition"
                                >
                                    Explore Kit
                                </MotionLink>
                            </motion.div>

                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="py-10 md:py-28">

                        {/* HEADING */}
                        <div className="mb-14 md:mb-24">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
                                Admission Process
                            </h2>
                            <p className="text-gray-500 mt-3 md:mt-4 text-base md:text-lg max-w-md">
                                A smooth and transparent journey designed to make your admission experience simple and structured.
                            </p>
                        </div>

                        {/* STEPS */}
                        <div className="relative">

                            {/* LINE */}
                            <div className="absolute left-3 md:left-4 top-0 w-px h-full bg-gray-200"></div>

                            <div className="space-y-14 md:space-y-20">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        viewport={{ once: true }}
                                        className="relative pl-10 md:pl-14"
                                    >

                                        {/* NUMBER */}
                                        <div className="absolute left-0 top-1 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white border border-gray-300 text-xs md:text-sm font-medium text-gray-800 shadow-sm">
                                            {index + 1}
                                        </div>

                                        {/* CONTENT */}
                                        <div>
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-500 mt-2 md:mt-3 text-sm md:text-base leading-relaxed max-w-lg">
                                                {step.desc}
                                            </p>
                                        </div>

                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}

                        <div className="mt-16 md:mt-24">
                            <Link to="/admission">
                                <button className="bg-black text-white px-7 md:px-9 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
                                    Apply for Admission
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>
            </section>
            <Footer/>
        </>
    );
}