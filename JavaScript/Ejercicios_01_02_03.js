// E J E R C I C I O S   U N I D A D E S   1, 2, Y 3

// 1. función que identifique qué numero es mayor:

let a = 9;
let b = 8;

function compara() {
  if (a > b) {
    console.log(a, "es mayor que", b);
  } else if (a == b) {
    console.log(a, "y", b, "son números iguales");
  } else if (a < b) {
    console.log(b, "es mayor que", a);
  } else {
    console.log("datos ingresados no son válidos.");
  }
}

compara(a, b);

// 2. Función que da el nombre de la Resolución de un monitor:

function resolucion(alto, ancho) {
  if (alto == 7680 && ancho == 4320) {
    return "8K";
  } else if (alto >= 3840 && ancho >= 2160) {
    return "4K";
  } else if (alto >= 2560 && ancho >= 1440) {
    return "WQHD";
  } else if (alto >= 1920 && ancho >= 1080) {
    return "FHD";
  } else if (alto >= 1280 && ancho >= 720) {
    return "HD";
  } else {
    return " c";
  }
}
let res = resolucion(2570, 1550);
console.log("Las medidas corresponde a una resolución de", res);

/* 3. Construir una función que permita obtener un elemento de 
un arreglo por su indice (no permitir un numero mayor a 4
ni menor a 0)*/

let regalones = ["Dora", "Brownie", "Rex", "Carmela", "Lucinda"];
function obtener(regalones, indice) {
  if (indice < 0 || regalones.length <= indice) {
    //se usa "or".
    return "Número no es válido";
    // impide que se ponga un numero menor que 0 y mayor que 4.
  } else return regalones[indice];
}
let lista1 = obtener(regalones, 4);
// llamar función, poner argumentos: array y luego índice.
console.log(lista1); // ---> Imprime "Rex"

/* 4. Algoritmo que sólo imprima números pares del 0 al 10 con 
el bucle 'for'*/

for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) console.log(i);
}

// 5. Algoritmo que imprima el número mayor y menor de un Array con un método burbuja.

/* El método Burbuja compara elementos adyacentes en la lista.
Si están en el orden incorrecto, intercámbialos. Repite este proceso hasta que no se necesiten 
más intercambios (es decir, la lista esté ordenada). */

let lista = [3, 6, 2, -5, -4, 1, 0, 3, 7, -345, 456, 89, 23, 10000, 965874]; // lista
let n = lista.length; // longitud de la lista
console.log(Math.min(...lista));
console.log(Math.max(...lista)); // Math es una librería de JS. Documentación de ARRAY de JS.
function burb(lista) {
  // función
  for (let z = 0; z < n; z++) {
    // iteracion empieza en 0 y termina en n (longitud)
    for (let y = 0; y < n; y++) {
      // iteración de comparación
      if (lista[y] > lista[y + 1]) {
        // si se cumple condición, se intercambia
        [lista[y], lista[y + 1]] = [lista[y + 1], lista[y]]; // Desestructuracion de javaScript:
      } // Intercambio de variables
    }
  }
  return lista; // retorna lista ordenada.
}
let orden = burb(lista);
console.log(
  "El número menor es:",
  orden[0],
  "y el numero mayor de la lista es:",
  orden[n - 1]
);

// 6. Crear un algoritmo que devuelva una cantidad de numeros positivos de un array.

let lista2 = [3, 6, 2, -5, -4, 1, 0, 3, 7, -345, 456, 89, 23]; // lista
let m = lista2.length; // longitud de la lista
let resultado = []; // lista vacia que contendrá numeros positivos

function numpos() {
  for (let t = 0; t < m; t++) {
    // Iteración de los elementos de la lista.
    if (lista2[t] > 0) resultado.push(lista2[t]); // Condición: si el elemento de la lista es positivo, se agrega a "resultado"
  }
  return resultado;
}
let final = numpos();
console.log(final);

// 7. Crear un algoritmo que cree un array de pares a partir de un arreglo de objetos.

let personas = [
  // Nombre del Arreglo: "personas"
  { nombre: "Ana", edad: 25 }, // 1er objeto     Propiedades (nombre o clave y valor(numero,string,boolean)).
  { nombre: "Luis", edad: 30 }, // 2do objeto     Es este caso, nombre y edad son los nombres de las propiedades (2)
  { nombre: "Julia", edad: 22 }, // 3er objeto     y "ana", "luis", "julia", 25, 30 y 22 son los valores de las
]; //                propiedades respectivamente.

// Función, se debería ocupar "for...of", que trabaja mejor con objetos iterables.

let listapares = []; // lista vacía

function debpares(personas) {
  // función que toma como argumento array "personas".
  for (const objeto of personas) {
    // bucle for .. of para iterar y extraer todos los objetos.
    let nombre = objeto.nombre;
    let edad = objeto.edad;
    listapares.push(objeto); // se crea nuevo array con los valores de nombre y edad de personas.
  }
  return listapares; // Retorna el nuevo array "listapares"
}

let final1 = debpares(personas); // llama a la función y su resultado se almacena en la variable "final1".
console.log(final1);

// 8. Crear un array de longitud N y que sus elementos sean numeros de 1 hasta N.
// de hasta ciclo iterativo.

function arrayn(r) {
  let n = r;
  let arreglo = Array(n); // declarar arreglo como array
  for (let index = 0; index < arreglo.length; index++) {
    arreglo[index] = index + 1; // valor es inmutable
    console.log(arreglo[index]);
  }
}

arrayn();

/* obtener a la persona mayor de una lista de personas que definan su edad al azar
crear lista de personas como objeto
edad de cada objeto sea aleateorio math.random
buscar en la lista la persona con mas edad y la con menos e imprimirla.
*/
