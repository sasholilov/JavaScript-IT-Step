import "./styles.css";
import React from "react";
import Country from "./country.component";

const CountryList = ({ country }) => {
  return <div>{country && <Country country={country} />}</div>;
};

export default CountryList;
