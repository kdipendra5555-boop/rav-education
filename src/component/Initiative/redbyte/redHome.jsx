import RedNavbar from "./redNavbar";
import RedHero from "./RedHero";
import RedWhoFor from "./RedWhoFor";
import RedFooter from "./RedFooter";

export default function RedHome() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ================= VERTICAL LINES ================= */}
<div className="pointer-events-none fixed inset-0 z-0">

  {/* Left Line */}
  <div className="absolute left-[3%] top-0 h-full w-px bg-white/25" />

  {/* Right Line */}
  <div className="absolute right-[3%] top-0 h-full w-px bg-white/25" />

</div>
      {/* ================= NAVBAR ================= */}
      <div className="relative z-50">
        <RedNavbar />
      </div>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative z-10 min-h-screen"
      >
        <RedHero />
      </section>

      {/* ================= WHO IS THIS FOR ================= */}
      <section
        id="who-for"
        className="relative z-10 min-h-screen"
      >
        <RedWhoFor />
      </section>

      {/* ================= red footer ================= */}
      <section>
        <RedFooter/>
      </section>

    </main>
  );
}