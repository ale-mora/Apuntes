/*

S W I T C H 

*Es una estructura de control de flujo que se utiliza para realizar diferentes acciones basadas 
en diferentes condiciones. Es similar a una serie de declaraciones if...else, pero es más eficiente 
y legible cuando se trata de comparar una misma variable con múltiples posibles valores.

* Sintaxis: 

switch (expresión) {
    case valor1:
        // Declaraciones ejecutadas cuando el resultado de expresión coincide con valor1
    break;
    case valor2:
        // Declaraciones ejecutadas cuando el resultado de expresión coincide con valor2
    break;
        // ...
    case valorN:
        // Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    break;
    default:
        // Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    break;
}

1. Expresión: Es evaluada una vez al principio del switch. El resultado de la expresión se compara 
con los valores de cada case.
2. Case: Si el valor de la expresión coincide con el valor del case, las declaraciones asociadas a ese 
case se ejecutan hasta que se encuentre un break o hasta el final del switch.
3. Break: Es opcional y asegura que el programa salga del switch una vez que se ejecute la instrucción 
coincidente y continúe la ejecución en la instrucción siguiente al switch.
4. default: Es opcional y se ejecuta si el valor de la expresión no coincide con cualquiera de los case.*/

let accion = 'listar';

switch (accion) {
    case 'guardar':
        console.log('Guardar las cosas');
        break;
    case 'listar':
        console.log("Listar las cosas")
        break;
    default:
        console.log("No se reconoce la acción")
}