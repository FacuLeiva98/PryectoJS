let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el segundo número:"));

//let mayor =(num1,num2)

//document.writeln('el numero mayor es' + mayor)

if (num1 > num2 && num1 > num3) {
  console.log("El numero mayor es: " + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("el numero mayor es: " + num2);
} else if (num3 > num2 && num3 > num1){
    console.log("el numero mayo es: " +num3)
} else {
    console.log("Todos los numeros son iguales")
}

