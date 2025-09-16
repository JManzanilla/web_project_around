// === PopupWithConfirmation.js ===
import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector(
      ".popup__form-btn-submit-delete"
    );
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", () => {
      if (this._handleSubmit) {
        this._handleSubmit();
      }
      this.close();
    });
  }
}
