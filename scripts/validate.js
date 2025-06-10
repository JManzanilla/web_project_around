/* function showInputError(formElement, inputElement, errorMessage, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!errorElement) return;

  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
}

function hideInputError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!errorElement) return;

  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settings.errorClass);
}

function checkInputValidity(formElement, inputElement, settings) {
  const trimmedValue = inputElement.value.trim(); // Elimina espacios en blanco

  const isUrlField = inputElement.type === "url";
  const minLength = 4;
  const maxLength = 30;

  if (
    inputElement.name === "title" ||
    inputElement.name === "name" ||
    inputElement.name === "about"
  ) {
    if (trimmedValue.length === 0) {
      showInputError(
        formElement,
        inputElement,
        "No puedes dejar el campo vacío o solo con espacios",
        settings
      );
      return false;
    }

    if (trimmedValue.length < minLength || trimmedValue.length > maxLength) {
      showInputError(
        formElement,
        inputElement,
        `Debe tener entre ${minLength} y ${maxLength} caracteres sin contar espacios`,
        settings
      );
      return false;
    }
  }

  if (!inputElement.validity.valid) {
    if (isUrlField && trimmedValue !== "") {
      showInputError(
        formElement,
        inputElement,
        "Introduce una URL válida",
        settings
      );
    } else {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        settings
      );
    }
    return false;
  }

  hideInputError(formElement, inputElement, settings);
  return true;
}

/*function hasInvalidInput(inputList) {
  return inputList.some(
    (inputElement) =>
      inputElement.value.trim().length === 0 || !inputElement.validity.valid
  );
}*/
/*function hasInvalidInput(inputList, formElement, settings) {
  return inputList.some((inputElement) => !checkInputValidity(formElement, inputElement, settings));
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    const trimmedValue = inputElement.value.trim();
    const isUrlField = inputElement.type === "url";

    // Validación para campos de texto (name, about, title)
    if (
      inputElement.name === "title" ||
      inputElement.name === "name" ||
      inputElement.name === "about"
    ) {
      const minLength = 4;
      const maxLength = 30;

      // Verifica si está vacío o fuera de los límites de longitud
      if (trimmedValue.length < minLength || trimmedValue.length > maxLength) {
        return true; // campo inválido
      }
    }

    // Validación para campos de tipo URL
    if (isUrlField) {
      if (trimmedValue === "" || !inputElement.validity.valid) {
        return true;
      }
    }

    // Para otros campos, usar validación nativa del navegador
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, settings) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

function setEventListeners(formElement, settings) {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
}

export function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
}

export function resetValidation(formElement, settings) {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, settings);
  });

  toggleButtonState(inputList, buttonElement, settings);
}
 */
function showInputError(formElement, inputElement, errorMessage, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!errorElement) return;

  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
}

function hideInputError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!errorElement) return;

  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settings.errorClass);
}

function checkInputValidity(formElement, inputElement, settings) {
  const trimmedValue = inputElement.value.trim(); // Elimina espacios en blanco

  const isUrlField = inputElement.type === "url";
  const minLength = 4;
  const maxLength = 30;

  if (
    inputElement.name === "title" ||
    inputElement.name === "name" ||
    inputElement.name === "about"
  ) {
    if (trimmedValue.length === 0) {
      showInputError(
        formElement,
        inputElement,
        "No puedes dejar el campo vacío o solo con espacios",
        settings
      );

      return false;
    }

    if (trimmedValue.length < minLength || trimmedValue.length > maxLength) {
      showInputError(
        formElement,
        inputElement,
        `Debe tener entre ${minLength} y ${maxLength} caracteres sin contar espacios`,
        settings
      );

      return false;
    }
  }

  if (!inputElement.validity.valid) {
    if (isUrlField && trimmedValue !== "") {
      showInputError(
        formElement,
        inputElement,
        "Introduce una URL válida",
        settings
      );
    } else {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        settings
      );
    }
    return false;
  }

  hideInputError(formElement, inputElement, settings);

  return true;
}

function hasInvalidInput(inputList, formElement, settings) {
  return inputList.some(
    (inputElement) => !checkInputValidity(formElement, inputElement, settings)
  );
}

function toggleButtonState(inputList, buttonElement, settings, formElement) {
  if (hasInvalidInput(inputList, formElement, settings)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

function setEventListeners(formElement, settings) {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      console.log(formElement);
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings, formElement);
    });
  });
}

export function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
}
