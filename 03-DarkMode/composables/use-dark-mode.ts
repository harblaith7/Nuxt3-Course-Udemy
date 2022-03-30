import { useState } from "#app";

export const useDarkMode = () => {
  const isDarkMode = useState("darkMode", () => false);

  const toggleIsDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  return {
    isDarkMode,
    toggleIsDarkMode,
  };
};
