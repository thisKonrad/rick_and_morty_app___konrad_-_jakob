
export function createPagination(){

    let main = document.querySelector('main');
    let navWrap = document.querySelector('.nav_wrap');
  /*   const navBar = document.createElement('nav');
    navBar.classList.add('navigation');
    navBar.setAttribute('data-js','navigation') */
    /* 
    const navBar = document.createElement('nav');
    navBar.classList.add('navigation');
    navBar.setAttribute('data-js','navigation')

    const prevButton = document.createElement('button');
    prevButton.classList.add('button')
    prevButton.classList.add('button--prev');
    prevButton.setAttribute('data-js','button-prev');
    
    const nextButton = document.createElement('button');
    nextButton.classList.add('button')
    nextButton.classList.add('button--next')
    nextButton.setAttribute('data-js', 'button-next');

    const pagination = document.createElement('span');
    pagination.classList.add('navigation__pagination');
    pagination.setAttribute('data-js','pagination');
    pagination.innerText =`1/42`;

    navBar.insertAdjacentElement('afterbegin', prevButton);
    prevButton.append(pagination)
    navBar.insertAdjacentElement('beforeend', nextButton);
 */
    
    navWrap.innerHTML = `
    <nav class="navigation" data-js="navigation">
      <button class="button button--prev" data-js="button-prev">
        previous
      </button>
      <span class="navigation__pagination" data-js="pagination">1 / 1</span>
      <button class="button button--next" data-js="button-next">next</button>
    </nav>`;
    
    main.insertAdjacentElement('afterend',navWrap);
    
};