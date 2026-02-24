import { useState, useEffect } from "react";

/**
 * useDarkMode – manages dark / light theme preference.
 *
 * Reads initial value from localStorage (key: "theme").
 * Falls back to the user's OS preference via `prefers-color-scheme`.
 * Toggles the `dark` class on <html> so Tailwind's `dark:` variants work.
 *
 * @returns {[boolean, Function]} — [isDark, toggleDarkMode]
 */
export default function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";

    // Fall back to OS preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  return [isDark, toggleDarkMode];
}
