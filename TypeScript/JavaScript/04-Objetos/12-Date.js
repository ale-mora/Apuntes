

// O B J E T O   D A T E  


// Permite trabajar con fechas. 

// Muestra la hora del computador:
const hoy = new Date();
console.log(hoy)

// Muestra una hora en particular con el mismo GTM del pc:
const fecha = new Date('December 11 1986');
console.log(fecha);

// Otro formato de fecha:
const fecha1 = new Date('1986, 12, 11, 21:30:56');
console.log(fecha1);

// Otros métodos:

console.log("Formato DateString:", hoy.toDateString());
console.log("Formato ISOString (más utilizado):", hoy.toISOString());
console.log("Formato TimeString:", hoy.toTimeString());

// Para todos los objetos de fecha (date), existen métodos 'get':

console.log("Método get para año: ", hoy.getFullYear());


// Para cambiar propiedades de los objetos 'date', metodo 'set':

hoy.setFullYear(-1233)
console.log("Método set para cambiar año: ", hoy);