/*Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo
*/

/*var palabra = prompt("ingrese su palabra")

console.log("La cantidad de caracteres es " +palabra.length)
*/


var frase = prompt("Escribe una frase:");


var vocalesEncontradas = frase.match(/[aeiouáéíóúü]/gi);


if (vocalesEncontradas) {
  document.writeln("Las vocales en tu frase son: " + vocalesEncontradas.join(', '));
} else {
  document.writeln("No se encontraron vocales en tu frase.");
}

