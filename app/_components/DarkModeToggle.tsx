"use client";

import { useEffect, useState } from "react";

type DarkModeToggleProps = {
  className?: string;
};

const DarkModeToggle = ({ className }: DarkModeToggleProps) => {
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
    <label
      className={`flex items-center justify-center gap-2 text-sm font-bold cursor-pointer text-text-primary ${className}`}
    >
      Dark Mode
      <div
        className="relative w-12 h-6 motion-safe:duration-150 rounded-full peer-checked:w-20
      bg-linear-to-r from-toggle-from to-toggle-to ease-in-out ml-auto"
      >
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleMode}
          autoComplete="off"
          className="sr-only peer"
        />
        <div className="absolute top-1 left-1 w-4 aspect-square rounded-full bg-top-background peer-checked:translate-x-6 motion-safe:duration-150 ease-in-out"></div>
      </div>
    </label>
  );
};

export default DarkModeToggle;
