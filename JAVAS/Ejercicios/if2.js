//Pedir 3 numeros y decir cual es el mayor y el menor
let num1=parseInt(prompt("Ingrese el primer numero: "))
let num2=parseInt(prompt("Ingrese el segundo numero: "))
let num3=parseInt(prompt("Ingrese el tercer numero: "))
if((num1>num2)){
    if(num1>num3){
        if(num2>num3){
            document.write("El numero "+num1+" es el mayor y el menor es "+num3)
        }else{
            document.write("El numero "+num1+" es el mayor y el menor es "+num2)
        }
    }
}if (num2>num3) {
    if(num1>num3){
        document.write("El numero "+num2+" es el mayor y el menor es "+num3)
    }else{
        document.write("El numero "+num2+" es el mayor y el menor es "+num1)
    }
} else {
    if(num1>num2){
        document.write("El numero "+num3+" es el mayor y el menor es "+num2)
    }else{
        document.write("El numero "+num3+" es el mayor y el menor es "+num1)
    }
}
