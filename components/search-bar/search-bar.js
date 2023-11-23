/* :::: search bar :::: */

function createSearchBar(){

    const main = document.querySelector('main');

    const searchBar = document.createElement('div');
    searchBar.classList.add('search-bar-container')
    searchBar.dataset.add('search-bar-container');

    searchBar.innerHTML = `
        <form action="" class="search-bar" data-js="search-bar">
          <input
            name="query"
            class="search-bar__input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button>
        </form>`;
        main.insertAdjacentElement('afterbegin', searchBar);
};

/* 
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
 */