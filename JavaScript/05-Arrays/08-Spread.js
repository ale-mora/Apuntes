// S P R E A D   O P E R A T O R :

// Tiene la misma aplicación que el método 'concat()', pero es más flexible. Se usa para juntar 2 arrays o más.

let array1 = [1, 2, 3, 4];

let array2 = [8, 9];

let array3 = [...array1];

// Usando '...' se concadenan los elementos del array1 al array3.

console.log(array3);

// Y tambien se pueden agragar mas valores al array:

let array4 = [...array1, 5, 6];

console.log(array4);

// Para agregar los elementos de otro array:

let array5 = [0, ...array4, 7, ...array2];

console.log(array5);

// Como son copias, si se cambia el original, no se modifica la copia:

array2.pop();
console.log("Se quitó el último elemento del arreglo '9':", array2, ",pero no el de su copia:", array5);