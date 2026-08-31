import RedNavbar from "./redNavbar";

export default function RedCourses() {
  const courses = [
    {
      number: "01",
      title: "Artificial Intelligence",
      description:
        "Understand how intelligent systems work and learn to build AI solutions from the ground up.",
      tag: "AI",
      youtube: "https://youtube.com/your-ai-video",
      pdf: "https://example.com/ai.pdf",
    },
    {
      number: "02",
      title: "Machine Learning",
      description:
        "Learn the core concepts behind machine learning and build models that solve real problems.",
      tag: "ML",
      youtube: "https://youtube.com/your-ml-video",
      pdf: "https://example.com/machine-learning.pdf",
    },
    {
      number: "03",
      title: "Web Development",
      description:
        "Build modern websites and applications while learning the technologies behind the web.",
      tag: "WEB",
      youtube: "https://youtube.com/your-web-video",
      pdf: "https://example.com/web-development.pdf",
    },
    {
      number: "04",
      title: "Data Science",
      description:
        "Turn raw data into useful insights through analysis, visualization, and intelligent models.",
      tag: "DATA",
      youtube: "https://youtube.com/your-data-video",
      pdf: "https://example.com/data-science.pdf",
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <RedNavbar />

      {/* ================= COURSES ================= */}
      <section
        id="courses"
        className="
          w-full
          bg-black
          px-6
          pt-32
          pb-24
          text-white
          sm:px-8
          lg:px-12
          lg:pt-36
          lg:pb-32
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* ================= HEADER ================= */}
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                REDHERO COURSES
              </p>

              <h2
                className="
                  mt-6
                  text-5xl
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.055em]
                  sm:text-6xl
                  lg:text-[76px]
                "
              >
                Learn.
                <br />
                <span className="text-red-600">Build.</span> Lead.
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-7 text-white/40 lg:pb-2">
              Practical learning paths for students who want to go beyond
              theory and build things that actually matter.
            </p>

          </div>


          {/* ================= COURSE CARDS ================= */}
          <div className="mt-20 grid border-l border-t border-white/15 sm:grid-cols-2">

            {courses.map((course) => (
              <div
                key={course.number}
                className="
                  min-h-[380px]
                  border-b
                  border-r
                  border-white/15
                  p-7
                  sm:p-9
                  lg:p-10
                "
              >

                {/* TOP */}
                <div className="flex items-start justify-between">

                  <span className="text-sm font-medium text-red-600">
                    {course.number}
                  </span>

                  <span
                    className="
                      border
                      border-white/20
                      px-3
                      py-1
                      text-xs
                      text-white/50
                    "
                  >
                    {course.tag}
                  </span>

                </div>


                {/* CONTENT */}
                <div className="mt-20">

                  <h3
                    className="
                      text-3xl
                      font-semibold
                      leading-tight
                      tracking-[-0.03em]
                      sm:text-4xl
                    "
                  >
                    {course.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/50">
                    {course.description}
                  </p>

                </div>


                {/* ACTIONS */}
                <div className="mt-10 flex flex-wrap gap-3">

                  <a
                    href={course.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-red-600
                      px-4
                      py-2.5
                      text-xs
                      font-medium
                      text-white
                    "
                  >
                    Watch on YouTube
                  </a>

                  <a
                    href={course.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-white
                      px-4
                      py-2.5
                      text-xs
                      font-medium
                      text-black
                    "
                  >
                    Download PDF
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}