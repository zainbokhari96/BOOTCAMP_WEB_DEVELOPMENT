var b1 = document.querySelector("#p1");
var b2 = document.querySelector("#p2");
var b3 = document.querySelector("#p3");
var b4 = document.querySelector("input");
var p1score = 0;
var p2score = 0;
var p1dis = document.querySelector("#p1display");
var p2dis = document.querySelector("#p2display");
var p3dis = document.querySelector("#total");
var gameOver = false;
var winningScore = 5;
var newWinnigScore = 0;


b1.addEventListener("click",function () {
   if(!gameOver){
    p1score++;
    if(p1score === winningScore){
        p1dis.classList.add("winner");
        gameOver = true;
        console.log("GAME OVER");
    }
   p1dis.textContent = p1score;
   }
});

b2.addEventListener("click",function () {
    if(!gameOver){
        p2score++;
        if(p2score === winningScore){
            p2dis.classList.add("winner");
            gameOver = true;
            console.log("GAME OVER");
        }
    p2dis.textContent = p2score;
    }
});


b3.addEventListener("click",function () {
   p1score=0;
   p2score=0;
   p1dis.textContent = 0;
   p2dis.textContent = 0;
   p1dis.classList.remove("winner");
   p2dis.classList.remove("winner");
   gameOver=false;
   p3dis.textContent = "5";
   winningScore = 5;
});

b4.addEventListener("click",function () {
   //newWinnigScore++;
   p3dis.textContent = b4.value;
   winningScore = Number(this.value);
});