

//  C L O N A R  O B J E T O S 

let punto = {
    x: 10,
    y:15,
};

//console.log(punto)

// Para clonar el objeto punto en otro objeto, se utiliza el método de Object "assing()":

// Object.assign(); 

// Permite asignar las propiedades que se encuentran a la derecha a los objetos de la izquierda.

Object.assign(punto, {z: 20}); 

// Los siguientes argumentos despues de "punto" se asignan a éste. 

console.log("Objeto punto original:", punto);

// Para clonar objetos usando 'assing', se pone un objeto vacio antes que debe tener una referencia.

let clon_punto = Object.assign({}, punto);

console.log("Objeto punto clonado: ",clon_punto);

// Si se quiere cambiar una propiedad al objeto clonado:

let clon_punto1 = Object.assign({}, clon_punto, {x: 5} );

console.log("Objeto de punto clonado con cambios: ", clon_punto1, "(Se cambió propiedad: x)");

// Las propiedades de la derecha se prefieren por sobre las otras.

// PREGUNTAR: ¿SON EXACTAMENTE LO MISMO O SON UNA COPIA? ¿PARA EFECTOS PRÁCTICOS ES RELEVANTE?.

// Para realizar una copia exacta sin mas ni menos propiedades: 

let copia_punto1 = Object.assign({}, clon_punto1)

console.log("Copia de objeto clonado con cambios: ", copia_punto1);

// Nueva forma de copiar objetos: "spread operator":

let copia_punto2 = { ...copia_punto1};

console.log("Copia de objeto clonado con cambios usando ' ...': ", copia_punto2);

// Forma antigua con 'for' y 'let':

let copia_punto3 = {};
for (let llave in copia_punto2){
    copia_punto3[llave] = punto[llave];
}

console.log("Copia de objeto clonado con cambios usando 'for' y 'let': ", copia_punto3, 
    "(Esta forma no toma los valores de cambio de propiedad anterior x: 5)"
)
