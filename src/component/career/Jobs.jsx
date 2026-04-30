import { Info } from "lucide-react";
import CareerNavbar from "./CareerNavbar";

export default function Jobs() {
  const jobs = []; // abhi empty

  return (
    <section className="bg-[#f8fafc] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <CareerNavbar/>

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Open Positions
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            Explore opportunities and grow with us
          </p>
        </div>

        {/* CONDITION */}
        {jobs.length === 0 ? (

          /* EMPTY STATE */
          <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center max-w-2xl mx-auto">

            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
                <Info className="w-6 h-6 text-blue-500" />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              No Open Positions Right Now
            </h3>

            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              We are currently in the development phase and not accepting job applications at the moment.
              <br />
              Opportunities will be announced soon — stay connected with us!
            </p>

          </div>

        ) : (

          /* JOB LIST (future use) */
          <div className="space-y-6">
            {jobs.map((job, i) => (
              <div key={i}>Job Card</div>
            ))}
          </div>

        )}

      </div>
    </section>
  );
}