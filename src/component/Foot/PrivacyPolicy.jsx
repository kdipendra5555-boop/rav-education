import Navbar from "../Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>

      {/* 🔵 HERO */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-blue-100 max-w-3xl mx-auto text-sm leading-relaxed">
          Raman Arnava Vidyalaya is committed to safeguarding all personal,
          academic, and sensitive information collected during the admission process.
        </p>
      </div>

      {/* ⚪ CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-14">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 space-y-10">

          {/* INTRO */}
          <section>
            <h2 className="section">1. Introduction</h2>
            <p className="text">
              This Privacy Policy explains how Raman Arnava Vidyalaya collects,
              processes, stores, and protects information submitted through our
              admission and pre-registration forms. By submitting your details,
              you consent to the practices described herein.
            </p>
          </section>

          {/* DATA TYPES */}
          <section>
            <h2 className="section">2. Information We Collect</h2>

            <p className="text mb-3">
              We collect comprehensive data to ensure accurate admission processing:
            </p>

            <ul className="list">
              <li><b>Student Information:</b> Name, DOB, age, gender, Aadhaar, religion, category, nationality, photo</li>
              <li><b>Admission Details:</b> Class, stream, academic year, medium, transport, boarding type</li>
              <li><b>Academic Records:</b> Previous school, marks, TC details, certificates</li>
              <li><b>Parent/Guardian Data:</b> Names, occupation, income, contact details, Aadhaar</li>
              <li><b>Address Details:</b> Permanent & current residential information</li>
              <li><b>Medical Information:</b> Health conditions, allergies, emergency contacts</li>
              <li><b>Student Profile:</b> Interests, skills, achievements, personality traits</li>
              <li><b>Transport & Hostel Data:</b> Routes, pickup/drop points, hostel preferences</li>
              <li><b>Digital Learning Info:</b> Device access, internet availability, technical skills</li>
              <li><b>Uploaded Documents:</b> Birth certificate, Aadhaar, marksheets, etc.</li>
              <li><b>Payment Data:</b> Transaction details and payment proof</li>
              <li><b>Account Information:</b> Username and password (secured & encrypted)</li>
            </ul>
          </section>

          {/* PURPOSE */}
          <section>
            <h2 className="section">3. Purpose of Data Collection</h2>
            <ul className="list">
              <li>To process and manage student admissions</li>
              <li>To verify academic and personal records</li>
              <li>To communicate with parents and guardians</li>
              <li>To manage transport, hostel, and facilities</li>
              <li>To enable digital learning systems</li>
              <li>To generate reports and administrative records</li>
            </ul>
          </section>

          {/* SECURITY */}
          <section>
            <h2 className="section">4. Data Security</h2>
            <p className="text">
              We use modern security practices including encryption, restricted access,
              and secure storage systems to protect all personal and sensitive data.
              Only authorized staff can access this information.
            </p>
          </section>

          {/* SENSITIVE DATA */}
          <section>
            <h2 className="section">5. Sensitive Information Handling</h2>
            <p className="text">
              Data such as Aadhaar numbers, medical records, and financial details
              are treated as highly sensitive. These are encrypted and never shared
              without proper authorization.
            </p>
          </section>

          {/* SHARING */}
          <section>
            <h2 className="section">6. Data Sharing Policy</h2>
            <ul className="list">
              <li>No selling or renting of personal data</li>
              <li>Shared only with authorized school authorities</li>
              <li>Shared with government bodies only if legally required</li>
            </ul>
          </section>

          {/* STORAGE */}
          <section>
            <h2 className="section">7. Data Retention</h2>
            <p className="text">
              Student data is securely stored for academic and administrative
              purposes. Data may be retained even after admission for record-keeping
              and compliance.
            </p>
          </section>

          {/* USER RIGHTS */}
          <section>
            <h2 className="section">8. User Rights</h2>
            <ul className="list">
              <li>Request access to personal data</li>
              <li>Request corrections or updates</li>
              <li>Request deletion (subject to school policies)</li>
              <li>Withdraw consent for data usage</li>
            </ul>
          </section>

          {/* CHILD DATA */}
          <section>
            <h2 className="section">9. Children's Privacy</h2>
            <p className="text">
              All student data is submitted by parents or guardians. We do not
              directly collect personal data from minors without consent.
            </p>
          </section>

          {/* DIGITAL SYSTEM */}
          <section>
            <h2 className="section">10. Smart School Systems</h2>
            <p className="text">
              Our digital learning ecosystem may use student data to personalize
              educational experiences, track progress, and improve outcomes.
            </p>
          </section>

          {/* COOKIES */}
          <section>
            <h2 className="section">11. Cookies & Tracking</h2>
            <p className="text">
              We may use cookies and analytics tools to improve website performance
              and user experience. These do not collect personal data without consent.
            </p>
          </section>

          {/* DECLARATION */}
          <section>
            <h2 className="section">12. Consent</h2>
            <p className="text">
              By submitting the admission form, you agree that all information
              provided is accurate and consent to its use as per this policy.
            </p>
          </section>

          {/* CONTACT */}
          <section>
            <h2 className="section">13. Contact Us</h2>
            <p className="text">
              For privacy-related concerns:
            </p>
            <p className="text-blue-600 font-medium mt-2">
              ramanarnavavidyalaya@gmail.com
            </p>
          </section>

        </div>

      </div>

      {/* 🔥 REUSABLE STYLES */}
      <style jsx>{`
        .section {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 8px;
        }
        .text {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.7;
        }
        .list {
          font-size: 14px;
          color: #4b5563;
          padding-left: 18px;
          list-style: disc;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
      `}</style>

    </div>
  );
}