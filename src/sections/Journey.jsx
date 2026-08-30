import { useState } from "react";

const timeline = [
  {
    year: "2026 — Present",
    title: "Building Layer & Creating",
    company: "Layer",
    location: "Building",
    description:
      "Building Layer, a web development and digital services agency, while creating content around what I build and learn. Continuing to learn, build things I enjoy, and document the journey of becoming an engineer and entrepreneur.",
    type: "CURRENT",
  },

  {
    year: "2026 — 2026",
    title: "Next.js, TypeScript & Backend Architecture",
    company: "Personal Projects",
    location: "Remote",
    description:
      "Learned TypeScript, Next.js, Prisma, and PostgreSQL while building more structured applications. Also started creating content around my projects and learnings — something I had been postponing since 2025.",
    type: "LEARNING",
  },

  {
    year: "2025 — 2026",
    title: "From MERN to Real Applications",
    company: "Self-Taught",
    location: "Online",
    description:
      "Completed my foundation in the MERN stack through full-stack practice projects. After building several applications to understand the fundamentals, I shifted my focus toward building more practical and real-world applications.",
    type: "COMPLETED",
  },

  {
    year: "2024 — 2024",
    title: "First Steps in Web Development",
    company: "Personal Projects",
    location: "Remote",
    description:
      "Started with HTML, CSS, and JavaScript. Built my first projects while learning the fundamentals of web development and gradually moved toward building more complete applications.",
    type: "COMPLETED",
  },

  {
    year: "2023",
    title: "The Beginning",
    company: "Learning Journey",
    location: "Online",
    description:
      "Discovered my interest in coding and started learning through free resources, YouTube tutorials, and online documentation. Wrote my first lines of JavaScript and began exploring what I could build with code.",
    type: "BEGINNING",
  },
];

export default function Journey() {
  const [showFullJourney, setShowFullJourney] = useState(false);

  const displayedTimeline = showFullJourney ? timeline : timeline.slice(0, 3);

  return (
    <section id="journey" className="py-20 md:py-24 border-t border-border">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Archivo'] text-[clamp(2rem,6vw,2.25rem)] font-bold tracking-tighter text-accent opacity-90">
            Journey_
          </h2>

          <div className="w-12 md:w-16 h-px bg-accent opacity-50 mt-4" />
        </div>

        {/* Intro */}
        <p className="max-w-2xl mb-16 text-[clamp(1rem,3vw,1.2rem)] text-muted leading-relaxed">
          My path into web development started in 2023. From learning the
          fundamentals to building full-stack applications, creating content,
          and starting my own agency — this is how the journey has evolved.
        </p>

        {/* Timeline */}
        <div className="relative max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          {/* Mobile timeline line */}
          <div
            className="md:hidden absolute top-0 bottom-0 w-0.5 bg-border"
            style={{ left: "15px" }}
          />

          {/* Desktop timeline line */}
          <div
            className="hidden md:block absolute top-0 bottom-0 w-0.5 bg-border"
            style={{ left: "50%", marginLeft: "-1px" }}
          />

          <div className="space-y-12 md:space-y-16">
            {displayedTimeline.map((item, i) => {
              const isEven = i % 2 === 0;

              return (
                <div key={`${item.year}-${item.title}`} className="relative">
                  {/* Mobile dot */}
                  <div
                    className="md:hidden absolute z-10 w-3 h-3 rounded-full bg-accent opacity-70 ring-4 ring-bg"
                    style={{ left: "11px", top: "6px" }}
                  />

                  {/* Desktop dot */}
                  <div
                    className="hidden md:block absolute z-10 w-3 h-3 rounded-full bg-accent opacity-70 ring-4 ring-bg"
                    style={{
                      left: "50%",
                      top: "6px",
                      marginLeft: "-6px",
                    }}
                  />

                  {/* Content */}
                  <div
                    className={`pl-12 md:pl-0 md:w-[calc(50%-2rem)] text-left ${
                      isEven
                        ? "md:ml-auto md:pl-16"
                        : "md:mr-auto md:pr-16 md:text-right"
                    }`}
                  >
                    <div className="border border-border p-6 lg:p-8 hover:border-accent transition-all duration-300 group">
                      {/* Year + Status */}
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isEven ? "" : "md:justify-end"
                        }`}
                      >
                        <span className="text-xs font-mono text-accent opacity-70">
                          {item.year}
                        </span>

                        <span className="text-[10px] px-2 py-0.5 border border-border text-muted">
                          {item.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-['Archivo'] text-lg md:text-xl lg:text-2xl font-bold text-text group-hover:text-accent transition-colors mb-2">
                        {item.title}
                      </h3>

                      {/* Company + Location */}
                      <div
                        className={`flex items-center gap-2 text-sm text-muted mb-3 ${
                          isEven ? "" : "md:justify-end"
                        }`}
                      >
                        {item.company === "Layer" ? (
                          <a
                            href="https://layer.today"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                          >
                            Layer
                          </a>
                        ) : (
                          <span>{item.company}</span>
                        )}

                        <span className="w-1 h-1 bg-border rounded-full" />

                        <span>{item.location}</span>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-sm lg:text-base text-muted leading-relaxed ${
                          isEven ? "" : "md:text-right"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey Toggle */}
        <div
          className={`text-center ${
            showFullJourney ? "mt-12 md:mt-16" : "mt-14 md:mt-20"
          }`}
        >
          <button
            type="button"
            onClick={() => setShowFullJourney((prev) => !prev)}
            className="inline-flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
          >
            <span className="w-8 h-px bg-border hover:bg-accent transition-colors" />

            <span>
              {showFullJourney ? "Close" : "View Full Journey"}
            </span>

            <span
              className={`transition-transform duration-300 ${
                showFullJourney ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>

            <span className="w-8 h-px bg-border hover:bg-accent transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}
