/*

B U C L E  ' F O R  O F '

Es una estructura de control que te permite iterar sobre los elementos (propiedades enumerables)
de un objeto iterable. Este bucle es especialmente útil cuando trabajas con colecciones como arreglos, 
cadenas de texto, mapas, conjuntos y otros objetos que implementan el protocolo de iteración. 

Sintaxis:

for (let 'variable' of 'iterable') {
    // Código a ejecutar en cada iteración
}

1. Variable: En cada iteración, el elemento correspondiente del objeto iterable se asigna a esta variable.
2. Iterable: Es el objeto sobre el cual se itera (por ejemplo, un arreglo, una cadena de texto, un mapa, etc.).
Ejemplos:
*/
let regalones = ['Rex', 'Carmela', 'Lucinda', 'Brownie', 'Dora']

for (let regalon of regalones) {
    console.log(regalon) // Imprime cada elemento del Array 'regalones'.
}

// Para imprimir todos los elementos del array y su correspondiente número:

for (let regalon of regalones) {
    console.log(regalon, regalones[regalon])
}

// Esto se podría hacer con un bucle while:
let i = 0;
while (i < regalones.length) {
    console.log(regalones[i]);
    i++;
}

// Mucho más sencillo con for - of. 