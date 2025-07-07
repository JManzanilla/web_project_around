// === index.js ===
import { Card } from "./Card.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./constants.js";

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

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__title-content",
});

const imagePopup = new PopupWithImage("#popup__image-card");
imagePopup.setEventListeners();

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, "#card", (link, name) => {
        imagePopup.open(link, name);
      });
      return card.generateCard();
    },
  },
  ".element"
);

cardSection.renderItems();

const profilePopup = new PopupWithForm("#popup__profile", (data) => {
  userInfo.setUserInfo({
    name: data.name,
    about: data.about,
  });
  profilePopup.close();
});
profilePopup.setEventListeners();

const addCardPopup = new PopupWithForm("#popup__image", (data) => {
  const newCard = new Card(
    data.title,
    data.image,
    "#card",
    (link, name) => {
      imagePopup.open(link, name);
    }
  );
  cardSection.addItem(newCard.generateCard());
  addCardPopup.close();
});
addCardPopup.setEventListeners();

document.querySelector(".profile__lapiz").addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  document.querySelector("#popup__form-name").value = userData.name;
  document.querySelector("#popup__form-about").value = userData.about;
  profilePopup.open();
});

document.querySelector(".profile__cruz").addEventListener("click", () => {
  addCardPopup.open();
});

// Validación de formularios
const formValidators = {};
document
  .querySelectorAll(validationConfig.formSelector)
  .forEach((formElement) => {
    const formName = formElement.getAttribute("name");
    const validator = new FormValidator(validationConfig, formElement);
    formValidators[formName] = validator;
    validator.enableValidation();
  });
