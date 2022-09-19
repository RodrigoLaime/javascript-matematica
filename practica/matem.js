

/*//es una forma de sacar el promedio 
function calcularPromedio(lista) { 
  let sumaLista = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }
  const promedio = sumaLista / lista.length;
  return promedio;
} */

/* CALCULAR PROMEDIO con el metodo REDUCE */
console.group(calcularPromedio);
function calcularPromedio(lista) {

  function sumarElementos(valorAcumulado, valorNuevo) {
    return valorAcumulado + valorNuevo;
  }
  const sumaLista = lista.reduce(sumarElementos);
  /* ejemplo con arrow function
    const sumarTodosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
   const sumaLista = lista.reduce(sumarTodosElementos); 
   borrar la funcion sumarElemento*/

  const promedio = sumaLista / lista.length;
  console.log(promedio);
  return promedio;
}
console.groupEnd(calcularPromedio);

/* CALCULAR MEDINANA -------------*/
console.group(calcularMediana);
function esPar(lista) {
  return !(lista.length % 2);
}
function esInpar(lista) {
  return lista.length % 2;
}
function calcularMediana(lista) {
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const mitad1ListaPar = lista[(lista.length / 2) - 1];
    const mitad2ListaPar = lista[lista.length / 2];

    const listaMitades = [mitad1ListaPar, mitad2ListaPar];

    const medianaListaPar = calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);//ingresamos el indice del medio y no la mediana
    medianaListaImpar = lista[indexMitadListaImpar]
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar); //accedemos al elemento del medio 
    return medianaListaImpar;
  }
}

function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    /* ordenar lista con el if es el trabajo que hace el sort
    if (valorAcumulado > nuevoValor) {
      return 1;
    } else if (valorAcumulado == nuevoValor) {
      return 0;
    } else if (valorAcumulado < nuevoValor) {
      return -1;
    } */
    return valorAcumulado - nuevoValor; //es lo mismo que la condicion if anterior
  }
  const lista = listaDesordenada.sort(ordenarListaSort);
  /* const lista = listaDesordenada.sort((a,b) => a-b); */
  return lista;
}

console.groupEnd(calcularMediana);