import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

//fetch API
let charactersFetched;
async function fetchCharacters() {
  try {
    const fetchUrl = `https://rickandmortyapi.com/api/character`;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    charactersFetched = data;
  } catch (error) {
    console.log(error);
  }
  return;
}
await fetchCharacters();
console.log("exdata", charactersFetched, "card2", charactersFetched.results[2]);
// Use your knowledge about fetching to get the first 20 characters from the API. You can find the correct API endpoint in the docs.
// Import the createCharacterCard function.
// After successfully fetching the character data, use array methods to create an HTML card for each character and append it to the cardContainer.
// Make sure that the cardContainer is emptied every time new characters are fetched (HINT: you can use innerHTML = '' for that).
// Call the function inside the index.js. Now you should see 20 cards in your app.
