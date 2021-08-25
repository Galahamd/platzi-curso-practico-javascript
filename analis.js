const salariosPimen = pimientas.map(
    function (jugador) {
        return jugador.salary;
    }
);

const salariosPimenSorted = salariosPimen.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numero) {
    return (numero % 2 === 0);
};

function calularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAculmulado = 0, nuevoElemento) {
            return valorAculmulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length ;
     return promedioLista;
};

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length /2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];

        const mediana = calularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};

const medianaGeneral= medianaSalarios(salariosPimenSorted) ;


const spliceStart = (salariosPimenSorted.length * 90) / 100;
const spliceCount = salariosPimenSorted.length  - spliceStart;

const slariosTop10 = salariosPimenSorted.splice( spliceStart, spliceCount,);
const medianaTop10 = medianaSalarios(slariosTop10); 

console.log ({
    medianaGeneral,
    medianaTop10,
 })