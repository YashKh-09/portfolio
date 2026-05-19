const timeline = [
  {
    year: "2024 — Present",
    title: "Learning Full-Stack Development",
    company: "Self-Taught Journey",
    location: "Online",
    description:
      "Dedicated to mastering the MERN stack through hands-on projects. Building real applications to understand frontend-backend integration.",
  },
  {
    year: "2023 — 2024",
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

        <p className="max-w-2xl mb-12 text-[clamp(1rem,3vw,1.2rem)] text-muted leading-relaxed">
          My path into web development started in 2023. Here's how it's been
          going so far — from first lines of code to building full-stack
          applications.
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-px h-full bg-border" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={item.year} className="relative flex items-start">
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-accent opacity-70 z-10 mt-2" />

                <div
                  className={`ml-12 md:ml-0 w-full md:w-[calc(50%-3rem)] ${
                    i % 2 === 0
                      ? "md:mr-auto md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="border border-border p-6 hover:border-accent transition-all duration-300 group">
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="text-xs font-mono text-accent opacity-70">
                        {item.year}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 border border-green text-green">
                        LEARNING
                      </span>
                    </div>

                    <h3 className="font-['Archivo'] text-lg md:text-xl font-bold text-text group-hover:text-accent transition-colors mb-2">
                      {item.title}
                    </h3>

                    <div
                      className={`flex items-center gap-2 text-sm text-muted mb-3 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span>{item.company}</span>
                      <span className="w-1 h-1 bg-border rounded-full" />
                      <span>{item.location}</span>
                    </div>

                    <p
                      className={`text-sm text-muted leading-relaxed ${
                        i % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block border border-border px-6 py-4">
            <p className="text-sm text-muted">
              <span className="text-accent">Currently:</span> Building more
              projects, learning TypeScript, and documenting everything on
              Instagram
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
