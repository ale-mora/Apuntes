/*

    S T R I N G S 

    Recordar que los strings o cadenas de caracteres son un tipo de datos que representan secuencias de 
    caracteres. Pueden incluir letras, números, símbolos, palabras o frases y se utilizan para representar
    datos de texto. Se definen encerrando el texto entre comillas simples ('), dobles (") o invertidas (`),
    siendo estas últimas utilizadas para las plantillas literales que permiten la interpolación de expresiones.

*/
// Construcción normal:
const saludo = "¡Hola!, ¿Cómo están?";

// Construcción como objeto:
const despedida = new String("¡Chao amigos!");

console.log(typeof saludo);         // Devuelve 'string'.

console.log(typeof despedida);      // Devuelve 'object'.

// Métodos de string:
console.log(saludo.length);             // Largo del Objeto (en caractéres).
console.log(saludo.indexOf("¿C"));      // Lugar donde se encuentra el parámetro (parten de base 0)
console.log(saludo.indexOf("re"));      // Si no existe, devuelve -1.
console.log(saludo.includes("re"));      // Si existe o no , devuelve true o false.
console.log(saludo.includes("¿C"));      // Si existe o no , devuelve true o false.
console.log(saludo.replace("están", "han estado"));      // Reemplaza texto.
console.log(saludo.replace("están", "han estado"), "-" , saludo);      // No reemplaza el valor.
console.log(saludo.toLocaleLowerCase());        // Todo minúscula.
console.log(saludo.toUpperCase());              // Todo mayúscula.


console.log(saludo.substring(4, 9));  // Muestra la selección: (inicio, fin), sin el caractér final.

const espacios ="   ¡Hola!  ,   ¿Cómo están?";

console.log(espacios);    // Imprime todo los espacios en consola. 

console.log(espacios.trim());    // Imprime sin los espacios de la izqu y der en consola. 
console.log(espacios.trimStart());    // Imprime sin el espacio izquierdo en consola. 
console.log(espacios.trimEnd());    // Imprime sin el espacio derecho en consola. 



