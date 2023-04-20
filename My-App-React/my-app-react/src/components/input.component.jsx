// InputComponent.js
import "./styles.css";
import React, { useState, useEffect, Fragment } from "react";
import Country from "./country.component";
import CountryList from "./country-list.component";

const InputComponent = () => {
  const [inputField, setInputField] = useState("");
  const [countryArr, setCountryArr] = useState([]);
  const [country, setcountries] = useState(null);
  const onChangeHandler = (event) => {
    setInputField(event.target.value);
    console.log(event.target.value);
  };

  const onClickHandler = () => {
    if (country) {
      setCountryArr([...countryArr, country]); // Use spread operator to push country into countryArr immutably
    }
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${inputField}`)
      .then((response) => response.json())
      .then((country) => setcountries(country[0]));
  }, [inputField]); // Update fetch call when inputField changes

  // useEffect(() => {
  //   if (country) {
  //     setCountryArr([...countryArr, country]); // Use spread operator to push country into countryArr immutably
  //   }
  // }, [country]); // Update countryArr when country changes

  console.log(countryArr);

  return (
    <Fragment>
      <div className="input-name">
        <input
          type="text"
          placeholder="Add new country by name..."
          value={inputField}
          onChange={onChangeHandler}
        />
        <button id="addcountry" className="btncountry" onClick={onClickHandler}>
          Add
        </button>
      </div>
      {country && <CountryList country={country} />}
    </Fragment>
  );
};

export default InputComponent;
