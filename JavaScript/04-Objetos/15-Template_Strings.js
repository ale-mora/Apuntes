

// T E M P L A T E   S T R I N G S 


// Se utilizan ``.

const texto = `
- Es recomendable 
    usar '===' 
        para comparaciones, 
            en vez del operador       
                '=='."`;

console.log(texto);


// Usar variables dentro de los templates: 

const agregar = 'Texto agregado';


const texto1 = `
- Es recomendable 
    usar '===' 
        para comparaciones, 
            en vez del operador       
                '=='.
                    ${agregar}`;

console.log(texto1);

// Se pueden utilizar funciones dentro de ${}.

function saludo(nombre) {
    return `¡Hola ${nombre}!, 
¿Cómo estás?`
};

console.log(saludo("Ale"));