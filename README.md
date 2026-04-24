# Around The U.S.

Plataforma interactiva donde los usuarios pueden compartir fotografías de lugares de Estados Unidos, gestionar su perfil y dar "me gusta" a las tarjetas de otros usuarios. Desarrollado con JavaScript puro como parte del programa de Desarrollo Web en TripleTen.

## Descripción

Around The U.S. es una red social de fotografías de viaje construida sin frameworks. El proyecto aplica programación orientada a objetos en JavaScript para manejar el estado de la UI, integración con una API REST externa para persistir datos, y validación de formularios en tiempo real.

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 — Flexbox y CSS Grid
- JavaScript ES6+ — Clases, módulos, Promises, `async/await`
- Metodología BEM
- Diseño responsivo Mobile First
- API REST externa (fetch)
- Fuentes Inter en `.woff2`

## Características

- Edición de perfil: nombre, descripción y avatar
- Galería de tarjetas con imágenes de lugares
- Agregar y eliminar tarjetas propias
- Dar/quitar "me gusta" con contador en tiempo real
- Visualización de imágenes en modal a pantalla completa
- Confirmación antes de eliminar una tarjeta
- Validación en tiempo real en todos los formularios
- Cierre de modales con tecla `Esc` o clic fuera del contenido
- Indicador de carga durante peticiones a la API

## Arquitectura

El proyecto sigue un diseño orientado a objetos con clases especializadas:

| Clase | Responsabilidad |
|---|---|
| `Api` | Comunicación con el backend (fetch + headers) |
| `Card` | Renderizado y comportamiento de cada tarjeta |
| `UserInfo` | Gestión del perfil del usuario |
| `Section` | Renderizado de listas de elementos en el DOM |
| `Popup` | Clase base para ventanas emergentes |
| `PopupWithForm` | Popup con formulario y envío a la API |
| `PopupWithImage` | Popup de visualización de imagen |
| `PopupWithConfirmation` | Popup de confirmación para acciones destructivas |
| `FormValidator` | Validación configurable de formularios |

## Estructura del proyecto

```
web_project_around/
├── src/
│   ├── index.html
│   ├── pages/index.css
│   ├── blocks/          # Estilos BEM por bloque
│   ├── scripts/
│   │   ├── index.js     # Punto de entrada principal
│   │   ├── Api.js
│   │   ├── Card.js
│   │   ├── FormValidator.js
│   │   ├── Popup.js / PopupWithForm.js / PopupWithImage.js
│   │   ├── PopupWithConfirmation.js
│   │   ├── Section.js
│   │   ├── UserInfo.js
│   │   ├── constants.js
│   │   └── utils.js
│   ├── images/
│   └── vendor/
└── README.md
```

## Instalación y uso

```bash
git clone git@github.com:JManzanilla/web_project_around.git
cd web_project_around
```

Abre `src/index.html` directamente en el navegador. No requiere instalación de dependencias ni servidor.

## Autor

Jesus Manzanilla — [GitHub](https://github.com/JManzanilla)
