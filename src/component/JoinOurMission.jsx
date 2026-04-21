import Navbar from "./Navbar";
import {
  HeartHandshake,
  GraduationCap,
  Users,
  HandHelping,
  Mail,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function JoinOurMission() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9yaj9yb",   // 🔥 apna SERVICE ID daal
      "template_90u0gsh",  // 🔥 apna TEMPLATE ID daal
      formRef.current,
      "5tN1ldW8qhvqdIeaQ"     // 🔥 apna PUBLIC KEY daal
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <>
      <Navbar />

      <div className="bg-slate-50 min-h-screen px-4 py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* 🟢 LEFT SIDE - CONTENT */}
          <div>

            {/* Header */}
            <div className="text-center mb-14">
              <h1 className="text-4xl font-bold text-blue-800 mb-4">
                Join Our Mission
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Raman Arnava Vidyalaya is a mission-driven educational initiative
                dedicated to providing{" "}
                <span className="font-medium">free and quality education</span>{" "}
                to children from economically weaker backgrounds.
                You can support this mission through your time, skills,
                guidance, or voluntary contributions.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-14">
              <p className="text-gray-700 leading-relaxed text-center">
                We believe that education becomes truly powerful when a community
                comes together. Teachers, professionals, parents, students,
                and well-wishers — everyone has something meaningful to contribute.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-14">

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="text-blue-700" size={22} />
                  <h3 className="text-xl font-semibold">Become a Volunteer</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Contribute your time by assisting in teaching, mentoring,
                  classroom support, administration, or community outreach.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-blue-700" size={22} />
                  <h3 className="text-xl font-semibold">Academic & Skill Support</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Share your knowledge in academics, computers, arts, sports,
                  or life skills to help students grow beyond textbooks.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-3">
                  <HandHelping className="text-blue-700" size={22} />
                  <h3 className="text-xl font-semibold">Guidance & Mentorship</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Help students with motivation, discipline, career awareness,
                  moral values, and confidence-building.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="text-emerald-600" size={22} />
                  <h3 className="text-xl font-semibold">Support the Mission</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  You may also support us financially according to your
                  willingness. Every contribution helps us keep education
                  free for deserving children.
                </p>
              </div>
            </div>

            {/* Notice */}
            <div className="bg-slate-100 border rounded-2xl p-5 mb-12">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Note:</span> School is under development.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Feel free to reach out via contact details.
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="mailto:ramanarnavavidyalaya@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold"
                >
                  <Mail size={18} />
                  ramanarnavavidyalaya@gmail.com
                </a>

                <a
                  href="/pay"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-600 text-emerald-700 font-semibold"
                >
                  <HeartHandshake size={18} />
                  Support
                </a>
              </div>
            </div>
          </div>

          {/* 🔵 RIGHT SIDE - FORM */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 p-7 h-fit sticky top-10">

  {/* Heading */}
  <h2 className="text-2xl font-bold text-gray-800 mb-1">
    Apply Now
  </h2>
  <p className="text-sm text-gray-500 mb-6">
    Join our mission and make a difference 🚀
  </p>

  {/* Success */}
  {success && (
    <div className="mb-4 px-4 py-3 rounded-xl bg-green-50 text-green-700 text-sm border border-green-200">
      ✅ Application submitted successfully!
    </div>
  )}

  <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

    {/* Name */}
    <input
      name="user_name"
      placeholder="Full Name"
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      required
    />

    {/* Profession */}
    <input
      name="profession"
      placeholder="Occupation / Profession"
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      required
    />

    {/* Join As */}
    <select
      name="join_as"
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      required
    >
      <option value="">Join As</option>
      <option>Volunteer</option>
      <option>Teacher</option>
      <option>Mentor</option>
      <option>Supporter</option>
    </select>

    {/* Phone */}
    <input
      name="phone"
      placeholder="Contact Number"
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      required
    />

    {/* Email */}
    <input
      name="user_email"
      type="email"
      placeholder="Email Address"
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      required
    />

    {/* Address */}
    <textarea
      name="address"
      placeholder="Address"
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all h-20 resize-none"
    />

    {/* Reason */}
    <textarea
      name="reason"
      placeholder="Why do you want to join?"
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all h-24 resize-none"
    />

    {/* Message */}
    <textarea
      name="message"
      placeholder="Message"
      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all h-20 resize-none"
    />

    {/* Button */}
    <button
      className="w-full py-3 rounded-xl font-semibold text-white 
      bg-gradient-to-r from-blue-600 to-emerald-500 
      hover:from-blue-700 hover:to-emerald-600 
      transition-all duration-300 shadow-md hover:shadow-lg"
    >
      Submit Application
    </button>

  </form>
</div>

        </div>
      </div>
    </>
  );
}