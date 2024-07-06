//Pedir numero y verificar si son multiplos 
//Ejemplo: 5 y 10
let num1=parseInt(prompt("Ingrese el primer numero: "))
let num2=parseInt(prompt("Ingrese el segundo numero: "))
if(num1%num2==0 || num2%num1==0){
    document.write("Los numeros "+num1+" y "+num2+" son multiplos")
}else{
    document.write("Los numeros "+num1+" y "+num2+" no son multiplos")

}
