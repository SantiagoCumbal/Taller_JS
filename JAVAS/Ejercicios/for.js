//El usuario ingrese la contraseña hasta 3 veces
let usuario=prompt("Ingrese su usuario: ")
let contraseña=prompt("Ingrese la contraseña: ")

for (let i = 1; i< 4; i++) {
    if (usuario=="Santy"&& contraseña=="XD") {
        document.write("Bienvenido al sistema")
        i=5
    } else {
        document.write("ERROR DE SELECCION")
        alert("Tiene "+(4-i)+" intentos")
        usuario=prompt("Ingrese su usuario: ")
        contraseña=prompt("Ingrese la contraseña: ") 
    }
}
