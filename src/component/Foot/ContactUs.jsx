import Navbar from "../Navbar";

export default function ContactUs() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* 🔵 HERO */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-28 text-center relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Contact Us
        </h1>

        <p className="text-blue-100 text-sm max-w-2xl mx-auto">
          Get in touch with us for admissions, queries, or support.
        </p>
      </div>

      {/* ⚪ CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">

        {/* 📞 LEFT - CONTACT INFO */}
        <div className="space-y-8">
          {[
            {
              title: "Address",
              value: "Raman Arnava Vidyalaya, Ghazipur, Uttar Pradesh",
              icon: "📍",
            },
            {
              title: "Email",
              value: "ramanarnavavidyalaya@gmail.com",
              icon: "📧",
            },
            {
              title: "Support",
              value: "Available for queries & guidance anytime",
              icon: "💬",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md p-7 rounded-3xl shadow-sm border hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🟢 RIGHT - PREMIUM INFO SECTION */}
        <div className="flex flex-col justify-center">

          <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-lg border">

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Let’s Connect 🤝
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We are always open to meaningful conversations. Whether you are a parent,
              student, volunteer, or supporter — feel free to reach out to us.
              Our team will guide you and provide all necessary information.
            </p>

            <div className="space-y-4 text-sm text-gray-600">

              <div className="flex items-start gap-3">
                <span>🎓</span>
                <p>
                  Admissions and enrollment queries are handled with priority.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span>💡</span>
                <p>
                  We welcome collaboration, volunteering, and innovative ideas.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span>📩</span>
                <p>
                  You can directly email us and expect a response within 24 hours.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="mailto:ramanarnavavidyalaya@gmail.com"
                className="inline-block bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition"
              >
                📧 Send Email
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}