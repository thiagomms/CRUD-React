import { createContext, useContext, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/themes';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      return 'dark';
    } else {
      return 'light';
    }
  });

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={isDarkTheme === 'dark' ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {

  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    if (isDarkTheme === 'dark') {
      setIsDarkTheme('light');
      localStorage.setItem('theme', 'light');
    }
    if (isDarkTheme === 'light') {
      setIsDarkTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return {
    changeTheme
  }
}