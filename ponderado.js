const notes = [
    {
        course: "educacion fisica",
        note: 10,
        credit: 2,
    },
    {
        course: "programacion",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];
/* multiplicar cada numero de la lista por su peso */

const notesWithCredit = notes.map(function (notesObjetcs){
    return notesObjetcs.note * notesObjetcs.credit;
});
/* sumar todos los elementos del arreglo de elementos multiplicados pro su peso */
const sumaOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal){ //return recive 2 parametros el valor acumulado y el nuevo valor
        return sum * newVal;
    }
)
/* sumar todos pesos creditos */
const credits = notes.map(function (noteObject){
    return noteObject.credit;
});
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
    }
);
/* hacer la divicion entre ambas sumas */
const promedioPonderadoNotasConCredito = sumaOfNotesWithCredit / sumOfCredits;