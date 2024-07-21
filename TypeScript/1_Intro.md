---

==> Lo Básico:

---> Se debe saber de JavaScript:

    1.- Variables.

    2.- Constantes.

    3.- Funciones.

    4.- Fat Arrow Functions.

    5.- Objetos.

    6.- Destructuring.

---> Secciones Opcionales:

    A. TS con NodeJS.
    B. TS con ReactJS.

---

==> Definición:

TypeScript es un lenguaje creado por Microsoft para resolver deficiencias de JS, es decir, funcionalidades que otros lenguajes tienen pero no JS. TS está construido sobre JS, por lo que dicho código, se puede ejecutar sin errores en TS. La funcionalidad más importante que agrega TS a JS es el 'tipado estático', que son por ejemplo: 'C++'', 'Java', 'C #'.

Ellos se caracterizan por:

1.- Verificación de Tipos en Tiempo de Compilación: Los tipos de datos se verifican durante
la compilación del programa. Esto significa que cualquier error relacionado con tipos de
datos se detecta antes de que el programa se ejecute.

2.- Declaración de Tipos: Los tipos de las variables deben declararse explícitamente al
escribir el código.

/_ Se define una variable 'mensaje' de tipo String: _/

let mensaje: string = "Hola";

/ Se quiere cambiar la variable por un valor 'number':

mensaje = 23;

--> "Type 'number" is not assignable to type 'string'." <--

- Devuelve un error, porque al ser TS de tipado 'estático', no se puede cambiar el
  tipo de variable, en este caso a 'Number', porque ya ha sido definida previamente
  como 'String'.

- Si se trata de compilar con < tsc index.ts >, dará el mismo error.

- Pero si se quiere asignar otro valor a esa misma variable, no indicará ningún error:

  mensaje = "¡Chao!";

---

==> Iniciar y configurar TypeScript:

---> Para iniciar el compilador se usa el comando < tsc -init >, el cual crea un nuevo archivo llamado 'tsconfig.json'.

---> Las opciones más importantes que se presentan en dicho archivo son:

- "target": "ES2016" - Indica a qué versión de JS se quiere transpilar el codigo que se está escribiendo. La versión ES2016 es la más segura y compatible con todos los navegadores web.

- "rootDir": "./" - Permite indicar al proyecto dónde se encuentran los archivos de TS.
  Normalmente se cambia a la carpeta "./src".

- Sección: Emit, opción: "outDir": "./" - Indica donde se va a dejar el código JS una vez sea transpilado desde TS. Por convención, se guarda en la carpeta "./dist".

- Sección: Emit, opción "noEmitOnError": true - Si se presenta algún error, la configuración por defecto será 'true', lo que generará código JS de igual forma. Se usa como 'false'.

- Sección: Emit, opción "removeComments": true -

- Sección Emit, opción "noUnusedParameters": true - No permite que se dejen parámetros sin usar.

- Sección Emit, opción: "noImplicitReturns": true - No deja que existan return sin declarar su tipo.


---> Luego, se inicia con el comando < tsc >, pero si no está configurado el compilador ( tsconfig.json ), se debe iniciar indicando donde está el archivo 'index.ts' de esta forma: < tsc src/index.ts >. Dicho código crea la carpeta 'dist' con el archivo 'index.js', en el cual recae todo el codigo transpilado a JavaScript.

---

==> Depurando TypeScript:  (SUJETO A DUDAS)

La depuración (debugging) de código es el proceso de identificar y corregir errores en el código fuente de un programa informático. Estos errores pueden ser de varios tipos, como errores de sintaxis, errores de lógica o errores de datos.

1.- En el archivo 'tsconfig.json', en la sección 'Emit', está "sourceMap": true, la cual se debe descomentar. Esto genera archivos que se encargan de indicarle a VSCode como se 'mapea' los archivos de JS al archivo de TS. Al ejecutar el comando < tsc > se crea el archivo 'index.js.map' en la carpeta 'dist'. Este es un archivo que lo entiende la máquina, pero es lo que genera TS cuando compilamos nuestro código.

2.- En el apartado 'Ejecución y depuración', se elige la opción 'cree un archivo launch.json', luego se selecciona la opción de 'Node.js' en donde se despliega un archivo denominado 'launch.json', el cual tiene varias opciones:

    a. "version" - Versión del archivo
    b. "type" - Programa para depurar aplicación.
    c. "request" - Petición que está haciendo.
    d. "name" - Etiqueta de lo que se va a ver cuando se haga la depuración.
    e. "program" - Dirección del código fuente a depurar. 
    f. "outFiles" - Dirección donde se almacena el código JS. 

3.- En el mismo archivo 'lauch.json', a continuación de < "program": "${workspaceFolder}\\dist\\index.js" >, se debe incluir: < "preLaunchTask": "tsc: build - tsconfig.json" >. Esta tarea asegura que tus archivos TypeScript se compilen antes de comenzar la depuración.
  ---> Task to run before debug session starts. <---

4.- En el apartado 'Ejecución y depuración", se elige la opción "Launch Program", que es el valor de la propiedad 'name' del archivo anterior. 

5.- La depuración se detendrá en el 'breakpoint' seleccionado.

