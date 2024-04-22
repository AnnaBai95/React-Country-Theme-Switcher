import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

function NavBar() {
  const [isDark, setIsDark] = useState(false);

  const handleDarkModeClick = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('darkMode', isDark);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('darkMode', isDark);
    }
  }, [isDark]);

  return (
    <header className="px-10 py-5 bg-white dark:bg-darkBlue shadow-custom dark:shadow-customDark  dark:text-white">
      <nav className="flex justify-between">
        <span className="font-extrabold">Where in the world?</span>
        <button onClick={handleDarkModeClick}>
          <FontAwesomeIcon icon={faMoon} className="me-2 -rotate-30" />
          Dark Mode
        </button>
      </nav>
    </header>
  );
}
export default NavBar;
