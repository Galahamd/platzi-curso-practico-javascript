const lista1 = [100,200,800, 500];

function calularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAculmulado = 0, nuevoElemento) {
            return valorAculmulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length ;
    return promedioLista;
}

const mitadLista1 = parseInt( lista1.length /2);
let mediana;
function esPar(numerito) {
    if (numerito%2 === 0) {
        return true;
    } else {
        return false;
    }
}
if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 -1];
    const elemento2 = lista1[mitadLista1];

    const promeElento1y2 = calularMediaAritmetica ([elemento1, elemento2]);
    mediana = promeElento1y2;
} else {
    mediana = lista1[mitadLista1];

}

const lista =[1, 2, 3, 1, 2, 3,4, 2, 2, 2, 1,];
const lista1Count = {};

lista.map(
    function(elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1; 
        } else {
            lista1Count[elemento] = 1;
        }
        
    }
);

const listaArray = Object.entries(lista1Count).sort ( function (valorAcumulado, nuevoValor) {
     return valorAcumulado[1] - nuevoValor[1];
});

const moda = listaArray[listaArray.length -1];