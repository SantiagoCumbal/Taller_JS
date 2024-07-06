//SI PIDE CARNE O PESCADO SE LE OFRECERA VINO TINTO O VINO BLANCO
//VERDURAS AGUA SIN GAS O VINO BLANCO
let plato=prompt("Menu"+"\n"+"1. Carne"+"\n"+"2. Pescado"+"\n"+"3. Verduras"+"\n"+"Seleccione el plato que desea: ")
switch(plato){
    case "carne":
        bebida=prompt("Menu"+"\n"+"1. Vino tinto"+"\n"+"2. Vino blanco"+"\n"+"Seleccione la bebida que desea: ")
        if(bebida=="vino tinto"){
            document.write("Se le dara vino tinto")
        }else{
            if (bebida=="vino blanco") {
                document.write("Se le dara vino blanco")
            } else {
                document.write("ERROR DE SELECCION")
            }
        }
        break;
    case "pescado":
        bebida=prompt("Menu"+"\n"+"1. Vino tinto"+"\n"+"2. Vino blanco"+"\n"+"Seleccione la bebida que desea: ")
        if(bebida=="vino tinto"){
            document.write("Se le dara vino tinto")
        }else{
            if (bebida=="vino blanco") {
                document.write("Se le dara vino blanco")
            } else {
                document.write("ERROR DE SELECCION")
            }
        }
        break;
    case "verduras":
        bebida=prompt("Menu"+"\n"+"1. Agua sin gas"+"\n"+"2. Vino blanco"+"\n"+"Seleccione la bebida que desea: ")
        if(bebida=="agua sin gas"){
            document.write("Se le dara agua sin gas")
        }if (bebida=="vino blanco") {
            document.write("Se le dara vino blanco")
        } else {
            document.write("ERROR DE SELECCION")
        }
        break;
    default:
        document.write("Error de seleccion")
        break;
}

