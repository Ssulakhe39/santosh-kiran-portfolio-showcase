import { createContext, useContext, useEffect, useState } from "react";

type ThemeType = "light" | "dark" | "desktop";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Check if theme preference exists in localStorage
    const savedTheme = localStorage.getItem("theme") as ThemeType | null;
    
    // If preference exists and is valid, use it
    if (savedTheme && ["light", "dark", "desktop"].includes(savedTheme)) {
      return savedTheme;
    }
    
    // Otherwise check system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    
    // Default to light theme
    return "light";
  });

  useEffect(() => {
    // Remove any existing theme classes
    document.documentElement.classList.remove("light", "dark", "desktop");
    
    // Add the current theme class
    document.documentElement.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
