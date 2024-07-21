/**
 *  R E D U C E 
 * 
 * El método reduce() en JavaScript es una función de orden superior que se utiliza para reducir los elementos 
 * de un arreglo y devolver un valor único. El método reduce() ejecuta una función reductora sobre cada elemento 
 * de un arreglo. Devuelve un único valor resultante después de aplicar la función a todos los elementos.
 * La función reductora recibe cuatro argumentos:
 * 
 * acumulador: El valor acumulado devuelto en la última invocación de la función o el valorInicial proporcionado.
 * valorActual: El elemento actual que está siendo procesado en el arreglo.
 * índice (opcional): El índice del elemento actual en el arreglo.
 * array (opcional): El arreglo sobre el cual se llamó el método reduce().
 * 
 * El valor devuelto por la función reductora se asigna al acumulador en cada iteración.
 */

const numeros = [1, 2, 3, 4, 5];
const sumaTotal = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(sumaTotal);
// Resultado: 15

// Tambien puede escribirse así:

const sumaTotal2 = numeros.reduce((acc, el) => { return acc * el });
console.log(sumaTotal2);
// Resultado: 120

// Ejemplo N°2: 

const array1 = [[1, 2], 3, [4, 5], 6, [7, 8], 9];

// Se requiere 'aplanar' o convertir el array en uno solo.

const array2 = array1.reduce((acc, el) => acc.concat(el), []);
console.log(array2)

// En este caso la función reductora 'reduce()' concatena cada elemento del acumulador.
// [] es el valor inicial del acumulador 'acc', un arreglo vacío. 