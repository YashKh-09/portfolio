// modal.js - Project modal functionality

// DOM Elements for modal
const projectTriggers = document.querySelectorAll(
  ".project-modal-trigger, .view-project-btn"
);
const modal = document.getElementById("project-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".modal-close");

// Project Data - Easily editable
const projectData = {
  "cash-app": {
    title: "Cash App Design Systems",
    type: "Mobile Web Design System",
    description:
      "Mobile web design system and evolved on mobile design systems (including every component).",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      "Figma",
      "Design System",
      "UI/UX",
      "Component Library",
      "Mobile First",
    ],
    liveLink: "#",
    githubLink: "#",
    status: "Completed",
  },
  "line-influencer": {
    title: "Line Influencer Platform",
    type: "Influencer Management Platform",
    description:
      "Led the end-to-end development of app, shipping its concept and guiding it through the entire release process.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "REST API", "AWS", "Mobile App"],
    liveLink: "#",
    githubLink: "#",
    status: "Completed",
  },
  "line-design": {
    title: "Line Global Design Systems",
    type: "Global Design Language",
    description:
      "Started and led the creation of Line's global design system, creating the foundation from scratch.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      "Figma",
      "Storybook",
      "React",
      "TypeScript",
      "Design Tokens",
      "Documentation",
    ],
    liveLink: "#",
    githubLink: "#",
    status: "Completed",
  },
};

// Open modal when clicking project cards
projectTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling

    const projectId = trigger.getAttribute("data-project");
    const project = projectData[projectId];

    if (project) {
      openProjectModal(project);
    }
  });
});

function openProjectModal(project) {
  const modalTitle = document.querySelector(".modal-title");
  const modalBody = document.querySelector(".modal-body");

  modalTitle.textContent = project.title;

  modalBody.innerHTML = `
        <div class="space-y-6">
            <!-- Project Image -->
            <div class="rounded-lg overflow-hidden h-48 md:h-64 bg-gray-200">
                <img src="${project.image}" alt="${
    project.title
  }" class="w-full h-full object-cover">
            </div>
            
            <!-- Project Type -->
            <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-lg font-medium text-[#545643]">${
                  project.type
                }</span>
            </div>
            
            <!-- Description -->
            <div>
                <p class="text-[#80727B] text-base leading-relaxed">${
                  project.description
                }</p>
            </div>
            
            <!-- Tech Stack Tags -->
            <div>
                <h5 class="text-lg font-semibold text-[#545643] mb-3">Tech Stack</h5>
                <div class="flex flex-wrap gap-2">
                    ${project.tags
                      .map(
                        (tag) => `
                        <span class="px-3 py-1.5 bg-[#BBACC1] text-[#545643] rounded-lg text-sm font-medium border border-[#80727B]/20">
                            ${tag}
                        </span>
                    `
                      )
                      .join("")}
                </div>
            </div>
            
            <!-- Status -->
            <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span class="text-[#545643]">Status: <span class="font-medium">${
                      project.status
                    }</span></span>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-[#545643]">Type: <span class="font-medium">${
                      project.type.includes("MVP") ? "MVP" : "Production"
                    }</span></span>
                </div>
            </div>
            
            <!-- Links -->
            <div class="pt-4 border-t border-[#80727B]/20">
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="${
                      project.liveLink
                    }" target="_blank" class="flex-1 px-6 py-3 bg-[#909580] text-[#F1DEDE] rounded-lg font-medium hover:bg-[#545643] transition-colors duration-200 text-center">
                        View Live Project
                    </a>
                    <a href="${
                      project.githubLink
                    }" target="_blank" class="flex-1 px-6 py-3 border border-[#545643] text-[#545643] rounded-lg font-medium hover:bg-[#545643] hover:text-[#F1DEDE] transition-colors duration-200 text-center">
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    `;

  // Show modal
  modal.classList.remove("hidden");
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Close modal
function closeModal() {
  modal.classList.add("hidden");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Make sure we have the modal elements before adding event listeners
if (modalOverlay && modalClose) {
  modalOverlay.addEventListener("click", closeModal);
  modalClose.addEventListener("click", closeModal);
}

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Add modal styles to CSS via JavaScript
const modalStyle = document.createElement("style");
modalStyle.textContent = `
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }
    
    .modal:not(.hidden) {
        display: block;
    }
    
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    .modal-container {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }
    
    .modal-content {
        background-color: #F1DEDE;
        border-radius: 0.75rem;
        max-width: 56rem;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        animation: modalFadeIn 0.3s ease;
    }
    
    @keyframes modalFadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(modalStyle);

// Initialize modal display
document.addEventListener("DOMContentLoaded", () => {
  if (modal) {
    modal.style.display = "none";
  }
});
