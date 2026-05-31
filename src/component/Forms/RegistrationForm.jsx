import { useState } from "react";

export default function QuizRegistrationForm() {

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSd3638yP2W9YcgEi7HZcqJe7CeQvQcbMgS9yNB3EiqJnwB0LQ/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    );

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] px-4 py-10 flex items-center justify-center">

      {/* SUCCESS POPUP */}

      {showPopup && (
        <div className="fixed right-6 top-6 z-50 animate-[slideIn_0.4s_ease]">

          <div className="flex items-center gap-4 rounded-2xl border border-green-200 bg-white px-5 py-4 shadow-2xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
              ✅
            </div>

            <div>

              <h3 className="text-sm font-bold text-slate-900">
                Registration Successful
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Student registration submitted successfully.
              </p>

            </div>

          </div>

        </div>
      )}

      <div className="w-full max-w-6xl overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)] grid lg:grid-cols-[1fr_1.2fr]">

        {/* LEFT SIDE */}

        <div className="relative bg-slate-900 px-10 py-14 text-white flex flex-col justify-between overflow-hidden">

          {/* BACKGROUND */}

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-[-60px] left-[-60px] h-72 w-72 rounded-full bg-blue-500 blur-3xl"></div>
            <div className="absolute bottom-[-60px] right-[-60px] h-72 w-72 rounded-full bg-indigo-500 blur-3xl"></div>
          </div>

          {/* TOP */}

          <div className="relative z-10">

            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 backdrop-blur-md">
              Quiz Competition 2026
            </div>

            <h1 className="mt-10 text-5xl font-bold leading-tight tracking-tight">
              Student Registration
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-300">
              Complete the registration form carefully to participate in the upcoming educational competition.
            </p>

          </div>

          {/* INFO BOXES */}

          <div className="relative z-10 space-y-5">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

              <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Registration Status
              </p>

              <h3 className="mt-2 text-2xl font-bold text-green-400">
                Open
              </h3>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

              <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Participation
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                100+ Students
              </h3>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="px-6 py-10 sm:px-10 lg:px-12">

          <div className="mb-10">

            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              Register Now
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Fill all details carefully before submitting the form.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* STUDENT NAME */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Student Name
              </label>

              <input
                type="text"
                name="entry.1830906953"
                required
                placeholder="Enter student full name"
                className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-200"
              />

            </div>

            {/* CLASS + CONTACT */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Class
                </label>

                <input
                  type="text"
                  name="entry.787447297"
                  required
                  placeholder="Enter class"
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-200"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Contact Number
                </label>

                <input
                  type="tel"
                  name="entry.1663119975"
                  required
                  placeholder="Enter contact number"
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-200"
                />

              </div>

            </div>

            {/* SCHOOL NAME */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                School Name
              </label>

              <input
                type="text"
                name="entry.1636569239"
                required
                placeholder="Enter school name"
                className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-200"
              />

            </div>

            {/* SCHOOL ADDRESS */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                School Address
              </label>

              <textarea
                name="entry.471668903"
                required
                rows="4"
                placeholder="Enter complete school address"
                className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-200"
              />

            </div>

            {/* FATHER NAME */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Father Name
              </label>

              <input
                type="text"
                name="entry.416386224"
                required
                placeholder="Enter father name"
                className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-200"
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="mt-2 flex h-14 w-full items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-slate-800"
            >
              Submit Registration
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}