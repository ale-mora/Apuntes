/*

    M A N I P U L A C I Ó N   D E L   D O M  

 * 'DOM' significa Document Object Model (Modelo de Objeto de Documento). Es una interfaz de 
    programación para documentos web que representa la página como un árbol de nodos y objetos,
    permitiendo que los lenguajes de programación cambien la estructura, el estilo y el contenido
    del documento. 
    
    Se diferencia del HTML, porque el DOM es creado por el navegador DESPUÉS de analizar el documento
    HTML, siendo una representación viva de la página que puede ser manipulada con JS para cambiar
    dinámicamente el contenido, la estructura y el estilo de la página.
    
    HTML: Código estático que se escribe.
    DOM:  Representación activa de ese código en el navegador.
    
    En el DOM, un nodo es la unidad básica de la estructura del documento y puede ser de diferentes 
    tipos, como elementos, atributos y texto. Los elementos HTML son un tipo específico de nodo que 
    representa las etiquetas HTML; pueden tener atributos y contener otros elementos o texto. 
    Por ejemplo, <div>, <span>, y <a> son todos elementos HTML que pueden aparecer 
    como nodos en el DOM.*/

// Crear elementoHTML de párrafo:
let elem = document.createElement('p');

// Editar elemento de párrafo creado con texto:
elem.innerText = 'Documento creado!';

// Insertar elemento en el DOM al final del documento, con el método append():
// Recibe texto y tambien nodos. 
document.body.append(elem);

// Eliminar elemento con el método remove():
elem.remove(elem);

// Para agregarlo al comienzo, se usa el método prepend();
// Recibe texto y nodos.
document.body.prepend(elem);

// No se puede agregar el mismo elemento a varias partes del documento HTML,
// el último siempre tiene prioridad.

// Reemplazar elementos con el método replaceWith(): 

let div = document.createElement('div');
div.innerText = 'Soy un texto';

elem.replaceWith(div);

// O también se puede cambiar con el Nodo Padre:

document.body.replaceChild(elem, div);

// Eliminar elementos con removeChild():

document.body.removeChild(elem);

// Agregar al final pero solo recibe Nodos, es decir, no un texto: 
document.body.appendChild(elem);

// Insertar elementos en otras partes:

// antes del elemento indicado:
// (se inserta el 'div' antes del 'elem')

document.body.insertBefore(div, elem);

// Insertar elemento adyacente:
// se inserta antes de la etiqueta
document.body.insertAdjacentElement('beforebegin', div);
document.body.insertAdjacentElement('afterbegin', div);
document.body.insertAdjacentElement('beforeend', div);
document.body.insertAdjacentElement('afterend', div);

// Otros Métodos similares para HTML y Texto:
document.body.insertAdjacentHTML();
document.body.insertAdjacentText();


