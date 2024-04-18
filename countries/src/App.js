import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import countryData from "./data/data.json";
import { useState } from "react";
import NavBar from "./components/navigation/nav";
import { Link } from "react-router-dom";
import CustomSelect from "./components/custom-select";

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

  const options = uniqueRegions.map((reg) => {
    return {
      label: reg.region,
      value: reg.region,
    };
  });

  return (
    <div className="">
      <NavBar></NavBar>
      <main className="mt-10 px-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="input-group w-full md:w-4/12 mb-10 md:mb-auto inline-flex items-center rounded">
            <FontAwesomeIcon icon={faSearch} className="icon ps-1 pr-4" />
            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full"
              onChange={(e) => handleCountrySearch(e.target.value)}
            ></input>
          </div>
          <CustomSelect
            options={options}
            placeholder="Filter by region"
            onRegionChange={handleRegionFilter}
          ></CustomSelect>
        </div>

        <div className="container flex flex-wrap gap-16 mt-10 justify-center md:justify-normal">
          {countryList &&
            countryList.map((country, index) => (
              <Link
                to={`/details/${country.name}`}
                state={{ selectedCountry: country, countries: countryData }}
                key={index}
              >
                <div className="card bg-white rounded w-72 sm:w-52 xs:w-60 md:w-52 lg:w-58 xl:w-64 2xl:w-80">
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
