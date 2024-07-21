


// V A C I A N D O   A R R A Y S :

// Existen 4 formas de vaciar un Array:

let array1 = [1, 2];
console.log("El contenido del Array 1 es:", array1);

// 1. Asignarlo nuevamente a un array vacío: (NO RECOMENDADO)

array1 = [];
console.log("El Array 1 está vacío:", array1);


// 2. Manipulando la longitud del array y colocarlo en 0. (FORMA COMÚN)

let array2 = [1, 2];
console.log("El contenido del Array 2 es:", array2);

array2.length = 0;
console.log("El Array 2 está vacío:", array2);

// 3. Haciendo un splice() al Array:  (LA MÁS EXPLICITA)

let array3 = [1, 2];
console.log("El contenido del Array 3 es:", array3);

array3.splice(0, array3.length); 
console.log("El Array 3 está vacío:", array3);

// 4. Usando un LOOP (while) junto con el método.pop(): (NO SE DEBE UTILIZAR)

let array4 = [1, 2];
console.log("El contenido del Array 4 es:", array4);

while (array4.length > 0 ) {
    array4.pop();
};
console.log("El Array 4 está vacío:", array4);
