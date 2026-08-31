import { Link } from "react-router-dom";

export default function EventsCards() {

    const events = [
       
        {
            id: 3,
            title: "Digital Minds Quiz",
            date: "To be notified",
            desc: "Digital Minds Challenge is a future-focused quiz competition for students of classes 1–12, covering AI, internet to inspire innovation and digital learning.",
            image:
                "/images/quiz.png",
        },
    ];

    return (
        <div className="bg-slate-50 px-4 py-16">

            <div className="mx-auto max-w-7xl">

                {/* HEADING */}

                <div className="mb-14 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                        School Activities
                    </p>


                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                        Explore educational competitions, workshops, and exciting learning experiences for students.
                    </p>

                </div>

                {/* CARDS */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {events.map((event) => (

                        <div
                            key={event.id}
                            className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            {/* IMAGE */}

                            <div className="relative h-64 overflow-hidden bg-slate-100">

                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* OVERLAY */}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                {/* TAG */}

                                

                                {/* DATE */}


                                {/* TITLE */}

                                <div className="absolute bottom-5 left-5 right-5">

                                    <h2 className="text-2xl font-bold leading-tight text-white">
                                        {event.title}
                                    </h2>

                                </div>

                            </div>

                            {/* CONTENT */}

                            <div className="p-6">

                                {/* INFO */}

                                <div className="space-y-4">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">
                                            📍
                                        </div>

                                        <div>

                                            <p className="text-sm font-semibold text-slate-800">
                                                To be notified
                                            </p>

                                            <p className="text-xs text-slate-500">
                                                School Campus
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-lg">
                                            🗓
                                        </div>

                                        <div>

                                            <p className="text-sm font-semibold text-slate-800">
                                                Event Date
                                            </p>

                                            <p className="text-xs text-slate-500">
                                                {event.date}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* DESCRIPTION */}

                                <p className="mt-5 text-sm leading-relaxed text-slate-500 line-clamp-3">
                                    {event.desc}
                                </p>

                                {/* BUTTON */}

                                <Link
                                    to="/quizevent"
                                    className="mt-6 block w-full rounded-2xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
                                >
                                    Register
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}