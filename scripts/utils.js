export function openPopup(popup) {
  popup.classList.add("popup__show");
}

export function closePopup(popup) {
  popup.classList.remove("popup__show");
}

export function setClosePopupListeners() {
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        closePopup(popup);
      }
    });
  });

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      document.querySelectorAll(".popup.popup__show").forEach(closePopup);
    }
  });
}
