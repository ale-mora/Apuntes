


// B U S C A R   P R I M I T I V O S :

// Recordar que los tipos de datos primitivos en JavaScript son aquellos que no son objetos y no tienen métodos. 
// Son valores inmutables, lo que significa que no pueden ser modificados una vez creados.

const letras = ['A', 'b', 'c','A', 'd', 'e', 'A', 'f', 'g', 1]
console.log("Contenido del array 'letras': ", letras);

// Para buscar un valor primitivo dentro de un Array se usa 'indexOf()', que devuelve el índice del valor en que 
// se encuentra dentro del array: 

console.log("El valor 'c' se encuentra en el índice:",letras.indexOf('c'));   // Devuelve '2', que es el indice del valor 'c'. 

// Si el valor no se encuentra en el Array, devuelve '-1':
console.log(letras.indexOf('m')); 

// Si se busca un valor repetido, devuelve el índice del primero que encuentra:

console.log("El primer índice del valor repetido se encuentra en:", letras.indexOf('A'));


// Para encontrar el índice del último valor que se repite, se usa 'lastIndexOf()':
// (realiza la búsqueda de atrás hacia adelante)

console.log("El último índice del valor repetido se encuentra en:", letras.lastIndexOf('A'));

// Para saber si un valor en particular se encuentra o no dentro de un Array, se utiliza 'includes()'.
// Este método devuelve 'true' si se encuentra o 'false' si no se encuentra en el array.

console.log("¿Se encuentra el valor 'c' en el índice?",letras.includes('c'));
console.log("¿Se encuentra el valor 'm' en el índice?",letras.includes('m'));

// RECORDAR QUE CUANDO SE BUSCA UN VALOR DENTRO DE UN ARRAY, EL TIPO DE DATO ES IMPORTANTE.

console.log("Si se busca el valor '1' como string, devuelve: ", letras.includes('1'));
console.log("Si se busca el valor '1' como number, devuelve: ", letras.includes(1));

// Para buscar DESDE un valor en particular, se utiliza un segundo argumento:

console.log("El índice del valor 'a', que no es el primer valor, se encuentra en el indice:", letras.indexOf('A', 1));