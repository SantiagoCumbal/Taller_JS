//Verificar si un numero es un palindromo
let num=parseInt(prompt("Seleccion el numero: "))
let aux,residuo
let inverso=0
aux=num
do{
    residuo = aux%10;
    inverso = inverso *10+residuo;
    aux=Math.floor(aux/10)
}while(aux!==0)

if (inverso===num) {
    alert(num+" ES UN PALINDROMO")
} else {
    alert(num+" NO ES UN PALINDROMO")    
}
