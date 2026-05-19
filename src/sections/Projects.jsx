import { FaInstagram } from "react-icons/fa";

const projects = [
  {
    title: "MULTI-VENDOR_ECOMMERCE",
    description:
      "Building a complete e-commerce platform where multiple sellers can list products, manage inventory, and track orders. Features include seller dashboard, product reviews, and payment integration.",
    tags: ["MERN", "Next.js", "Tailwind", "Redux", "Node.js", "MongoDB"],
    liveUrl: "https://github.com/yashx-dev/multi-vendor-ecommerce",
    codeUrl: "https://github.com/yashx-dev/multi-vendor-ecommerce",
  },
  {
    title: "SAAS_PROJECT_MANAGER",
    description:
      "Developing a project management tool with workspace creation, task assignments, real-time updates, and team collaboration features. Inspired by tools like Trello and Asana.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind"],
    liveUrl: "https://github.com/yashx-dev/saas-project-manager",
    codeUrl: "https://github.com/yashx-dev/saas-project-manager",
  },
  {
    title: "AI_IMAGE_GENERATOR",
    description:
      "Creating an AI-powered app that generates images from text prompts. Integrates with OpenAI API, includes user galleries, and prompt history.",
    tags: ["MERN", "OpenAI API", "Tailwind", "Cloudinary", "JWT"],
    liveUrl: "https://github.com/yashx-dev/ai-image-generator",
    codeUrl: "https://github.com/yashx-dev/ai-image-generator",
  },
  {
    title: "AUTH_SYSTEM_TEMPLATE",
    description:
      "Building a complete authentication system with email verification, password reset, OAuth (Google/GitHub), and role-based access control. Ready to use in any project.",
    tags: ["Next.js", "MongoDB", "NextAuth", "JWT", "TypeScript"],
    liveUrl: "https://github.com/yashx-dev/auth-system-template",
    codeUrl: "https://github.com/yashx-dev/auth-system-template",
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
