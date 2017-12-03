var total = 1;

function isEven(num){

	if (num % 2 == 0)
		console.log("It's an even number");
	else
		console.log("It ain't even. It's WRONG!!");
}

function factorial(factNum){
	if(factNum  == 1 || factNum == 0){
		console.log(total);
		return total;
	}
	else {
		total *= factNum; 
		factorial(factNum-1);
	}
}

function kebabToSnake(word){
	// console.log(word);
	// for (var i = word.length - 1; i >= 0; i--) {
	// 	if (word.indexOf(i) == "-")
	// 		word.indexOf(i).replace("_");
	// 	}

	// 	console.log(word);

	var snakeWord = word.replace("-", "_");

	console.log(snakeWord);
	}

isEven(26);

factorial(10);

kebabToSnake("basic-base");