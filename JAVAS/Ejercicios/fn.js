//cuadrado
/*function calcular_cuadrado(num){
    cuadrado=num*num
    return cuadrado
}

num=parseInt(prompt("Ingrese un número: "))
cuadrado=calcular_cuadrado(num)
document.write("El cuadrado de "+num+" es: "+cuadrado)*/

//crear una funcion que calcule el factorial de un numero
function calcularFactorial(numero) {
    if (numero < 0) {
        return "Error: No se puede calcular el factorial.";
    }else if (numero == 0) {
        return 1;
    }
    
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}
num=parseInt(prompt("Ingrese un número: "))
document.write(calcularFactorial(num))
