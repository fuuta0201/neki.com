import "./App.css";
import Hero from "./components/Hero";
import What from "./components/What";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <main>
        <Hero />
        <What />
        <Hobbies />
        <Contact />
        <Copyright />
      </main>
    </ReactLenis>
  );
}

export default App;
