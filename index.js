var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var body = document.querySelector('body');
var direction = 'to right';
var hexColor = document.querySelector('.hex-color');
var linearGradient = document.querySelector('.linear-gradient');

function changeColor() {
    body.style.background = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
    linearGradient.textContent = `background: ${body.style.background}`;
    hexColor.textContent = `Hex-Color: ${color1.value}, ${color2.value}`
}


color1.addEventListener('input', changeColor)

color2.addEventListener('input', changeColor)