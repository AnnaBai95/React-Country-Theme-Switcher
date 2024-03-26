import logo from "./logo.svg";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import countryData from "./data/data.json";

function App() {
  return (
    <div className="">
      <header className="px-10 py-5 bg-white">
        <nav className="flex justify-between">
          <span className="font-extrabold">Where in the world?</span>
          <button>
            <FontAwesomeIcon icon={faMoon} className="me-2 -rotate-30" />
            Dark Mode
          </button>
        </nav>
      </header>
      <main className="mt-10 px-10">
        <div className="flex justify-between">
          <div className="input-group">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <input type="text" placeholder="Search for a country..."></input>
          </div>
          <div>
            <select>
              <option>Filter by region</option>
            </select>
          </div>
        </div>
        <div className="card-container flex flex-wrap gap-16 mt-10 justify-between">
          {countryData &&
            countryData.map((country) => (
              <>
                <div className="card bg-white rounded" key={country.area}>
                  <div className="card-header">
                    <img
                      src={country.flags.png}
                      alt={`Flag of ${country.name}`}
                    ></img>
                  </div>
                  <div className="card-body">
                    <p>{country.name}</p>
                    <div>
                      <span>Population:</span>
                      <span>{country.population}</span>
                    </div>
                    <div>
                      <span>Region:</span>
                      <span> {country.region}</span>
                    </div>
                    <div>
                      <span>Capital:</span>
                      <span>{country.capital}</span>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
