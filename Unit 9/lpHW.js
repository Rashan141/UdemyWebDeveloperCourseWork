var number1 = -10;
var number2 = 10;
var number3 = 300;
var number4 = 0;

	console.log("All numbers between -10 & 19");
while (number1 <20){
	console.log(number1);

	number1++;
}

	console.log("All even numbers between 10 & 40");
while (number2 <=40){
	if (number2 % 2 ===0)
		console.log(number2);

	number2++;
}

	console.log("All odd numbers between 300 & 333");
while (number3 <=333){
	if (number3 % 2 !== 0)
		console.log(number3);

	number3++;	
}

	console.log("All numbers divisible by 5 and 3 between 5 & 50");
while (number4 <=50){
	if ((number4 % 5 === 0) && (number4 % 3 === 0))
		console.log(number4);

	number4++;
}

alert("Done");