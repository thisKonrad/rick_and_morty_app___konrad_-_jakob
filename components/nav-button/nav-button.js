/* :::: button :::: */

/* export function createButton(){

    let main = document.querySelector('main');

    const navBar = document.createElement('nav');
    navBar.classList.add('navigation');  
    navBar.setAttribute('data-js','navigation');

    const prevButton = document.createElement('button');
    prevButton.classList.add('button')
    prevButton.classList.add('button--prev');
    prevButton.setAttribute('data-js','button-prev');
    prevButton.innerText ="previous";
    
    const nextButton = document.createElement('button');
    nextButton.classList.add('button')
    nextButton.classList.add('button--next')
    nextButton.setAttribute('data-js','button-next');
    nextButton.innerText ="next";

    navBar.insertAdjacentElement('afterbegin', prevButton);
    navBar.insertAdjacentElement('beforeend', nextButton);

    main.prepend(navBar);

}; */