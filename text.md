##
sort() //permite ordenar una lista de array

Math.sqrt() = ayuda a colocar raiz cuadrada a numeros

Math.pow(,) = ayuda a que un numero este elevado a una potencia, se le envia una 2 argumentos, el numero que queremos poner una potencia y el numero que va a ser la potencia

Math.round()
Obtiene el siguiente numero mas cercano( si es >.5 redondea hacia arriba, si es <.5 redonda hacia abajo)

Math.floor() = Obtiene el numero entero anterior mas cercano (redondear hacia abajo).

Math.round()
Obtiene el siguiente numero mas cercano( si es >.5 redondea hacia arriba, si es <.5 redonda hacia abajo)
##
.reduce = recive una funcion y la funcion reduce recive 2 parametros
.filter = devuelve un ARREGLO con todos los elementos U objetos que tubieran la coincidencia
.find = devuelve el primer OBJETO que encuentra que hace coincidencia
.map = nos ayuda a recorrer todos los elementos de una array y crear otro array a apartir de ese array

.forEach = recorre un array y no devuelve una elemento si no que ejecuta una funcion por cada elemento de un array


Object.entries = sirve para convertir un objeto en array, para sacar un arreglo que tenia tanto la LLAVE como el VALOR en arreglo dentro de otros arreglos y esos eran los arreglos bidimencionales
Object.keys: para traer las LLAVES
Object.value: Para traer los VALORES

.slice = copia el elementop del array y los pega en su array. ayudan agarrar un arreglo y trabajar con cierta cantidad de esos arreglos, crea un nuevo arreglo utilizando los elementos del arreglo, 
.splice = quita los elementos del array y los guardada en su array.


para colocar al cuadrado oprimir (alt253)
##
1.
¿Qué métodos de JavaScript nos permite agrupar y colapsar mensajes en la consola?
console.group('Tema') y console.groupEnd('Tema')
2.
¿Cuál es la diferencia entre el método .map y .forEach de los arrays?
El método .map crea un nuevo arreglo a partir de las iteraciones a otra lista. El método .forEach solo recorre cada posición de un arreglo, pero no crea uno nuevo a partir del original.
3.
¿Cuál es la diferencia entre el método .slice y .splice de los arrays?
El método .splice modifica al array original. El método .slice no.
4.
¿Para qué nos sirve el método .splice de los arrays?
Para cortar alguna cantidad de elementos dentro de un array.
5.
¿Cómo calculamos la mitad de la cantidad de elementos de una lista impar?
lista.length / 2
6.
¿Cuál método o propiedad de los arrays en JavaScript es el correcto para extraer los elementos 1, 2 y 3 del siguiente array: [“Natalia”, “Juanita”, “Luisa”, “Tatiana”]?
.splice
7.
Necesitas analizar la riqueza / pobreza general de tu país. Debes evitar que el aumento excesivo de sueldo de una sola persona altere los resultados de tu análisis. ¿Qué herramienta estadística usarías?
Mediana
8.-mal video 9
¿Cuál de las siguientes herramientas estadísticas soporta emojis (no solo números, sino cualquier elemento o cosa)?

Media Aritmética
REPASAR CLASE
9.
¿Cuál de las siguientes herramientas estadísticas se calcula ligeramente diferente dependiendo de si la lista es par o impar?

Mediana
10.
¿Cuál es la diferencia entre el método .find y .filter de los arrays?
El método .find devuelve el primer elemento que cumpla con nuestra validación. El método .filter devuelve un nuevo array con todos los elementos que cumplan la validación.
11.
¿Para qué sirve el método .reduce de los arrays?
Para reducir nuestro array a 1 solo valor ejecutando un cálculo por cada elemento.
12.
Tienes una lista de números. Quieres obtener la suma de todos ellos. ¿Cuál método de los arrays está especialmente diseñado para esto?
. reduce

///
11 mal
¿Cómo funciona el método .sort de los arrays?
Ejecuta una función por cada elemento del array. En cada iteración recibimos 2 parámetros (e.j. a y b).
El primero representa al valor acumulado y el segundo a cada elemento del array. En el return de la función debemos devolver un número positivo (si b es mayor que a), negativo (si b es menor que a) o 0 (si son iguales).

REPASAR CLASE
12.mal
Necesitas duplicar el valor de cada elemento de tu array. ¿Qué método usarías?
.slice