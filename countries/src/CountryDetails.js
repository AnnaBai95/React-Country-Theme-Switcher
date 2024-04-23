import { Link, useLocation, useNavigate } from "react-router-dom";
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
        <div className="mt-11 mb-11 ml-10 my-2">
          <button
            className="border dark:bg-darkBlue dark:border-0 py-2 px-7 rounded shadow-custom 
            dark:shadow-customDark dark:text-white text-sm  hover:bg-neutral-200  dark:hover:text-gray-900"
            onClick={() => navigate("/")}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-1" /> Back
          </button>
        </div>
        <div className="container mx-auto lg:mx-0">
          <div className="flex flex-col lg:flex-row ml-10 mr-10 lg:mr-0 gap-0 lg:gap-32">
            <img
              src={state.selectedCountry.flags.svg}
              alt={`Flag of ${state.selectedCountry.name}`}
              className="object-contain h-full w-full max-h-96 min-h-96 min-w-auto lg:min-w-450 max-w-450 flag-img"
            ></img>
            <div className="dark:text-white">
              <h1 className="font-extrabold text-2xl mb-8 mt-8">
                {state.selectedCountry.name}
              </h1>
              <div className="grid grid-rows-5 grid-flow-row lg:grid-flow-col gap-x-48 gap-y-2">
                <div>
                  <span className="font-extrabold">Native Name: </span>
                  <span>{state.selectedCountry.nativeName}</span>
                </div>
                <div>
                  <span className="font-extrabold">Population: </span>
                  <span>
                    {state.selectedCountry.population.toLocaleString()}
                  </span>
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
                <div className="flex flex-wrap gap-3">
                  {state.selectedCountry.borders?.map((border, index) => {
                    // Find the bordering country object in state.countries
                    const borderingCountry = state.countries.find(
                      (country) => country.alpha3Code === border
                    );
                    return (
                      <Link
                        to={`/details/${borderingCountry.name}`}
                        state={{
                          selectedCountry: borderingCountry,
                          countries: state.countries,
                        }}
                        key={index}
                      >
                        <span
                          className="border rounded-sm text-sm py-1 px-5 shadow-custom dark:shadow-customDark dark:bg-darkBlue dark:border-0 hover:bg-neutral-200
                         hover:font-semibold hover:border-neutral-200 dark:hover:text-gray-900"
                        >
                          {borderingCountry.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default CountryDetails;
