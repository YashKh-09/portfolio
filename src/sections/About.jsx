import image from "../images/yash.jpeg";

const stats = [
  { value: "1+", label: "Year Building" },
  { value: "10+", label: "Projects Completed" },
];

const skillCategories = [
  {
    title: "FRONTEND_",
    skills: ["Tailwind", "JavaScript", "React", "TypeScript", "Next.js"],
  },
  {
    title: "BACKEND_",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "DEV TOOLS_",
    skills: ["Git", "VS Code", "Postman", "Figma"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-border">
      <div className="container-custom">
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Archivo'] text-[clamp(2rem,6vw,2.25rem)] font-bold tracking-tighter text-accent opacity-90">
            About_
          </h2>

          <div className="w-12 md:w-16 h-px bg-accent opacity-50 mt-4" />
        </div>

        {/* About content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_260px] gap-12 md:gap-16 lg:gap-20 items-center mb-16">
          <div className="max-w-3xl">
            <p className="text-[clamp(1rem,3vw,1.25rem)] text-muted leading-relaxed mb-6">
              I'm a developer focused on learning by building. Over the past
              year, I've built 10+ projects across frontend and backend, working
              with technologies like{" "}
              <span className="text-accent">TypeScript</span>,{" "}
              <span className="text-accent">Next.js</span>,{" "}
              <span className="text-accent">Node.js</span>,{" "}
              <span className="text-accent">Express</span>,{" "}
              <span className="text-accent">PostgreSQL</span>, and{" "}
              <span className="text-accent">Prisma</span>. I enjoy taking an
              idea from concept to a real, working product.
            </p>

            <p className="text-[clamp(1rem,3vw,1.2rem)] text-muted leading-relaxed">
              Currently, I'm building{" "}
              <a
                href="https://layer.today"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Layer
              </a>
              , a web development and digital services agency, while working on
              new projects and exploring{" "}
              <span className="text-accent">SaaS products</span>. I'm also
              creating content around what I build, what I learn, and my journey
              as an <span className="text-accent">engineer</span> and{" "}
              <span className="text-accent">entrepreneur</span>.
            </p>
          </div>

          <div className="w-40 sm:w-48 md:w-full max-w-65 mx-auto md:mx-0">
            <div className="aspect-square border border-border overflow-hidden">
              <img
                src={image}
                alt="Yash"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-12 mb-12 pb-8 border-b border-border">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-[clamp(1.5rem,4vw,2rem)] font-bold text-accent">
                {stat.value}
              </div>

              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {skillCategories.map((category, i) => (
            <div key={i} className="group">
              <h3 className="font-['Archivo'] text-sm tracking-wider mb-4 pb-2 border-b border-border text-accent opacity-70 group-hover:border-accent transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-sm border border-border text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 cursor-default "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core stack */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted mb-4">core stack //</p>

          <div className="flex flex-wrap gap-4 font-mono text-sm">
            {[
              "Express",
              "MongoDB",
              "Node.js",
              "PostgreSQL",
              "Prisma",
              "Next.js",
              "TypeScript",
            ].map((tech, i, arr) => (
              <span key={tech} className="flex items-center gap-4">
                <span className="text-accent">{tech}</span>

                {i < arr.length - 1 && <span className="text-muted">/</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
