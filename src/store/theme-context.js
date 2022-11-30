import React, { useState } from 'react';

const ThemeContext = React.createContext({
  isDarkThemeActive: true,
  onToggleTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(true);

  const toggleThemeHandler = () => {
    setIsDarkThemeActive((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkThemeActive,
        onToggleTheme: toggleThemeHandler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
