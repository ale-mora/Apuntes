/*

C O N T I N U E   Y   B R E A K 


Continue y break son palabras clave utilizadas en bucles para controlar el flujo de ejecución.

*Continue: Se utiliza dentro de un bucle (como for, while o do...while) 
para saltar a la siguiente iteración sin ejecutar el resto del código dentro del bucle para la 
iteración actual. Cuando se encuentra un continue, se omiten las instrucciones restantes en esa 
iteración y se pasa a la siguiente. Es útil cuando deseas evitar ciertas condiciones o procesar 
solo algunos elementos en un conjunto.

Ejemplo:
*/

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;         // Salta la iteración cuando i es 2
    }
    console.log(i);
}

// Imprime: 0, 1, 3, 4

/*
* Break: Se utiliza para salir completamente de un bucle antes de que se complete su ciclo normal.
Cuando se encuentra un break, se detiene la ejecución del bucle y se sale de él.
Es útil cuando deseas finalizar un bucle anticipadamente, por ejemplo, cuando se cumple una 
condición específica.

Ejemplo:
*/

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Sale del bucle cuando i es 3
    }
    console.log(i);
}

// Imprime: 0, 1, 2


