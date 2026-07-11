import Navbar from "../Navbar";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>

      {/* 🔵 HERO */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-28 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-blue-100 max-w-3xl mx-auto text-sm leading-relaxed">
          Please read these terms carefully before using the admission and digital services of Raman Arnava Vidyalaya.
        </p>
      </div>

      {/* ⚪ CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <div className="space-y-8">

          {/* SECTION CARD */}
          <div className="card">
            <h2 className="title">1. Acceptance of Terms</h2>
            <p className="text">
              By accessing this website or submitting any admission-related forms,
              you agree to be legally bound by these Terms & Conditions. If you do
              not agree with any part of these terms, you must not use this platform.
            </p>
          </div>

          <div className="card">
            <h2 className="title">2. Free Service Declaration</h2>
            <p className="text">
              All online services provided through this platform, including pre-registration
              and admission form submission, are <b>completely free of cost</b>. The school
              does not charge any fee for submitting forms online. Any official fee (if applicable)
              will be communicated only through authorized channels.
            </p>
          </div>

          <div className="card">
            <h2 className="title">3. Accuracy of Information</h2>
            <p className="text">
              Users are required to provide <b>accurate, complete, and up-to-date information</b>.
              Submission of false, misleading, or incomplete data may result in rejection,
              cancellation, or disqualification of the application.
            </p>
          </div>

          <div className="card">
            <h2 className="title">4. Admission Policy</h2>
            <p className="text">
              Submission of an application does <b>not guarantee admission</b>. Admission decisions
              are based on eligibility criteria, document verification, seat availability,
              and approval by the school administration.
            </p>
          </div>

          <div className="card">
            <h2 className="title">5. Document Verification</h2>
            <p className="text">
              All documents submitted must be genuine and valid. Raman Arnava Vidyalaya reserves
              the right to verify all documents and reject applications in case of discrepancies
              or fraudulent submissions.
            </p>
          </div>

          <div className="card">
            <h2 className="title">6. User Responsibilities</h2>
            <ul className="list">
              <li>Provide truthful and verified information</li>
              <li>Maintain confidentiality of login credentials</li>
              <li>Use the platform responsibly and ethically</li>
              <li>Follow all school policies and guidelines</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="title">7. Digital Platform Usage</h2>
            <p className="text">
              This platform is intended solely for educational and administrative purposes.
              Any misuse, hacking attempt, or unauthorized access will lead to immediate
              termination and possible legal action.
            </p>
          </div>

          <div className="card">
            <h2 className="title">8. Data Usage & Privacy</h2>
            <p className="text">
              All personal data is handled in accordance with our Privacy Policy.
              By using this platform, you consent to the collection and use of your
              information for admission, communication, and academic purposes.
            </p>
          </div>

          <div className="card">
            <h2 className="title">9. Payment Terms</h2>
            <p className="text">
              While form submission is free, any future payments (if applicable)
              must be made only through officially approved methods. The school
              is not responsible for payments made through unauthorized sources.
            </p>
          </div>

          <div className="card">
            <h2 className="title">10. Limitation of Liability</h2>
            <p className="text">
              The school shall not be held responsible for any technical issues,
              data loss, delays, or interruptions caused by internet failures,
              server issues, or third-party services.
            </p>
          </div>

          <div className="card">
            <h2 className="title">11. Account Security</h2>
            <p className="text">
              Users are responsible for maintaining the security of their account
              credentials. Raman Arnava Vidyalaya is not liable for unauthorized
              access caused due to negligence.
            </p>
          </div>

          <div className="card">
            <h2 className="title">12. Smart School System Usage</h2>
            <p className="text">
              Student data may be used to enhance digital learning systems,
              track performance, and improve educational outcomes.
            </p>
          </div>

          <div className="card">
            <h2 className="title">13. Modification of Services</h2>
            <p className="text">
              The school reserves the right to modify, suspend, or discontinue
              any feature or service at any time without prior notice.
            </p>
          </div>

          <div className="card">
            <h2 className="title">14. Policy Updates</h2>
            <p className="text">
              These Terms & Conditions may be updated periodically. Continued use
              of the platform implies acceptance of the revised terms.
            </p>
          </div>

          <div className="card">
            <h2 className="title">15. Contact Information</h2>
            <p className="text">
              For any queries regarding these Terms & Conditions, please contact:
            </p>
            <p className="text-blue-600 font-semibold mt-2">
              ramanarnavavidyalaya@gmail.com
            </p>
          </div>

        </div>

      </div>

      {/* 🔥 STYLES */}
      <style jsx>{`
        .card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }
        .title {
          font-size: 18px;
          font-weight: 700;
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