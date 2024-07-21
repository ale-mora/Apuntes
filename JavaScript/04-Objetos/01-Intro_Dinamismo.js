/*

I N T R O D U C C I O N   Y   D I N A M I S M O 

Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre 
(o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad 
es conocida como un método. Los objetos son fundamentales en JavaScript porque permiten agrupar 
datos y funciones relacionadas, lo que facilita la organización y el manejo de la información compleja.

Propiedades y Métodos:

1. Las propiedades de un objeto definen sus características, como el color, tamaño o posición.
2. Los métodos son funciones asociadas a un objeto que pueden realizar acciones sobre los datos 
del objeto o realizar operaciones relacionadas con él.

La programación orientada a objetos (POO) busca encapsular datos comunes entre sí.


Ejemplo: Objeto 'usuario':
*/

let usuario = {
    nombre: 'Alejandro',
    apellido: 'Mora',
    edad: (35, ' años'),
    email: 'mora.vega.ale@gmail.com',
    direccion: {                         // Propiedad dentro de una propiedad.
        calle: 'Miguel Claro',
        numero: '2550',
        depto: '601'
    },                                   // Se pueden agregar otros tipos de propiedades y valores.
    desarrollador: true,                 // Valores Booleanos
    recuperar_clave: function () {       // Método. Son acciones que se pueden hacer con el objeto.
        console.log('Recuperando Clave ...')
    }
};

/* Objetos Dinámicos:

Se refiere a la capacidad de los objetos para cambiar durante la ejecución del programa. Se puede agregar, 
modificar y eliminar propiedades y métodos de los objetos en cualquier momento. Esto es posible gracias a 
la naturaleza flexible y no estática de los objetos en JavaScript.*/

// Ejemplo:

const user = { id: 101 };        // Objeto constante.

// Se le agregan propiedades:
user.name = 'DonPollo';
user.aprendiendo = function () {
    console.log(user.name, 'está aprendiendo.')
}
user.aprendiendo()

// Para borrar propiedades se utiliza 'delete':

delete user.aprendiendo;
console.log(user);

/* CUANDO SE DEFINE UNA VARIABLE CON LA PALABRA RESERVADA DE 'CONST', NO PODEMOS CAMBIARLE EL VALOR A ESA 
VARIABLE. PERO SI EL VALOR QUE SE LE ASIGNA A ESA VARIABLE ES DE UN OBJETO, SI SE PUEDE CAMBIAR EL VALOR DE
LAS PROPIEDADES DE DICHO OBJETO O TAMBIEN PODEMOS AGREGARLE O QUITARLE PROPIEDADES. lO QUE NO SE PUEDE HACER, 
ES QUE DEJE DE SER UN OBJETO. CON TODO, SI SE REQUIERE QUE EL OBJETO NO SE PUEDA MODIFICAR, SE UTILIZA 
EL MÉTODO DE "OBJECT.FREEZE". */

const user1 = Object.freeze({ id: 1 });
user1.name = 'DonPollo';
console.log(user1);

// Para cambiar el valor a las propiedades que ya tiene pero no agragar ni quitarle propiedades se utiliza:

const user2 = Object.seal({ id: 1 });
user2.name = 'DonPollo';         // No se cambia.
user2.id = 2                    // Se cambia.
console.log(user2);