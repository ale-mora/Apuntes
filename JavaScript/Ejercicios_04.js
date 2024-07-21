// E J E R C I C I O S   U N I D A D  4

// 1. Crear una función (FUNCIÓN CONSTRUCTOR) que construya usuarios y que se les asigne una id al azar:

function usuarios(name, last_name, email, phone) {
    this.id = Math.floor(Math.random() * 10);
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    let saludo = function saludar() {
        console.log("¡Hola Alejandro!, ¿Cómo estás?");
    };
}

// Usuario 1.
let usuario1 = new usuarios(
    "Alejandro",
    "Mora",
    "correo1@correo1.cl",
    97198859
);
console.log(usuario1);

// Usuario 2.
let usuario2 = new usuarios("Patricia", "Vega", "correo2@correo2.cl", 12345678);
console.log(usuario2);

// Usuario 3.
let usuario3 = new usuarios("Lautaro", "Mora", "correo3@correo3.cl", 56781234);
console.log(usuario3);

// 2. Realizar el ejercicio anterior utilizando Factory Functions:

// (PREGUNTAR SOBRE EL USO Y DIFERENCIA DE LOS FACTORY FUNCTIONS)
// (No se ocupan)

function FF_usuarios(name1, last_name1, email1, phone1) {
    return {
        id1: Math.floor(Math.random() * 10), //  !!! (buen logro =D no sabía como poner el id en FF )
        name1,
        last_name1,
        email1,
        phone1,
        saludo1: function () {
            console.log("¡Hola Alejandro!, ¿Cómo estás?");
        },
    };
}

let ff_usuario1 = FF_usuarios(
    "Lucinda",
    "Mora",
    "correo4@correo4.cl",
    13467982
);
console.log(ff_usuario1);

// PREGUNTAR COMO SE UTILIZAN LOS METODOS DENTRO DE LAS FUNCIONES. No se ocupan, siempre tienen objetivos especificos. Se aplican dentro de las clases

// 3. Crear una función que permita saber si 2 objetos son similares (mismas propiedades y valores),
//    con la siguiente estructura:

function similares(objt1, objt2) {
    if (objt1.id == objt2.id && objt1.nomb == objt2.nomb) {
        console.log("Son iguales");
    } else {
        console.log("No son iguales");
    }
}

let resultado = similares({ id: 1, nomb: "Rex" }, { id: 1, nomb: "lucinda" });

console.log(resultado);

// Lo anterior es en el caso de que se sabe las propiedades y los valores de cada objeto.
// Construir una función que no se sepa, utilizar usuario1, usuario2.
// método Object.keys retorna un array de las propiedades de un objeto.

// (REVISAR OBJECT.KEYS) (equals() ==> función nativa.)

let ejemp = Object.keys(usuario1);
console.log("Ejempo de Object.keys(): ", ejemp);

function similares2(objt3, objt4) {
    // Función que toma 2 argumentos.
    let prop1 = Object.keys(objt3); // Se toman las propiedades de dichos objetos con el método keys.
    let prop2 = Object.keys(objt4);

    if (prop1.length !== prop2.length) {
        // Se comparan las propiedades de ambos objetos, si son distintas
        return false; // retorna false y termina, si son iguales, continúa.
    }
    for (let propiedades of prop1) {
        if (objt3[propiedades] !== objt4[propiedades]) {
            // si un valor de las propiedades del objetos son disntintas
            return false; // retorna false y el programa termina.
        }
    }
    return true;
}

// Ejecución:

console.log(similares2(usuario2, usuario1)); // Devuelve false al comparar usuario2 con usuario1.

// 4. Construir una función que determine cuáles propiedades de un objetos son métodos:

function cual_met(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "function") {                   // == comparar valores, === compara valores y tipos.
            console.log(
                " En el objeto, hay un metodo denominado: ",
                key,
                ", que contiene lo siguiente: ",
                obj[key]
            );
        } else {
            console.log("No hay métodos en el objeto");
        }
    }
}

cual_met(ff_usuario1); // Se llama a la función.

// 5. Crear una función que evalúe si un objeto tiene una propiedad en particular:
// (Se debe usar el operador 'for in' para verifivar la existencia de una propiedad
// en un objeto).

// Revisar ""ff_usuario1.hasOwnProperty('name1')"
function ver_prop(objeto1, propiedad1) {
    if (objeto1.hasOwnProperty(propiedad1)) {
        return console.log(
            "La propiedad ",
            propiedad1,
            "sí se encuentra en el objeto."
        );
    } else {
        return console.log(
            "La propiedad ",
            propiedad1,
            "no se encuentra en el objeto"
        );
    }
}

// Se llama a la función:
ver_prop(ff_usuario1, "name1");
console.log(ff_usuario1.hasOwnProperty("name1"));

// Otra forma:     // ME COSTÓ DEMASIADO


// Se construye Objeto:
let prueba_prop = {
    prop1: "valor1",
    prop2: "valor2",
    prop3: "valor3",
};

let propiedades = 'prop1';

function ver_prop1(obj, propiedades) {
    let props = Object.keys(obj);           // Si iteras sobre los valores de las propiedades del objeto, se usa 'FOR OF'
    console.log(props);                     // props es una array con las propiedades del objeto.
    for (let prop of props) {
        if (propiedades == prop) {
            return true;
        }
    }
    return false;
};

// Se llama a la función:
console.log(ver_prop1(prueba_prop, propiedades));

/*
* N O  O L V I D A R : 

 * FOR ... IN:
Itera sobre todas las propiedades enumerables de un objeto.
Devuelve los nombres de las propiedades (claves) en cada iteración.
Puede ser utilizado para iterar sobre las propiedades de cualquier objeto.
No es recomendable usarlo en arrays porque no garantiza el orden de iteración 
y puede incluir propiedades adicionales que no son índices del array

* FOR ... OF:
Itera sobre los valores de un objeto iterable como Array, String, Map, Set, etc.
Devuelve los valores de los elementos en cada iteración.
Es específico para colecciones y utiliza el protocolo iterable de JavaScript.
Es la opción recomendada para iterar sobre arrays y otros objetos iterables
 */

// 6. Crear una función que permita crear una copia de un objeto como argumento, sin usar '...' ni 'Object.assing()':

let usuario_clon = {};
console.log(`"usuario_clon" tiene las siguientes propiedades:`, usuario_clon)
console.log(`"usuario1" tiene las siguientes propiedades:`, prueba_prop);


function clonador_obj(obj_orig, obj_clon) {
    for (let key in obj_orig) {
        obj_clon[key] = obj_orig[key];      // ¿Porqué este orden y no al revés? Porque se está asignando un valor.
    }
    console.log("Copia completada.")
    return obj_clon;
};

clonador_obj(prueba_prop, usuario_clon)

console.log(`El objeto "usuario_clon" tiene ahora las propiedades:`, usuario_clon)
console.log(`El objeto "usuario1" sigue manteniendo sus propiedades:`, prueba_prop);

// 7. Crear una función que permita tomar un objeto y agregarle una propiedad (id, generado de forma aleatoria).

let usuario_1 = {
    nombre: "Carmelita",
    edad: 10,               // Una propiedad, ¿Puede tener 2 valores? Por ej. un string y un number.
    especie: "Gatuna"
}
console.log(usuario_1)

function agre_prop(usuario) {
    Object.assign(usuario, { id: (Math.floor((Math.random() * 10))) });
    return usuario;
};

console.log(agre_prop(usuario_1));
