function Vehicle(speed, color) {

    this.color = color;
    this.go = function () {
        this.speed = speed;
        console.log("Your driving at " + this.speed + " MPH")
    }
    this.print = function () {
        console.log("Vehicle's color :" + this.color + ",Vehicle's speed :" + this.speed);
    }
}
var car = new Vehicle(55, "red");
car.print();
console.log(car);
function Plane() {

}
Plane.prototype = Object.create(Vehicle)