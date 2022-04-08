var parabolaWidth = 150
var parabolaDepth = 25
var output

var X = parabolaWidth / 2
var X2 = X * X

var A4 = parabolaDepth * 4

output = X2 / A4

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.quadraticCurveTo(20, 100, 200, 20);
ctx.stroke(); 

console.log ("Parabola Width: "+parabolaWidth)
console.log ("Parabola Depth: "+parabolaDepth)
console.log ("X: "+X)
console.log ("X2: "+X2)
console.log ("A4: "+A4)
console.log ("Output: "+output)
