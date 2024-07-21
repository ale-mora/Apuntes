


// E L I M I N A R   E L E M E N T O S :

// Se puede ELIMINAR elementos a un array de 3 formas:

const letras = ['a', 'b', 'c', 'd', 'e']
console.log("Contenido del array 'letras': ", letras)

// Al final del array con el método 'pop()':

letras.pop()
console.log("Se elimina el último elemento ('e') del array 'letras': ",letras)

// Al inicio del array con el método 'shift()':

letras.shift()
console.log("Se elimina el primer elemento ('a') del array 'letras': ",letras)

// Si se quiere ELIMINAR un elemento al Array en una posición particular se usa 'splice()': 

letras.splice(1, 1) // Se elimina 1 elemento del array desde el elemento 1 
console.log("Se elimina el elemento N°1 ('c') del array 'letras': ",letras)

//  splice(índice, borrar(desde e inclusive), elementos a ingresar, ... , ...)