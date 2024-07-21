

// A R R A Y S  - Arreglos / Collection

/*  Es una estructura de datos que permite almacenar una colección de elementos en una sola variable. 
Estos elementos pueden ser de cualquier tipo, como números, cadenas de texto, objetos, e incluso otros arrays. 
Los elementos de un array están indexados, comenzando por el índice 0. La propiedad length de un array 
indica la cantidad de elementos que contiene.*/

let regalones = ['Dora', 'Brownie', 'Rex', 'Carmela', 'Lucinda'];
// Los elementos de un Array comienzan desde el índice 0. 
console.log(regalones);

// Para ver un elemento en particular:
console.log(regalones[1]);

// Para ingresar un elemento:
animales[6] = 'Laika';
console.log(animales);

// Si se ingresa un elemento fuera del orden consecutivo; la consola lo tomara como vacío: "empty".

animales[10] = 'Milord';
console.log(animales);
// Los valores quedan como "empty X 4", pero el array contiene 7 elementos (lengt: 6).
// Si se imprime un elemento vacío, éste se define como "undefined".

// ¿Qué tipo de dato es este array?

console.log(typeof animales);
/* Devuelve tipo objeto (object). Por lo tanto los array, dentro de JavaScript se comportan como objetos.
por lo que se puede ingresar a sus propiedades commo objeto. Por ejemplo se pueden agregar métodos.*/

animales.length;
console.log(animales.length);