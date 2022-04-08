//IO
var parabolaWidth
var parabolaDepth = 25
var output

//focal point calculator
var X = parabolaWidth / 2
var X2 = X * X

var A4 = parabolaDepth * 4

output = X2 / A4

//scaling calculator
var xScale =  560 / parabolaWidth


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 300);
ctx.quadraticCurveTo(300, parabolaDepth * xScale + 300 * 1.31415926, 580, 300);
ctx.stroke();

ctx.fillRect(300, output * xScale,1,1);

ctx.beginPath();
ctx.moveTo(300, parabolaDepth * xScale + 300);
ctx.lineTo(300, output * xScale);
ctx.stroke(); 