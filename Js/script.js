// Busquemos el formulario en el DOM
let formElement = // Utiliza el método querySelector()

// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
    // Esta línea impide que el navegador
    // entregue el formulario en su forma predeterminada.
    evt.preventDefault();
    // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
    // Lo explicaremos todo con más detalle después.

    // Busquemos los campos del formulario en el DOM
    let nameInput = // Utiliza el método querySelector()
    let jobInput = // Utiliza el método querySelector()

    // Obtén los valores de cada campo desde la propiedad de valor correspondiente

    // Selecciona los elementos donde se introducirán los valores de los campos

    // Inserta nuevos valores utilizando el textContent
    // propiedad del método querySelector()
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener('submit', handleProfileFormSubmit);