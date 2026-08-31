import React from "react";

export default function RedHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent text-white">

      {/* ================= CONTENT ================= */}
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          pt-32
          sm:px-8
          sm:pt-36
          lg:px-0
          lg:pt-40
        "
      >
        <div
          className="
            flex
            flex-col
            justify-between
            gap-8
            lg:flex-row
            lg:items-end
            lg:gap-10
          "
        >

          {/* ================= LEFT ================= */}
          <div className="max-w-4xl">

            <h1
              className="
                text-[42px]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-white
                sm:text-6xl
                lg:text-[72px]
              "
            >
              Empowering the
              <br />
              <span className="text-red-600">
                heroes of tomorrow.
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-[330px]
                text-sm
                leading-6
                text-white/60
                sm:mt-6
                sm:max-w-xl
                sm:text-base
                sm:leading-7
              "
            >
              A new initiative for creators, builders, and innovators
              turning bold ideas into meaningful change.
            </p>

          </div>

          {/* ================= CTA ================= */}
          <button
            type="button"
            className="
              group
              flex
              w-fit
              shrink-0
              items-center
              gap-3
              border-b
              border-white/30
              pb-2
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:border-red-600
              hover:text-red-600
              lg:mb-1
            "
          >
            <span>Explore RedHero</span>

            <span
              className="
                text-xl
                leading-none
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>

        </div>
      </div>

      {/* ================= IMAGE ================= */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          overflow-hidden
          border-t
          border-white/10
        "
      >
        <img
          src="/images/redhero.png"
          alt="RedHero Initiative"
          className="
            block
            h-[260px]
            w-full
            object-cover
            object-center
            sm:h-[350px]
            lg:h-[390px]
          "
        />
      </div>

    </section>
  );
}