import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="">
    <header className="px-10 py-5 bg-white">
      <nav className="flex justify-between">
        <span className="font-extrabold">Where in the world?</span>
        <button>
        <FontAwesomeIcon icon={faMoon} />
          Dark Mode
        </button>
      </nav>
    </header>
    </div>

  );
}

export default App;
