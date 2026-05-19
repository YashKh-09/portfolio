import Navbar from "./components/layouts/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Journey from "./sections/Journey.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/layouts/Footrer.jsx";

function App() {
  return (
    <div className="bg-bg text-text overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;