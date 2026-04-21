import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function PreRegistrationPage() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_9yaj9yb",
      "template_wa28d9m",
      e.target,
      "5tN1ldW8qhvqdIeaQ"
    )
    .then((res) => {
      console.log("SUCCESS", res);
      setLoading(false);
      setSuccess(true);
      e.target.reset();
    })
    .catch((err) => {
      console.log("ERROR FULL:", err); // 🔥 important
      setLoading(false);
      alert("Error ❌ Check console");
    });
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(false), 3000);
    }
  }, [success]);

  const inputStyle =
    "w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none";

  return (
    <div className="min-h-screen flex">

      {/* LEFT */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white flex-col justify-center px-16 relative overflow-hidden">

                {/* 🔥 SOFT GLOW BACKGROUND */}
                <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] top-10 left-10" />
                <div className="absolute w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-[100px] bottom-10 right-10" />

                <div className="relative z-10 space-y-8 max-w-lg">

                    {/* 🏫 SCHOOL NAME */}
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Raman Arnava Vidyalaya
                    </h1>

                    {/* TAGLINE */}
                    <p className="text-lg text-blue-100 leading-relaxed">
                        A modern approach to education with smart classrooms, digital learning, and future-ready students.
                    </p>

                    {/* SECTION TITLE */}
                    <h2 className="text-xl font-semibold mt-6">
                        Admission Portal
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-blue-200 leading-relaxed">
                        Please complete the admission form with accurate information.
                        This ensures a smooth and efficient enrollment process.
                    </p>

                    {/* FEATURES */}
                    <div className="mt-6 space-y-3 text-sm text-blue-200">

                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Secure & Confidential Process
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Structured Academic Data Collection
                        </div>



                    </div>



                    {/* 🔔 NOTICE STYLE CTA */}
                   <Link
  to="/pre-registration"
  className="mt-6 block cursor-pointer group"
>
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4 flex items-center justify-between transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]">

    {/* LEFT TEXT */}
    <div>
      <p className="text-xs text-blue-200 uppercase tracking-wide">
        Notice
      </p>

      <p className="text-sm font-medium text-white">
        Pre Registration for New Admission is Open
      </p>
    </div>

    {/* RIGHT ICON */}
    <div className="text-white text-lg transform transition-transform duration-300 group-hover:translate-x-1">
      →
    </div>

  </div>
</Link>
                    {/* 
end of pre registration notice */}



                    {/* ⚠️ OFFICIAL NOTICE */}
                    <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-lg p-4 text-sm leading-relaxed">

                        <p className="font-semibold mb-1">
                            Important Notice
                        </p>

                        <p>
                            Students and parents are requested <span className="font-medium">not to fill the admission form at this moment</span>.
                            The admission process will begin only after the official announcement from the Head of the School.
                            Please wait for further notice.
                        </p>

                    </div>

                </div>

            </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 bg-gray-50 p-10 flex justify-center items-center">

        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-semibold mb-4">
            Pre Registration
          </h2>

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
              ✅ Form submitted successfully!
            </div>
          )}

          <form onSubmit={sendEmail} className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <input name="student_name" placeholder="Student Name" className={inputStyle} required />
              <input name="age" type="number" placeholder="Age" className={inputStyle} required />
            </div>

            <select name="class" className={inputStyle} required>
              <option value="">Select Class</option>
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>1 </option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              
            </select>

            <div className="grid grid-cols-2 gap-4">
              <input name="father_name" placeholder="Father Name" className={inputStyle} required />
              <input name="mother_name" placeholder="Mother Name" className={inputStyle} required />
            </div>

            <input name="phone" placeholder="Mobile Number" className={inputStyle} required />
            <input name="user_email" type="email" placeholder="Email" className={inputStyle} required />

            <textarea name="address" placeholder="Address" className={inputStyle} required />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}