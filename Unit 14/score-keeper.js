//alert("Connected");

var numInput = document.querySelector("input");
var score = document.querySelector("h1");
var player1 = document.querySelector("#p1");
var player2 = document.getElementById("p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display"); // Purely cosmetic
var playingTo = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 7;
var reset = document.querySelector("#reset");

player1.addEventListener("click", function(){
	if(!gameOver){	
	p1Score++;
		if(p1Score === winningScore){
			gameOver = true;
			p1Display.classList.add("winColor");
		}
	p1Display.textContent = p1Score;
	}
});

player2.addEventListener("click", function(){
	if(!gameOver){	
	p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
			p2Display.classList.add("winColor");
		}
	p2Display.textContent = p2Score;
	}
});

reset.addEventListener("click", function(){
Reset();
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value); // Could use "this.value"
	Reset();
})

function Reset(){
	gameOver=false;
	p1Display.classList.remove("winColor");
	p2Display.classList.remove("winColor");
	p1Score = 0;
	p1Display.textContent = p1Score;
	p2Score = 0;
	p2Display.textContent = p2Score;
}