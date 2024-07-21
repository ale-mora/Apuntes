

/**
 * F I L T E R 
 * 
 * Es una función de orden superior que toma una función como argumento y devuelve un nuevo arreglo
 * con todos los elementos del arreglo original que cumplen una condición específica. 
 * filter() crea un nuevo arreglo con todos los elementos que cumplen la condición implementada por
 * la función proporcionada. La función de prueba (llamada “callback”) se aplica a cada elemento del arreglo. 
 * Si el callback devuelve true para un elemento, ese elemento se incluye en el nuevo arreglo; si devuelve 
 * false, se excluye. Los elementos que no cumplen la condición simplemente se omiten. filter() no modifica 
 * el arreglo original.
 */


const numeros = [12, 5, 8, 130, 44];

function mayorQue10(elemento) {
    return elemento >= 10;
}

const filtrados = numeros.filter(mayorQue10);
console.log(filtrados) 

// Resultado: Devuelve un objeto: [12, 130, 44]

// Ejemplo N°2:

const usuarios = [
    { nombre: 'Rex', edad: 12},
    { nombre: 'Lucinda', edad: 1.2},
    { nombre: 'Carmela', edad: 1},
    { nombre: 'Laika', edad: 1.4},
    { nombre: 'Brownie', edad: 18},
    { nombre: 'Dora', edad: 14},
];

// Se requiere un Array de los regalones que tienen más de 2 años:
// filter() recibe una función, que recibe un valor, el elemento que se itera, el índice y el array iterado,
// pero se puede colocar simplemente 'u' o cualquier otra letra.

const mayoresDosAños = usuarios.filter(u => u.edad > 2);
console.log(mayoresDosAños)
console.log(usuarios)