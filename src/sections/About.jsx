const stats = [
  { value: "1+", label: "Year Building" },
  { value: "7+", label: "Projects Completed" },
];

const skillCategories = [
  {
    title: "FRONTEND_",
    skills: ["Tailwind", "JavaScript", "React", "TypeScript"],
  },
  {
    title: "BACKEND_",
    skills: ["Node.js", "Express", "MongoDB", "JWT"],
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
          <h2 className="font-['Archivo'] text-[clamp(2rem,6vw,2.25rem)] font-bold tracking-[-0.05em] text-accent opacity-90">
            About_
          </h2>
          <div className="w-12 md:w-16 h-px bg-accent opacity-50 mt-4" />
        </div>

        <div className="max-w-3xl mb-12">
          <p className="text-[clamp(1rem,3vw,1.25rem)] text-muted leading-relaxed mb-6">
            I'm a developer focused on learning by building. Over the past year,
            I've completed 5+ full-stack projects using the{" "}
            <span className="text-accent">MERN</span> stack. I enjoy turning
            ideas into real, working applications.
          </p>

          <p className="text-[clamp(1rem,3vw,1.2rem)] text-muted leading-relaxed">
            Currently diving deeper into{" "}
            <span className="text-accent">TypeScript</span> and{" "}
            <span className="text-accent">NextJs</span>, exploring backend
            architecture, and building projects that solve real problems.
          </p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {skillCategories.map((category, i) => (
            <div key={i} className="group">
              <h3 className="font-['Archivo'] text-sm tracking-[0.05em] mb-4 pb-2 border-b border-border text-accent opacity-70 group-hover:border-accent transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-sm border border-border text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 cursor-default rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted mb-4">core stack //</p>
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            {["Express", "MongoDB", "Node.js"].map((tech, i, arr) => (
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
