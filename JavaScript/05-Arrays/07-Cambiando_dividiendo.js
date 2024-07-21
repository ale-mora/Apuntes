


// C O M B I N A N D O   Y   D I V I D I E N D O :

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log('El array 1 es:', array1, ", mientras que el array 2 es:", array2)

// Para combinar arrays se utiliza el método 'concat()':

let combina2 = array1.concat(array2);
console.log("El nuevo Array es 'combina2' que tiene los elementos de los arrays anteriores:", combina2);
console.log("Pero los array 1 y 2, siguen siendo iguales:", array1, array2);

// Para dividir arrays se utiliza el método 'slice()', indicando como argumento primero desde que índice se 
// quiere dividir y el segundo hasta que índice termina la división del array. 

let dividi2 = combina2.slice(2, 5);    // Se corta desde el indice del array N°2, 
console.log("El nuevo Array es 'dividi2' que inicia desde el índice 2 y termina hasta el indice 5:", dividi2,
    "dejando afuera los números 1 y 6.");

// Si se omite el segundo argumento de 'slice()', dividirá desde el indice en adelante.

let dividi2b = combina2.slice(2);
console.log("El array nuevo que se forma sin el 2do argumento del método 'slice()' es:",dividi2b);

// Si se omiten todos los argumentos de dicho método, se copia el array, siendo otro completamente distinto:

let nuevo_array = combina2.slice();
console.log("El nuevo array copiado con 'slice()' es:",nuevo_array, "que es distinto al original:", combina2);

// Sin embargo el nuevo array es referenciado al original, puesto que si se cambia éste, la copia tambien se cambia.


