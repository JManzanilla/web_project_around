let openProfilePupopBtn = document.querySelector(".profile__lapiz");
let profileFormPupop = document.querySelector(".pupop");
let closeProfilePupopBtn = document.querySelector(
  ".pupop__container_btn_close"
);
let saveProfilePupopBtn = document.querySelector(".pupop__form-btn-submit");
let inputProfileName = document.querySelector("#popup__form-name");
let inputProfileAbout = document.querySelector("#popup__form-about");
let nameProfileHeader = document.querySelector(".profile__title");
let aboutProfileHeader = document.querySelector(".profile__title-content");
let formElement = document.querySelector(".pupop__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfileHeader.textContent = inputProfileName.value;
  aboutProfileHeader.textContent = inputProfileAbout.value;
  profileFormPupop.classList.remove("pupop__show");
}

openProfilePupopBtn.addEventListener("click", () => {
  profileFormPupop.classList.add("pupop__show");
  saveProfilePupopBtn.classList.add("pupop__form-btn-submit-disable");
});

closeProfilePupopBtn.addEventListener("click", () => {
  profileFormPupop.classList.remove("pupop__show");
});

formElement.addEventListener("submit", handleProfileFormSubmit);
