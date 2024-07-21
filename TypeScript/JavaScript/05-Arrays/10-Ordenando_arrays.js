


// O R D E N A N D O   A R R A Y S :


let array1 = [69, -53, 4, -93, -72, -37, -45, -18, 14, -55]
console.log("Este es el array original:", array1)


// Método sort():
array1.sort()
console.log("Este es el array ordenado con el método sort() de menor a mayor:", array1)

// Métopdo reverse():
array1.reverse()
console.log("Este es el array ordenado con el método reverse() de mayor a menor:", array1)

// Estos métodos funcionan con caracteres de la ´a´ a la 'z': 

let letras = ["M", "D", "D", "L", "K", "X", "E", "F", "Z", "B"];
console.log("Este es el array letras original", letras);
letras.sort();
console.log("Este es el array letras ordenado:", letras);

// Al método sort se le puede pasar argumentos con las arrow functions (REVISAR).

/*
function generarArrayLetrasAleatorias() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arregloLetras = [];
    for (let i = 0; i < 10; i++) {
        let letraAleatoria = letras.charAt(Math.floor(Math.random() * letras.length));
        arregloLetras.push(letraAleatoria);
    }
    return arregloLetras;
}

let arrayLetrasAleatorio = generarArrayLetrasAleatorias();
console.log(arrayLetrasAleatorio);

function array_ale() {
    let arreglo = [];
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * 200) - 100;
        arreglo.push(num);
    }
    return arreglo;
}

let array = array_ale();
console.log(array);
*/