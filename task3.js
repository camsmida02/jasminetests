/*/Write a program to calculate the volume of a cylinder. Start with a variable that contains the diameter of the end of the circle, and another variable that references the height in meters.

var diameter = 10;
var height = 20;


//V=πr2h

var volCylinder = (3.14) * ((diameter/2)**2) * height;

console.log("Volume is " +(volCylinder)+ " meters.");
/*/

function cylinderVol (diameter, height){
    let volCylinder = (3.14) * ((diameter/2)**2) * height;
        return volCylinder;
}

console.log(cylinderVol(10, 20));
console.log(cylinderVol(20, 30));
console.log(cylinderVol(30, 40));