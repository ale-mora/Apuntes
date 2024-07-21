
// L I S T A R   P R O P I E D A D E S 



// Primera forma:
// Se crea una nueva función con 'Function' llamada 'punto1':

const punto1 = {
  x: 10, // Propiedad 1
  y: 15, // Propiedad 2
  dibujar: function () {
    // Tambien se podría definir así: dibujar() { console...}
    console.log("metodo de punto1"); // Método
  },
};

// 1era forma de ver si el objeto tiene propiedades:
// [objeto].[método o propiedad]();

//punto1.dibujar()

// Si se borra la propiedad:
// delete punto1.dibujar;
// En consola dice que no es una función porque ha sido borrada.
punto1.dibujar();

// Segunda forma, utilizando 'if':

const punto2 = {
  x: 25, // Propiedad 1
  y: 20, // Propiedad 2
  dibujando() {
    console.log("método de punto2"); 
  },
};

if ("dibujando" in punto2) {
  punto2.dibujando();
}

/* 
* Método de Object.keys(). 
Es método estático que devuelve un arreglo de las propiedades enumerables propias 
(no heredadas) de un objeto. Devuelve un Array con las propiedades del objeto.
*/
console.log(Object.keys(punto2)); // Devuelve: ["x", "y", "dibujando"]

//  Uso con for: PROPIEDAD RELATIVAMENTE NUEVA:

for (let llave of Object.keys(punto2)) {
    console.log(llave);
}; 

/* Imprime en consola:
x
y
dibujando
*/

for (let llave1 of Object.keys(punto2)) {
    console.log(llave1,punto2[llave1]);
}; 

// Lista la propiedad, seguido de su valor.

/*
* Tercer método: ENTRIES.
* Es un método que devuelve una matriz de pares clave-valor propios de las propiedades enumerables de un objeto dado. 
Cada par está representado como un arreglo (array) con dos elementos: la primera posición contiene la clave (siempre una cadena), 
y la segunda posición contiene el valor de la propiedad. Sirve especialmente para acceder a las propiedades de un objeto cuando
no se conocen sus propiedades.
*/

for (let entry of Object.entries(punto2)) {
    console.log(entry)
}