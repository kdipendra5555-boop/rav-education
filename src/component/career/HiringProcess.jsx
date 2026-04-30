import {
  FileText,
  FileSearch,
  Mic,
  Brain,
  Users,
  CheckCircle
} from "lucide-react";

export default function HiringProcess() {
  const steps = [
    { icon: FileText, title: "Application Submission" },
    { icon: FileSearch, title: "Resume Screening" },
    { icon: Mic, title: "Demo Class" },
    { icon: Brain, title: "Interview" },
    { icon: Users, title: "Final Discussion" },
    { icon: CheckCircle, title: "Selection & Onboarding" }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
       <div className="flex justify-start">
  <img
    src="/images/recruit.png"
    alt="Recruitment"
    className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto object-contain"
  />
</div>

        {/* RIGHT CONTENT */}
        <div>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
            Recruitment Process
          </h2>

          {/* LIST */}
          <div className="divide-y divide-gray-200">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div
                  key={i}
                  className="flex items-center gap-4 py-4"
                >

                  {/* NUMBER */}
                  <div className="text-sm text-gray-400 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* ICON */}
                  <Icon className="w-5 h-5 text-gray-500" />

                  {/* TITLE */}
                  <p className="text-gray-800 text-sm md:text-base">
                    {step.title}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}