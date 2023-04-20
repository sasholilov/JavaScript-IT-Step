// InputComponent.js
import "./styles.css";
import React, { useState, useEffect, Fragment } from "react";
import Country from "./country.component";

const InputComponent = () => {
  const [inputField, setInputField] = useState("");
  const [country, setcountries] = useState(null);
  const onChangeHandler = (event) => {
    setInputField(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${inputField}`)
      .then((response) => response.json())
      .then((country) => setcountries(country[0]));
  }, [inputField]); // Update fetch call when inputField changes

  console.log(country);

  return (
    <Fragment>
      <div className="input-name">
        <input
          type="text"
          placeholder="Add new country by name..."
          value={inputField}
          onChange={onChangeHandler}
        />
        <button id="addcountry" className="btncountry">
          Add
        </button>
      </div>
      {country && <Country country={country} />}
    </Fragment>
  );
};

export default InputComponent;
