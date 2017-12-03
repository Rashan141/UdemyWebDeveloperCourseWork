var guessNum = prompt("Your guess is");
var secretNum = Math.floor(Math.random() * 10) + 1;

console.log(secretNum);

while(Number(guessNum) !==  secretNum) {

	if(guessNum > secretNum)
		alert("The number is higher than the secretNum");
	else if (guessNum < secretNum)
		alert("The number is lower than the secretNum");

	guessNum = prompt("You got it wrong! Try again: ");
}

alert("You got it right");