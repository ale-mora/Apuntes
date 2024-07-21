

// O P E R A D O R E S   D E   A S I G N A C I ó N 

let a = 5;
a = a + 5;

a += 5;
a -= 5;
a *= 5;
a /= 5;
a %= 5;
a **= 5;

console.log(a);

/**En JavaScript, los operadores =, == y === tienen diferentes propósitos y comportamientos:

= es el operador de asignación. Se utiliza para asignar un valor a una variable.
Por ejemplo:

let saludo = 'Hola, mundo!';

== es el operador de igualdad o igualdad relajada. Compara dos valores para determinar si son equivalentes, 
pero no considera el tipo de dato. Si los valores comparados son de diferentes tipos, JavaScript intenta
convertirlos a un tipo común antes de realizar la comparación1. 
Por ejemplo:

'10' == 10  // true, porque '10' se convierte a número antes de la comparación.

=== es el operador de igualdad estricta o identidad. Compara tanto el valor como el tipo de dato de dos 
expresiones y solo devuelve true si ambos son exactamente iguales, sin realizar ninguna conversión de tipos. 
Por ejemplo:

'10' === 10  // false, porque el tipo de dato es diferente (string vs número).

Es recomendable usar === para comparaciones en JavaScript, ya que evita confusiones y errores que pueden 
surgir debido a la coerción de tipos que realiza el operador ==.  */