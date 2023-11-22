
export function createCharacterCard(count) {

    const cardSourceUrl = `${data[count]url}`;
    const characterName = `${charName}`;
    const statusInfo = `${state}`;
    const typeInfo = `${type}`;
    const occurnessInfo = `${occurness}`

    cardContainer.innerHTML = `<li class="card">
      <div class="card__image-container">
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
      </div>
    </li>`;
}

