import "./styles.css";
import React from "react";
import Country from "./country.component";

const CountryList = ({ country }) => {
  return (
    <div>
      {country &&
        country.map((country, index) => (
          <Country key={index} country={country} />
        ))}
    </div>
  );
};

export default CountryList;
