"use strict"

class Vehicle {
  constructor(mpg,color,engineType, gasTankCapacity){
    this.mpg = mpg;
    this.color = color;
    this.engineType = engineType;
    this.gasTankCapacity = gasTankCapacity;
    this.fuelLevel = 0; //holds the current fuel level
  }

  fuelUp(gallons){
    this.fuelLevel = this.fuelLevel + gallons;

    if(this.fuelLevel > this.gasTankCapacity){
      this.fuelLevel = this.gasTankCapacity
    } else if (this.fuelLevel < 0){
      this.fuelLevel = 0;
    }
  }

  drive(miles){
    let gallonsConsumed = miles/this.mpg;
    this.fuelLevel = this.fuelLevel - gallonsConsumed;
    if(this.fuelLevel = 0){
      this,this.fuelLevel = 0;
    }
  }
}

let myJeep = new Vehicle(15,"Blue","5.3 liter",24);

myJeep.fuelUp(10);
myJeep.drive(30);

console.log(myJeep.fuelLevel)