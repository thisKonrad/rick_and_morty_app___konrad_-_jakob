/* :::: button :::: */
function createButton(){
   
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');

    prevButton.innerHtml =
    `<button class="button button--prev" data-js="button-prev">previous</button>`;
    nextButton.innerHtml = 
    `<button class="button button--next" data-js="button-next">next</button>`;


}