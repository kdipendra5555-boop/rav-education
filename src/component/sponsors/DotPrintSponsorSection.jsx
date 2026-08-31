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
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Navbar */}
      <div className="fixed left-0 top-0 z-50 w-full">
        <Navbar />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
          alt="DotPrint"
          className="h-full w-full object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Main */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-20 lg:px-8">
        {/* Hero */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            Official Creative & Printing Sponsor
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-8xl">
            DotPrint
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
            Managing the complete creative, printing, branding, and visual
            communication ecosystem of our institution with premium quality
            execution and modern design systems.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Left Sticky Card */}
          <div className="h-fit rounded-[36px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl lg:sticky lg:top-32">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              About Partner
            </p>

            <div className="mt-10">
              <h2 className="text-5xl font-semibold text-white">100%</h2>

              <p className="mt-4 text-sm leading-8 text-slate-300">
                Complete support for institutional printing, educational
                materials, promotional campaigns, and branding systems.
              </p>
            </div>

            <div className="mt-10 h-px w-full bg-white/10" />

            <div className="mt-10">
              <h3 className="text-4xl font-semibold text-white">Full</h3>

              <p className="mt-4 text-sm leading-8 text-slate-300">
                Creative direction for campaigns, event visuals, promotional
                graphics, and modern communication materials.
              </p>
            </div>

            <button className="mt-12 w-full rounded-2xl bg-white px-6 py-4 text-sm font-medium text-slate-900 transition duration-300 hover:bg-slate-100 hover:shadow-2xl">
              Explore Partnership
            </button>
          </div>

          {/* Right Cards */}
          <div className="grid auto-rows-[280px] gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  {/* Top */}
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl shadow-lg">
                      {service.icon}
                    </div>

                    <h3 className="mt-7 text-3xl font-semibold tracking-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-8 text-slate-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="h-px w-full max-w-[120px] bg-white/10" />

                    <div className="flex items-center gap-2 text-sm font-medium text-blue-300 transition duration-300 group-hover:gap-4">
                      <span>Learn More</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}