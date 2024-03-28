import logo from "./logo.svg";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import countryData from "./data/data.json";

function App() {
  // const handlePopulateFilter = () => {};

  const uniqueRegions = countryData.filter(
    (country, index, self) =>
      (index === self.findIndex((c) => c.region === country.region))
  );

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
          <div className="input-group w-4/12 inline-flex items-center">
            <FontAwesomeIcon icon={faSearch} className="icon ps-1 pr-4" />
            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full"
            ></input>
          </div>
          <div>
            <select>
              <option>Filter by region</option>
              {uniqueRegions &&
                uniqueRegions.map((reg, index) => (
                  <option key={index}>{reg.region}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="card-container flex flex-wrap gap-16 mt-10">
          {countryData &&
            countryData.map((country, index) => (
              <>
                <div className="card bg-white rounded" key={index}>
                  <div className="card-header">
                    <img
                      src={country.flags.png}
                      alt={`Flag of ${country.name}`}
                      className="rounded-t w-full h-full"
                    ></img>
                  </div>
                  <div className="card-body p-7">
                    <p className="font-extrabold mb-3 title">{country.name}</p>
                    <div>
                      <span className="font-semibold">Population: </span>
                      <span>{country.population}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Region: </span>
                      <span> {country.region}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Capital: </span>
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
