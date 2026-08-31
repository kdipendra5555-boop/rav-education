import { Link } from "react-router-dom";
const SponsorsSection = () => {
   const sponsors = [
    {
        name: "Notified Soon",
        role: "Technology Partner",
        link: "/technology-partner",
    },
    {
        name: "Notified Soon",
        role: "Learning Partner",
        link: "/learning-partner",
    },
    {
        name: "Dot Print",
        role: "Creative Partner",
        logo: "images/dotprint.png",
        link: "/printmedia",
    },
    {
        name: "Notified Soon",
        role: "Innovation Partner",
        link: "/innovation-partner",
    },
];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 px-4 md:px-12">
            {/* Background Effects */}
            <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs md:text-sm font-medium text-blue-700 shadow-sm">
                        Trusted Sponsors & Partners
                    </div>

                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-6xl leading-tight">
                        Proudly Supported By
                        <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                            Industry Leaders
                        </span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600 md:text-lg">
                        Our mission is powered by visionary organizations helping us build
                        smarter education and brighter futures.
                    </p>
                </div>

                {/* Sponsors Grid */}
                <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-xl p-4 md:p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 opacity-0 transition duration-500 group-hover:opacity-100" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Logo */}
                                <div className="flex h-16 w-full items-center justify-center rounded-xl border border-slate-100 bg-white p-3 shadow-sm md:h-24">
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="max-h-12 md:max-h-16 w-auto object-contain grayscale transition duration-500 group-hover:grayscale-0"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="mt-4 text-base md:text-2xl font-semibold text-slate-900">
                                    {sponsor.name}
                                </h3>

                                {/* Role */}
                                <p className="mt-1 text-[11px] md:text-sm font-medium text-slate-500">
                                    {sponsor.role}
                                </p>

                                {/* Divider */}
                                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                                {/* Button */}
                                <Link
    to={sponsor.link}
    className="mt-4 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] md:text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
>
    Learn More
</Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="relative mt-20 overflow-hidden rounded-[32px] bg-slate-900 p-7 md:p-16 shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.2),transparent_35%)]" />

                    <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl font-bold text-white md:text-5xl leading-tight">
                                Partner With Our School
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-lg">
                                Collaborate with us to support innovation, education, and future
                                opportunities for students.
                            </p>
                        </div>

                        <Link
                            to="/joinmission"
                            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-slate-100 inline-flex items-center justify-center"
                        >
                            Become a Sponsor
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;