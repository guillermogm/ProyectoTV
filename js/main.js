let botones = document.getElementsByClassName("button-number");
let power = document.getElementById("power");
let info = document.getElementById("info");
let interruptor = false;
let pantalla = document.getElementById("pantalla");

let arrayBotones = Array.from(botones);
//power button
power.addEventListener("click", () => {
    interruptor = !interruptor;
    if (interruptor) {
        pantalla.src = "../img/Static.gif"
        pantalla.style.display="inline"
    } else {
        pantalla.src = ""; pantalla.style.display = "none";
        info.innerHTML = "";
    }
})