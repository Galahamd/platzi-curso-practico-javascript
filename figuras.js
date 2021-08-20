//Código del cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado +"cm^2");
console.groupEnd();

//Código del triangulo
console.group ("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo mide: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm, ");
console.log ("La altura del triangulo es: " + alturaTriangulo + "cm");
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El area del triangulo es: " + areaTriangulo +"cm^2");
console.groupEnd();

//Código del círculo
console.group("Círculo");
//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es: " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log("PI es : " + PI );
//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");
//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del círculo es : " + areaCirculo + "cm^2");

console.groupEnd();