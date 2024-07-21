

/* E V E R Y   A N D   S O M E 

* Los métodos every() y some() te ayudan a evaluar si algo es verdadero para todos o algunos elementos
de un arreglo:

* every():
El método every() verifica si todos los elementos de un arreglo cumplen una condición dada.
Devuelve true si todos los elementos satisfacen la condición, y false si al menos uno no lo hace.
Ejemplo: Si tenemos un arreglo de números nums y queremos verificar si todos son menores que 100:

*/

const nums = [34, 2, 48, 91, 12, 32];


const todosMenoresQue100 = nums.every(n => n < 100); // true
console.log(todosMenoresQue100)

/**
 * some():
El método some() verifica si al menos uno de los elementos de un arreglo cumple una condición dada.
Devuelve true si al menos uno de los elementos satisface la condición, y false si ninguno lo hace.
Ejemplo: Si queremos verificar si hay algún número impar en el arreglo nums:

*/
const hayNumeroImpar = nums.some(n => n % 2 === 1); // true
console.log(hayNumeroImpar)

// Ejemplos:

let usuarios = [
    {id: 1, activo: false},
    {id: 2, activo: true},
    {id: 3, activo: false}
]; 

// every() recibiendo una fat arrow function (predicado):

usuarios.every(u => {                       // letra u referencia a "usuarios"
    console.log('¿Cuántos activos?', u.id)
    return u.activo;
})

// Este se ejecuta hasta que encuentra un valor de falso (incluyéndolo), por lo que en consola
// imprime el id: 1 y el id: 2 (que es falso), por lo que no evaluará el id: 3 de la lista. 

// some() recibiendo una fat arrow function (predicado)

let algunoActivo = usuarios.some(u => {
    console.log(u.id);
    return u.activo;
})

console.log(algunoActivo); 
// este método retorna true hasta que encuentre por lo menos un valor,
// y luego no sigue evaluando. 