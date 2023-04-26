import "./styles.css";
import React from "react";
import Country from "./country.component";

const CountryList = ({ country, onRemove }) => {
  return (
    <div>
      {country &&
        country.map((country, index) => (
          <Country
            key={index}
            country={country}
            onRemove={() => onRemove(country)}
          />
        ))}
    </div>
  );
};

export default CountryList;
