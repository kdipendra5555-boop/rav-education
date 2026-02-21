import { Link } from "react-router-dom";

export default function SupportOurMission() {
  return (
    <div className="bg-slate-50 text-gray-700">

      {/* SECTION 1 – Intro */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Support Our Mission
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Raman Arnava Vidyalaya is a mission-driven educational institution
            committed to providing <span className="font-semibold">free, quality education</span>
            to children from economically weaker backgrounds.
          </p>
        </div>
      </section>

      {/* SECTION 2 – Visual + Mission */}
      <section className="relative bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src="https://www.edufund.in/wp-content/uploads/2024/05/32079-1.jpg"
              alt="Children receiving free education"
              className="rounded-3xl shadow-lg w-full h-[420px] object-cover"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-12 left-6 right-6 bg-white rounded-2xl shadow-xl p-6 border">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Our Purpose
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To ensure that no child is denied education due to financial
                limitations, and every child gets an opportunity to learn,
                grow and succeed with dignity.
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="pt-20 lg:pt-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Education Beyond Classrooms
            </h2>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Our school focuses not only on academics, but also on
              values, discipline, confidence and life skills.
              We believe true education builds character and responsibility.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              With the support of well-wishers and the community,
              we continue our journey of nurturing young minds
              without charging any tuition fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/pay"
                className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition text-center"
              >
                Support / Donate
              </Link>

              <Link
                to="/joinmission"
                className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition text-center"
              >
                Join Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – Impact */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">
            How Your Support Makes a Difference
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border bg-slate-50 text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Free Education
              </h3>
              <p className="text-gray-600 text-sm">
                Quality education without fees for deserving students.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-slate-50 text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Safe Environment
              </h3>
              <p className="text-gray-600 text-sm">
                A disciplined, caring and secure learning atmosphere.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-slate-50 text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Holistic Growth
              </h3>
              <p className="text-gray-600 text-sm">
                Focus on academics, values, skills and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – Closing Message */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl italic text-gray-700 leading-relaxed">
            “Free education is not charity —
            it is a responsibility towards building a better society.”
          </p>
          <p className="mt-4 text-gray-500">
            — Raman Arnava Vidyalaya
          </p>
        </div>
      </section>

    </div>
  );
}