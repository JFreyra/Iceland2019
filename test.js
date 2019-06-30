/*function myFunction(){
  document.getElementById("demo").innerHTML = "blah";
}*/

function bigImg(x) {
x.style.height = "256px";
x.style.width = "256px";
}

function normalImg(x) {
x.style.height = "128px";
x.style.width = "128px";
}

$(document).ready(function () {
    $("body").mousemove(function (e) {
        var pX = e.pageX;
        var pY = e.pageY;
        $("#pixels").html("X="+pX+"; Y="+pY);
    });
});
