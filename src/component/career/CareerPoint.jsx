import { Link } from "react-router-dom";

export default function CareerPoint() {
    return (
        <section className="relative bg-[#f8fafc] py-24 px-4 overflow-hidden">

            {/* BACKGROUND SHAPES */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-40" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-100 rounded-full opacity-40" />

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
                        Ready to Shape the Future?
                    </h2>

                    <p className="mt-4 text-gray-500 text-sm md:text-base max-w-md">
                        Join a team that is transforming education with innovation,
                        passion, and purpose.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <Link
                            to="/careers-job"
                            className="px-6 py-3 bg-blue-500 text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition shadow-sm"
                        >
                            Apply Now
                        </Link>

                        <Link
                            to="/careers-job"
                            className="px-6 py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                        >
                            View Openings
                        </Link>

                    </div>
                </div>

                {/* RIGHT ILLUSTRATION */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/images/job.png"
                        alt="Career Illustration"
                        className="w-full md:w-[120%] lg:w-[140%] max-w-none h-auto object-contain"
                    />
                </div>

            </div>

        </section>
    );
}