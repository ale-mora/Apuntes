

//  D A T O S   P U B L I C O S   Y   P R I V A D O S 


// Cuando se ocupa la función constructor para crear objetos:

function Usuario(name, last_name, pass) {
    this.name = name;
    this.last_name = last_name;
    this.pass = pass;
    this.recuperarClave = function () {
      console.log("Recuperando clave ...");
    };
  }


// Nuevo objeto:

const usuario1 = new Usuario("Patricia", "Vega", 654321);
console.log(usuario1)

const usuario2 = new Usuario("Alejandro", "Mora", 123456);
console.log(usuario2)

let usuario3 = { ...usuario2 }
console.log(usuario3)

// Recordar que para acceder a una propiedad en específico, se realiza de la siguiente manera:

// usuario2.pass;

// Para que esa propiedad del objeto no sea aplicable a otro objeto:

function Usuariob(name1, last_name1, pass1) {
    let id1 = 1;                            // Se utiliza 'let' para que no sea publica.
    this.name1 = name1;
    this.last_name1 = last_name1;
    this.pass1 = pass1;
    let recuperarClave1 = function () {       // Se utiliza 'let' para que no sea publica.
      console.log("Recuperando clave ...");
  };
}

const usuariob1 = new Usuariob("Camila", "Silva", 9876 );
console.log(usuariob1)

// id1 y recuperarClave1 está declarada dentro de la función constructora, 
// pero no se asigna como una propiedad del objeto creado.

console.log(usuariob1.id1);                 // Devuelve 'undefined'.
console.log(usuariob1.recuperarClave1);     // Devuelve 'undefined'.
console.log(usuariob1.name1);               // Devuelve el valor de la propiedad 'name1'.
console.log(usuariob1.last_name1);          // Devuelve el valor de la propiedad 'last_name1'.



