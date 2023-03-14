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
const moreInfo = function () {
  main.style.display = 'none';
  inputEl.classList.add('hidden');
  moreInfoEl.classList.remove('hidden');
  btnCloseInfo.addEventListener('click', function () {
    moreInfoEl.classList.add('hidden');
    main.style.display = 'block';
    inputEl.classList.remove('hidden');
  });
};

const getCountry = async function () {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${inputCountryName.value}`
    );
    if (inputCountryName.value == '') {
      throw new Error('Please type a country name!');
    }
    if (response.status == 404) {
      console.log(response);
      throw new Error('The country does not exist. Try again!');
    }

    const dataArr = await response.json();
    data = dataArr[0];

    countryStorage.push(data);
    const renderCountry = function () {
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
        moreInfo();
        let findCountry = event.target.parentElement.childNodes[1].textContent;
        const filteredCountryArr = countryStorage.filter(
          e => e.name.common == findCountry
        );
        console.log(filteredCountryArr);

        moreInfoEl.childNodes[3].textContent =
          filteredCountryArr[0].name.common;
        moreInfoEl.childNodes[5].textContent = `Official: ${filteredCountryArr[0].name.official}`;
        moreInfoEl.childNodes[6].textContent = `Languages: ${getLanguages(
          filteredCountryArr[0]
        )}`;
        moreInfoEl.childNodes[7].textContent = `Area: ${filteredCountryArr[0].area}`;
        moreInfoEl.childNodes[8].textContent = `Google Maps: ${filteredCountryArr[0].maps.googleMaps}`;
        moreInfoEl.childNodes[9].textContent = `Fifa: ${filteredCountryArr[0].fifa}`;
        moreInfoEl.childNodes[10].textContent = `Cars License: ${filteredCountryArr[0].car.signs}`;
        moreInfoEl.childNodes[11].textContent = `Coordinates: ${filteredCountryArr[0].capitalInfo.latlng}`;
      });

      buttonRemoveEl.addEventListener('click', function (event) {
        if (window.confirm('Do you confirm?')) {
          let findCountry =
            event.target.parentElement.childNodes[1].textContent;
          countryStorage = countryStorage.filter(
            e => e.name.common != findCountry
          );
          buttonRemoveEl.parentElement.remove();
        }
      });

      inputCountryName.value = '';
    };
    renderCountry();
  } catch (error) {
    renderError(error);
  }
};
btnAdd.addEventListener('click', getCountry);
console.log(countryStorage);
