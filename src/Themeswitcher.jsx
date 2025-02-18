import React, { useState } from "react";

const Themeswitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
      <button onClick={toggleTheme}>Toggle Mode</button>
    </div>
  );
};

export default Themeswitcher;
