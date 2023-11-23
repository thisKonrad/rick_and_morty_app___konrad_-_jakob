
export function createPagination(){

    let main = document.querySelector('main');

    const navBar = document.createElement('nav');
    navBar.classList.add('navigation');
    navBar.setAttribute('data-js','navigation');

    navBar.innerHTML = `
      <button class="button button--prev" data-js="button-prev">
        previous
      </button>
      <span class="navigation__pagination" data-js="pagination">1 / 1</span>
      <button class="button button--next" data-js="button-next">next</button>`;
    
    main.insertAdjacentElement('afterend',navBar);
    
};