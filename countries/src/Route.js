import { Route } from "react-router-dom";
import { CountryDetails } from "./CountryDetails";

function Routes() {
  return (
    <div>
      <Route path="/details" Component={CountryDetails}></Route>
    </div>
  );
}

export default Routes;
