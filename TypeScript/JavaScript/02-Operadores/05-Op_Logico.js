

// O P E R A D O R E S    L O G I C O S 

// AND: Se expresa como '&&'

console.log(true && true)         // true
console.log(false && true)       // false
console.log(true && false)      // false
console.log(false && false)    // true

// Ejemplo con plataforma streaming:

let mayor = true;
let suscrito = true;
let catalogoInfantil = !mayor;
console.log('Operador AND', mayor && suscrito);

// OR: Se expresa como '||'.
console.log('Operador OR', mayor || suscrito)

// NOT: Se expresa como '!' antes de la variable.

console.log('Operador NOT', !mayor);

