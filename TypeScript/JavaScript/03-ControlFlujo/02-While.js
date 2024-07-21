

// F L U J O   W H I L E 

/* Es una estructura de bucle que permite ejecutar un bloque de código repetidamente mientras una condición 
especificada sea verdadera. Si la condición es verdadera (true), se ejecuta el bloque de código asociado.
Si la condición es falsa (false), el bucle termina y la ejecución continúa con la sentencia posterior al bucle.*/

/* Existen 5 tipos de loops en Javascript y tienen sutiles diferencias:

1. While;
2. Do While;
3. For;
4. For in;
5. For of.

* Sintaxis:

while (condición) {
    variable 1
    variable 2
    etc.
    - IMPORTANTE - Algo que ocurra para salir del loop -
}

Ejemplo: Imprimir números del 0 al 10.*/

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log('Se imprimieron los números del 0 al 9');

// Ejemplo 2,  impresión de números pares:


let ii = 0;
while (ii < 10) {
    if (ii % 2 == 0) {
        console.log('Numero par: ', ii);
    }
    ii++;
}
console.log('Se imprimieron los números pares del 0 al 8');

// Ejemplo 3, Impresión de números impares:

let iii = 0;
while (iii < 10) {
    if (iii % 2 == 1) {
        console.log('Numero impar: ', iii);
    }
    iii++;
}
console.log('Se imprimieron los números pares del 1 al 9');


// L O O P S   I N F I N I T O S 

let j = 0;
while (j < 10) {
    console.log(j);
    j++; // SI SE BORRA ESTA LÍNEA, QUE ES LA CONDICIÓN PARA QUE SE DETENGA EL LOOP, SE HARÍA INFINITO.
}
console.log('Se imprimieron los números del 0 al 9');