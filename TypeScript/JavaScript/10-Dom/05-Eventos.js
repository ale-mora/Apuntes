

/**
 * E V E N T O S 

 * Los eventos en HTML y JavaScript son acciones u ocurrencias que suceden en el sistema que estás 
    programando. El sistema te informa sobre estos eventos para que puedas responder a ellos si 
    así lo deseas. Pueden ser eventos generados por el usuario, como clics, envíos de formularios, 
    presiones de teclas, o eventos generados por el sistema, como la carga de una página web, 
    la reproducción de un video o la ocurrencia de un error.
 */

// Crear Formulario:
let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button');
btn.innerText = 'Enviar';
form.append(input);
form.append(btn);

document.body.append(form);

// *** Se asignan eventos a través de funciones iniciadas por el evento, en este caso, al elemento form.

// Cuando el usuario pase el puntero del mouse por encima: 

form.onmouseenter = e => {
    console.log('entra el mouse', e);
};
// ClientX y CLientY indican por donde pasa el mouse. fromElement dice donde se gatilló el elemento.
// target entrega el elemento mismo que se le asignó el evento.

// Cuando el Usuario saque el puntero del elemento:

form.onmouseleave = e => {
    console.log('sale el mouse', e)
};

// *** Asignar eventos al input.


// Sacar el puntero del input:

input.onfocus = e => {
    console.log('input con focus');
};

// Sacar el puntero del elemento (***SIRVE PARA GUARDAR DATOS***)

input.onblur = e => {
    console.log('input perdio el focus');
};

// Cuando el valor de un formulario cambia. 

input.onchange = e => {
    console.log('valor cambia a: ', e.target.value);
};

// *** Asignar Eventos a Botones.

// Al presionar el Botón:
// e.preventDefault(); --> Previene la ejecución de eventos por default. 

btn.onclick = e => {
    console.log('botón clickeado'); // También se ejecuta el evento de refrescar página.
};

// Uso de addEventListener(). Recibe 2 argumentos, el evento y luego la función. 

btn.addEventListener('click', y => {
    y.preventDefault();
    console.log('Boton clikeado con addEventListener()');
});