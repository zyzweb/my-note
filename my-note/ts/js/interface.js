"use strict";
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: 'good is good' };
printLabel(myObj); // good is good
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black', width: 20 });
console.log('mySquare: ', mySquare);
