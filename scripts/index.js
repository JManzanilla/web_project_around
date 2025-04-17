const openProfilePupopBtn = document.querySelector(".profile__lapiz"); //creacion de las variables
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
//creacion de la funcion
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); //llamando a la funcion
  nameProfileHeader.textContent = inputProfileName.value; // aqui se cambia el nombre del perfil del titulo al ingresar datos al input
  aboutProfileHeader.textContent = inputProfileAbout.value;
  profileFormPupop.classList.remove("pupop__show"); //aqui se retira la clase que se muestra el formulario
}
openProfilePupopBtn.addEventListener("click", () => {
  //aqui se crea una funcion que el boton haga click se muestra el formulario
  inputProfileName.value = nameProfileHeader.textContent;
  inputProfileAbout.value = aboutProfileHeader.textContent;
  profileFormPupop.classList.add("pupop__show");
  saveProfilePupopBtn.classList.add("pupop__form-btn-submit-disable");
});

closeProfilePupopBtn.addEventListener("click", () => {
  profileFormPupop.classList.remove("pupop__show");
});
formElement.addEventListener("submit", handleProfileFormSubmit);
