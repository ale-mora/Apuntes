

// Para crear elementos del HTML de forma más compleja. 

// Crear elemento:

let elem = document.createElement('p');

// Ingresar texto al elemento creado:

elem.innerHTML = 'Esto es un parrafo creado con JS';

// elem.innerText = 'Agrega solamente texto sin interpretar elementos html'

// Agregar elemento creado al HTML: 

document.body.append(elem);

// Cambiar estilos al elemento:

elem.style = 'background-color: red; font-weight: bold;';

// Dar una clase al elemento:

elem.className = 'parrafo';

// Dar un id al elemento:

elem.id = 'id';

// Asignar un atributo nuevo:

elem.setAttribute('mipropiedad', 'mi propiedad');

// Obtener el valor del atributo:

elem.getAttribute('mipropiedad');

// Si tiene alguna rpopiedad en especifico:

elem.hasAttribute('mipropiedad');