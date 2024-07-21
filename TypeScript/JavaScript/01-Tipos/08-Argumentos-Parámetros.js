

// A R G U M E N T O S   Y   P A R A M E T R O S


/* Los Parámetros son los nombres que especificamos cuando definimos una función.
Estos nombres representan las variables que la función espera recibir cuando se invoca. Son los que están
entre (), en este caso: a, b, c. */

function suma(a, b, c) {
    return (a + b) / c;
}

/* Los Argumentos son los valores reales que pasamos a la función cuando la llamamos.
En otras palabras, son los valores que la función recibe durante su ejecución. 
En este caso los argumentos son: 8,2 y 5.*/

let resultado = suma(8, 2, 5);
console.log(resultado);
console.log(typeof suma);           // Tipo function. 
console.log(typeof resultado);      // Tipo number.

// Cuando se tienen más Argumentos que Parámetros (no se recomienda)

function suma1(a, b, c) {
    console.log(arguments);
    return (a + b) / c;
}

let resultado1 = suma1(8, 2, 5, 6, 4, 8, 4);
console.log(resultado1);

/* En consola aparece:

Arguments(7)
0:8
1:2
2:5
3:6
4:4
5:8
5:4

*/