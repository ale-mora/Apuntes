//
// O B J E T O S

// Son una agrupación de datos que tienen sentido tenerlos juntos.
// Ejemplo:

let nombre = "Don Pollo";
let ocupacion = "Ser Cool";
let compañero = "Rexito, el perro hediondo";

// Objeto literal: es un objeto creado solo con la siguiente sintaxis (objeto vacío):
let personaje1 = {};
console.log(personaje1);
// Objeto 'personaje':
let personaje = {
    nombre: "Don Pollo", //Par "llave-valor" o propiedad en conjunto.
    ocupacion: "Ser Cool",
    compañero: "Rexito, el perro hediondo",
};
console.log(personaje);

// Para ver solo una propiedad:
console.log(personaje.nombre);

// Otra forma de ver solo una propiedad:
console.log(personaje['compañero']);

// Para modificar una propiedad:
personaje.ocupacion = "Ser el más pulentamente";
console.log(personaje['ocupacion']);

// Para borrar se usa: "delete"
/* delete personaje;*/
/* delete personaje.ocupacion*/
