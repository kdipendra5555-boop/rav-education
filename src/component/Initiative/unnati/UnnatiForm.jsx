
import React, { useState } from "react";

export default function UnnatiForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    contact: "",
    class: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw7y2tzK1uZlFATHEUPBxjoaGGgrg6-t8soA6xiRa9MDAvv7P15F42t7vEEyZbCJdjp/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("Registration Submitted Successfully!");

      setFormData({
        studentName: "",
        fatherName: "",
        motherName: "",
        contact: "",
        class: "",
        address: "",
      });
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f8f7f4] via-white to-[#f6efe3] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.08)] grid lg:grid-cols-[40%_60%]">

        {/* Left Side */}
        <div className="bg-[#081936] text-white p-10 lg:p-14 flex flex-col justify-center">
          <p className="uppercase tracking-[6px] text-[#C89C4B] text-sm">
            Raman Arnava Vidyalaya
          </p>

          <h1
            className="text-6xl mt-4"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            UNNATI
          </h1>

          <div className="w-24 h-[2px] bg-[#C89C4B] mt-6"></div>

          <p className="mt-8 text-blue-100 leading-8 text-lg">
            Free academic support program designed for students of
            Classes 1 to 5 to strengthen learning beyond the classroom.
          </p>

          <div className="mt-12 space-y-4 text-blue-200">
            <p>✓ Personalized Guidance</p>
            <p>✓ Concept Clarity</p>
            <p>✓ Regular Assessments</p>
            <p>✓ Free Learning Support</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 lg:p-14">
          <h2 className="text-3xl font-semibold text-[#081936] mb-8">
            Student Registration
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5"
          >
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C89C4B]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C89C4B]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Father's Name
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C89C4B]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Mother's Name
              </label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C89C4B]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600 mb-2 block">
                Class
              </label>

              <select
                name="class"
                value={formData.class}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C89C4B]"
              >
                <option value="">Select Class</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600 mb-2 block">
                Address
              </label>

              <textarea
                rows="4"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-[#C89C4B]"
              />
            </div>

            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full bg-[#081936] text-white py-4 rounded-xl font-medium hover:opacity-95 transition"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
        
