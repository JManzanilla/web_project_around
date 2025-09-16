// === index.js ===
import { Card } from "./Card.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./constants.js";
import { Api } from "./Api.js";
import { PopupWithConfirmation } from "./PopupWithConfrimation.js ";
const deleteCardPopup = new PopupWithConfirmation("#popup__delete-card");
deleteCardPopup.setEventListeners();
const loader = document.querySelector(".container");
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__title-content",
  avatarSelector: ".profile__image",
});

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "911005ad-24e0-40bd-a91b-f65ac83a977d",
    "Content-Type": "application/json",
  },
});
let currentUserId;
api
  .getUserInfo()
  .then((result) => {
    currentUserId = result._id;
    userInfo.setUserInfo({
      name: result.name,
      about: result.about,
      avatar: result.avatar,
    });

    api.getInitialCards().then((result) => {
      //
      loader.classList.add("container--hidden");
      cardSection.setItems(
        result.map((card) => ({
          name: card.name,
          link: card.link,
          isLiked: card.isLiked,
          _id: card._id,
        }))
      );
      //console.log(result);
    });
  })
  .catch((err) => {
    console.log(err);
  });
const cardSection = new Section(
  {
    //items: initialCards,
    items: [],
    renderer: (item) => {
      const card = new Card(
        {
          name: item.name,
          link: item.link,
          _id: item._id,
          isLiked: item.isLiked,
        },
        "#card",
        (link, name) => imagePopup.open(link, name),
        (id, cardElement) => {
          deleteCardPopup.setSubmitAction(() => {
            api
              .deleteCard(id)
              .then(() => cardElement.remove())
              .catch((err) =>
                console.log("Error al eliminar la tarjeta:", err)
              );
          });
          deleteCardPopup.open();
        },
        (id, cardInstance) => {
          const isLiked = cardInstance.isLiked();
          const request = isLiked ? api.removeLike(id) : api.addLike(id);

          request
            .then((updatedCard) => {
              cardInstance.updateLikes(updatedCard.isLiked);
            })
            .catch((err) => console.log("Error al actualizar like:", err));
        }
      );
      return card.generateCard(currentUserId);
    },
  },
  ".element"
);

const imagePopup = new PopupWithImage("#popup__image-card");
imagePopup.setEventListeners();

const profilePopup = new PopupWithForm("#popup__profile", (data) => {
  const currentAvatar = userInfo.getUserInfo().avatar;
  userInfo.setUserInfo({
    name: data.name,
    about: data.about,
    avatar: currentAvatar,
  });
  profilePopup.close();
});
profilePopup.setEventListeners();
const avatarPopup = new PopupWithForm("#popup__profile-image", (data) => {
  api
    .updateAvatar({ avatar: data["profile-image"] })
    .then((result) => {
      userInfo.setUserInfo({
        name: result.name,
        about: result.about,
        avatar: result.avatar,
      });
      avatarPopup.close();
    })
    .catch((err) => console.log("Error al actualizar avatar:", err));
});
avatarPopup.setEventListeners();
const addCardPopup = new PopupWithForm("#popup__image", (data) => {
  api
    .createCards({ name: data.title, link: data.image })
    .then((result) => {
      const newCard = new Card(
        {
          name: result.name,
          link: result.link,
          _id: result._id,
          isLiked: result.isLiked,
        },
        "#card",
        (link, name) => imagePopup.open(link, name),
        (id, cardElement) => {
          api
            .deleteCard(id)
            .then(() => cardElement.remove())
            .catch((err) => console.log("Error al eliminar la tarjeta:", err));
        },
        (id, cardInstance) => {
          const isLiked = cardInstance.isLiked();
          const request = isLiked ? api.removeLike(id) : api.addLike(id);

          request
            .then((updatedCard) => {
              cardInstance.updateLikes(updatedCard.isLiked);
            })
            .catch((err) => console.log("Error al actualizar like:", err));
        }
      );

      cardSection.addItem(newCard.generateCard(currentUserId));
      addCardPopup.close();
    })
    .catch((err) => console.log("Error al crear la tarjeta:", err));
});

addCardPopup.setEventListeners();
document.querySelector(".profile__cruz").addEventListener("click", () => {
  addCardPopup.open();
});

document.querySelector(".profile__lapiz").addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  document.querySelector("#popup__form-name").value = userData.name;
  document.querySelector("#popup__form-about").value = userData.about;
  profilePopup.open();
});
document
  .querySelector("#profile__image-button-action")
  .addEventListener("click", () => {
    avatarPopup.open();
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
