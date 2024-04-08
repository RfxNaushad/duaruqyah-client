import React from 'react';

const ThemeContext = React.createContext({
  theme: 'light', 
  nightMode: false,
  toggleTheme: () => {},
});

export default ThemeContext;