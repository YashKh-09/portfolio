import { FaInstagram } from "react-icons/fa";

const projects = [
  {
    title: "URL SHORTENER WITH AUTHENTICATION",
    description:
      "A simple URL shortening service that allows users to create custom short links, track click analytics, and manage their URLs through a dashboard. It also includes user authentication, enabling secure access to personal link data and management features.",
    tags: ["MERN", "JWT", "Bcrypt", "React-Router-Dom", "Node.js", "MongoDB"],
    liveUrl: "https://github.com/yashx-dev/URL-shortener/blob/main/README.md",
    codeUrl: "https://github.com/yashx-dev/URL-shortener",
  },
  {
    title: "Aurelion - Clothing Brand",
    description:
      "A luxury fashion landing page showcasing curated collections, artisan craftsmanship, and private appointment booking — designed with an immersive editorial aesthetic that evokes the exclusivity of a Milan atelier.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    liveUrl: "https://aurelion-clothing.netlify.app/",
    codeUrl: "https://github.com/yashx-dev/Aurelion",
  },
  {
    title: "Le Jardin - Restaurant",
    description:
      "An elegant restaurant landing page showcasing a premium dining experience with a clean UI, smooth navigation, and responsive design, featuring sections for menu highlights, ambiance, and reservations.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    liveUrl: "https://lejaridan.netlify.app/",
    codeUrl: "https://github.com/yashx-dev/restraunt-landing-page",
  },
  {
    title: "UI_Nova - Video Editor Portfolio",
    description:
      "A modern portfolio website for a video editor, showcasing projects, skills, and creative work through a responsive and interactive design. It features video previews, custom animations, social links, and a contact form for inquiries and collaborations.",
    tags: ["TypeScript", "React.js", "Tailwind CSS"],
    liveUrl: "https://github.com/yashx-dev/UI-Nova-portfolio",
    codeUrl: "https://github.com/yashx-dev/UI-Nova-portfolio",
  },
];

export default function Projects() {  
  return (
    <section id="work" className="py-20 md:py-24 border-t border-border">
      <div className="container-custom">
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Archivo'] text-[clamp(2rem,6vw,2.25rem)] font-bold tracking-[-0.05em] text-accent opacity-90">
            Projects_
          </h2>
          <div className="w-12 md:w-16 h-px bg-accent opacity-50 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <article
              key={i}
              className="group border border-border hover:border-accent transition-all duration-500 p-6 md:p-8 flex flex-col"
            >
              <h3 className="font-['Archivo'] text-[clamp(1.25rem,4vw,1.5rem)] font-bold tracking-[-0.02em] text-text mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-muted text-[clamp(0.875rem,2.5vw,1rem)] leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-8 text-xs text-muted">
                {project.tags.map((tag, j) => (
                  <span key={j}>
                    {tag}
                    {j < project.tags.length - 1 && (
                      <span className="ml-3 text-border">/</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  Live Demo &rarr;
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  Code &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/_yashxdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors group"
          >
            <span className="w-8 h-px bg-border group-hover:bg-accent transition-colors" />
            <FaInstagram />
            <span>Follow my coding journey on Instagram</span>
            <span className="w-8 h-px bg-border group-hover:bg-accent transition-colors" />
          </a>
          <p className="text-xs text-border mt-4">more projects coming soon</p>
        </div>
      </div>
    </section>
  );
}
