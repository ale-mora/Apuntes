
// C O N S T A N T E S 

// Se pueden reasignar los valores de las variables una vez definidas:
let nombres = ('hola, soy don pollo');
nombres = ('Tambien soy el pollo');

// El valor será el último asignado.
console.log(nombres)

/* Sin embargo, existe un tipo especial de variable cuyo valor no puede ser modificado una 
vez que ha sido asignado. A diferencia de las variables regulares, que se pueden actualizar 
a lo largo de la ejecución de un programa, las constantes mantienen su valor original durante 
toda su vida útil, que se denominan CONSTANTES.*/

// Ejemplo: 

const MI_CONSTANTE = 42;
console.log("El valor de la constante es " + MI_CONSTANTE);
