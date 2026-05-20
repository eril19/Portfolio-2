import { useEffect, useState } from "react";

export const Theme = () => {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      return saved === "dark";
    }

    // fallback ke system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [dark, setDark] = useState(getInitialTheme);

 useEffect(() => {
  const root = document.documentElement;

  root.classList.add("theme-transition");

  if (dark) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  setTimeout(() => {
    root.classList.remove("theme-transition");
  }, 300);
}, [dark]);

  return { dark, setDark };
};