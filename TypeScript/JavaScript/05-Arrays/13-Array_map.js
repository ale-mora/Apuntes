/**
 * A R R A Y   M A P 
 * 
 * Es una función incorporada que se utiliza para transformar los elementos de una matriz. 
 * Se utiliza para crear un array nuevo de uno existente en base a una función (fat arrow function). 
 * El método map() toma una matriz existente y la recorre elemento por elemento, aplicando una
 * función a cada uno de ellos. Luego, devuelve una nueva matriz que contiene los resultados de 
 * aplicar la función a cada elemento.*/

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function (element) {
    return element * 3;
});
console.log(modifiedArr);

// Ejemplo N°2

const regalones = [
    { nombre: 'Rex', edad: 12},
    { nombre: 'Lucinda', edad: 1.2},
    { nombre: 'Carmela', edad: 1},
    { nombre: 'Laika', edad: 1.4},
    { nombre: 'Brownie', edad: 18},
    { nombre: 'Dora', edad: 14},
];

// Se toma el array regalones y se hace un nuevo array con la propiedad: 'mayor de 2',
// que devuelve true o false dependiendo el caso: 

const reg_may_2 = regalones.map(u => {
    return {
        ...u,
        mayor: u.edad > 2,
    }
});

console.log(reg_may_2)

// La función que se aplica ( u => { } ), está definida como una arrow function.
// Con el return, la fat arrow function devuelve una copia de todos los elementos
// del array u (regalones) y se agrega una nueva propiedad llamada: 'mayor', que será
// true si es mayor a 2 o falso si es menor a 2. 


// Tambien se puede hacer con '()': 
const reg_may_2B = regalones.map(u => ({...u, mayor: u.edad > 2}));
console.log(reg_may_2B)

// Se pueden encadenar con otros métodos:

const ejemplo3 = [0,1,2,3,4,5,6,7,8,9];

const ejemplo3b = ejemplo3
    .filter(u => u % 2 === 0)   // filtrar numeros pares
    .map(u => {
        return u * 2            // multiplicarlos por 2
    })
console.log(ejemplo3b)
