import { createCharacterCard } from "./components/card/card.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
//import { fetchCharacters } from "./components/events/character-fetch.js";


/* ::: create DOM Elements ::: */
createSearchBar();
createPagination();


/* :::: global variables ::::: */
const cardContainer = document.querySelector('[data-js="card-container"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('.navigation__pagination');

let page = 1;
let maxPage;
let charactersFetched;


createSearchBar();
createPagination()

 

/* ::: Character Function::: */
async function fetchCharacters(index) {

  try {
    let fetchUrl = `https://rickandmortyapi.com/api/character/?page=${index}`;
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

/*::::::: Navbar Button Event_Listeners ::::::*/
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


/* ::: Search Bar Function ::: */
let searchQuery = "";

let searchBarInput = document.querySelector(".search-bar__input");
const searchBarButton = document.querySelector(".search-bar__button");

searchBarButton.addEventListener("click", (e) => {

  e.preventDefault();
  searchBarUpdate();

});


/* :::Names Function::: */
function searchBarUpdate() {

  searchQuery = searchBarInput.value;

  fetchNames(searchQuery);

  async function fetchNames(names) {

    try {
      let fetchUrl = `https://rickandmortyapi.com/api/character/?name=${names}`;
      const response = await fetch(fetchUrl);
      const data = await response.json();
      const searchFetched = data;
      const searchResults = searchFetched.results;

      console.log("Search Results:",searchResults);

      cardContainer.innerHTML = "";

      if(searchResults.length >= 1){
        page = 1;
        maxPage = searchResults.length;
        pagination.innerText = `${page}/${maxPage}`;
      }

      searchResults.forEach((elem, i) => {
        cardContainer.append(createCharacterCard(i, searchFetched));
      });
     
    } catch (error) {
      console.log(error);
    }
    return;
  }
};