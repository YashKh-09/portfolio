import { useState, useEffect, useCallback } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    if (scrollY < 100) {
      setActiveSection("");
      return;
    }

    document.querySelectorAll("section[id]").forEach((section) => {
      const top = section.offsetTop - 150;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= top && scrollY < bottom) {
        setActiveSection(id);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(href.slice(1));
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("");
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="/"
            onClick={scrollToTop}
            className="text-lg md:text-xl font-black font-['Archivo'] tracking-[-0.05em]"
          >
            <span className="text-accent">YASH </span>
            <span className="text-text">KHANDELWAL</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className={`text-sm transition-colors nav-link ${
                  activeSection === item.href.slice(1)
                    ? "text-green"
                    : "text-text hover:text-green"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-text transition-transform origin-center ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text transition-transform origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className={`py-2 transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-green"
                    : "text-text hover:text-green"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
