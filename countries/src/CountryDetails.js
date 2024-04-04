import { useLocation } from "react-router-dom";
import NavBar from "./components/navigation/nav";

function CountryDetails(props) {

  const {state} = useLocation();
  console.log("Test", state);

  return (
    <>
      <NavBar></NavBar>

      <main>
        <div>
          <button>Back</button>
        </div>
        <div className="flex">
          <div>
            <img src={state.flags.png} alt={`Flag of ${state.name}`}></img>
          </div>
          <div>
            <h1>{state.name}</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default CountryDetails;
