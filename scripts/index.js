const openProfilePupopBtn = document.querySelector(".profile__lapiz");
const profileFormPupop = document.querySelector(".pupop");
const closeProfilePupopBtn = document.querySelector(
  ".pupop__container-btn-close"
);
const saveProfilePupopBtn = document.querySelector(".pupop__form-btn-submit");
const inputProfileName = document.querySelector("#popup__form-name");
const inputProfileAbout = document.querySelector("#popup__form-about");
const nameProfileHeader = document.querySelector(".profile__title");
const aboutProfileHeader = document.querySelector(".profile__title-content");
const formElement = document.querySelector(".pupop__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfileHeader.textContent = inputProfileName.value;
  aboutProfileHeader.textContent = inputProfileAbout.value;
  profileFormPupop.classList.remove("pupop__show");
}

openProfilePupopBtn.addEventListener("click", () => {
  inputProfileName.value = nameProfileHeader.textContent;
  inputProfileAbout.value = aboutProfileHeader.textContent;
  profileFormPupop.classList.add("pupop__show");
  saveProfilePupopBtn.classList.add("pupop__form-btn-submit-disable");
});

closeProfilePupopBtn.addEventListener("click", () => {
  profileFormPupop.classList.remove("pupop__show");
});

formElement.addEventListener("submit", handleProfileFormSubmit);
