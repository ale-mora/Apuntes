

//  F U N C I O N E S 

/* Una función es un bloque de código reutilizable que se utiliza para realizar una tarea específica. 
Las funciones se utilizan para dividir el código en partes más pequeñas y manejables, lo que facilita 
su lectura, mantenimiento y reutilización. Se utiliza la palabra reservada 'Function'.*/

function saludar() {
    console.log('holaaaaaa');
}

// Para llamar una función, se debe escribir su nombre.

saludar();

// Funcion para sumar valores:

function suma() {
    return (5+5)/4;
}

//Para usar el valor de la funcion "suma", se debe definir una variable que es el resultado de dicha función:

let resultado = suma();

console.log(resultado)


// También se puede realizar de la siguiente forma:

console.log(suma())
