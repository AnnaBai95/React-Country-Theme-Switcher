import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { parse } from "@fortawesome/fontawesome-svg-core";

function NavBar() {

  const [isDark, setIsDark] = useState(() => {
    // try {
      const storageTheme = localStorage.getItem("darkMode");
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return storageTheme !== null ? JSON.parse(storageTheme) : prefersDarkMode;
    // } catch (error) {
    //   return false;
    // }
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const handleDarkModeClick = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <header className="px-10 py-5 bg-white dark:bg-darkBlue shadow-custom dark:shadow-customDark  dark:text-white">
      <nav className="flex justify-between">
        <span className="font-extrabold">Where in the world?</span>
        <button onClick={handleDarkModeClick}>
          <FontAwesomeIcon
            icon={faMoon}
            className="me-2 -rotate-30 animate-bounce dark:animate-pulse"
          />
          Dark Mode
        </button>
      </nav>
    </header>
  );
}
export default NavBar;
