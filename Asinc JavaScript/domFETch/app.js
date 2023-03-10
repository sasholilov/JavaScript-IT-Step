const main = () => {};
const call = async (url) => {
  try {
    const data = await fetch(url);

    if (data.ok === false) {
      throw new Error(data.status);
    }

    console.log(data);
    const respons = await data.json();
    // console.log(respons);
    return respons;
  } catch (error) {
    console.log(error);
    alert("Something go wrong");
  }
};

const url = `https://swapi.dev/api/films/`;
const home = async () => {
  const homeDiv = document.getElementById("home");
  const ul = document.createElement("ul");
  ul.style = "width: 50%;";

  homeDiv.appendChild(ul);

  const respons = await call(url);
  //console.log(respons);

  const array = respons.results;

  array.forEach((element, i) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    li.textContent = element.title;

    li.style = "border-bottom: 1rem solid blue;";

    ul.appendChild(li);
    p.textContent = element.opening_crawl;
    ul.appendChild(p);
    // console.log(element);
  });
};

home();
