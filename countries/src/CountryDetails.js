import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/navigation/nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CountryDetails(props) {
  const { state } = useLocation();
  console.log("State", state);

  const navigate = useNavigate();

  return (
    <>
      <NavBar></NavBar>

      <main>
        <div className="mt-11 mb-11 ml-10">
          <button
            className="border py-2 px-7 rounded shadow-border text-sm"
            onClick={() => navigate("/")}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-1" /> Back
          </button>
        </div>
        <div className="flex flex-column lg:flex-row ml-10 gap-32">
          <div className="min-h-96 max-h-96 min-w-450 max-w-450">
            <img
              src={state.selectedCountry.flags.svg}
              alt={`Flag of ${state.selectedCountry.name}`}
              className="h-full w-full"
            ></img>
          </div>
          <div>
            <h1 className="font-extrabold text-2xl mb-8 mt-8">
              {state.selectedCountry.name}
            </h1>
            <div className="grid grid-rows-5 grid-flow-col gap-x-48 gap-y-2">
              <div>
                <span className="font-extrabold">Native Name: </span>
                <span>{state.selectedCountry.nativeName}</span>
              </div>
              <div>
                <span className="font-extrabold">Population: </span>
                <span>{state.selectedCountry.population.toLocaleString()}</span>
              </div>
              <div>
                <span className="font-extrabold">Region: </span>
                <span>{state.selectedCountry.region}</span>
              </div>
              <div>
                <span className="font-extrabold">Sub Region: </span>
                <span>{state.selectedCountry.subregion}</span>
              </div>
              <div>
                <span className="font-extrabold">Capital: </span>
                <span>{state.selectedCountry.capital}</span>
              </div>
              <div>
                <span className="font-extrabold">Top Level Domain: </span>
                <span>{state.selectedCountry.topLevelDomain}</span>
              </div>
              <div>
                <span className="font-extrabold">Currencies: </span>
                <span>
                  {state.selectedCountry.currencies
                    ?.map((currency) => currency.name)
                    .join(", ")}
                </span>
              </div>
              <div>
                <span className="font-extrabold">Languages: </span>
                <span>
                  {state.selectedCountry.languages
                    ?.map((language) => language.name)
                    .join(", ")}
                </span>
              </div>
            </div>
            <div className="mt-16 flex">
              <span className="font-extrabold me-2">Border Countries: </span>
              <div className="flex flex-wrap gap-2">
                {state.selectedCountry.borders?.map((border, index) => (
                  <span key={index} className="border text-sm py-1 px-5 shadow-border">
                    {state.countries
                      .filter((country) => country.alpha3Code === border)
                      .map((country) => country.name)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default CountryDetails;
