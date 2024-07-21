

/* Leguajes de Programación: Tipado estático y tipado dinámico. 

En el tipado estático al momento de definir una variable, se define su tipo de dato: string, 
boolean, number, etc (java).
En un tipado dinámico no es necesario definir el tipo de dato (javascript), puesto que éste puede cambiar. */

let numero = 42;
let nombre2 = "Don Pollo";
let verdadero = true;
let undef;
let nulo = null;

//Se cambia variable de "nombre"

//nombre2 = 53;

//console.log(nombre2) En la consola se cambia el valor a 53 como number.

// Función 'typeof' : muestra que tipo de variable es el valor seleccionado.

console.log(typeof numero);
console.log(typeof nombre2);
console.log(typeof verdadero);
console.log(typeof undef);
console.log(typeof nulo);

/* ('typeof' nulo) aparece como 'object' en consola y no como 'null'. Estop es porque null representa un 
objeto vacío. Esto está definido por ECMA. */