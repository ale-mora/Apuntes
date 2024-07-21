

// A T A J O S   L I T E R A L E S   D E   C O N S T R U C T O R E S 

// * Formas de crear objetos:

// 1. Sintaxis literal:

// No se ocupa mucho.

let DonPollo = {
  propiedad1: 'valor1',
  propiedad2: 'valor2',
  metodo1: function() {
    console.log("DonPollo")
  }
};

console.log(DonPollo)

// 2. Función Constructora: 

// (El objeto en sí se hace en un archivo aparte. [getter setter] )

function constructor() {
    this.name = "Don Pollo ";
    this.edad = 12; 
    }
  
  let DonPollo1 = new constructor();
  
  console.log(DonPollo1.constructor);

// 3. Llamar al constructor de objetos:

let DonPollo2 = new Object(); 
console.log(DonPollo2)

let numeros = new Number(12)
console.log(numeros)

let listas = new Array([1,3,4,"holas"]);     
console.log(listas)
 
let estrings = new String("Holas!!!");
console.log(estrings)
  
let booleanos = new Boolean(true);
console.log(booleanos)   


  
// 
