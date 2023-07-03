// Image URIs
const blackCarImage = "url(https://i.postimg.cc/NGRJX8hr/black-benz.jpg)";
const redCarImage = "url(https://i.postimg.cc/cH2pJdny/red-benz.webp)";
const grayCarImage = "url(https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg)";

// 1 - Funcion que al clickear de un mensaje window.alert
// `🥳 Woohoo, You're about to own a benz 🎊`

// 2 - Funcion de redirigir a paypal una vez que da
// click en "Buy now". https://www.paypal.com/us/signin

function addButtonHandler() {
  const button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", () => {
    window.alert(`🥳 Woohoo, You're about to own a benz 🎊`);
  });
  button.addEventListener("click", () => {
    window.location = "https://www.paypal.com/us/signin";
  });
}

addButtonHandler();

// 3 - Funciones para cambiar el color/img
// del auto al hacer click en el color

// ELEM HTML
// const red = document.getElementsByClassName("red")[0]; // elem html botton color
// const productImage = document.getElementsByClassName("product-image")[0]; // elem html img

// EVENT LISTENER
// red.addEventListener("click", changeColorRed);

// function changeColorRed() {
//   console.log("SE EJECUTA LA FUNCION");
//   productImage.setAttribute("style", `background-image: ${redCarImage}`);
// }

// 4 - DRY optimizar funciones que cambian color del auto
// en una sola

const colors = { black: blackCarImage, red: redCarImage, gray: grayCarImage };
const productImage = document.getElementsByClassName("product-image")[0]; // elem html img

// FUNCTIONS

function addColorsListeners() {
  const colorList = Object.keys(colors);
  colorList.forEach((e) => {
    colorElement = document.getElementsByClassName(e)[0];
    colorElement.addEventListener("click", changeColor);
  });
}

function changeColor(event) {
  const color = event.target.className;
  productImage.setAttribute("style", `background-image: ${colors[color]}`);
}

// FUNCTIONS EXECUTIONS

addColorsListeners();
