/* :::: search bar :::: */

const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = ('.search-bar__input');
const searchBarButton = ('.search-bar__button');

let searchQuery = "";

searchBarButton.addEventListener('submit', searchBarUpdate);

function searchBarUpdate(){
   
    searchQuery = searchBarInput;
    console.log("Input SearchQuery: ", searchQuery,);

    let fetchUrl = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;

    fetchNames(names)

    async function fetchNames(names) {
    try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        charactersFetched = data;
    } catch (error) {
        console.log(error);
    }
        return;
    }
};


export { searchBarUpdate, searchBarButton};