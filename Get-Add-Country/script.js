'use strict';

let inputCountryName = document.querySelector('input[type=text]');
const countryEl = document.querySelector('.country');
const btnAdd = document.getElementById('addcountry');
const main = document.getElementById('main');
const moreInfoEl = document.querySelector('.moreinfo');
const errorEl = document.querySelector('.error');
const btnCloseInfo = document.querySelector('.close-moreinfo');
const btnCloseError = document.querySelector('.close-error');
const inputEl = document.querySelector('.input-name');
let data = null;
let countryStorage = [];

const getLanguages = function (langObj) {
  const languageKeys = Object.keys(langObj.languages);
  const languageNames = languageKeys
    .map(key => langObj.languages[key])
    .join(', ');
  return languageNames;
};

const getCountryfromFirebase = async function () {
  try {
    const response = await fetch(
      'https://test-f1797-default-rtdb.europe-west1.firebasedatabase.app/countries.json'
    );
    const data = await response.json();
    console.log('Firebase-->');
    const fireArr = Object.values(data);
    if (fireArr.length > 0) {
      fireArr.forEach(element => {
        renderCountry(element, fireArr);
        inputEl.style.paddingTop = '0';
      });
    }
  } catch (error) {
    console.log(error);
  }
};
getCountryfromFirebase();

const renderCountry = function (data, countryArr) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const countryName = document.createElement('h2');
  const populationEl = document.createElement('p');
  const cityEl = document.createElement('p');
  const regionEl = document.createElement('p');
  const buttonSwohMore = document.createElement('button');
  const buttonRemoveEl = document.createElement('button');
  div.classList.add('country');
  img.setAttribute('src', `${data.flags.svg}`);
  img.classList.add('flag-image');
  div.appendChild(img);
  countryName.textContent = data.name.common;
  div.appendChild(countryName);
  populationEl.innerHTML = `<i class="fa-solid fa-person"></i>Population: ${data.population}`;
  cityEl.innerHTML = `<i class="fa-solid fa-city"></i>Capital city: ${data.capital}`;
  regionEl.innerHTML = `<i class="fa-solid fa-earth-americas"></i>Region: ${data.region}`;
  buttonSwohMore.textContent = 'Show more';
  buttonSwohMore.classList.add('btncountry');
  buttonRemoveEl.textContent = 'Remove';
  buttonRemoveEl.classList.add('btncountry');
  div.appendChild(populationEl);
  div.appendChild(cityEl);
  div.appendChild(regionEl);
  div.appendChild(buttonSwohMore);
  div.appendChild(buttonRemoveEl);
  main.appendChild(div);

  buttonSwohMore.addEventListener('click', function (event) {
    moreInfo(event, countryArr);
  });

  buttonRemoveEl.addEventListener('click', function (event) {
    if (window.confirm('Do you confirm?')) {
      let findCountry = event.target.parentElement.childNodes[1].textContent;
      countryStorage = countryStorage.filter(e => e.name.common != findCountry);
      buttonRemoveEl.parentElement.remove();
      if (countryStorage.length == 0) {
        inputEl.classList.add('input-ani');
        inputEl.style.paddingTop = '20%';
      }
    }
  });

  inputCountryName.value = '';
};

const getCurrencies = function (currObj) {
  const currneciesKeys = Object.keys(currObj.currencies);
  console.log(currneciesKeys);
  const currenciesNames = currneciesKeys.map(key => currObj.currencies[key]);
  return currenciesNames.map(e => e.name).join(', ');
};

inputEl.classList.add('input-ani');
inputEl.style.paddingTop = '20%';

const renderError = function (error) {
  main.style.display = 'none';
  inputEl.classList.add('hidden');
  errorEl.classList.remove('hidden');
  btnCloseError.addEventListener('click', function () {
    errorEl.classList.add('hidden');
    main.style.display = 'block';
    inputEl.classList.remove('hidden');
  });
  errorEl.querySelector('h1').textContent = error.message;
};
const moreInfo = function (event, countryStorage) {
  main.style.display = 'none';
  inputEl.classList.add('hidden');
  moreInfoEl.classList.remove('hidden');
  btnCloseInfo.addEventListener('click', function () {
    moreInfoEl.classList.add('hidden');
    main.style.display = 'block';
    inputEl.classList.remove('hidden');
  });
  let findCountry = event.target.parentElement.childNodes[1].textContent;
  const filteredCountryArr = countryStorage.filter(
    e => e.name.common == findCountry
  );
  console.log(filteredCountryArr);

  moreInfoEl.childNodes[3].textContent = filteredCountryArr[0].name.common;
  moreInfoEl.childNodes[5].textContent = `Official: ${filteredCountryArr[0].name.official}`;
  moreInfoEl.childNodes[6].textContent = `Languages: ${getLanguages(
    filteredCountryArr[0]
  )}`;
  moreInfoEl.childNodes[7].textContent = `Currencies: ${getCurrencies(
    filteredCountryArr[0]
  )}`;
  moreInfoEl.childNodes[8].textContent = `Google Maps: ${filteredCountryArr[0].maps.googleMaps}`;
  moreInfoEl.childNodes[9].textContent = `Fifa: ${filteredCountryArr[0].fifa}`;
  moreInfoEl.childNodes[10].textContent = `Cars License: ${filteredCountryArr[0].car.signs}`;
  moreInfoEl.childNodes[11].textContent = `Area: ${filteredCountryArr[0].area}`;
  moreInfoEl.childNodes[12].textContent = `Coordinates: ${filteredCountryArr[0].capitalInfo.latlng}`;
};

const getCountry = async function () {
  // debugger;
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${inputCountryName.value}`
    );

    if (response.status == 404) {
      throw new Error('The name of the country is incorect. Try again!');
    }
    const dataArr = await response.json();
    data = dataArr[0];
    if (
      countryStorage.some(
        country => JSON.stringify(country) == JSON.stringify(data)
      )
    ) {
      throw new Error('The country already exist in your list!');
    }
    inputEl.style.paddingTop = 0;
    countryStorage.push(data);
    console.log(countryStorage[0]);

    renderCountry(data, countryStorage);

    const saveToDb = async function (country) {
      try {
        await fetch(
          'https://test-f1797-default-rtdb.europe-west1.firebasedatabase.app/countries.json',
          {
            method: 'POST',
            body: JSON.stringify(country),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        //const data = await response.json();
      } catch (error) {
        console.log(error);
      }
    };
    saveToDb(data);
  } catch (error) {
    if (inputCountryName.value == '') {
      error.message = 'Please type a country name!';
    }

    if (
      !inputCountryName.value == '' &&
      error.message != 'The country already exist in your list!'
    ) {
      //console.log(response);
      console.log(error.message);
      error.message = 'The name of the country is incorect. Try again!';
    }
    renderError(error);
  }
};
btnAdd.addEventListener('click', getCountry);
