/*function myFunction(){
  document.getElementById("demo").innerHTML = "blah";
}*/


function createDot(x,y,r){
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
