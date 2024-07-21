// F U N C T I O N
/* 
Function es una función constructora que se utiliza como una especie de “receta” para crear nuevos objetos. 
Cuando invocamos esta función utilizando el operador new, se crea una nueva instancia del objeto y se devuelve.
*/

// Forma clásica:

// es una función constructor en JavaScript. crea un objeto con propiedades x e y, con un método "dibujar".
function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando..."); // Método: función asociada a un objeto como propiedad.
}
};
// Llamar a la función:

let funcionPunto = new Punto(3, 4);
console.log(funcionPunto);


//*************************************************************************************************
// Constructor 'Function' con la funcion anterior N O  S E  D E B E  U T I L I Z A R . 

const Point = new Function("x","y",`
this.x = x;
this.y = y;
this.dibujar = function () {console.log("Dibujando...");} `);
// Se hace una constante "p".
const p = new Point(4,5);
console.log(p);  // Imprime un objeto "p" con las propiedades x:4 - y:5 además del método dibujar.
//***************************************************************************************************
/*  M E T O D O S   C A L L   Y   A P P L Y 

C A L L 

Función 'call', es un metodo que se puede utilizar para invocar una funcion, especificando el valor
 de 'this' y pasando los argumentos individualmente. Todas las funciones tienen acceso a este método.
 Se utiliza para extender las propiedades de los objetos y extender otras funciones. Ejm.*/

 // Se crea un objeto literal "punto" con una propiedad "z" que tiene el valor 7.
 let punto = { z : 7 };

 // Se invoca la función Punto usando el método call, pasando el objeto punto como el primer argumento. 
 // Esto hace que punto sea el contexto de this dentro de la función Punto.
 //Los valores 6 y 7 se pasan como argumentos a la función Punto.
 Punto.call(punto, 6, 7);

// Imprime : > {z:7, x:6, y:7, dibujar: f}
 console.log(punto)

/*
A P P L Y 

La función 'apply' es un metodo que permite invocar una función con un valor específico de 'this' (se refiere al objeto
que está ejecutando el código actual) similar a 'call' pero 'apply' se deben pasar los argumentos con la forma de un 'array'
*/
Punto.apply(punto, [5, 2]);
console.log(punto);