import Terminal from "../components/ui/Terminal";

export default function Hero() {
  // Function to handle smooth scrolling without URL hash
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 lg:pt-0 lg:px-10">
      <div className="container-custom w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="font-['Archivo'] text-[clamp(2.5rem,8vw,4rem)] font-black tracking-tighter leading-[1.1] mb-8 md:mb-10">
              Web Developer
              <br />
              <span className="text-accent opacity-80">
                & Content Creator
              </span>
            </h1>

            <p className="text-[clamp(1rem,3vw,1.25rem)] text-text max-w-xl mb-10 md:mb-12 leading-relaxed mx-auto lg:mx-0">
              From schema design to frontend execution, I build complete web
              systems with clarity and intent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <a
                href="#work"
                onClick={(e) => handleScroll(e, 'work')}
                className="px-8 py-3.5 border text-sm font-medium tracking-wide transition-all duration-300 text-center border-accent text-accent hover:bg-accent hover:text-bg"
              >
                View Work &rarr;
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="px-8 py-3.5 border text-sm font-medium tracking-wide transition-all duration-300 text-center border-border text-text hover:border-green hover:text-green"
              >
                Contact
              </a>
            </div>

            <div className="hidden md:block mt-12">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, 'about')}
                className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors group"
              >
                <span className="w-8 h-px bg-border group-hover:bg-accent transition-colors" />
                <span>Scroll to explore</span>
              </a>
            </div>
          </div>

          <Terminal />
        </div>
      </div>
    </section>
  );
}