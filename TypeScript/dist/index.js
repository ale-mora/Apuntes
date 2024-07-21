"use strict";
let mensaje = "Hola";
let tupla = [1, "Dora"];
console.log(tupla);
let tupla2 = [1, ["dora", "Rex"]];
console.log(tupla2);
const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Mediana;
console.log(variable1);
const objeto = { id: 1, nombre: "Hola" };
const objeto2 = { id: 1, nombre: "Hola" };
const objeto3 = { id: 1 };
const objeto4 = { id: 1, nombre: "Don", apellido: "Pollo" };
const objeto5 = { id: 1, nombre: "Don", apellido: "Pollo", talla: Talla.Grande };
const objeto6 = {
    id1: 1,
    nombre1: "Don",
    apellido1: "Pollo",
    talla1: Talla.Grande,
};
const objeto7 = {
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
function validaEdad(edad) {
    if (edad > 17)
        return "Puedes pasar";
    return "No puedes pasar";
}
console.log(validaEdad(18));
function validaEdad1(edad, msg) {
    if (edad > 17)
        return `Puedes pasar ${msg}`;
    return `No puedes pasar ${msg}`;
}
console.log(validaEdad1(18, "Don Pollo"));
//# sourceMappingURL=index.js.map