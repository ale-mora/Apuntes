 

// F U N C I O N E S 


/*

Las funciones en JS también son objetos y se les considera objetos de "primera clase". Esto quiere decir que,
las funciones, pueden ser asignadas a otras variables, pasadas como argumentos a otras funciones o tambien 
retornadas de otras funciones. En resumen, pueden ser tratadas como cualquier otra variable. 
Objeto es una representación de identidad. función es un encapsulamiento de un proceso dado parametros.

* Propiedades:
*/ 

function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);      // Como objetos, también tienen propiedades.
console.log(Usuario.length);

const U = Usuario               // Se pueden asignar a otras constantes.
let user = new U('DonPollo');

console.log(user);

// Función llamando a otra función (Funciones como argumentos).
function of(Fn, arg) {
    return new Fn(arg);
}

// Ejemplo:
let user1 = of(Usuario, "DOOMPOLLO");
console.log(user1);

// Retornar dentro de otras funciones:

function returned(){
    return function nuevaFuncion(){
        console.log("Holas!")
    }
}

// Ejemplo:
let saludo = returned(); // Esta función hace la función anterior: nuevaFuncion().
saludo();