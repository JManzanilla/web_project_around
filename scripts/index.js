const openProfilePopupBtn = document.querySelector(".profile__lapiz");
const profileFormPopup = document.querySelector(".popup");
const closeProfilePopupBtn = document.querySelector(
  ".popup__container-btn-close"
);
const saveProfilePopupBtn = document.querySelector(".popup__form-btn-submit");
const inputProfileName = document.querySelector("#popup__form-name");
const inputProfileAbout = document.querySelector("#popup__form-about");
const nameProfileHeader = document.querySelector(".profile__title");
const aboutProfileHeader = document.querySelector(".profile__title-content");
const formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfileHeader.textContent = inputProfileName.value;
  aboutProfileHeader.textContent = inputProfileAbout.value;
  profileFormPopup.classList.remove("popup__show");
}

openProfilePopupBtn.addEventListener("click", () => {
  inputProfileName.value = nameProfileHeader.textContent;
  inputProfileAbout.value = aboutProfileHeader.textContent;
  profileFormPopup.classList.add("popup__show");
  saveProfilePopupBtn.classList.add("popup__form-btn-submit-disable");
});

closeProfilePopupBtn.addEventListener("click", () => {
  profileFormPopup.classList.remove("popup__show");
});

formElement.addEventListener("submit", handleProfileFormSubmit);

const openPopupImageBtn = document.querySelector(".profile__cruz");
const imageFormPopup = document.querySelector("#popup__image");
const closeImagePopupBtn = imageFormPopup.querySelector(
  ".popup__container-btn-close"
);
const createImagePopupBtn = imageFormPopup.querySelector(
  ".popup__form-btn-submit"
);
const inputTitleImage = document.querySelector("#popup__form-title");
const inputImage = document.querySelector("#popup__form-image");
const formElementImage = document.querySelector("#popup__form__image");

function handleImageFormSubmit(evt) {
  evt.preventDefault();
  const title = inputTitleImage.value;
  const imageUrl = inputImage.value;
  cloneElement(title, imageUrl);
  formElementImage.reset();
  imageFormPopup.classList.remove("popup__show");
}

openPopupImageBtn.addEventListener("click", () => {
  imageFormPopup.classList.add("popup__show");
  createImagePopupBtn.classList.add("popup__form-btn-submit-disable");
});

closeImagePopupBtn.addEventListener("click", () => {
  imageFormPopup.classList.remove("popup__show");
});

formElementImage.addEventListener("submit", handleImageFormSubmit);

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

const card = document.querySelector("#card");
const galleryImage = document.querySelector(".element");

function cloneElement(name, link) {
  const clone = card.content.cloneNode(true);
  const cloneElementCardTitle = clone.querySelector(
    ".element__content-description-title"
  );
  cloneElementCardTitle.textContent = name;

  const cloneElementCardImage = clone.querySelector(".element__image");
  cloneElementCardImage.src = link;
  cloneElementCardImage.alt = name;
  cloneElementCardImage.dataset.image = link;
  cloneElementCardImage.dataset.title = name;

  const elementLikeImage = clone.querySelector(".element__content-like");
  const elementTrashImage = clone.querySelector(".element__content-trash");

  elementLikeImage.addEventListener("click", () => {
    elementLikeImage.classList.toggle("element__content-like-active");
  });

  elementTrashImage.addEventListener("click", (e) => {
    const cardElement = e.target.closest(".element__content");
    cardElement.remove();
  });

  cloneElementCardImage.addEventListener("click", () => {
    openImagePopup(
      cloneElementCardImage.dataset.image,
      cloneElementCardImage.dataset.title
    );
  });

  galleryImage.appendChild(clone);
}

initialCards.forEach((item) => {
  cloneElement(item.name, item.link);
});

function toggleSubmitButton(form, button) {
  const inputs = form.querySelectorAll("input");
  const isValid = Array.from(inputs).every(
    (input) => input.value.trim() !== ""
  );
  button.classList.toggle("popup__form-btn-submit-disable", !isValid);
}

inputTitleImage.addEventListener("input", () =>
  toggleSubmitButton(formElementImage, createImagePopupBtn)
);
inputImage.addEventListener("input", () =>
  toggleSubmitButton(formElementImage, createImagePopupBtn)
);

const imagePopupCard = document.querySelector("#popup__image-card");
const popupImageElement = imagePopupCard.querySelector(
  ".popup__container-image"
);
const popupImageTitle = imagePopupCard.querySelector(".popup__container-title");

function openImagePopup(imageUrl, title) {
  popupImageElement.src = imageUrl;
  popupImageTitle.textContent = title;
  imagePopupCard.classList.add("popup__show");
}

const closeImagePopupCardBtn = imagePopupCard.querySelector(
  ".popup__container-btn-close"
);
closeImagePopupCardBtn.addEventListener("click", () => {
  imagePopupCard.classList.remove("popup__show");
});
