import "./App.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
