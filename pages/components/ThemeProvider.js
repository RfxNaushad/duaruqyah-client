import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);

  const toggleTheme = () => {
    setNightMode(!nightMode);
    if (!nightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  };

  return (
    <ThemeContext.Provider value={{ nightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;