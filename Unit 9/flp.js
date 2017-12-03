	console.log("All numbers between -10 & 19");
for (var number1 = -10;number1 <20; number1++){
	console.log(number1);
}

	console.log("All even numbers between 10 & 40");
for (var number2 = 10; number2 <=40; number2++){
	if (number2 % 2 ===0)
		console.log(number2);
}

	console.log("All odd numbers between 300 & 333");
for (var number3 = 300; number3 <=333; number3++){
	if (number3 % 2 !== 0)
		console.log(number3);
}

	console.log("All numbers divisible by 5 and 3 between 5 & 50");
	for (var number4 = 0; number4 <=50; number4++){
	if ((number4 % 5 === 0) && (number4 % 3 === 0))
		console.log(number4);
}

alert("Done");