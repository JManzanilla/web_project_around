import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__container-image");
    this._caption = this._popup.querySelector(".popup__container-title");
  }

  open(link, name) {
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    // Ya está implementado en Popup: cierra con fondo y con .popup__container-btn-close
  }
}
