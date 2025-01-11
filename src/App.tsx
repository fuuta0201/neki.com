import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Hero from "./components/Hero";
import What from "./components/What";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import { ReactLenis } from "lenis/react";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [startFadeOut, setStartFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setStartFadeOut(true);
    }, 3500);
    const hideAnimationTimer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideAnimationTimer);
    };
  }, []);
  return (
    <ReactLenis root>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={startFadeOut ? { opacity: 0 } : {}}
          transition={{ duration: 1.5 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#128857",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
            style={{
              fontSize: "3rem",
              color: "white",
            }}
          >
            Neki is beautiful.
          </motion.h1>
        </motion.div>
      )}
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
