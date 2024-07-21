


// A R R O W   F U N C T I O N S :

//  Conocidas como funciones flecha, permiten escribir funciones de manera más concisa. Tienen un orden de ejecución, se puede llamar la función y luego crearla.
//  La sintaxis básica de una fat arrow function es: 

(parámetros) => expresión

// Ejemplo de una función tradicional: 

function suma(a, b) {
    return a + b;
};

// Luego se puede asignar el resultado de la función a una variable:

let resultado = suma(1,2);
console.log(resultado)


// Función flecha (se debe preferir 'const' en vez de 'let'):

const suma1 = (c, d) => { return c + d };

// Son anónimas (no se les asigna un nombre, para referenciarlas), y se pueden redactar así:

const suma2 = (f, g) => f + g;

// Para llamarlas:

console.log(suma2(4,5))






