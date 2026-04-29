import { useState } from "react";
import Navbar from "../SmartSchool/Navbar";


export default function SmartAdmissionForm() {
  const [isRavStudent, setIsRavStudent] = useState("");
  const [userType, setUserType] = useState("");

  return (
   <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-24">

        <Navbar/>
      
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border grid md:grid-cols-2 overflow-hidden">

        {/* RIGHT SIDE (FORM) → Mobile pe pehle */}
        <div className="p-6 md:p-8 order-1 md:order-2">

          <h2 className="text-2xl font-semibold text-gray-800">
            Smart Admission Form
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Raman Arnava Vidyalaya
          </p>

          <form className="mt-6 space-y-5">

            {/* Q1 BUTTON STYLE */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Are you a student of RAV?
              </label>

              <div className="flex gap-3 mt-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsRavStudent("yes");
                    setUserType("");
                  }}
                  className={`flex-1 py-2 rounded-xl border transition 
                    ${isRavStudent === "yes"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white hover:bg-gray-100"
                    }`}
                >
                  Yes
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsRavStudent("no");
                    setUserType("");
                  }}
                  className={`flex-1 py-2 rounded-xl border transition 
                    ${isRavStudent === "no"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white hover:bg-gray-100"
                    }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* RAV STUDENT */}
            {isRavStudent === "yes" && (
              <div className="space-y-4">
                <Input placeholder="Student Name" />
                <Input placeholder="Class" />
                <Input placeholder="Section" />
                <Input placeholder="Roll Number" />
                <Input placeholder="Phone Number" type="tel" />
              </div>
            )}

            {/* NOT RAV */}
            {isRavStudent === "no" && (
              <>
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    You are?
                  </label>

                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {["school", "college", "tech"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setUserType(type)}
                        className={`py-2 text-sm rounded-xl border transition
                          ${userType === type
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white hover:bg-gray-100"
                          }`}
                      >
                        {type === "school"
                          ? "School"
                          : type === "college"
                          ? "College"
                          : "Tech"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SCHOOL */}
                {userType === "school" && (
                  <div className="space-y-4">
                    <Input placeholder="School Name" />
                    <Input placeholder="Student Name" />
                    <Input placeholder="Class" />
                    <Input placeholder="Roll Number" />
                    <Input placeholder="Phone" type="tel" />
                  </div>
                )}

                {/* COLLEGE */}
                {userType === "college" && (
                  <div className="space-y-4">
                    <Input placeholder="College Name" />
                    <Input placeholder="Student Name" />
                    <Input placeholder="Course" />
                    <Input placeholder="Roll Number" />
                    <Input placeholder="Phone" type="tel" />
                  </div>
                )}

                {/* TECH */}
                {userType === "tech" && (
                  <div className="space-y-4">
                    <Input placeholder="Full Name" />
                    <Input placeholder="Interest (Web Dev, AI, etc)" />
                    <Input placeholder="Phone" type="tel" />
                  </div>
                )}
              </>
            )}

            {/* Submit */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
              Submit Application
            </button>

            {/* Notice */}


          </form>
        </div>

        {/* LEFT SIDE IMAGE → Mobile pe neeche */}
<div className="flex flex-col items-center justify-center bg-gray-100 p-6 order-2 md:order-1 space-y-6">
  
  <img
    src="https://illustrations.popsy.co/gray/student-graduation.svg"
    alt="education"
    className="w-60 md:w-72"
  />

  {/* Notice */}
  <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-xl text-sm text-center max-w-xs">
    <strong>Notice:</strong> We appreciate your interest in Raman Arnava Vidyalaya.
  Currently, we are not accepting admission applications as the school is under development.
  The admission process will begin once the system and infrastructure are fully operational.
  Please stay connected for further updates.
  </div>

</div>

      </div>
    </div>
  );
}

/* Input */
function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
    />
  );
}