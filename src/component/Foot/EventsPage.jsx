import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import EventsCards from "../Forms/EventsCards";

export default function EventsPage() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("events")) || [];
        setEvents(data);
    }, []);

    return (
        <>
        <div className="min-h-screen bg-gray-50">

            <Navbar/>

            {/* 🔵 HERO */}
            <div className="relative bg-white py-28 px-6 overflow-hidden">

                {/* 🔥 BACKGROUND SOFT GLOW */}
                <div className="absolute w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] top-[-150px] left-[-150px]" />
                <div className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full blur-[100px] bottom-[-120px] right-[-120px]" />

                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* 🔵 LEFT CONTENT */}
                    <div>

                        {/* TAG */}
                        <div className="inline-block mb-5 px-4 py-1 text-xs tracking-wide uppercase bg-blue-100 text-blue-700 rounded-full font-medium">
                            Upcoming Event
                        </div>

                        {/* TITLE */}
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Digital Event
                        </h1>

                        {/* DESC */}
                        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                            Experience innovation, creativity, and future-ready learning through our
                            digital school events and activities. Join us in exploring the future of education.
                        </p>

                        {/* BUTTON */}
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition">
                            Explore Event →
                        </button>

                    </div>

                    {/* 🖼️ RIGHT IMAGE */}
                    <div className="flex justify-center">

                        <div className="relative w-[380px] h-[380px] md:w-[440px] md:h-[440px]">

                            {/* MAIN BLOB */}
                            <div className="absolute inset-0 rounded-[60%_40%_50%_50%/60%_30%_70%_40%] overflow-hidden shadow-2xl">

                                <img
                                    src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
                                    alt="event"
                                    className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
                                />

                            </div>

                            {/* GRADIENT OVERLAY */}
                            <div className="absolute inset-0 rounded-[60%_40%_50%_50%/60%_30%_70%_40%] bg-gradient-to-tr from-blue-500/20 to-purple-400/20" />

                            {/* 🔥 FLOATING SHADOW RING */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl" />

                        </div>

                    </div>

                </div>

            </div>

           

        </div>

        <EventsCards/>
        </>
    );
}