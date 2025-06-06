const pantalla = document.getElementById('pantalla');
const botones = document.getElementsByClassName('boton');

for (let boton of botones) {
    boton.onclick = () => {
        let botonID = boton.id;
        if (botonID != 'C' && botonID != '=') {
            pantalla.value += botonID;

            if (isNaN(pantalla.value.charAt(0)) && pantalla.value.charAt(0) != '-') { //Esto se hace por si quieres poner como primer valor un operador o el punto
                pantalla.value = '';
            }

            switch (pantalla.value.slice(-2, -1)) { //Esto se hace cuando el penultimo valor es un operador o punto
                case '+':
                case '-':
                case '*':
                case '/':
                case '.': //En javaScript no se puede poner un case con mas de una condicion
                    switch (botonID) { //Y este se hace para decirme el ultimo valor
                        case '+':
                        case '-':
                        case '*':
                        case '/':
                        case '.': //Si cuadra los dos casos me sustituye los 2 utlimos valores por el ultimo
                            pantalla.value = pantalla.value.slice(0, -2) + botonID;
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        } else if (botonID == '=') {
            if (pantalla.value == '') {
                pantalla.value = 0;
            }

            if (!isFinite(eval(pantalla.value)) || isNaN(eval(pantalla.value))) {
                pantalla.value = 'Error';
            } else {
                pantalla.value = eval(pantalla.value);
            }
            
        } else {
            pantalla.value = '';
        }
    }
}