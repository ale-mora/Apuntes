
// D I F E R E N C I A S    E N T R E  H T M L C O L L E C T I O N    Y   N O D E L I S T 


let collection = document.getElementsByTagName('p');

let list = document.querySelectorAll('p');

console.log(collection, list); // Ambos con 4 elementos. 

// Para seleccionar en htmlCollection:

let item1 = collection.namedItem('donpollo');
let item2 = collection.item(3);   // el 3 es lo mismo que en un array[]. 
let item3 = collection[3];   // Esto no es un array si no un objeto. 

// HtmlCollection no tiene formas de ITERACIÓN en su composición.
// Pero existen 2 formas que lo emulan:

// Primera forma: 

for (let el of collection)
    console.log(el);

// Segunda forma: transformar en array e iterarlo, muestra el objeto del elemento.

Array.from(collection).forEach(x => console.log(x));

// Spread, que muestra el elemento mismo.  

[...collection].forEach(x => console.log(x));

//  Métodos de NodeList

let itemA = list.item(3);
let itemB = list[3];

list.forEach(x => console.log(x));

//  Entries, Keys y Values, devuelven iteradores.   (ESTUDIAR)

let entries = list.entries();   // entries.Next(); en la consola. 
let keys = list.keys();
let values = list.values();

