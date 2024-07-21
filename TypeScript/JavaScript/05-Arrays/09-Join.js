/*

//  M É T O D O   J O I N :

Es utilizado para unir todos los elementos de un arreglo (o un objeto similar a un arreglo) en una cadena. Puedes especificar un separador opcional, que es la cadena que se usa para separar cada uno de los elementos del arreglo. Si no se proporciona un separador, los elementos se unirán con una coma (,). En el fondo, 
es para agregar un separador.

*/

let array1 = [1, 2, 3, 4];

console.log("Este es el Array1:", array1);

let array_sep = array1.join();


console.log("Este es el Array1 con el método 'join()':", array_sep);


// Como argumento al método se puede usar el tipo de separador:

let array_sep1 = array1.join(', ');
console.log("Este es el Array1 separado con ',':", array_sep1);


// Para separar los valores se usa el método 'split()': 

// String:

let saludo = "¡Hola!, Soy el Pollo.";
console.log("Saludo original:", saludo)
let dividido = saludo.split(' ');           // IMPORTANTE: si no se deja espacio, se separa por letra.
console.log("Saludo dividido:", dividido, "(Devuelve un Array).")
let junto = dividido.join("-");
console.log("Saludo todo junto con '-':", junto,);









/*
function par_imp(array) {
    let par = [];
    let impar = [];
    for (const i of array) {
        if (i % 2 === 0) {
            par.push(i);
        } else {
            impar.push(i);
        }
    }
    console.log("los números pares son:", par, "mientras que los impares son:", impar)
};

const arrayB = [1, 2, 3, 4, 5];
par_imp(arrayB);
*/