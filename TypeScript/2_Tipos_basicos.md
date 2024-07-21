
Iniciar Compilador TS

1.- Ejecuta el siguiente comando para compilar tu archivo TypeScript:

tsc nombre-del-archivo.ts

Ejecuta el archivo JavaScript resultante:

node nombre-del-archivo.js

Esto ejecutará el código JavaScript correspondiente al archivo TypeScript.


===> TIPOS BÁSICOS <===

Ademas de los tipos nativos de JS: number, string, boolean, null, undefined, object (Listas es un objeto en JS), function.
Dentro de los tipos que agrega TS, se encuentran:

    a. any: (no usarlo).
    b. unknown:
    c. never:
    d. arrays:
    d. tuplas:
    e. enums:  

También TS agrega una funcionalidad denominada 'tipos inferidos' que se refiere al proceso mediante el cual el compilador deduce automáticamente el tipo de una variable, función o expresión en función de su contexto y valor. Lo que significa que no es necesario definir el tipo de variable de forma expresa cuando se inicializa (asignarle un valor cuando la declara). Si no se inicializa la variable declarada, se le asigna el tipo de 'any'.

El tipo 'any' no debe utilizarse: 

El tipo 'any' permite asignarle cualquier valor a las variables, es decir, poder ser cambiado en un futuro. 
Con todo, las variables en typescript no necesitan ser especificados en cuanto al tipo de dato, si éstas son inicializadas de forma inmediata, es decir, asignarle un valor en el mismo momento en que se declara. Pero si no son inmediatamente inicializadas, se deben asignar un tipo.
Sin embargo, no es recomendable dejar una variable sin un tipo ni un valor, porque se pierde el poder verificar que se están utilizando los tipos correctos, cuando se está programando. 

===> TIPO ARRAY <===

Un array es una colección ordenada de elementos. En TypeScript, puedes usarlos para almacenar una serie de valores. Estos elementos pueden ser de diferentes tipos de datos, como números, cadenas, objetos o incluso otros arrays. La gran ventaja de TypeScript es que admite tipado estático, lo que significa que puedes especificar el tipo de datos de los elementos dentro del array. 

let miArray: tipoDeDato[] = [elemento1, elemento2, ...];

2da Forma de especificar:

let miArray2: Array<number> = [];

al especificar un tipo de dato, TS muestra sugerencias de métodos que sólo son aplicable al tipo de datos en cuestión.

===> TIPO TUPLAS <===

Es una variable que contiene un set de datos que se encuentran ordenados y permiten contener diferentes tipos de datos especificados. 
Ej.1:

let tupla: [number, string]=[1, "Dora"];

Sólo se permite el ingreso de datos que ya estén definidos previamente '[number, string]'.

Ej. 2: Arreglos en Tuplas:

let tupla2: [number, string[]] = [1, ["dora", "Rex"]]      --> Arreglo de string: string[]

Ej.3

type RegistroEmpleado = [number, string, string, string?];
const empleados: RegistroEmpleado[] = [
  [0, "Adankwo", "adankwo.e@"],
  [1, "Kanokwan", "kanokwan.s@"],
  [2, "Aneurin", "aneurin.s@", "Supervisor"],
];

===> TIPO ENUMS <===

Es una herramienta útil para definir conjuntos de constantes con nombres. Permiten agrupar valores relacionados y facilitan la documentación de la intención detrás de esos valores. Es un tipo enumerado, una lista de constantes que se pueden referenciar en un futuro. 

Ejemplo N°1:

En vez de esto:

const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';

Se puede hacer de este modo: (usar pascal case)

enum Talla {Chica, Mediana, Grande, ExtraGrande}

El compilador de TS, asigna valores a las variables por defecto:

Chica = 0,
Mediana = 1... 

Pero se le puede asignar otro valor:

enum Talla {Chica = 3, Mediana, Grande, ExtraGrande}

Aquí empezaría de 3.

Para asignar otros valores:

enum Talla {Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}

Ejemplo N°2: ( se usa para estados de carga principalmente )

enum LoadingState {Idle, Loading, Success, Error}

Se puede agregar un 'const' antes de 'enum', para que no se carguen hasta que sean inicializadas, sería un codigo más optimizado:

const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success; --> en JS genera 'const estado' = 2 solamente.


===> OBJETO <===

