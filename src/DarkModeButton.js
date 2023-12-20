// DarkModeButton.js
import React, { useState } from 'react';
import './DarkModeButton.css'; // Import the CSS file for styling

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const htmlElement = document.querySelector("html");
    const isDarkMode = htmlElement.classList.contains("dark-mode");
  
    if (!isDarkMode) {
      htmlElement.classList.add("dark-mode");
    } else {
      htmlElement.classList.remove("dark-mode");
    }
  
    setIsDarkMode(!isDarkMode); // Toggle the dark mode state
  };
  

  return (
    <button
      className={`dark-mode-button ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeButton;
