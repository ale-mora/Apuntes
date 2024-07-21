/*

C O N S T R U C T O R   F U N C T I O N S 

* Son funciones especiales que se utilizan para crear e inicializar objetos, 
actúan como plantillas para crear múltiples objetos del mismo tipo y permiten 
definir propiedades y métodos que serán compartidos por todas las instancias del objeto.

Por convención las funciones constructoras se empiezan con letra mayus. 

Se quiere crear lo siguiente: { id:1, recuperarClave: function(){} } */

function Usuario() {
  // La función se debe nombrar con el recurso que crea.
  this.id = 1;
  this.recuperarClave = function () {
    // Ya no es una función, es un método.
    console.log("Recuperando clave ...");
  };
}

const usuariox = new Usuario()  //¿Por qué no necesito pasar argumentos? porque no hay parámetros ni arg.
console.log(usuariox)

/* Para crear un nuevo usuario (usar la función), se utiliza 'new', que crea un nuevo objeto y
vincula "this" dentro de la función constructora a ese nuevo objeto.*/

// Función Persona se define con 2 propiedades del objeto que creará: nombre y edad.

function Persona(nombre, edad) {
  this.nombre = nombre;           // Los this se refieren al nuevo objeto crado por new. 
  this.edad = edad; 
}                                 // Las prop. y met. definidos en la función se asignan a 'this'. 

const juan = new Persona("Juan", 33); // 'juan' es el nuevo objeto.
const ale = new Persona("Alejandro", 35); // 'juan' es el nuevo objeto.
const juanita = new Persona("Juanita", 31); // 'juan' es el nuevo objeto.
const jorge = new Persona("Jorge", 39); // 'juan' es el nuevo objeto.
console.log(juan, ale, juanita, jorge)

// Con new se llama a la función (persona) y se crea un objeto vacío.

/* En este ejemplo, Persona es una función constructora que crea un objeto con propiedades 
nombre y edad; juan, ale, juanita, jorge son una nueva instancia del tipo Persona.*/
