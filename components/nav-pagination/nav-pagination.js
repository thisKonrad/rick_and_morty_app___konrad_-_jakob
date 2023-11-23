export function createPagination(){

    let main = document.querySelector('main');
    const navBar = document.createElement('nav');
    navBar.classList.add('class="navigation');
    navBar.setAttribute('data-js','navigation')

    const pagination = document.createElement('span');
    pagination.classList.add('navigation__pagination');
    pagination.setAttribute('data-js','pagination');
    //pagination.innerText =``;

    main.prepend('afterend',navBar);
    navBar.append(pagination);

};