/* :::: search bar :::: */

const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = ('.search-bar__input');
const searchBarButton = ('.search-bar__button');

let searchQuery = "";

function searchBarUpdate(){
    console.log("Input Search Bar: ", searchBarInput,);
    searchQuery = searchBarInput;
    
};


let fetchUrl = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;
async function fetchCharacters(index) {
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    charactersFetched = data;
  } catch (error) {
    console.log(error);
  }
  return;
}


searchBarButton.addEventListener('submit', searchBarUpdate);