import React, { createContext, useContext } from "react";

// Create a theme context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Define your theme properties here
  const theme = {
    color: {
      periwinkle: "#D2D9FA",
      thistil: "#FAD1FB",
      vista: "#9AABFA",
      majorelle: "#6B48FA",
      penn: "#000038",
      cream: "#f5eee7"
    },
    font: {
      fontFamily: {
        header: '"OwnersWide"',
        title: '"Aboreto", sans-serif',
        paragraph: '"Quicksand", sans-serif'
      },
      fontSize: {
        title: "2rem",
        subheader: "1.5rem",
        subtitle: "1rem",
        paragraph: "1rem",
        hero: "2.5rem",
        pagination: "1.11rem"
      }
    }
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
