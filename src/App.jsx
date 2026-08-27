import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <header className="container">
        <Navbar />
      </header>

      <main>
        <div className="container">
          <section id="home">
            <Home />
          </section>

          <section id="project">
            <Project />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;