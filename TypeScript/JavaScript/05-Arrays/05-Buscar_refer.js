


// B U S C A R   R E F E R E N C I A S : 


const usuarios = [
    {id: 1, nombre: 'Rex', tipo: 'Perruno'},
    {id: 2, nombre: 'Lucinda', tipo: 'Gatuna'},
    {id: 3, nombre: 'Carmela', tipo: 'Gatuna'},
    {id: 4, nombre: 'Dora', tipo: 'Gatuna'},
    {id: 3, nombre: 'Brownie', tipo: 'Perruno'}
];

console.log(usuarios);

// Para buscar elementos dentro de un array, se utiliza el método 'find()', que recibe una función:

const res_bus = usuarios.find(function(usuarios) {
    return usuarios.id === 3;
});
console.log(res_bus);
