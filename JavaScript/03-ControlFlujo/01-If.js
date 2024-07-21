

// Estructura de Control: IF

/*Es una estructura de control que nos permite evaluar una expresión lógica y ejecutar un código 
en función del resultado de dicha evaluación.*/

// S I N T A X I S :


// Para una sola expresión: 

/*if (condicion) Si la condicion es true, se ejecuta, mientras que si es false, se omite.
expresión*/


// Para varias expresiones se utiliza '{}':

/*if (condicion1) {
expresion1
expresion2
}*/

// Ejemplo:

let edad = 18;

if (edad > 17) {
    console.log('Usuario mayor de edad');
}

// Agregar 'else'

let edad1 = 16;

if (edad1 > 17) {
    console.log('Usuario mayor de edad');
} else {
    console.log('Usuario menor de edad')
}

// Más de una condición:

let edad2 = 1;

if (edad2 > 17) {
    console.log('Usuario mayor de edad');
} else if (edad2 > 13) {    // Es como Elif de Python.
    console.log('Menor de edad, debe estar acompañado de sus padres.')
} else {
    console.log('Usuario menor de edad, no puede ingresar.')
}

/*La priimera condición que se cumpla se va a ejecutar y el resto será ignorado. */