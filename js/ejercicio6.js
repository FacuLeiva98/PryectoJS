// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo-1

/*let num1 = parseInt(prompt('introduce el primer numero'))
let num2 = parseInt(prompt('introduce el primer numero'))

let mayor = Math.max(num1, num2);

document.writeln("El número mayor es: " + mayor);*/

//Ejemplo-2

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

if (num1 > num2) {
  console.log("El número mayor es: " + num1);
} else {
  if (num2 > num1) {
    console.log("El número mayor es: " + num2);
  }else {
    console.log("Ambos números son iguales.");
  }
}
