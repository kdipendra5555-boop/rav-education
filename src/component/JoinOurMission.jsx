import Navbar from "./Navbar";
import {
  HeartHandshake,
  GraduationCap,
  Users,
  HandHelping,
  Mail,
} from "lucide-react";

export default function JoinOurMission() {
  return (
    <>
      <Navbar />

      <div className="bg-slate-50 min-h-screen px-4 py-12">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">
              Join Our Mission
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Raman Arnava Vidyalaya is a mission-driven educational initiative
              dedicated to providing{" "}
              <span className="font-medium">free and quality education</span>
              {" "}to children from economically weaker backgrounds.
              You can support this mission through your time, skills,
              guidance, or voluntary contributions.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-14">
            <p className="text-gray-700 leading-relaxed text-center">
              We believe that education becomes truly powerful when a community
              comes together. Teachers, professionals, parents, students,
              and well-wishers — everyone has something meaningful to contribute.
            </p>
          </div>

          {/* Ways to Join */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">

            {/* Volunteer */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-blue-700" size={22} />
                <h3 className="text-xl font-semibold text-gray-800">
                  Become a Volunteer
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contribute your time by assisting in teaching, mentoring,
                classroom support, administration, or community outreach.
              </p>
            </div>

            {/* Academic Support */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="text-blue-700" size={22} />
                <h3 className="text-xl font-semibold text-gray-800">
                  Academic & Skill Support
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Share your knowledge in academics, computers, arts, sports,
                or life skills to help students grow beyond textbooks.
              </p>
            </div>

            {/* Guidance */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-3">
                <HandHelping className="text-blue-700" size={22} />
                <h3 className="text-xl font-semibold text-gray-800">
                  Guidance & Mentorship
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Help students with motivation, discipline, career awareness,
                moral values, and confidence-building.
              </p>
            </div>

            {/* Financial Support */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-3">
                <HeartHandshake className="text-emerald-600" size={22} />
                <h3 className="text-xl font-semibold text-gray-800">
                  Support the Mission
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                You may also support us financially according to your
                willingness. Every contribution helps us keep education
                free for deserving children.
              </p>
            </div>
          </div>

          {/* Notice */}
          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5 mb-12">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold">Note:</span> Raman Arnava Vidyalaya
              is currently under the process of registration and development.
              All forms of support — volunteering, guidance, or donations —
              are completely voluntary and deeply appreciated.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              If you wish to join or support our mission, feel free to reach out
              to us through our official contact details.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              {/* Email Button */}
              <a
                href="mailto:ramanarnavavidyalaya@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
              >
                <Mail size={18} />
                ramanarnavavidyalaya@gmail.com
              </a>

              {/* Support Button */}
              <a
                href="/pay"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
              >
                <HeartHandshake size={18} />
                Support the Mission
              </a>
            </div>
          </div>

          {/* Footer Gratitude */}
          <div className="mt-14 flex justify-center items-center gap-2 text-xs text-gray-500">
            <span>Built with care for</span>
            <span className="text-red-500">❤️</span>
            <span>education & social responsibility</span>
          </div>

        </div>
      </div>
    </>
  );
}