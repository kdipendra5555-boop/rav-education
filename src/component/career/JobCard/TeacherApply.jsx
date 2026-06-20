import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  GraduationCap,
  BookOpen,
} from "lucide-react";

export default function TeacherApply() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    qualification: "",
    experience: "",
    subjects: "",
    about: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScEoXjLMh3N_y5RHUjOyl-Ga5piDLo4OT6v15PgmXMk_x0cJQ/formResponse";

    const data = new FormData();

    data.append("entry.1929384541", formData.fullName);
    data.append("entry.1907013892", formData.phone);
    data.append("entry.421650403", formData.email);
    data.append("entry.1893804404", formData.qualification);
    data.append("entry.1064612642", formData.experience);
    data.append("entry.432262649", formData.subjects);
    data.append("entry.1844487824", formData.about);

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      alert("Application Submitted Successfully!");

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        qualification: "",
        experience: "",
        subjects: "",
        about: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[420px_1fr] overflow-hidden rounded-3xl shadow-2xl bg-white">
          
          {/* LEFT PANEL */}
          <div className="bg-[#081936] text-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm">
                Unnati Education Initiative
              </span>

              <h1 className="text-3xl md:text-4xl font-bold mt-8 leading-tight">
                Teacher Application
              </h1>

              <p className="mt-5 text-blue-100 leading-7">
                Join our mission to provide quality education to children and
                help create a brighter future through learning.
              </p>
            </div>

            <div className="space-y-6 mt-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <BookOpen size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Teach & Inspire</h4>
                  <p className="text-sm text-blue-100">
                    Support students from Class 1–5.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Meaningful Impact</h4>
                  <p className="text-sm text-blue-100">
                    Help shape young minds and futures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Apply Now
              </h2>

              <p className="text-slate-500 mt-2">
                Fill in your details and we'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <div className="relative mt-2">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      required
                      className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>

                  <div className="relative mt-2">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Contact Number"
                      required
                      className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Email Address
                  </label>

                  <div className="relative mt-2">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Qualification */}
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Qualification
                  </label>

                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="12th / B.Ed / B.Sc / M.A"
                    required
                    className="w-full mt-2 h-14 px-4 rounded-xl border border-slate-200 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Teaching Experience
                  </label>

                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="2 Years"
                    required
                    className="w-full mt-2 h-14 px-4 rounded-xl border border-slate-200 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Subjects */}
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Subjects
                  </label>

                  <input
                    type="text"
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleChange}
                    placeholder="Maths, English, Science"
                    required
                    className="w-full mt-2 h-14 px-4 rounded-xl border border-slate-200 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* About */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Why would you like to join Unnati?
                </label>

                <textarea
                  rows="5"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                  required
                  className="w-full mt-2 p-4 rounded-xl border border-slate-200 focus:border-blue-500 outline-none resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-xl bg-[#081936] text-white font-semibold hover:bg-[#10264d] transition disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}