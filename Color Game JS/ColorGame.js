var color = [

    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var square = document.querySelectorAll(".square");
var messegeDisplay = document.querySelector("#message");

var pickedcolor = pickcolor();
var displaycolor = document.getElementById("displaycolor");
displaycolor.textContent = pickedcolor;

for(var i=0;i<square.length;i++)
{
    square[i].style.background = color[i];

    square[i].addEventListener("click",function () {
        var clickedColor = this.style.background;

        if(clickedColor === pickedcolor){
            alert("Correct!");
            changeColor(clickedColor);
        }
        else {
            this.style.background = "black";
            messegeDisplay.textContent = "TRY AGAIN";
        }
    })
}

function changeColor(color) {
    for(var i = 0; i<square.length; i++)
    {
        square[i].style.background = color;
    }
}

function pickcolor() {
    var random = Math.floor(Math.random() * color.length);
    return color[random];

}