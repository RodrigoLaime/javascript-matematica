console.log(salarios);

function encontrarPersona(personaEnBusqueda) {
  return salarios.find((persona) => persona.name == personaEnBusqueda);

  /*   const persona = salarios.find((persona) => {
        return persona.name == personaEnBusqueda;
    });
    return persona; */
}

function medianaPorPersona(nombrePersona) {
  const worck = encontrarPersona(nombrePersona).trabajos;
  const salary = worck.map(function (elemento) {
    return elemento.salario;
  });
  /*   console.log(salary); */

  const medianaSalarios = PlatziMath.calcularMediana(salary);

  console.log(medianaSalarios);
  return medianaSalarios;
}
function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;

    const porcentajeCrecimiento = crecimiento / salarioPasado;

    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }

  const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(
    porcentajesCrecimiento
  );

  /*  console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});
   */
  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  return nuevoSalario;
}

/* Analisis empresarial------------------- */
const empresas = {};
for (persona of salarios) {
  //recorre el array de salario
  for (trabajo of persona.trabajos) {
    //recorre el array de trabajo
    if (!empresas[trabajo.empresa]) {
      //si no existe
      empresas[trabajo.empresa] = {}; //crearlo
    }

    if (!empresas[trabajo.empresa][trabajo.year]) {
      //si no existe
      empresas[trabajo.empresa][trabajo.year] = []; //crearlo
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log(empresas);

/* calcular mediana empresarial year */

function medianaEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.warn("La Empresa no existe");
  } else if (!empresas[nombre][year]) {
    console.warn("La empresa no dio salario ese año");
  } else {
    return PlatziMath.calcularMediana(empresas[nombre][year]);
  }
}

function proyeccionPorEmpresa(nombre) {
  if (!empresas[nombre]) {
    console.warn("La Empresa no existe");
  } else {
    const empresaYear = Object.keys(empresas[nombre]); //accedemos a las llaves de los objetos
    const listaMedianaYears = empresaYear.map((year) => {
      return medianaEmpresaYear(nombre, year);
    });
    /* console.log({listaMedianaYears}); */
    let porcentajesCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioPasado = listaMedianaYears[i - 1];
      const crecimiento = salarioActual - salarioPasado;

      const porcentajeCrecimiento = crecimiento / salarioPasado;

      porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(
      porcentajesCrecimiento
    );

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
    const nuevaMediana = ultimaMediana + aumento;

    return nuevaMediana;
  }
}

/* Analisis general */
function medianaGeneral(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const mediana = PlatziMath.calcularMediana(listaMedianas)

    return mediana;
}

/* Mediana Top 10 */

function medianaTop10 () {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;

    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    console.log({top10, medianasOrdenadas});

    /*  */
    const medianaTop10 = PlatziMath.calcularMediana(top10);
    return medianaTop10;

}