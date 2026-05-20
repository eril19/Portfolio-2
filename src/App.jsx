import { Navbar } from "@/layout/Navbar";
import Hero from "@/section/Hero";
import About from "@/section/About";
import Projects from "@/section/Projects";
import Experience from "@/section/Experience";
import Testimonials from "@/section/Testimonials";
import Contact from "@/section/Contact";
// import { DarkModeButton } from "@/components/DarkModeButton";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        {/* <DarkModeButton /> */}
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
