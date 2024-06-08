let botones = document.getElementsByClassName("button-number");
let power = document.getElementById("power-button");
let info = document.getElementById("info");
let interruptor = false;
let pantalla = document.getElementById("pantalla");
//Fecha
const currentDate = new Date();
//Formateo de la fecha
const options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};

let arrayBotones = Array.from(botones);

//power button
power.addEventListener("click", () => {
    interruptor = !interruptor;
    if (interruptor) {
        pantalla.src = "../img/Static.gif"
        pantalla.style.display="inline"
    } else {
        pantalla.src = ""; pantalla.style.display = "none";
        mensaje.innerHTML = "";
    }
})
//Contador para apagar el info
let contador=2;
info.addEventListener("click", () => {
    if (interruptor) {
        contador+=1;
        mensaje.innerHTML=currentDate.toLocaleDateString('es-ES', options)
        if(contador%2 == 0){
           mensaje.innerHTML="" 
        }
    }
})
