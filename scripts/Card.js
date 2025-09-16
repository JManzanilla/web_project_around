// === Card.js ===
export class Card {
  constructor(
    { name, link, _id, isLiked },
    templateSelector,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._isLiked = isLiked;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }
  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".element__content")
      .cloneNode(true);
  }
  _setEventListeners(cardElement) {
    const likeButton = cardElement.querySelector(".element__content-like");
    const trashButton = cardElement.querySelector(".element__content-trash");
    const imageElement = cardElement.querySelector(".element__image");

    this._likeButton = likeButton;

    likeButton.addEventListener("click", () => {
      this._handleLikeClick(this._id, this);
    });

    trashButton.addEventListener("click", () => {
      this._handleDeleteClick(this._id, cardElement);
    });

    imageElement.addEventListener("click", () => {
      this._handleImageClick(this._link, this._name);
    });
  }
  updateLikes(isLiked) {
    this._isLiked = isLiked;
    if (isLiked) {
      this._likeButton.classList.add("element__content-like-active");
    } else {
      this._likeButton.classList.remove("element__content-like-active");
    }
  }
  isLiked() {
    return this._isLiked;
  }
  generateCard() {
    const cardElement = this._getTemplate();
    const titleElement = cardElement.querySelector(
      ".element__content-description-title"
    );
    const imageElement = cardElement.querySelector(".element__image");
    const likeButton = cardElement.querySelector(".element__content-like");
    this._likeButton = likeButton;
    titleElement.textContent = this._name;
    imageElement.src = this._link;
    imageElement.alt = this._name;
    if (this._isLiked) {
      this._likeButton.classList.add("element__content-like-active");
    }
    this._setEventListeners(cardElement);
    return cardElement;
  }
}
