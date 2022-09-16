// [1,2,3,4] CALCULAR PROMEDIO-----------------------
function calcularPromedio(lista) {
  
  function sumarTodosElementos(valorAcumulado, nuevoValor){ //recive 2 parametros
    return valorAcumulado + nuevoValor;
  }
  const sumaLista = lista.reduce(sumarTodosElementos);//recive una funcion como argumento

  const promedio = sumaLista / lista.length;
  return promedio;
}

/* ejemplo arrowfunction*/
const sumaLista2 = ((a, b) => a + b);


/* CALCULAR MEDIANA------------------------------- */

function esPar(lista) {
  return !(lista.length % 2); // si saca 0 es par
}
function esInpar(lista) {
  return lista.length % 2; //si saca 1 numero es inpar
}

function calcularModa(lista) {
  const listaCount = {};
  
  for (let i = 0; i < lista.length; i++){ //recorrer la lista
    const elemento = lista[i]; //encontrar el elemento de nuestra lista

    if (listaCount[elemento]) { //si en el elemento listaCount tienen una propiedad igual al elemento
      listaCount[elemento] += 1; //si lo tiene le sumamos uno 
    } else { //si no lo tiene le indicamos que empiese en uno
      listaCount[elemento] = 1; //crear una nueva propiedad llave y valor
    }
  }
  console.log(listaCount);
}

function calcularMediana(listaDesordenada) {
  const lista = ordenarLista(listaDesordenada);
  const listaEsPar = esPar(lista);
  if (listaEsPar) {
    const mitad1ListaPar = lista[(lista.length / 2) - 1];
    const mitad2ListaPar = lista[lista.length / 2];
    
    const listaMitades = [mitad1ListaPar, mitad2ListaPar];

    const medianaListaPar = calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar]; 
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

function ordenarLista(listaDesordenada) {
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