"use client";

import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }

    return () => {};
  }, []);

  const toggleMode = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);

    // Class based
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleMode}
        autoComplete="off"
      />
    </label>
  );
};

export default DarkModeToggle;
