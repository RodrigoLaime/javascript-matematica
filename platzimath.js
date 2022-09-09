const PlatziMath = {};
// [1,2,3,4] CALCULAR PROMEDIO-----------------------
PlatziMath.calcularPromedio = function calcularPromedio(lista) {
  
  function sumarTodosElementos(valorAcumulado, nuevoValor){ //recive 2 parametros
    return valorAcumulado + nuevoValor;
  }
  const sumaLista = lista.reduce(sumarTodosElementos);//recive una funcion como argumento

  const promedio = sumaLista / lista.length;
  return promedio;
}



/* CALCULAR MEDIANA------------------------------- */


PlatziMath.esPar = function esPar(lista) {
  return !(lista.length % 2); // si saca 0 es par
}
PlatziMath.esInpar = function esInpar(lista) {
  return lista.length % 2; //si saca 1 numero es inpar
}

PlatziMath.calcularModa = function calcularModa(lista) {
  const listaCount = {};
  
  for (let i = 0; i < lista.length; i++){ //recorrer la lista
    const elemento = lista[i]; //encontrar el elemento de nuestra lista

    if (listaCount[elemento]) { //si en el elemento listaCount tienen una propiedad igual al elemento
      listaCount[elemento] += 1; //si lo tiene le sumamos uno 
    } else { //si no lo tiene le indicamos que empiese en uno
      listaCount[elemento] = 1; //crear una nueva propiedad llave y valor
    }
  }
  
  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimencional(listaArray, 1);
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  /* console.log({listaCount, listaArray, listaOrdenada,listaMaxNumber}); */
 /*  console.log(`La moda es: ${listaMaxNumber[0]}`); */
 const moda = listaMaxNumber[0];
 return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = PlatziMath.ordenarLista(listaDesordenada);
  const listaEsPar = PlatziMath.esPar(lista);
  if (listaEsPar) {
    const mitad1ListaPar = (lista.length / 2) - 1;
    const mitad2ListaPar = lista.length / 2;
    const listaMitades = [];
    listaMitades.push(lista[mitad1ListaPar]);
    listaMitades.push(lista[mitad2ListaPar]);
    /* const listaMitades = [mitad1ListaPar, mitad2ListaPar]; */

    const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar]; 
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    /* if (valorAcumulado > nuevoValor) {
      return 1;
    } else if (valorAcumulado == nuevoValor) {
       return 0;
    } else if (valorAcumulado < nuevoValor) {
      return -1;
    } */
    return valorAcumulado - nuevoValor;
  }

  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}

PlatziMath.ordenarListaBidimencional = function ordenarListaBidimencional(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[1] - nuevoValor[1];
  }

  const lista5 = listaDesordenada.sort(ordenarListaSort);
  return lista5;
}


/* ejemplo arrowfunction*/
/* const sumaLista2 = ((a, b) => a + b); */
