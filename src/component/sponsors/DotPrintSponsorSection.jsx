
import Navbar from "../Navbar";

export default function DotPrintSponsorSection() {
  const services = [
    {
      title: "Institution Branding",
      description:
        "Complete branding support including banners, certificates, flex boards, admission campaigns, and institutional identity materials.",
      icon: "🎨",
    },
    {
      title: "Educational Printing",
      description:
        "Professional printing solutions for notebooks, report cards, prospectus, worksheets, exam papers, and stationery.",
      icon: "🖨️",
    },
    {
      title: "Creative Designing",
      description:
        "Modern visual creatives for social media, campaigns, advertisements, website graphics, and promotional activities.",
      icon: "✨",
    },
    {
      title: "Event Support",
      description:
        "Creative and printing support for annual functions, seminars, workshops, competitions, and awareness programs.",
      icon: "🎉",
    },
  ];

  return (
    
    <section className="relative overflow-hidden bg-[#f8fafc] pt-36 pb-24">
        {/* Fixed Navbar */}
<div className="fixed left-0 top-0 z-50 w-full">
  <Navbar />
</div>
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm text-slate-600 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            Official Creative & Printing Sponsor
          </div>

          <h2 className="mt-8 text-4xl tracking-tight text-slate-900 md:text-6xl">
            Powered by DotPrint
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-slate-600">
            DotPrint supports our institution by managing the complete
            printing, branding, and creative ecosystem — helping us maintain a
            modern and professional educational identity across every platform.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Side */}
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 shadow-xl md:p-12">
            {/* Glow */}
            <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />

            <div className="relative z-10">
              {/* Top */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    Sponsor Partner
                  </p>

                  <h3 className="mt-4 text-5xl tracking-tight text-slate-900">
                    DotPrint
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                    Managing all major print, branding, and creative operations
                    for our institution with premium quality and modern visual
                    communication.
                  </p>
                </div>

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 text-4xl shadow-sm">
                  🖨️
                </div>
              </div>

              {/* Divider */}
              <div className="mt-10 h-px w-full bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />

              {/* Features */}
              <div className="mt-10 space-y-5">
                {[
                  {
                    title: "Complete Branding Support",
                    desc: "Banners, certificates, promotional materials, and institutional identity assets.",
                  },
                  {
                    title: "Professional Printing",
                    desc: "Educational printing solutions for all academic and institutional needs.",
                  },
                  {
                    title: "Modern Creative Design",
                    desc: "Visual communication and campaign creatives for both online and offline platforms.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group rounded-3xl border border-slate-100 bg-slate-50/80 p-5 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex gap-4">
                      <div className="mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />

                      <div>
                        <h4 className="text-lg font-medium text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-10 flex flex-wrap items-center gap-5">
               

                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <p className="text-sm text-slate-500">
                    Trusted creative & print partner
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-3xl shadow-sm transition duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                <h4 className="mt-7 text-2xl tracking-tight text-slate-900">
                  {service.title}
                </h4>

                <p className="mt-4 text-sm leading-8 text-slate-600">
                  {service.description}
                </p>

                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}