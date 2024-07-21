


// A G R E G A R   E L E M E N T O S 


// Es una estructura de datos que permite almacenar multiples valores del mismo tipo en una sola variable. 
// Los arrays se diferencian de una lista al tener elementos del mismo tipo en una secuencia ordenada. 
// Una lista tiene varios tipos de datos. 
// Se puede agregar elementos a un array de 3 formas:

const letras = ['a', 'b']
console.log("Contenido del array 'letras': ", letras)

// Al final del array con el método 'push()':

letras.push('c', 'd')
console.log("Se agregan los elementos 'c' y 'd' al final del array 'letras': ",letras)

// Al inicia del array con el método 'unshift()':

letras.unshift('x', 'y', 'z')
console.log("Se agregan los elementos 'x', 'y' y 'z' al comienzo del array 'letras': ",letras)

// Si se quiere Ingresar un elemento al Array en una posición particular se usa 'splice()': 
// (tambien se utiliza para borrar y/o reemplazar elementos)

letras.splice(3, 0, 1, 2)
console.log("Se agregan los elementos '1' y '2' en el indice N°3 del array 'letras': ",letras)

//  splice(índice, borrar(0 = no), elementos a ingresar, ... , ...)