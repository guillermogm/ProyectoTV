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

//Power button
power.addEventListener("click", () => {
    interruptor = !interruptor;
    if (interruptor) {
        pantalla.src = "../img/Static.gif"
        pantalla.style.display = "inline"
    } else {
        pantalla.src = ""; pantalla.style.display = "none";
        mensaje.innerHTML = "";
    }
})
// Canal en el que estas
let ncanal
// Variable de contro info
let control
//Recorrer los botones y cambiar de canales
for (let i = 0; i < arrayBotones.length; i++) {
    arrayBotones[i].addEventListener("click", () => {
        if (interruptor) {
            switch (i) {
                case 0:
                    pantalla.src = "../img/Simpson.gif";
                    ncanal = 1;
                    control = ncanal;
                    break;
                case 1:
                    pantalla.src = "../img/Bojack.gif";
                    ncanal = 2;
                    control = ncanal;
                    break;
                case 2:
                    pantalla.src = "../img/BreakingBad.gif";
                    ncanal = 3;
                    control = ncanal;
                    break;
                case 3:
                    pantalla.src = "../img/Csi.gif";
                    ncanal = 4;
                    control = ncanal;
                    break;
                case 4:
                    pantalla.src = "../img/Friends.gif";
                    ncanal = 5;
                    control = ncanal;
                    break;
                case 5:
                    pantalla.src = "../img/Game.gif";
                    ncanal = 6;
                    control = ncanal;
                    break;
                case 6:
                    pantalla.src = "../img/Peaky.gif";
                    ncanal = 7;
                    control = ncanal;
                    break;
                case 7:
                    pantalla.src = "../img/RickMorty.gif";
                    ncanal = 8;
                    control = ncanal;
                    break;
                case 8:
                    pantalla.src = "../img/Tom.gif";
                    ncanal = 9;
                    control = ncanal;
                    break;

            }

        }
    })

}
// Boton info
info.addEventListener("click", () => {
    if (interruptor) {
        //Intervalo en el que se muestra la info
        let intervalId = setInterval(function () {
            mensaje.innerHTML = "Canal " + ncanal + " " + currentDate.toLocaleDateString('es-ES', options)

        }, 0);
        setTimeout(function () {
            clearInterval(intervalId);
            mensaje.innerHTML="";
        }, 1200);
    }
})