const body = document.querySelector("body");
const image = document.createElement("img");
const button = document.createElement("button");

button.innerText = "On";

image.src = "https://www.w3schools.com/js/pic_bulboff.gif";

body.appendChild(image);
body.appendChild(button);
