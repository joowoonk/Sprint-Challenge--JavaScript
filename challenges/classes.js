// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
    }
    volume(){
        return this.volume = this.length * this.width * this.height;
    }
    surfaceArea(){
        return this.surfaceArea = this.length * this.width + this.length* this.height + this.width * this.height;
    }
  }
  
 var cuboid = new CuboidMaker("10", "20", "30");
 
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume());
console.log(cuboid.surfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

