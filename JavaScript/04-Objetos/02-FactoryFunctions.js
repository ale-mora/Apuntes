/*

F A C T O R Y   F U N C T I O N S 


* Se denominan también funciones de fábrica. Son funciones que devuelven objetos. 
A diferencia de las funciones constructoras o de clase, no necesitas usar la palabra 
clave new para crear un objeto. En lugar de eso, simplemente crean un objeto y lo retornan
(CREA Y DEVUELVE OBJETOS). 
En JavaScript, cualquier función puede devolver un objeto. Cuando lo hace sin la palabra 
clave new, se considera una factory function. */

// Ejemplo de un constructor de objetos:

let user1 = {
    id: 1,
    email: "mora.vega.ale@gmail.com",
    name: "Alejandro Mora",
    activo: true,
    recuperarClave: function(){
        console.log('recuperando clave...');
    },
};


// ¿Qué pasaría si se necesita crear múltiples usuarios con una estructura similar?
// Para este tipo de cosas se utiliza los Factory Function.

function factFun(name, email){
    return {
        name,
        email,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user = factFun('don Pollo', 'donpollo@email.com')
console.log(user)
