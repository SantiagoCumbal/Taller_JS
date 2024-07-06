/*let car = new Object();
car.modelo="Ford Focus";
car.km=12000;
car.registro="0123ABC";*/

/*let car ={
    modelo:"Ford Focus",
    km:12000,
    registro:"0123ABC",
    getData: function getData(){
        return this.modelo+" "+this.km+" "+this.registro;
    }
}*/
function Car(model,km,registration){
    this.model=model;
    this.km=km;
    this.registration=registration
}
let Focus=new Car("ford",10000,"01234ABC")
let SD=new Car("Ferrari",52000,"012sf313")

console.log("Propiedades del coche Focus:");
for (let prop in Focus) {
    console.log(`${prop}: ${Focus[prop]}`);
}