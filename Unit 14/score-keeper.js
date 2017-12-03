console.log("Connected");

var score = document.querySelector("h1");
var player1 = document.querySelector("#p1");
var player2 = document.getElementById("p2");
var reset = document.querySelector("#reset");

var p1Score = 0;
var p2Score = 0;

player1.addEventListener("click", function(){
	p1Score++;
	console.log(p1Score);
});