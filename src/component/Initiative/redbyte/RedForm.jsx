import React, { useState } from "react";
import RedNavbar from "./redNavbar";

export default function RedForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const formData = new FormData();

    formData.append(
      "entry.511144957",
      form.name.value
    );

    formData.append(
      "entry.522236050",
      form.email.value
    );

    formData.append(
      "entry.1280732892",
      form.education.value
    );

    formData.append(
      "entry.1018132365",
      form.interest.value
    );

    formData.append(
      "entry.344581665",
      form.message.value
    );

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSek4PEqpayu8RBzf6p6vbeleY0w1h5xNp8dATKDjEkan4nX0A/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      setSubmitted(true);
      form.reset();

    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <RedNavbar />

      {/* ================= FORM SECTION ================= */}
      <section
        id="apply"
        className="
          w-full
          px-6
          pb-20
          pt-36
          sm:px-8
          sm:pb-24
          sm:pt-40
          lg:px-12
          lg:pb-28
          lg:pt-44
        "
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-24">

            {/* ================= LEFT ================= */}
            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                JOIN REDHERO
              </p>

              <h1
                className="
                  mt-7
                  text-5xl
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.055em]
                  sm:text-6xl
                  lg:text-[72px]
                "
              >
                Have the
                <br />
                passion?
                <br />
                <span className="text-red-600">
                  Start here.
                </span>
              </h1>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/50 sm:text-base">
                We are looking for curious and passionate students who
                want to learn, build, and grow — regardless of their
                background or access to resources.
              </p>

              <div className="mt-10 h-px w-16 bg-red-600" />

              <p className="mt-6 max-w-sm text-xs leading-6 text-white/30">
                You don't need the perfect background. You just need
                curiosity, passion, and the willingness to begin.
              </p>

            </div>

            {/* ================= FORM ================= */}
            <form
              onSubmit={handleSubmit}
              className="w-full"
            >

              <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-3
                      block
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-white/50
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="
                      w-full
                      border-b
                      border-white/20
                      bg-transparent
                      px-0
                      py-3
                      text-base
                      text-white
                      outline-none
                      placeholder:text-white/25
                      focus:border-red-600
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-3
                      block
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-white/50
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="
                      w-full
                      border-b
                      border-white/20
                      bg-transparent
                      px-0
                      py-3
                      text-base
                      text-white
                      outline-none
                      placeholder:text-white/25
                      focus:border-red-600
                    "
                  />
                </div>

                {/* EDUCATION */}
                <div>
                  <label
                    htmlFor="education"
                    className="
                      mb-3
                      block
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-white/50
                    "
                  >
                    Education
                  </label>

                  <input
                    id="education"
                    name="education"
                    type="text"
                    placeholder="School / College / University"
                    required
                    className="
                      w-full
                      border-b
                      border-white/20
                      bg-transparent
                      px-0
                      py-3
                      text-base
                      text-white
                      outline-none
                      placeholder:text-white/25
                      focus:border-red-600
                    "
                  />
                </div>

                {/* INTEREST */}
                <div>
                  <label
                    htmlFor="interest"
                    className="
                      mb-3
                      block
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-white/50
                    "
                  >
                    Interested In
                  </label>

                  <input
                    id="interest"
                    name="interest"
                    type="text"
                    placeholder="AI, Web, Robotics..."
                    required
                    className="
                      w-full
                      border-b
                      border-white/20
                      bg-transparent
                      px-0
                      py-3
                      text-base
                      text-white
                      outline-none
                      placeholder:text-white/25
                      focus:border-red-600
                    "
                  />
                </div>

              </div>

              {/* STORY */}
              <div className="mt-10">

                <label
                  htmlFor="message"
                  className="
                    mb-3
                    block
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-white/50
                  "
                >
                  Your Story
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us what you're passionate about, what you want to learn, or what you want to build..."
                  required
                  className="
                    w-full
                    resize-none
                    border-b
                    border-white/20
                    bg-transparent
                    px-0
                    py-3
                    text-base
                    leading-7
                    text-white
                    outline-none
                    placeholder:text-white/25
                    focus:border-red-600
                  "
                />

              </div>

              {/* BOTTOM */}
              <div
                className="
                  mt-10
                  flex
                  flex-col
                  gap-7
                  border-t
                  border-white/10
                  pt-7
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <p className="max-w-sm text-xs leading-6 text-white/30">
                  Tell us where you are today. We'll help you think
                  about where you could go next.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    shrink-0
                    border
                    border-red-600
                    bg-red-600
                    px-8
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    hover:bg-red-500
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    sm:w-auto
                  "
                >
                  {loading
                    ? "Sending..."
                    : submitted
                    ? "Application Sent ✓"
                    : "Apply to RedHero →"}
                </button>

              </div>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}