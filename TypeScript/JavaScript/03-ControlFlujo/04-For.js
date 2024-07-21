

/* B U C L E   F O R :

Es una estructura de control que te permite repetir un bloque de código un número específico de veces. 
Es especialmente útil cuando sabes cuántas iteraciones (repetición del bucle) deseas realizar. 

* Sintaxis:

for ([expresion-inicial]; [condicion]; [expresion-final]) {
    Sentencia a ejecutar
}

1. expresion-inicial: Una expresión o declaración de variable. Por lo general, se utiliza como contador.
2. condicion: Una expresión que se evalúa antes de cada iteración. Si es verdadera, se ejecuta la sentencia.
3. expresion-final: Una expresión que se evalúa al final de cada iteración. Generalmente se usa para actualizar 
o incrementar el contador.
4. sentencia: La instrucción que se ejecuta mientras la condición sea verdadera.

Ejemplo: 
*/
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('Se imprimieron los números del 0 al 9');

// For es similar a While.

// Impresión números pares:

for (let ii = 0; ii < 10; ii++) {
    if (ii % 2 == 0)
        console.log(ii)
}
console.log('Se imprimieron los números pares del 0 al 9');
