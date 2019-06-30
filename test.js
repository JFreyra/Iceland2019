/*function myFunction(){
  document.getElementById("demo").innerHTML = "blah";
}*/

var circleRadii = [40, 20, 10];
var svgContainer = d3.select("body").append("svg").attr("width", 200).attr("height", 200);
var circles = svgContainer.selectAll("circle").data(circleRadii).enter().append("circle");
var circleAttributes = circles.attr("cx", 50).attr("cy", 50).attr("r", function (d) { return d; }).style("fill", "green");
/*
function createDots(x,y,r){
  document.createElementNS("http://www.w3.org/2000/svg","circle");

}

//Enlarges an image
function bigImg(x) {
x.style.height = "256px";
x.style.width = "256px";
}

//Sets images size to normal
function normalImg(x) {
x.style.height = "128px";
x.style.width = "128px";
}

//Gets pixel positions of mouse
$(document).ready(function () {
    $("body").mousemove(function (e) {
        var pX = e.pageX;
        var pY = e.pageY;
        $("#pixels").html("X="+pX+"; Y="+pY);
    });
});
*/
