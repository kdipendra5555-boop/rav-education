import CertificateCards from "./CertificateCards";
import OrbisNavbar from "./OrbisNavbar";


export default function CertificateCardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <OrbisNavbar/>

      <section className="border-b border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            Free Certifications
          </span>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-gray-950 md:text-6xl">
            Explore Certifications
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Browse our collection of free certification programs and earn
            verified digital credentials to showcase your skills.
          </p>
        </div>
      </section>

      <CertificateCards/>
    </div>
  );
}