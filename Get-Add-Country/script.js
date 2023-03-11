'use strict';

let inputCountryName = document.querySelector('input[type=text]');
const countryEl = document.querySelector('.country');
const btnAdd = document.getElementById('addcountry');
const main = document.getElementById('main');
const moreInfoEl = document.querySelector('.moreinfo');
const btnCloseInfo = document.querySelector('.close-moreinfo');
const inputEl = document.querySelector('.input-name');
const countryArr = [];
let data = null;
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
    const dataArr = await response.json();
    data = dataArr[0];
    countryArr.push(dataArr[0]);
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

      buttonEl.addEventListener('click', function (event) {
        moreInfo();
        let findCountry =
          event.target.previousSibling.previousSibling.previousSibling
            .previousSibling.textContent;
        console.log(findCountry);
        const filteredCountryArr = countryArr.filter(
          e => e.name.common == findCountry
        );
        console.log(filteredCountryArr);

        moreInfoEl.childNodes[3].textContent =
          filteredCountryArr[0].name.common;
        moreInfoEl.childNodes[5].textContent = `Borders: ${filteredCountryArr[0].borders}`;
      });

      inputCountryName.value = '';
    };
    renderCountry();
  } catch (error) {
    alert(error);
  }
};
btnAdd.addEventListener('click', getCountry);
