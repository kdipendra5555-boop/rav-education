import Navbar from "../Navbar";
import JobCard from "./JobCard/JobCard";

export default function Jobs() {
  return (
    <>
      <Navbar />

      <section className="bg-[#f8fafc] py-20 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Open Positions
            </h2>
            <p className="mt-3 text-gray-500 text-sm">
              Explore opportunities and grow with us
            </p>
          </div>

         <div className="max-w-2xl mx-auto px-4">
  <JobCard
    title="Tuition Teacher"
    location="Remote"
    type="Part Time"
    applyLink="/teacher-apply/tuition/unnati/rural/students"
    description="We are looking for a dedicated tuition teacher to teach students from Class 1 to 5 and help them build strong academic foundations."
  />
</div>

        </div>
      </section>
    </>
  );
}