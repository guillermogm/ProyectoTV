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
let canalUp = document.getElementById("channel-up");
let canalDown = document.getElementById("channel-down");
let volMain = document.getElementById("vol-main");
let volSecond = document.getElementById("vol-second");
let volUp = document.getElementById("vol-up");
let volDown = document.getElementById("vol-down");


//Power button
power.addEventListener("click", () => {
    interruptor = !interruptor;
    if (interruptor) {
        pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Static.gif"
        pantalla.style.display = "inline"
    } else {
        pantalla.src = ""; pantalla.style.display = "none";
        mensaje.innerHTML = "";
    }
})
// Canal en el que estas
let ncanal = "static"
//Recorrer los botones y cambiar de canales
for (let i = 0; i < arrayBotones.length; i++) {
    arrayBotones[i].addEventListener("click", () => {
        if (interruptor) {
            switch (i) {
                case 0:
                    pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Simpson.gif";
                    ncanal = 1;
                    break;
                case 1:
                    pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Bojack.gif";
                    ncanal = 2;
                    break;
                case 2:
                    pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/BreakingBad.gif";
                    ncanal = 3;
                    break;
                case 3:
                    pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Csi.gif";
                    ncanal = 4;
                    break;
                case 4:
                    pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Friends.gif";
                    ncanal = 5;
                    break;
                case 5:
                    pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Game.gif";
                    ncanal = 6;
                    break;
                case 6:
                    pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Peaky.gif";
                    ncanal = 7;
                    break;
                case 7:
                    pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/RickMorty.gif";
                    ncanal = 8;
                    break;
                case 8:
                    pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Tom.gif";
                    ncanal = 9;
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
            mensaje.innerHTML = "";
        }, 1450);
    }
})
// Boton canal hacia arriva
canalUp.addEventListener("click", () => {
    if (interruptor) {
        switch (ncanal) {
            case "static":
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Simpson.gif";
                ncanal = 1;
                break;
            case 1:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Bojack.gif";
                ncanal = 2;
                break;
            case 2:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/BreakingBad.gif";
                ncanal = 3;
                break;
            case 3:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Csi.gif";
                ncanal = 4;
                break;
            case 4:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Friends.gif";
                ncanal = 5;
                break;
            case 5:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Game.gif";
                ncanal = 6;
                break;
            case 6:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Peaky.gif";
                ncanal = 7;
                break;
            case 7:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/RickMorty.gif";
                ncanal = 8;
                break;
            case 8:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Tom.gif";
                ncanal = 9;
                break;
            case 9:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Simpson.gif";
                ncanal = 1;
                break;

        }

    }
})
// Boton canal hacia abajo
canalDown.addEventListener("click", () => {
    if (interruptor) {
        switch (ncanal) {
            case "static":
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Tom.gif";
                ncanal = 9;
                break;
            case 1:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Tom.gif";
                ncanal = 9;
                break;
            case 2:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Simpson.gif";
                ncanal = 1;
                break;
            case 3:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Bojack.gif";
                ncanal = 2;
                break;
            case 4:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/BreakingBad.gif";
                ncanal = 3;
                break;
            case 5:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Csi.gif";
                ncanal = 4;
                break;
            case 6:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Friends.gif";
                ncanal = 5;
                break;
            case 7:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Game.gif";
                ncanal = 6;
                break;
            case 8:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/Peaky.gif";
                ncanal = 7;
                break;
            case 9:
                pantalla.src = "https://guillermogm.github.io/ProyectoTV/img/RickMorty.gif";
                ncanal = 8;
                break;

        }

    }
})
let conVol = 0;
// Volumen +
volUp.addEventListener("click", () => {
    //Si esta encendido
    if (interruptor) {
        //Muestra barra de volumen
        volMain.style.display = "block";
        //Entra si el contador de volumen esta entre 20 y 0 
        if (conVol <= 20 && conVol >= 0) {
            conVol += 2;
            let intervalVolUp = setInterval(function () {
                volSecond.style.width = conVol + "em";
            }, 0);

            setTimeout(function () {
                clearInterval(intervalVolUp);
                volMain.style.display = "none";
            }, 1400);
        }
        // Si el volumen es mas de 20(El maximo) muestra la barra, cambia el contador y esconde la barra.
        if (conVol == 22) { 
            let intervalVolUp = setInterval(function () {
                conVol=20;
            }, 0);

            setTimeout(function () {
                clearInterval(intervalVolUp);
                volMain.style.display = "none";
            }, 1400);
        }
    }

})
// Volumen -
volDown.addEventListener("click", () => {
   //Si esta encendido
    if (interruptor) {
       //Muestra barra de volumen
        volMain.style.display = "block";
       //Entra si el contador de volumen esta entre 20 y 0 
        if (conVol <= 20 && conVol >= 0) {
            conVol -= 2;
            let intervalVolDown = setInterval(function () {
                volSecond.style.width = conVol + "em";
            }, 0);

            setTimeout(function () {
                clearInterval(intervalVolDown);
                volMain.style.display = "none";
            }, 1400);
        }
        // Si el volumen es menos de 0(El minimo) muestra la barra, cambia el contador y esconde la barra.
        if (conVol == -2) { 
            let intervalVolDown = setInterval(function () {
                conVol=0;
            }, 0);

            setTimeout(function () {
                clearInterval(intervalVolDown);
                volMain.style.display = "none";
            }, 1400);
        }
    }

})