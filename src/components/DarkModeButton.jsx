// import { Theme } from "@/hooks/Theme";

import { useEffect, useState } from "react";
import { Moon, Sun, ToggleLeft, ToggleRight } from "lucide-react";

export const DarkModeButton = () => {
  // Ambil preferensi awal dari localStorage atau default ke light mode
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      // className="p-2 bg-secondary text-secondary-foreground rounded-base font-semibold"
      style={{ border: "none", background: "none", cursor: "pointer" }}
      aria-pressed={isDark}
    >
      {isDark ? (
        <ToggleRight color="#10b981" size={24} />
      ) : (
        <ToggleLeft color="#6b7280" size={24} />
      )}
      {/* {isDark ? "☀️ Ubah ke Light Mode" : "🌙 Ubah ke Dark Mode"} */}
    </button>

    // SUN & MOON BUTTON
    // <button
    //   onClick={() => setIsDark(!isDark)}
    //   style={{
    //     border: "none",
    //     background: "none",
    //     cursor: "pointer",
    //     padding: "8px",
    //     borderRadius: "50%",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     transition: "background-color 0.3s",
    //   }}
    //   aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    // >
    //   {isDark ? (
    //     <Sun color="#f59e0b" size={24} fill="#f59e0b" /> // Yellow filled sun
    //   ) : (
    //     <Moon color="#3b82f6" size={24} fill="#3b82f6" /> // Blue filled moon
    //   )}
    // </button>
  );
};
