var arrayToBeReversed = ['a', 'b', 'c', 'd', 'e'];

var arrayBase = [1, 2, 3, 4];
var isSame = true;

function printReverse(arrayUse){
	var arrayReversed = [];
	
	console.log(arrayUse);
	arrayUse.forEach(function(items){
		arrayReversed.unshift(items);
	});

	console.log(arrayReversed);
}

function isArraySame(sameArray){

	for (var i = arrayBase.length - 1; i < arrayBase.length; i++) {
		
		if (sameArray[i] !== arrayBase[i])
			isSame = false;
	}

	if(isSame === false)
		console.log("This array is not the same");
	else
		console.log("This array is same");
}

function isUniform(uniformArray){
	var firstElement = uniformArray[0];

	for (var i = uniformArray.length - 1; i < uniformArray.length; i++) {
		if (uniformArray[i] !== firstElement ){
			return false;
			}
		}

		return true;
	}

function sumArray(numArray){
	var numResult = 0;

	numArray.forEach(function(number){
		numResult += number;
	});

	// console.log(numResult);
	return numResult;
}

function maxArrayNum(findArrayMax){
	var maxNumber = findArrayMax[0];

	findArrayMax.forEach(function(arrayItem){
			
			if (maxNumber < arrayItem)
				maxNumber = arrayItem;
	});

	console.log(maxNumber);
}