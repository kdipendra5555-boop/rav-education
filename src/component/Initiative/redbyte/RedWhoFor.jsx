import React from "react";

export default function RedWhoFor() {
  const people = [
    {
      number: "01",
      title: "Passionate Students",
      text: "Students who are genuinely curious, driven to learn, and willing to put in the work to build something meaningful.",
    },
    {
      number: "02",
      title: "Limited Resources",
      text: "Students who have the ambition to grow but don't have access to the right courses, mentorship, tools, or learning resources.",
    },
    {
      number: "03",
      title: "Self-Motivated Builders",
      text: "Students who want to create, experiment, and build real projects — even when they don't know where to start.",
    },
  ];

  return (
    <section
      id="who-for"
      className="w-full bg-transparent px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-4xl">

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-red-500">
            WHO IS THIS FOR?
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Talent is everywhere.
            <br />
            <span className="text-red-600">
              Opportunity isn't.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            RedHero is for students who have the passion to learn and build,
            but don't always have the resources, guidance, or opportunities
            to move forward.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid border-t border-white/20 md:grid-cols-3">

          {people.map((person) => (
            <div
              key={person.number}
              className="
                group
                border-b
                border-white/20
                px-0
                py-8
                transition-colors
                duration-300
                md:border-b-0
                md:border-r
                md:px-8
                md:first:pl-0
                md:last:border-r-0
              "
            >

              {/* Number */}
              <span className="text-xs font-medium tracking-[0.2em] text-red-500">
                {person.number}
              </span>

              {/* Title */}
              <h3 className="mt-6 text-xl font-medium text-white transition-colors duration-300 group-hover:text-red-500">
                {person.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
                {person.text}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-16 border-t border-white/10 pt-8">

          <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-3xl">
            If you have the{" "}
            <span className="text-red-500">passion</span>
            {" "}to learn, we believe you deserve a{" "}
            <span className="text-red-500">chance</span>
            {" "}to grow.
          </p>

        </div>

      </div>
    </section>
  );
}