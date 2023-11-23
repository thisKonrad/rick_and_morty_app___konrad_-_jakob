import { createCharacterCard } from "./components/card/card.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";


/* :::: global variables ::::: */

//let main = document.querySelector('main');

/* const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
); */

//const searchBar = document.querySelector('[data-js="search-bar"]');
//const navigation = document.querySelector('[data-js="navigation"]');

const cardContainer = document.querySelector(
  '[data-js="card-container"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('.navigation__pagination');

let page = 1;
let maxPage;
let charactersFetched;

createSearchBar();
//createPagination()
 
/* ::: Character Function::: */

async function fetchCharacters(index) {

  try {
    let fetchUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    charactersFetched = data;
    maxPage = charactersFetched.info.pages;
    const resultArray = charactersFetched.results;
    pagination.innerText = `${page}/${maxPage}`;
    cardContainer.innerHTML = "";

    resultArray.forEach((elem, i) => {
      cardContainer.append(createCharacterCard(i, charactersFetched));
    });
  } catch (error) {
    console.log(error);
  }
  return;
}

fetchCharacters(page);

/*::::::: Event_Listeners ::::::*/

nextButton.addEventListener("click", () => {
  if (page === maxPage) {
    page = 1;
    fetchCharacters(page);
    pagination.innerText = `${page}/${maxPage}`;
  } else {
    page++;
    fetchCharacters(page);
    pagination.innerText = `${page}/${maxPage}`;
  }
});


prevButton.addEventListener("click", () => {
  if (page === 1) {
    page = maxPage;
    fetchCharacters(page);
    pagination.innerText = `${page}/${maxPage}`;
  } else {
    page--;
    fetchCharacters(page);
    pagination.innerText = `${page}/${maxPage}`;
  }
});


/* ::: Search Bar::: */

let searchQuery = "";

let searchBarInput = document.querySelector(".search-bar__input");
const searchBarButton = document.querySelector(".search-bar__button");

searchBarButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submit");
  searchBarUpdate();
});

function searchBarUpdate() {
  searchQuery = searchBarInput.value;
  console.log("Input SearchQuery: ", searchQuery);

  fetchNames(searchQuery);


/* :::Names Function::: */
async function fetchNames(names) {
    try {
      let fetchUrl = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;
      const response = await fetch(fetchUrl);
      const data = await response.json();
      const searchFetched = data;
      const searchResults = searchFetched.results;
      console.log(data);
      cardContainer.innerHTML = "";

      searchResults.forEach((elem, i) => {
        cardContainer.append(createCharacterCard(i, searchFetched));
      });
    } catch (error) {
      console.log(error);
    }
    return;
  }
};
