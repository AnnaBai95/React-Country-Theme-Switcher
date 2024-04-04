import logo from "./logo.svg";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import countryData from "./data/data.json";
import { useState } from "react";
import NavBar from "./components/navigation/nav";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function App() {
  const [countryList, setCountryList] = useState(countryData);

  const uniqueRegions = countryData.filter(
    (country, index, self) =>
      index === self.findIndex((c) => c.region === country.region)
  );

  const handleRegionFilter = (selectedRegion) => {
    const newCountryList = countryData.filter(
      (country) => country.region === selectedRegion
    );
    setCountryList(newCountryList);
  };

  const handleCountrySearch = (countryName) => {
    const countrySearchList = countryData.filter((country) =>
      country.name.toLowerCase().includes(countryName.toLowerCase())
    );
    setCountryList(countrySearchList);
  };

  return (
    <div className="">
      <NavBar></NavBar>
      <main className="mt-10 px-10">
        <div className="flex justify-between">
          <div className="input-group w-4/12 inline-flex items-center">
            <FontAwesomeIcon icon={faSearch} className="icon ps-1 pr-4" />
            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full"
              onChange={(e) => handleCountrySearch(e.target.value)}
            ></input>
          </div>
          <select onChange={(e) => handleRegionFilter(e.target.value)}>
            <option>Filter by region</option>
            {uniqueRegions &&
              uniqueRegions.map((reg) => (
                <option key={uuidv4()}>{reg.region}</option>
              ))}
          </select>
        </div>
        {/* <Link to={`/details/${country.name}`} key={index}> */}
        <div className="card-container flex flex-wrap gap-16 mt-10">
          {countryList &&
            countryList.map((country, index) => (
              <Link to={`/details/${country.name}`} state={country} key={index}>
                <div className="card bg-white rounded">
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
              </Link>
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
