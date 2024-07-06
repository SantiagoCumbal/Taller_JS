function convertToNumber(value) {
    try {
        let number = parseInt(value);

        if (isNaN(number)) {
            throw new Error("No se puede convertir a número.");
        }

        console.log(`Conversión exitosa: ${number}`);
    } catch (error) {

        console.log(`Error: ${error.message}`);
    } finally {

        console.log("Finalizando la operación de conversión.");
    }
}

convertToNumber("123");

convertToNumber("abc");