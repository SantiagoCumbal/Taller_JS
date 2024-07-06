let num1=parseInt(prompt("Ingrese el primer numero: "))
let num2=parseInt(prompt("Ingrese el segundo numero: "))

suma=num1+num2
resta=num1-num2
multiplicacion= num1*num2
if(num2!=0){
    division=num1/num2
}else{
    division=0
}
potencia=num1**num2
document.write("La suma es: "+suma+"<br>")
document.write("La resta es: "+resta+"<br>")
document.write("La multiplicacion es: "+multiplicacion+"<br>")
document.write("La potencia es: "+potencia+"<br>")
document.write("La division es: "+Math.round(division)+"<br>")
document.write("La division es: "+Math.floor(division)+"<br>")
document.write("La division es: "+ division.toFixed(2)+"<br>")
document.write("La potencia es: "+potencia+"<br>")