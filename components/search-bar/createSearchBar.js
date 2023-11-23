/* :::: search bar :::: */

const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = document.querySelector(".search-bar__input");
const searchBarButton = document.querySelector(".search-bar__button");

//let searchQuery = "";

searchBarButton.addEventListener("submit", (e) => {
  e.preventDefault();
  searchBarUpdate();
});

function searchBarUpdate() {
  searchQuery = searchBarInput.value;
  console.log("Input SearchQuery: ", searchQuery);

  fetchNames(searchQuery);

  async function fetchNames(names) {
    try {
      let fetchUrl = `https://rickandmortyapi.com/api/character/&name=${searchQuery}`;
      const response = await fetch(fetchUrl);
      const data = await response.json();
      console.log(data);
      //let searchFetched = data;
    } catch (error) {
      console.log(error);
    }
    return;
  }
}

export { searchBarUpdate, searchBarButton };
