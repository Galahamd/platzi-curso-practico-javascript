//Código del cuadrado
console.group("Cuadrado")
//console.log("Los lados del cuadrado mide: " + ladoCuadrado);

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
}

//console.log("El area del cuadrado es: " + areaCuadrado +"cm^2");
console.groupEnd();

//Código del triangulo
console.group ("Triangulo");

//console.log("Los lados del triangulo mide: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm, ");
//console.log ("La altura del triangulo es: " + alturaTriangulo + "cm");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura)/2;
} 
 
//console.log("El area del triangulo es: " + areaTriangulo +"cm^2");
console.groupEnd();

//Código del círculo
console.group("Círculo");
//Radio

//console.log("El radio del círculo es: " + radioCirculo + "cm");
//Diametro
function diametroCirculo (radio) {
    return radio * 2;
}
//console.log("El diametro del círculo es: " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log("PI es : " + PI );
//Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");
//Área
function areaCirculo (radio){
    return (radio * radio) * PI;
}

//console.log("El area del círculo es : " + areaCirculo + "cm^2");
console.groupEnd();

// Aquí intercactuamos con el HTML

//Calculos Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Calculos Triangulo
function calacularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputLado1");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("inputLado2");
    const valueLado2 = inputLado2.value;
    const inputBase = document.getElementById("inputBase");
    const valueBase = inputBase.value;
    const perimetro = perimetroTriangulo (valueLado1, valueLado2, valueBase);
    alert (perimetro);
}


function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById("inputLado1");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("inputLado2");
    const valueLado2 = inputLado2.value;
    const inputBase = document.getElementById("inputBase");
    const valueBase = inputBase.value;
    if ( (valueLado1 === valueLado2) && valueLado1 != valueBase) {
        const altura = Math.sqrt(valueLado1**2 - valueBase**2/ 4)
        const area = areaTriangulo (valueBase, altura);
        alert("Altura = "+ altura );
        alert("Area ="+ area);
    }
}