import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openPopup, closePopup, setClosePopupListeners } from "./utils.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__form-btn-submit",
  inactiveButtonClass: "popup__form-btn-submit-disable",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// ELEMENTOS
const profilePopup = document.querySelector(".popup");
const profileForm = document.querySelector(".popup__form[name='profile-form']");
const nameInput = document.querySelector("#popup__form-name");
const aboutInput = document.querySelector("#popup__form-about");
const nameDisplay = document.querySelector(".profile__title");
const aboutDisplay = document.querySelector(".profile__title-content");

const imagePopup = document.querySelector("#popup__image");
const imageForm = document.querySelector(".popup__form[name='image-form']");
const titleInput = document.querySelector("#popup__form-title");
const urlInput = document.querySelector("#popup__form-image");

const gallery = document.querySelector(".element");
const templateSelector = "#card";

// Imagen expandida
const imagePopupCard = document.querySelector("#popup__image-card");
const popupImage = imagePopupCard.querySelector(".popup__container-image");
const popupTitle = imagePopupCard.querySelector(".popup__container-title");

// VALIDADORES
const formValidators = {};
document
  .querySelectorAll(validationConfig.formSelector)
  .forEach((formElement) => {
    const formName = formElement.getAttribute("name");
    const validator = new FormValidator(validationConfig, formElement);
    formValidators[formName] = validator;
    validator.enableValidation();
  });

// BOTONES Y EVENTOS

document.querySelector(".profile__lapiz").addEventListener("click", () => {
  nameInput.value = nameDisplay.textContent;
  aboutInput.value = aboutDisplay.textContent;
  formValidators["profile-form"].resetValidation(); // Limpiar errores y actualizar botón
  openPopup(profilePopup);
});

document
  .querySelector(".popup__container-btn-close")
  .addEventListener("click", () => closePopup(profilePopup));

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  nameDisplay.textContent = nameInput.value;
  aboutDisplay.textContent = aboutInput.value;
  closePopup(profilePopup);
});

document.querySelector(".profile__cruz").addEventListener("click", () => {
  formValidators["image-form"].resetValidation(); // Limpiar errores y actualizar botón
  openPopup(imagePopup);
});

imageForm
  .closest(".popup")
  .querySelector(".popup__container-btn-close")
  .addEventListener("click", () => closePopup(imagePopup));

imageForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = new Card(
    titleInput.value,
    urlInput.value,
    templateSelector,
    handleImageClick
  );
  gallery.prepend(newCard.generateCard());
  imageForm.reset();
  closePopup(imagePopup);
});

document
  .querySelector("#popup__image-card .popup__container-btn-close")
  .addEventListener("click", () => closePopup(imagePopupCard));

// Mostrar imagen expandida
function handleImageClick(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupTitle.textContent = name;
  openPopup(imagePopupCard);
}

// Cerrar popups con fondo y Escape
setClosePopupListeners();

// Tarjetas iniciales
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach(({ name, link }) => {
  const card = new Card(name, link, templateSelector, handleImageClick);
  gallery.prepend(card.generateCard());
});
