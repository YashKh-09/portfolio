import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

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