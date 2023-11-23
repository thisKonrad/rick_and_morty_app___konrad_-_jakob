/* :::: button :::: */
export function createButton(){
   
    let navBar = document.querySelector('nav');
    const prevButton = document.createElement('button');
    prevButton.classList.add('button')
    prevButton.classList.add('button--prev');
    prevButton.setAttribute('data-js','button-prev');
    
    const nextButton = document.createElement('button');
    nextButton.classList.add('button')
    nextButton.classList.add('button--next')
    nextButton.setAttribute('data-js', 'button-next');

    navBar.insertAdjacentElement('afterbegin', prevButton);
    navBar.insertAdjacentElement('beforeend', nextButton);

};