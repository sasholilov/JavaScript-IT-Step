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
      const img = document.createElement('img');
      const countryName = document.createElement('h2');
      const populationEl = document.createElement('p');
      const cityEl = document.createElement('p');
      const regionEl = document.createElement('p');
      const buttonEl = document.createElement('button');
      div.classList.add('country');
      img.setAttribute('src', `${data.flags.svg}`);
      img.classList.add('flag-image');
      div.appendChild(img);
      countryName.textContent = data.name.common;
      div.appendChild(countryName);
      populationEl.innerHTML = `<i class="fa-solid fa-person"></i>Population: ${data.population}`;
      cityEl.innerHTML = `<i class="fa-solid fa-city"></i>Capital city: ${data.capital}`;
      regionEl.innerHTML = `<i class="fa-solid fa-earth-americas"></i>Region: ${data.region}`;
      buttonEl.textContent = 'Show more';
      buttonEl.classList.add('btncountry');
      div.appendChild(populationEl);
      div.appendChild(cityEl);
      div.appendChild(regionEl);
      div.appendChild(buttonEl);
      main.appendChild(div);

      buttonEl.addEventListener('click', function () {
        main.style.display = 'none';
        //render more info block
        alert('render more info block');
      });

      inputCountryName.value = '';
    };
    renderCountry();
  } catch (error) {
    console.error(error);
  }
};
btnAdd.addEventListener('click', getCountry);
