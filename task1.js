/*/Take a variable with distance in kilometres as input and output the same distance converted to miles.

let kiloInput = 5;

var miles = 0.621371;

console.log((kiloInput) + " kilometers is " + (kiloInput * miles) + " miles.");
/*/


function kiloToMiles (kiloInput){
    let miles = kiloInput * 0.621371;
    return miles;
}

console.log(kiloToMiles(5));
console.log(kiloToMiles(7));
console.log(kiloToMiles(10));