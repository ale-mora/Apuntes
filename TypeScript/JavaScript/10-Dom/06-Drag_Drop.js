/*

* D R A G   A N D   D R O P 

Sirve para tomar y arrastrar elementos HTML.Se utiliza con el documento
HTML DragAndDrop.html



let span = document.createElement('span');
span.id = 'hola-mundo';
span.innerText = 'Arrastrable';
span.draggable = true;      // Importante para hacer el elemento se pueda tomar. 

document.body.append(span);
*/
//   Crear una función que realice lo mismo:

function createDraggable() {
    let span = document.createElement('span');
    span.id = 'hola-mundo';
    span.innerText = 'Arrastrable';
    span.draggable = true;      // Importante para hacer el elemento se pueda tomar. 
    return span;
};

function createDropableArea() {
    let dropArea = document.createElement('div');
    dropArea.className = 'drop';
    dropArea.ondragenter = e => {
        e.target.style.background = 'yellow';
    }
    dropArea.ondragleave = e => {
        e.target.style.background = '';
    }
    dropArea.ondragover = e => {
        e.preventDefault();
    }
    dropArea.ondrop = e => {
        e.target.appendChild(document.getElementById('hola-mundo'))
    }
    return dropArea;
}

/*
let dropArea = document.createElement('div');
dropArea.className = 'drop';
dropArea.ondragenter = e => {
    e.target.style.background = 'yellow';
}
dropArea.ondragleave = e => {
    e.target.style.background = '';
}
*/
let draggable = createDraggable();
let dropArea1 = createDropableArea();
document.body.append(draggable);
document.body.append(dropArea1);
