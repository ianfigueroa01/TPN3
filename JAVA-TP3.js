// EJERCICIO 1
// Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por 
// pantalla en forma de lista los doce nombres del arreglo.

// ----- DESARROLLO ----- //

/*const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

document.write("<h1>Lista de meses</h1>")
document.write("<ul>")
for(let i=0; i<12; i++){
    document.write("<li>" + meses[i] +"</li>");
}
document.write("</ul>")*/

// -------------------------------------------------- //

// EJERCICIO 2
// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en 
// un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar 
// las siguientes acciones:

// - Mostrar la longitud del arreglo.
// - Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// - Añade en última posición la ciudad de París.
// - Escribe por pantalla el elemento que ocupa la segunda posición.
// - Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// ----- DESARROLLO ----- //

/*let ciudades = []
let ciudad = ""

do{
    ciudad = prompt("Ingresar ciudad");

    if(ciudad !== null){
        ciudades.push(ciudad);
    }
    else{
        alert("Se ha terminado el ingreso de ciudades");
    }

}while(ciudad !== null);

document.write("El arreglo de ciudades tiene " + (ciudades.length) + " elementos." + "<br><br>");

document.write("<ul>")
if(ciudades[1] !== undefined){
    document.write("<li>Elemento 1er posición: " + ciudades[1] + "</li>");
}
else{
    document.write("<li>No existe el elemento en la primera posición.</li>");
}

if(ciudades[3] !== undefined){
    document.write("<li>Elemento 3er posición: " + ciudades[3] + "</li>");
}
else{
    document.write("<li>No existe el elemento en la tercera posición.</li>");
}

document.write("<li>Elemento última posición: " + ciudades[(ciudades.length)-1] + "</li>")
document.write("<br>")

if(ciudades[2] !== undefined){
    document.write("<li>Elemento 2er posición: " + ciudades[2] + "</li>");
}
else{
    document.write("<li>No existe el elemento en la tercera posición.</li>");
}

ciudades.push("Paris")
document.write("<li>Elemento última posición: " + ciudades[(ciudades.length)-1] + "</li>")
document.write("</ul>")

ciudades[2] = "Barcelona"

document.write("<h1>Arreglo de ciudades</h1>")

document.write("<ul>")
for(i=0; i<(ciudades.length); i++){
    document.write("<li>Elemento: " + ciudades[i] + "</li>");
}
document.write("</ul>")*/

// -------------------------------------------------- //

// EJERCICIO 3
// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
// para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar 
// el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
// repitiendo 50 veces esta operación.

// ----- DESARROLLO ----- //

/*let primerDado = 0
let segundoDado = 0
let resultadoDados = []
let aparicionesDados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function dadoAleatorio(){
    let numeroDado = Math.floor(Math.random() * 6) + 1;

    return numeroDado;
}

for(let i=0; i<50; i++){
    primerDado = dadoAleatorio();
    segundoDado = dadoAleatorio();

    resultadoDados[i] = primerDado + segundoDado;
}

for(let i=0; i<50; i++){
    for(let j=0; j<=10; j++){
        if(resultadoDados[i] === (j+2)){
            aparicionesDados[j] = aparicionesDados[j] + 1;
        }
    }
}

document.write("<table border>")

document.write("<tr> <td>Suma</td> <td>Apariciones</td> </tr>")
for(let i=0; i<=10; i++){
    document.write("<tr>");

    document.write("<td>" + (i+2) + "</td>");
    document.write("<td>" + aparicionesDados[i] + "</td>");

    document.write("</tr>");
}

document.write("</table>")*/

// -------------------------------------------------- //

// EJERCICIO 4
// Escribir el código de una función a la que se pasa como parámetro un número entero y 
// devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar 
// por pantalla el resultado devuelto por la función.

// ----- DESARROLLO ----- //

/*function parOimpar(numeroIngresado){
    if(numeroIngresado % 2 === 0){
        return "Número ingresado es par.";
    }
    else{
        return "Número ingresado es impar.";
    }
}

let numeroEntero = parseInt(prompt("Ingresar número entero"))

document.write(parOimpar(numeroEntero))*/

// -------------------------------------------------- //

// EJERCICIO 5
// Definir una función que muestre información sobre una cadena de texto que se le pasa 
// como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena 
// está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// ----- DESARROLLO ----- //

/*function cadenaFormada(cadenaIngresada){
    if(cadenaIngresada === cadenaIngresada.toUpperCase()){
        return "cadena formada solo por máyusculas.";
    }
    else if(cadenaIngresada === cadenaIngresada.toLowerCase()){
        return "cadena formada solo por minúsculas.";
    }
    else{
        return "cadena formada por máyusculas y minúsculas."
    }
}

let ingresarCadena = prompt("Ingresar cadena de texto")
document.write("La cadena ingresada '" + ingresarCadena + "' es una " + cadenaFormada(ingresarCadena))*/

// -------------------------------------------------- //

// EJERCICIO 6
// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// -La fórmula del perímetro  es p = 2*(a +b)

// ----- DESARROLLO ----- //

/*function perimetroRectangulo(baseIngresada, alturaIngresada){
    return (2 * (baseIngresada + alturaIngresada));
}

let base = parseInt(prompt("Ingresar base de rectángulo"))
let altura = parseInt(prompt("Ingresar altura de rectángulo"))

while(base === altura){
    alert("La base y la altura deben tener distintos valores. Por favor, volver a intentarlo");
    base = parseInt(prompt("Ingresar base de rectángulo"))
    altura = parseInt(prompt("Ingresar altura de rectángulo"))
}

document.write("El perimetro del rectángulo de base " + base + " y altura " + altura + " es: " + perimetroRectangulo(base, altura))*/

// -------------------------------------------------- //

// EJERCICIO 7
// Escriba un script que muestre la tabla de multiplicar de un número ingresado por 
// pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo 
// los resultados del 1 al 10 del número elegido por el usuario.

// ----- DESARROLLO ----- //

/*function tablaMultiplicar(numeroIngresado){
    document.write("<table border>");

    document.write("<tr><td>N. Ingresado = " + numeroIngresado + "</td><td> Resultado </td></tr>" );
    for(let i=1; i<=10; i++){
        document.write("<tr>");

        document.write("<td>" + numeroIngresado + " x " + i + "</td>");
        document.write("<td>" + (numeroIngresado * i) + "</td>");

        document.write("</tr>");
    }

    document.write("</table>");
}

let numeroParaMultiplicar = parseInt(prompt("Ingresar número para múltiplicar"))
tablaMultiplicar(numeroParaMultiplicar)*/