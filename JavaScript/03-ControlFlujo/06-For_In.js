/* 

B U C L E   F O R   I N 

*Es una estructura de control que te permite iterar sobre todas las propiedades enumerables de un objeto.

Sintaxis:

for (let 'variable' in 'objeto') {
  // Código a ejecutar en cada iteración
}

1. Variable: En cada iteración, se asigna un nombre de propiedad diferente a esta variable.
2. Objeto: Es el objeto cuyas propiedades enumerables (que no son símbolos) se iteran.

Ejemplo:
*/

let user = {
    id: 1,
    name: 'DonPollo',
    age: 35,
    email: 'mora.vega.ale@gmail.com'
}

// Imprimir sólo los nombres de las propiedades en el array 'user', no sus valores.
for (let propiedades in user) {
    console.log(propiedades);
}

// Imprimir las propiedades y cada valor del array 'user'.
for (let propiedades in user) {
    console.log(propiedades, ':', user[propiedades]);
}
