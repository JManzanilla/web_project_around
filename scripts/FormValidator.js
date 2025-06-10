export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    );
    this._buttonElement = formElement.querySelector(
      settings.submitButtonSelector
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._settings.errorClass);
  }

  _checkInputValidity(inputElement) {
    const trimmedValue = inputElement.value.trim();
    const minLength = 4;
    const maxLength = 30;
    const isUrl = inputElement.type === "url";

    if (["name", "about", "title"].includes(inputElement.name)) {
      if (trimmedValue.length < minLength || trimmedValue.length > maxLength) {
        this._showInputError(
          inputElement,
          `Debe tener entre ${minLength} y ${maxLength} caracteres`
        );
        return false;
      }
    }

    if (!inputElement.validity.valid) {
      if (isUrl) {
        this._showInputError(inputElement, "Introduce una URL válida");
      } else {
        this._showInputError(inputElement, inputElement.validationMessage);
      }
      return false;
    }

    this._hideInputError(inputElement);
    return true;
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => !this._checkInputValidity(input));
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => evt.preventDefault());
    this._setEventListeners();
    this._toggleButtonState();
  }

  // NUEVO MÉTODO PARA RESETEAR LOS ERRORES Y BOTÓN
  resetValidation() {
    this._toggleButtonState(); // bloquea o desbloquea el botón según el estado actual
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement); // limpia errores anteriores
    });
  }
}
