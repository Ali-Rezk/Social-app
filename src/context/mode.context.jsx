import { createContext, useEffect, useState } from "react";

export const mode = createContext(null);

export default function ModeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    }
  }, []);

  return (
    <mode.Provider value={{ theme, toggleTheme }}>{children}</mode.Provider>
  );
}
