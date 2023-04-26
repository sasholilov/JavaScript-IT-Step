import "./styles.css";
import InputComponent from "./input.component";
import { Fragment } from "react";

const Country = ({ country, onRemove }) => {
  return (
    <div className="country">
      <img src={`${country.flags.png}`} className="flag-image"></img>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <button className="btncountry" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default Country;
