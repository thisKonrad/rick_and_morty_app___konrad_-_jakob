export function createCharacterCard() {
//the status, type and occurrences values
    const cardSourceUrl = null;
    const characterName = null;
    const statusInfo = `${state}`;

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
        <h2 class="card__title">Rick Sanchez</h2>
        <dl class="card__info">
          <dt class="card__info-title">Status</dt>
          <dd class="card__info-description">${statusInfo}</dd>
          <dt class="card__info-title">Type</dt>
          <dd class="card__info-description"></dd>
          <dt class="card__info-title">Occurrences</dt>
          <dd class="card__info-description">51</dd>
        </dl>
      </div>
    </li>
  </ul>`;
}

