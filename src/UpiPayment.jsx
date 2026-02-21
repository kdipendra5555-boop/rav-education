import { useState } from "react";
import { QRCode } from "react-qr-code";
import Navbar from "./component/Navbar";

const UPI_ID = "ramanarnavavidyalaya@axl";
const PAYEE_NAME = "Raman Arnava Vidyalaya";

export default function UpiPayment() {
  const [amount, setAmount] = useState("");

  const upiLink = (amt) =>
    `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(
      PAYEE_NAME
    )}&am=${amt}&cu=INR`;

  const handlePay = (amt) => {
    const value = Number(amt);

    if (!value || value <= 0) {
      alert("Please enter a valid donation amount");
      return;
    }

    window.location.href = upiLink(value);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-[calc(100vh-64px)] bg-slate-50 px-4 py-12 flex justify-center">
        <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-6 text-center">

          {/* Heading */}
          <h1 className="text-2xl font-bold text-blue-800 mb-1">
            Support Free Education
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Raman Arnava Vidyalaya
          </p>

          {/* QR Code */}
          <div className="flex justify-center mb-4">
            <div className="p-3 border rounded-xl bg-white">
              <QRCode value={upiLink(amount || 100)} size={170} />
            </div>
          </div>

          {/* UPI ID */}
          <p className="text-xs text-gray-500 mb-6">
            UPI ID: <span className="font-medium">{UPI_ID}</span>
          </p>

          {/* Fixed Amount Buttons */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[10, 20, 30, 50, 100, 300, 500, 1000].map((amt) => (
              <button
                key={amt}
                onClick={() => handlePay(amt)}
                className="bg-blue-700 text-white rounded-lg py-2 text-sm font-semibold hover:bg-blue-800 transition"
              >
                ₹{amt}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <input
            type="number"
            placeholder="Enter a custom amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {/* Donate Button */}
          <button
            onClick={() => handlePay(amount)}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
          >
            Donate {amount ? `₹${amount}` : ""}
          </button>

          {/* Volunteer Note */}
          <p className="text-xs text-gray-500 mt-5 leading-relaxed">
            You may also support our mission by volunteering your time,
            skills, or guidance. Every form of support is valuable.
          </p>

          {/* Important Notice */}
          <div className="mt-6 bg-slate-100 border border-slate-200 rounded-xl p-4 text-left">
            <p className="text-xs text-gray-700 leading-relaxed">
              <span className="font-semibold">Important Notice:</span>{" "}
              Raman Arnava Vidyalaya is currently under the process of
              registration and development. This initiative is focused
              on providing <span className="font-medium">free and quality education</span>
              to children from economically weaker backgrounds.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed mt-2">
              All contributions are <span className="font-medium">voluntary</span>.
              Please donate responsibly and only according to your own
              willingness and capacity.
            </p>
          </div>

          {/* Final Disclaimer */}
          <p className="text-xs text-gray-400 mt-3 leading-relaxed">
            Payments are made via UPI intent and are not automatically
            confirmed on this page.
          </p>

          {/* ❤️ Love & Support Footer */}
          <div className="mt-6 flex items-center justify-center gap-1 text-xs text-gray-500">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>for education & community support</span>
          </div>
        </div>
      </div>
    </>
  );
}