const pantalla = document.getElementById('pantalla');
const botones = document.getElementsByClassName('boton');

for (let boton of botones) {
    boton.onclick = () => {
        let botonID = boton.id;
        if (botonID != 'C' && botonID != '=') {
            pantalla.value += botonID;

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