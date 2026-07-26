"use client";

const DarkModeToggle = () => {
  const toggleMode = () => {
    console.log("Toggling mode");

    // Class based
    document.documentElement.classList.toggle("dark");
  };

  return (
    <label>
      Dark Mode
      <input type="checkbox" onChange={toggleMode} autoComplete="off" />
    </label>
  );
};

export default DarkModeToggle;
