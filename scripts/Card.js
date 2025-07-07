// === Card.js ===
export class Card {
  constructor(name, link, templateSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element__content")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners(cardElement) {
    const likeButton = cardElement.querySelector(".element__content-like");
    const trashButton = cardElement.querySelector(".element__content-trash");
    const imageElement = cardElement.querySelector(".element__image");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("element__content-like-active");
    });

    trashButton.addEventListener("click", () => {
      cardElement.remove();
    });

    imageElement.addEventListener("click", () => {
      this._handleImageClick(this._link, this._name);
    });
  }

  generateCard() {
    const cardElement = this._getTemplate();
    const titleElement = cardElement.querySelector(
      ".element__content-description-title"
    );
    const imageElement = cardElement.querySelector(".element__image");

    titleElement.textContent = this._name;
    imageElement.src = this._link;
    imageElement.alt = this._name;

    this._setEventListeners(cardElement);

    return cardElement;
  }
}

// La clase Card está correcta y no requiere cambios para funcionar con el HTML y el flujo actual.
