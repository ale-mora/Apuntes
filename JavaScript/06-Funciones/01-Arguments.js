/**
 * A R G U M E N T S 
 * 
 * El objeto arguments en JavaScript es un objeto similar a un arreglo que está disponible dentro de las funciones. 
 * Contiene los valores de los argumentos pasados a esa función. 
 * 
 * El objeto 'arguments':
 * 
 * Es una variable local disponible en todas las funciones (excepto en funciones flecha).
 * Permite acceder a los argumentos de una función dentro de esa función.
 * Cada argumento se puede acceder mediante su índice.
 * Por ejemplo, si a una función se le pasan 3 argumentos, puedes acceder a ellos así:
 */

arguments[0]; // primer argumento
arguments[1]; // segundo argumento
arguments[2]; // tercer argumento

// También puedes establecer o reasignar cada argumento:

arguments[1] = "nuevo valor";

// Ejemplo N°1:

function cadenaMasLarga() {
    let masLarga = "";
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].length > masLarga.length) {
            masLarga = arguments[i];
        }
    }
    return masLarga;
};
// No entiendo =(




