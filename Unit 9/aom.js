// var answer = prompt("Are we there yet?");

// while (answer !== "yes"){

// 	answer = prompt("Are we there yet?");
// }

// alert("Yay! We're finally here!");

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1){

	answer = prompt("Are we there yet?");
}

alert("Yay! We're finally here!");