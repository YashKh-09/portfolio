const timeline = [
  {
    year: "2025 — Present",
    title: "Learning Full-Stack Development",
    company: "Self-Taught",
    location: "Online",
    description:
      "Dedicated to mastering the MERN stack through hands-on projects. Building real applications to understand frontend-backend integration.",
  },
  {
    year: "2024 — 2024",
    title: "First Steps in Web Development",
    company: "Personal Projects",
    location: "Remote",
    description:
      "Started with HTML, CSS, and JavaScript. Built 5+ projects including a weather app, todo list manager, and a simple e-commerce frontend.",
  },
  {
    year: "2023",
    title: "The Beginning",
    company: "Learning Journey",
    location: "Online",
    description:
      "Discovered my passion for coding. Started with free resources, YouTube tutorials, and online documentation. Built my first 'Hello World' in JavaScript.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 md:py-24 border-t border-border">
      <div className="container-custom">
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Archivo'] text-[clamp(2rem,6vw,2.25rem)] font-bold tracking-[-0.05em] text-accent opacity-90">
            Journey_
          </h2>
          <div className="w-12 md:w-16 h-px bg-accent opacity-50 mt-4" />
        </div>

        <p className="max-w-2xl mb-16 text-[clamp(1rem,3vw,1.2rem)] text-muted leading-relaxed">
          My path into web development started in 2023. Here's how it's been
          going so far — from first lines of code to building full-stack
          applications.
        </p>

        {/* Timeline - wider on large screens */}
        <div className="relative max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          {/* Mobile line only */}
          <div
            className="md:hidden absolute top-0 bottom-0 w-0.5 bg-border"
            style={{ left: "15px" }}
          />

          {/* Desktop line only */}
          <div
            className="hidden md:block absolute top-0 bottom-0 w-0.5 bg-border"
            style={{ left: "50%", marginLeft: "-1px" }}
          />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, i) => {
              const isEven = i % 2 === 0;

              return (
                <div key={item.year} className="relative">
                  {/* Mobile dot */}
                  <div
                    className="md:hidden absolute z-10 w-3 h-3 rounded-full bg-accent opacity-70 ring-4 ring-bg"
                    style={{ left: "11px", top: "6px" }}
                  />

                  {/* Desktop dot */}
                  <div
                    className="hidden md:block absolute z-10 w-3 h-3 rounded-full bg-accent opacity-70 ring-4 ring-bg"
                    style={{ left: "50%", top: "6px", marginLeft: "-6px" }}
                  />

                  {/* Content - wider cards */}
                  <div
                    className={`pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${
                      isEven
                        ? "md:ml-auto md:pl-16"
                        : "md:mr-auto md:pr-16 md:text-right"
                    }`}
                  >
                    <div className="border border-border p-6 lg:p-8 hover:border-accent transition-all duration-300 group">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isEven ? "" : "md:justify-end"
                        }`}
                      >
                        <span className="text-xs font-mono text-accent opacity-70">
                          {item.year}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 border border-green text-green">
                          LEARNING
                        </span>
                      </div>

                      <h3 className="font-['Archivo'] text-lg md:text-xl lg:text-2xl font-bold text-text group-hover:text-accent transition-colors mb-2">
                        {item.title}
                      </h3>

                      <div
                        className={`flex items-center gap-2 text-sm text-muted mb-3 ${
                          isEven ? "" : "md:justify-end"
                        }`}
                      >
                        <span>{item.company}</span>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <span>{item.location}</span>
                      </div>

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

        <div className="mt-16 text-center">
          <div className="inline-block border border-border px-6 py-4">
            <p className="text-sm text-muted">
              <span className="text-accent">Currently:</span> Building more
              projects, learning TypeScript and NextJs, and documenting everything on
              Instagram
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
