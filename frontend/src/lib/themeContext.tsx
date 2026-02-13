import React, { createContext, useContext, useEffect } from "react";

type Theme = "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Always set theme to dark
  const theme: Theme = "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    // Ensure the class is added for Tailwind dark mode
    root.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    // No-op
    console.log("Theme toggle disabled. Dark mode enforced.");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
