/*num=parseInt(prompt("Ingrese un número: "))
for (let i = 0; i <= 100; i+num) {
    console.log(i+"\n")
    document.write(i+"<br>")
}*/

//Imprimir un cuadrado
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        document.write(" * ")
    }
    document.write("<br>")
}

//Imprimir un triangulo
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j<=i; j++) {
        document.write(" * ")
    }
    document.write("<br>")
}