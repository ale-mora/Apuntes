

// D O   W H I L E 

/* Permite ejecutar un bloque de código repetidamente hasta que se cumpla una condición. 
A diferencia del bucle while, el bucle 'do/while' garantiza que el bloque de código se ejecute 
al menos una vez, independientemente de si la condición inicial es verdadera o falsa.

* SINTAXIS:

do {
    // Código a ejecutar
} while (condición); 

Ejemplo:
*/

let i = 1;

do {
    if (i % 2 == 0) {
        console.log('Numero par: ', i);
    }
    i++;
} while (i < 10);