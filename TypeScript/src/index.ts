let mensaje: string = "Hola"; // Aquí se agrega un 'breakpoint'.

let tupla: [number, string] = [1, "Dora"];
console.log(tupla);

let tupla2: [number, string[]] = [1, ["dora", "Rex"]];
console.log(tupla2);

const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";

enum Talla {
    Chica = "s",
    Mediana = "m",
    Grande = "l",
    ExtraGrande = "xl",
}
const variable1 = Talla.Mediana;
console.log(variable1);

// objeto con tipos implicitos:
const objeto = { id: 1, nombre: "Hola" };

// Objeto con valores explicitos:
const objeto2: {
    id: number;
    nombre: string;
} = { id: 1, nombre: "Hola" };

// Se puede dejar una propiedad como opcional usando '?' al final de ella.
const objeto3: {
    id: number;
    nombre?: string;
} = { id: 1 };

// Para definir propiedades que no se puedan cambiar, se usa 'readonly':
const objeto4: {
    readonly id: number;
    nombre: string;
    apellido: string;
} = { id: 1, nombre: "Don", apellido: "Pollo" };

// Se puede utilizar enum para agregar propiedades (Se usa el enum 'Talla'):

const objeto5: {
    readonly id: number;
    nombre: string;
    apellido: string;
    talla: Talla;
} = { id: 1, nombre: "Don", apellido: "Pollo", talla: Talla.Grande };

// Definir el objeto en otro lado, se usa type:

type Persona = {
    // se define Persona como un tipo.
    readonly id1: number;
    nombre1: string;
    apellido1: string;
    talla1: Talla;
};

const objeto6: Persona = {
    id1: 1,
    nombre1: "Don",
    apellido1: "Pollo",
    talla1: Talla.Grande,
};

// Objeto dentro de un objeto:

type Direccion = {
    numero: number;
    calle: string;
    pais: string;
};

type Persona_objeto = {
    // se define Persona como un tipo.
    id1: number;
    nombre1: string;
    apellido1: string;
    talla1: Talla;
    direccion: Direccion;
};

const objeto7: Persona_objeto = {
    id1: 1,
    nombre1: "Don",
    apellido1: "Pollo",
    talla1: Talla.Grande,
    direccion: {
        numero: 21,
        calle: "Irarrazabal",
        pais: "Chule",
    },
};

function validaEdad(edad: number): string {
    if (edad > 17) return "Puedes pasar";
    return "No puedes pasar";
}
console.log(validaEdad(18));

function validaEdad1(edad: number, msg: string): string {
    if (edad > 17) 
        return `Puedes pasar, ${msg}.`;
    return `No puedes pasar, ${msg}.`;
}
console.log(validaEdad1(18, "Don Pollo"));