// objeto con tipos implicitos:
const objeto = {id: 1, nombre: 'Hola'};

// Objeto con valores explicitos:
const objeto2:{
    id:number,
    nombre: string,
} = {id: 1, nombre: 'Hola'};

// Se puede dejar una propiedad como opcional usando '?' al final de ella.
const objeto3:{
    id:number,
    nombre?: string,
} = {id: 1};

// Para definir propiedades que no se puedan cambiar, se usa 'readonly':
const objeto4:{
    readonly id:number,
    nombre: string,
    apellido: string,
} = {id: 1, nombre: 'Don', apellido: 'Pollo'};

// Se puede utilizar enum para agregar propiedades (Se usa el enum 'Talla'):

const objeto5:{
    readonly id:number,
    nombre: string,
    apellido: string,
    talla: Talla,
} = {id: 1, 
    nombre: 'Don', 
    apellido: 'Pollo', 
    talla: Talla.Grande
};


// Definir el objeto en otro lado, se usa type:

type Persona = {         // se define Persona como un tipo.
    readonly id1:number,
    nombre1: string,
    apellido1: string,
    talla1: Talla, 
};

const objeto6: Persona = {
    id1: 1, 
    nombre1: 'Don', 
    apellido1: 'Pollo', 
    talla1: Talla.Grande,
};

// Objeto dentro de un objeto: 

type Direccion = {
    numero: number,
    calle: string,
    pais: string,
};

type Persona_objeto = {         // se define Persona como un tipo.
    id1:number,
    nombre1: string,
    apellido1: string,
    talla1: Talla,
    direccion: Direccion,
};

const objeto7: Persona_objeto = {
    id1: 1, 
    nombre1: 'Don', 
    apellido1: 'Pollo', 
    talla1: Talla.Grande,
    direccion: {
        numero: 21,
        calle: 'Irarrazabal',
        pais: 'Chule',
    }
};


==> FUNCIONES <== 

Declaración de Funciones:
Para crear una función, utilizamos la palabra clave function, seguida del nombre de la función y un par de paréntesis ().

Por ejemplo:
 saludar(nombre: string): void {
  console.log(`¡Hola, ${nombre}!`);
}

**Parámetros y Argumentos:
Los parámetros son los valores que una función espera recibir. Los especificamos dentro de los paréntesis.
Los argumentos son los valores reales que pasamos a la función cuando la llamamos.

Ejemplo:

function suma(a: number, b: number): number {
  return a + b;
}
const resultado = suma(3, 5); // resultado es 8

**Tipos de Retorno:
Especificamos el tipo de retorno de una función utilizando : tipo.
Si una función no devuelve nada, usamos void.

Ejemplo:

function decirHola(): void {
  console.log("¡Hola desde TypeScript!");
}

**Funciones con Tipos Genéricos:
TypeScript permite crear funciones genéricas que trabajan con diferentes tipos de datos.

Ejemplo:

function longitud<T>(array: T[]): number {
  return array.length;
}
const nombres = ["Alice", "Bob", "Charlie"];
const cantidadNombres = longitud(nombres); // cantidadNombres es 3

**Funciones Flecha (Arrow Functions):
Las funciones flecha son una forma más concisa de escribir funciones.

Ejemplo:

const duplicar = (numero: number): number => numero * 2;

**Funciones como Parámetros:
Podemos pasar funciones como argumentos a otras funciones.

Ejemplo:

function ejecutarOperacion(operacion: (a: number, b: number) => number): number {
  return operacion(10, 5);
}
const sumaResultado = ejecutarOperacion(suma); // sumaResultado es 15

**Funciones Anónimas:
También podemos crear funciones sin nombre (funciones anónimas) y asignarlas a variables.

Ejemplo:

const multiplicar = function (a: number, b: number): number {
  return a * b;
};

**Siempre se deben especificar el valor de retorno (return):

function validaEdad(edad: number): string {
  if (edad > 17)
    return "Puedes pasar";
  return "No puedes pasar"
};

Agregando más argumentos:

function validaEdad(edad: number, msg: string): string {
  if (edad > 17)
    return "Puedes pasar ${msn}";
  return "No puedes pasar ${msg}"
};


===> TIPO NEVER <===

Es un tipo de retorno que tienen las funciones y se utiliza cuando se tienen funciones que retornan una excepción.
