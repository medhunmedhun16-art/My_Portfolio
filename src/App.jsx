import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// ── Components ──────────────────────────────────────
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ── Hooks ───────────────────────────────────────────
import useDarkMode from "./hooks/useDarkMode";

/**
 * App — root component that assembles all sections.
 *
 * Features:
 *  - Loading screen on first paint
 *  - Dark mode via useDarkMode hook
 *  - Smooth-scrolling layout
 */
export default function App() {
  const [isDark, toggleDark] = useDarkMode();
  const [loading, setLoading] = useState(true);

  // Simulate initial load (replace with real data fetching if needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ── Loading Screen ─────────────────── */}
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* ── Main Content ───────────────────── */}
      {!loading && (
        <div className="min-h-screen">
          <Navbar isDark={isDark} toggleDark={toggleDark} />

          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <SoftSkills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
