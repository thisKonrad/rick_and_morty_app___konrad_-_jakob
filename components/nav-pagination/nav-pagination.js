function createPagination(){

    const main = document.querySelector('main');
    const navBar = document.createElement('nav');
    const pagination = document.createElement('span');
    pagination.classList.add('navigation__pagination');
    pagination.dataset.add('data-js="pagination');

    navBar.innerHTML = 
    `<nav class="navigation" data-js="navigation">
    <span class="navigation__pagination" data-js="pagination">1 / 1</span>
    </nav>`;

    prevButton.insertAdjacentElement('afterbegin',pagination);

};