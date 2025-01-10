import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
