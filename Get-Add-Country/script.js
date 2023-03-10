'use strict';

let inputCountryName = document.querySelector('input[type=text]');
const countryEl = document.querySelector('.country');
const btnAdd = document.getElementById('addcountry');
const main = document.getElementById('main');

const getCountry = async function () {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${inputCountryName.value}`
    );
    const dataArr = await response.json();
    const data = dataArr[0];
    console.log(data.flags.png);
    const renderCountry = function () {
      const div = document.createElement('div');
      div.classList.add('country');
      const img = document.createElement('img');
      img.setAttribute('src', `${data.flags.svg}`);
      img.classList.add('flag-image');
      div.appendChild(img);
      const countryName = document.createElement('h2');
      countryName.textContent = data.name.common;
      div.appendChild(countryName);
      main.appendChild(div);
      inputCountryName.value = '';
    };
    renderCountry();
  } catch (error) {
    console.error(error);
  }
};
btnAdd.addEventListener('click', getCountry);
