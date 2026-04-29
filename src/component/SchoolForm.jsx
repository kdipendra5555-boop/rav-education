import { useState } from "react";
import { Link } from "react-router-dom";

export default function UltraForm() {

    const [step, setStep] = useState(1);

    const next = () => setStep((s) => s + 1);
    const back = () => setStep((s) => s - 1);
    const [openModal, setOpenModal] = useState(false);

    return (
         <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">

            {/* 🔷 LEFT SIDE */}
           <div className="flex w-full md:w-1/2 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] text-white flex-col justify-center px-6 md:px-16 relative overflow-hidden">

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

            {/* 🔷 RIGHT SIDE (FIXED) */}
            <div className="w-full md:w-1/2 h-screen flex flex-col">

                <div className="flex-1 overflow-y-auto px-6 py-10">

                    {/* HEADER */}
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                        Admission Form
                    </h1>

                    {/* PROGRESS */}
                    <div className="flex justify-between mb-8 text-xs font-medium text-gray-500">
                        {["Student", "Admission", "Parents", "Address", "Medical", "Profile", "Other", "Review"].map((s, i) => (
                            <span key={i} className={step >= i + 1 ? "text-blue-600 font-semibold" : ""}>
                                {s}
                            </span>
                        ))}
                    </div>

                    {/* ---------------- STEP 1 ---------------- */}
                    {step === 1 && (
                        <div className="space-y-6 pb-32">

                            {/* HEADING */}
                            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                                Student Basic Details
                            </h2>

                            {/* PERSONAL INFO */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-600">Personal Information</p>

                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Full Name (as per documents)</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Nickname</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Gender</label>
                                        <select className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500">
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Date of Birth</label>
                                        <input type="date" className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Age</label>
                                        <input
                                            placeholder="Auto / Manual"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Blood Group</label>
                                        <input
                                            placeholder="e.g. O+"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* IDENTITY */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-600">Identity Details</p>

                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="md:col-span-2 flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Aadhaar Number</label>
                                        <input
                                            placeholder="Enter Aadhaar Number"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Religion</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Category</label>
                                        <select className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500">
                                            <option>General</option>
                                            <option>OBC</option>
                                            <option>SC</option>
                                            <option>ST</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Nationality</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Mother Tongue</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                </div>
                            </div>

                            {/* PHOTO */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-600">Student Photo</p>

                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-500">Upload Photo</label>
                                    <input
                                        type="file"
                                        className="p-2 border border-gray-300 rounded-md text-sm"
                                    />
                                </div>
                            </div>

                        </div>
                    )}


                    {/* ---------------- STEP 2 ---------------- */}
                    {step === 2 && (
                        <div className="space-y-6 pb-32">

                            {/* HEADING */}
                            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                                Admission Details
                            </h2>

                            {/* BASIC ADMISSION */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-600">Basic Information</p>

                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Class Applying For</label>
                                        <input
                                            placeholder="e.g. Class 6"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Section Preference</label>
                                        <input
                                            placeholder="e.g. A / B"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Admission Type</label>
                                        <select className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500">
                                            <option>New Admission</option>
                                            <option>Transfer</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Academic Year</label>
                                        <input
                                            placeholder="e.g. 2025-26"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* ACADEMIC OPTIONS */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-600">Academic Preferences</p>

                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Stream (if applicable)</label>
                                        <input
                                            placeholder="Science / Commerce / Arts"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Medium</label>
                                        <select className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500">
                                            <option>English</option>
                                            <option>Hindi</option>
                                        </select>
                                    </div>

                                </div>
                            </div>

                            {/* FACILITY OPTIONS */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-600">Facilities</p>

                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Boarding Type</label>
                                        <select className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500">
                                            <option>Day Scholar</option>
                                            <option>Hostel</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Transport Required</label>
                                        <select className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500">
                                            <option>No</option>
                                            <option>Yes</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-2 flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Route / Pickup Location</label>
                                        <input
                                            placeholder="Enter route or pickup point"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                </div>
                            </div>

                        </div>
                    )}


                    {/* ---------------- STEP 3 ---------------- */}
                    {step === 3 && (
                        <div className="space-y-6 pb-32">

                            {/* HEADING */}
                            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                                Previous Academic Details
                            </h2>

                            {/* SCHOOL INFO */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-600">School Information</p>

                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Previous School Name</label>
                                        <input
                                            placeholder="Enter school name"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">School Address</label>
                                        <input
                                            placeholder="Enter school address"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* ACADEMIC DETAILS */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-600">Academic Details</p>

                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Board</label>
                                        <input
                                            placeholder="CBSE / ICSE / State"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Last Class Attended</label>
                                        <input
                                            placeholder="e.g. Class 8"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Percentage / Grade</label>
                                        <input
                                            placeholder="e.g. 85% or A Grade"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Year of Passing</label>
                                        <input
                                            placeholder="e.g. 2024"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* TRANSFER DETAILS */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-600">Transfer Details</p>

                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="md:col-span-2 flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Reason for Leaving</label>
                                        <input
                                            placeholder="Enter reason"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">TC Number</label>
                                        <input
                                            placeholder="Enter TC number"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Upload TC</label>
                                        <input
                                            type="file"
                                            className="p-2 border border-gray-300 rounded-md text-sm"
                                        />
                                    </div>

                                </div>
                            </div>

                        </div>
                    )}
                    {/* ---------------- STEP 4 ---------------- */}
                    {step === 4 && (
                        <div className="space-y-6 pb-32">

                            {/* HEADING */}
                            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                                Parent / Guardian Details
                            </h2>

                            {/* FATHER DETAILS */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-600">Father Details</p>

                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Full Name</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Occupation</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Mobile Number</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Email Address</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                </div>
                            </div>

                            {/* MOTHER DETAILS */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-gray-600">Mother Details</p>

                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Full Name</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Occupation</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Mobile Number</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Email Address</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                </div>
                            </div>



                        </div>
                    )}

                    {/* ---------------- STEP 5 ---------------- */}
                    {step === 5 && (
                        <div className="space-y-6 pb-32">

                            {/* HEADING */}
                            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                                Address Details
                            </h2>

                            {/* PERMANENT ADDRESS */}
                            <div className="space-y-4">

                                <p className="text-sm font-medium text-gray-600">
                                    Permanent Address
                                </p>

                                <div className="grid md:grid-cols-2 gap-4">

                                    <div className="md:col-span-2 flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Address Line</label>
                                        <input
                                            placeholder="Enter full address"
                                            className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">City</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">State</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500">Pincode</label>
                                        <input className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500" />
                                    </div>

                                </div>
                            </div>



                        </div>
                    )}

                    {/* ---------------- STEP 6 ---------------- */}
                    {step === 6 && (
                        <div className="space-y-6 pb-32">

                            {/* HEADING */}
                            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                                Medical Details
                            </h2>

                            {/* INFO TEXT */}
                            <p className="text-sm text-gray-500">
                                Provide medical information to ensure student safety and proper care.
                            </p>

                            {/* FORM GRID */}
                            <div className="grid md:grid-cols-2 gap-4">

                                {/* DISEASE */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-500">Chronic Disease</label>
                                    <input
                                        placeholder="e.g. Asthma, Diabetes"
                                        className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                    />
                                </div>

                                {/* ALLERGIES */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-500">Allergies</label>
                                    <input
                                        placeholder="e.g. Dust, Food allergies"
                                        className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                    />
                                </div>

                                {/* DOCTOR */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-500">Doctor Name</label>
                                    <input
                                        placeholder="Enter doctor's name"
                                        className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                    />
                                </div>

                                {/* CONTACT */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-500">Emergency Contact</label>
                                    <input
                                        placeholder="Emergency contact number"
                                        className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                    />
                                </div>

                            </div>

                            {/* EXTRA FIELD (ADVANCED UX) */}
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-gray-500">Additional Medical Notes</label>
                                <textarea
                                    rows="3"
                                    placeholder="Any additional medical information..."
                                    className="p-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"
                                />
                            </div>

                        </div>
                    )}

                    {/* ---------------- STEP 7 ---------------- */}
                    {step === 7 && (
                        <div className="space-y-6 pb-32">

                            {/* HEADING */}
                            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                                Student Profile
                            </h2>

                            {/* INFO TEXT */}
                            <p className="text-sm text-gray-500">
                                Provide details about the student’s personality, interests, and abilities.
                            </p>

                            {/* FORM GRID */}
                            <div className="grid md:grid-cols-2 gap-4">

                                {/* HOBBIES */}
                                <div className="fieldBox">
                                    <label className="label">Hobbies</label>
                                    <input placeholder="e.g. Reading, Drawing" className="inputPro" />
                                </div>

                                {/* SKILLS */}
                                <div className="fieldBox">
                                    <label className="label">Skills</label>
                                    <input placeholder="e.g. Coding, Music" className="inputPro" />
                                </div>

                                {/* STRENGTHS */}
                                <div className="fieldBox">
                                    <label className="label">Strengths</label>
                                    <input placeholder="e.g. Quick learner" className="inputPro" />
                                </div>

                                {/* WEAKNESSES */}
                                <div className="fieldBox">
                                    <label className="label">Areas for Improvement</label>
                                    <input placeholder="e.g. Public speaking" className="inputPro" />
                                </div>

                            </div>

                            {/* OPTIONAL TEXTAREA (NEXT LEVEL UX) */}
                            <div className="fieldBox">
                                <label className="label">Additional Notes</label>
                                <textarea
                                    rows="3"
                                    placeholder="Any additional information about the student..."
                                    className="inputPro"
                                />
                            </div>

                        </div>
                    )}

                    {/* ---------------- STEP 8 ---------------- */}
                    {step === 8 && (
                        <div className="space-y-6 pb-32">

                            {/* HEADING */}
                            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
                                Review & Final Submission
                            </h2>

                            {/* INFO BOX */}
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-600 leading-relaxed">
                                Please review all the details carefully before submitting the form.
                                Once submitted, changes may not be allowed.
                            </div>

                            {/* SUMMARY GRID (OPTIONAL PREVIEW STYLE) */}
                            <div className="grid md:grid-cols-2 gap-4">

                                <div className="reviewBox">
                                    <p className="label">Student Name</p>
                                    <p className="value">—</p>
                                </div>

                                <div className="reviewBox">
                                    <p className="label">Class Applied</p>
                                    <p className="value">—</p>
                                </div>

                                <div className="reviewBox">
                                    <p className="label">Parent Contact</p>
                                    <p className="value">—</p>
                                </div>

                                <div className="reviewBox">
                                    <p className="label">Email</p>
                                    <p className="value">—</p>
                                </div>

                            </div>

                            {/* DECLARATION */}
                            <div className="flex items-start gap-3 mt-4">
                                <input type="checkbox" className="mt-1" />
                                <p className="text-sm text-gray-600">
                                    I hereby declare that all the information provided is true and correct to the best of my knowledge.
                                </p>
                            </div>

                            {/* SIGNATURE + DATE */}
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <input type="file" className="inputPro" placeholder="Upload Signature" />
                                <input type="date" className="inputPro" />
                            </div>

                        </div>
                    )}


                    {/* next back button  */}
                    <div className="sticky bottom-0 left-0 w-full bg-white py-3 px-4 z-10 border-t border-gray-200">

                        <div className="max-w-4xl mx-auto flex justify-between items-center">

                            {/* BACK */}
                            {step > 1 ? (
                                <button onClick={back} className="btn2">
                                    ← Back
                                </button>
                            ) : <div />}

                            {/* NEXT / SUBMIT */}
                            {step < 8 ? (
                                <button onClick={next} className="btnPro">
                                    Next →
                                </button>
                            ) : (
                                <button className="btnPro">
                                    Submit
                                </button>
                            )}

                        </div>

                    </div>

                    {/* next button end */}

                    
                    {/* modal end */}


                </div>

            </div>

            {/* STYLES */}
            <style>{`
        .inputPro {
          padding: 10px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          width: 100%;
          font-size: 14px;
        }

        .inputPro:focus {
          border-color: #2563eb;
          outline: none;
        }

        .btnPro {
          background: #2563eb;
          color: white;
          padding: 8px 18px;
          border-radius: 6px;
          font-size: 14px;
        }

        .btnPro:hover {
          background: #1e40af;
        }

        .btn2 {
          background: #e5e7eb;
          padding: 8px 18px;
          border-radius: 6px;
        }
      `}</style>

            {/* step 8 style */}

            <style>{`
  .reviewBox {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 12px;
    background: #fafafa;
  }

  .label {
    font-size: 12px;
    color: #6b7280;
  }

  .value {
    font-size: 14px;
    font-weight: 500;
    color: #111827;
  }
`}</style>

            {/* Step 7 style */}

            <style>{`
  .fieldBox {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .label {
    font-size: 12px;
    color: #6b7280;
  }
`}</style>

        </div>
    );
}