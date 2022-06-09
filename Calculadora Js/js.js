window.onload = function() {
    const display = document.getElementById("textoPantalla"); //Visor de la calculadora.
    const keypadButtons = document.getElementsByTagName("button");
    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach((button) => {
        button.addEventListener("click", () => {
            // console.log(button.innerHTML);
            calculadora(button, display);

        })
    })
}

var operando = 0;
var coma = 0;
var resultado = 0;


function calculadora(button, display){
    switch (button.innerHTML){
        case "C":
            borrar(display);
            break;
        case "CE":
            borrarUltimo(display);
            break;
        case "=":
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML); //Eval toma el string y lo evalua "2+2" => 2+2 => 4
    resultado = 1
}

function actualizar(display, button){
    
    if(button.innerHTML == "." && display.innerHTML == 0){
        display.innerHTML = "";
        display.innerHTML = ".";
        coma = 1;
    }else if((display.innerHTML == 0 || resultado == 1)){ //Pregunta si el display esta en 0
        display.innerHTML = "";
        resultado = 0;
        coma = 0;
        operando = 0;
    }
    if(button.innerHTML == "." && coma == 0){
        display.innerHTML += button.innerHTML;
        coma = 1;
    }
    if (button.innerHTML !== "." && button.innerHTML !== "+" && button.innerHTML !== "-" && button.innerHTML !== "*" && button.innerHTML !== "/"){
        display.innerHTML += button.innerHTML; //Al display le suma el valor (en string) del botón
    }

    

    //Pregunta si toque algún operador y de ser así, pone operando = 1 asi no se puede tocar nuevamente.
    //Si además, todavía no hay ningún número escrito, no se pone el operador.
    if (button.innerHTML == "+" && 
    operando == 0 && 
    display.innerHTML != 0 && 
    (display.innerHTML.charAt(display.innerHTML.length-1) != "+" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "-" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "*" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "/" )){
        display.innerHTML += button.innerHTML;
        coma = 0;
    }else if (display.innerHTML == 0){
        display.innerHTML = 0;
    }

    if (button.innerHTML == "-" && operando == 0 && display.innerHTML != 0 &&
    (display.innerHTML.charAt(display.innerHTML.length-1) != "+" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "-" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "*" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "/" 
    )){
        display.innerHTML += button.innerHTML;
        coma = 0;
    }else if (display.innerHTML == 0){
        display.innerHTML = 0;
    }
    if (button.innerHTML == "*" && operando == 0 && display.innerHTML != 0  && 
    (display.innerHTML.charAt(display.innerHTML.length-1) != "+" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "-" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "*" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "/" 
    )){
        display.innerHTML += button.innerHTML;
        coma = 0;
    }else if (display.innerHTML == 0){
        display.innerHTML = 0;
    }
    if (button.innerHTML == "/" && operando == 0 && display.innerHTML != 0  && 
    (display.innerHTML.charAt(display.innerHTML.length-1) != "+" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "-" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "*" && 
    display.innerHTML.charAt(display.innerHTML.length-1) != "/" 
    )){
        display.innerHTML += button.innerHTML;
        coma = 0;
    }

}
function borrar(display,button){
    display.innerHTML = 0;
    coma = 0;
    operando = 0;
}
function borrarUltimo(display,button){
    if(display.innerHTML.charAt(display.innerHTML.length-1) == "."){
        display.innerHTML = display.innerHTML.slice(0, -1); 
        coma = 0;
    }else if(display.innerHTML == 0 || display.innerHTML.length == 1){
        display.innerHTML = 0;
    }
    else{
    display.innerHTML = display.innerHTML.slice(0, -1);
    }

}
