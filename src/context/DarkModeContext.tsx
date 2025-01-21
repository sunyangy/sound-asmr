import { createContext, useContext, useEffect } from "react";

import { useLocalStorageState } from "../hooks/useLocalStorageState";

interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState("darkMode", true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      //   document.documentElement.classList.remove("light-mode");
    } else {
      //   document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  function toggleDarkMode() {
    setIsDarkMode((isDark: boolean) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("DarkModeContext was used outside of a DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
