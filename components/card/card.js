export function createCharacterCard(count, charactersFetched) {
 
  const cardSourceUrl = `${charactersFetched.results[count].image}`;
  const characterName = `${charactersFetched.results[count].name}`;
  const statusInfo = `${charactersFetched.results[count].status}`;
  const typeInfo = `${charactersFetched.results[count].type}`;
  const occurnessInfo = `${charactersFetched.results[count].episode.length}`;
 
  const cardContainer = document.querySelector('[data-js="card-container"]');
  let newCard = document.createElement("li");

  if(statusInfo === 'Dead'){
    newCard.classList.add("card");
    newCard.classList.add('dead');
  }else {
    newCard.classList.add("card");
  }

  newCard.innerHTML = `<div class="card__image-container">
        <img
          class="card__image"
          src="${cardSourceUrl}"
          alt="${characterName}"
        />
        <div class="card__image-gradient"></div>
      </div>
      <div class="card__content">
        <h2 class="card__title">${characterName}</h2>
        <dl class="card__info">
          <dt class="card__info-title">Status</dt>
          <dd class="card__info-description">${statusInfo}</dd>
          <dt class="card__info-title">Type</dt>
          <dd class="card__info-description">${typeInfo}</dd>
          <dt class="card__info-title">Occurrences</dt>
          <dd class="card__info-description">${occurnessInfo}</dd>
        </dl>
      </div>`;

  return newCard;
}
