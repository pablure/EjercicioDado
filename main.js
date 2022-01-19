import './style.css'

const boton1 = document.querySelector(".boton1")
const boton2 = document.querySelector(".boton2")
const boton3 = document.querySelector(".boton3")
const imagen = document.querySelector("img")

let suma = 0
function lanzar(numDado) {
  let resultado = Math.floor(Math.random() * 6) + 1;
  let dado = document.querySelector(numDado)
  dado.innerHTML = resultado
  let historia = document.querySelector(".historia")
  historia.innerHTML += resultado+" - " 
  suma += resultado
  let subirTotal = document.querySelector(".suma p")
  subirTotal.innerHTML = suma
}


boton1.addEventListener("click", () => lanzar(".dado1"));
boton2.addEventListener("click", () => lanzar(".dado2"));
boton3.addEventListener("click", () => lanzar(".dado3"));