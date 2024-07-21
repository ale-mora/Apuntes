

// S E L E C T O R E S 

//  Se utiliza para seleccionar y obtener elementos del HTML, mediante el objeto 'document'.

//  Método: getElementById() (se debe pasar por un variable)

let htmlElemento = document.getElementById('cuerpo')

// Como argumento de dicho método se pasa la id del elemento

// Método: getElementByClassName() por la clase de CSS:

let elementosRed = document.getElementsByClassName('red')

// Devuelve un HTML Collection que no es un arreglo. 

// Método: getElementByName() por el name del elemento:

let elementosChanchitos = document.getElementsByName('chanchito')

// Devuelve un NodeList

// Método: getElementByTagName() por el nombre de la etiqueta del elemento:

let elementoTag = document.getElementsByTagName('p')

// Devuelve un HTMLCollection

//  Para seleccionar un solo elemento:

let eles = document.querySelector('#cuerpo'); // id html: '#', id css: '.', etiq: el nombre de la etiq.

// Para múltiples elementos: 

let element = document.querySelectorAll('p');


// htmlCollection siempre refleja los ultimos cambios del DOM, mientras que el nodelist no.  