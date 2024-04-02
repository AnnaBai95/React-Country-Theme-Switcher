import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

function NavBar() {
  return (
    <header className="px-10 py-5 bg-white">
      <nav className="flex justify-between">
        <span className="font-extrabold">Where in the world?</span>
        <button>
          <FontAwesomeIcon icon={faMoon} className="me-2 -rotate-30" />
          Dark Mode
        </button>
      </nav>
    </header>
  );
}
export default NavBar;
