import { createCharacterCard } from "./components/card/card.js";
// import {
//   searchBarUpdate,
//   searchBarButton,
// } from "./components/search-bar/createSearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

let page = 1;
let maxPage;

let charactersFetched;
// -------------------------

async function fetchCharacters(index) {
  console.log("hi");

  try {
    let fetchUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    charactersFetched = data;
    maxPage = charactersFetched.info.pages;
    const resultArray = charactersFetched.results;

    cardContainer.innerHTML = "";

    resultArray.forEach((elem, i) => {
      // console.log("inside twentyCard", elem, i);
      cardContainer.append(createCharacterCard(i, charactersFetched));
    });
  } catch (error) {
    console.log(error);
  }
  return;
}
pagination.innerText = `${page}/${42}`;
fetchCharacters(page);

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
// States
// const maxPage = charactersFetched.info.pages; //42

let searchQuery = "";

let searchBarInput = document.querySelector(".search-bar__input");
const searchBarButton = document.querySelector(".search-bar__button");

//let searchQuery = "";

searchBarButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submit");
  searchBarUpdate();
});

function searchBarUpdate() {
  searchQuery = searchBarInput.value;
  console.log("Input SearchQuery: ", searchQuery);

  fetchNames(searchQuery);

  async function fetchNames(names) {
    try {
      let fetchUrl = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;
      const response = await fetch(fetchUrl);
      const data = await response.json();
      const searchFetched = data;
      const searchResults = searchFetched.results;
      console.log(data);
      //let searchFetched = data;
      cardContainer.innerHTML = "";

      searchResults.forEach((elem, i) => {
        // console.log("inside twentyCard", elem, i);
        cardContainer.append(createCharacterCard(i, searchFetched));
      });
    } catch (error) {
      console.log(error);
    }
    return;
  }
}

// const resultArray = charactersFetched.results;
// console.log("resultArray: ", resultArray);

// function twentyCards() {
// cardContainer.innerHTML = "";

// // await fetchCharacters(page)
// resultArray.forEach((elem, i) => {
//   console.log("inside twentyCard", elem, i);
//   cardContainer.append(createCharacterCard(i, charactersFetched));
//   });
// }

// twentyCards();
// Use your knowledge about fetching to get the first 20 characters from the API. You can find the correct API endpoint in the docs.
// Import the createCharacterCard function.
// After successfully fetching the character data, use array methods to create an HTML card for each character and append it to the cardContainer.
// Make sure that the cardContainer is emptied every time new characters are fetched (HINT: you can use innerHTML = '' for that).
// Call the function inside the index.js. Now you should see 20 cards in your app.
