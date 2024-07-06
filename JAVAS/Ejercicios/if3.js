//Ingresar una nota y mostrar si la nota es (9-10)
let asignatura=prompt("Ingrese su asignatura: ")
let nota=parseFloat(prompt("Ingrese su nota: "))
if(nota>=9 && nota<=10){
    document.write("Felicidades aprobo la asignatura "+asignatura+ " con: "+nota+ " Excelente")
}else{
    if(8<=nota && nota<9){
        document.write("Aprobo la asignatura "+asignatura+ " con: "+nota+ " Muy bien")
    }else{
        if(7<=nota && nota<8){
            document.write("Aprobo la asignatura "+asignatura+ " con: "+nota+ " Bien")
        }else{
            if(nota<7){
                document.write("Reprobo la asignatura "+asignatura+ " con: "+nota)
            }
        }
    }
}
