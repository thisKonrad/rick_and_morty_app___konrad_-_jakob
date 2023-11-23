/* :::: button :::: */
export function createButton(onclick){
   
    const prevButton = document.createElement('button');
    prevButton.classList.add('button button--prev');
    prevButton.setAttribute('data-js','button-prev');
    
    const nextButton = document.createElement('button');
    nextButton.classList.add('class="button button--next');
    nextButton.setAttribute('data-js', 'button-next');

    navBar.insertAdjacentElement('afterbegin', prevButton);
    navBar.insertAdjacentElement('beforeend', nextButton);
};