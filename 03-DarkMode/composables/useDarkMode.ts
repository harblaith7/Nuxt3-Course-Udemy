const useDarkMode = () => {
  const isDarkMode = useState("darkMode", () => false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

export default useDarkMode;
