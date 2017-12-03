console.log("CONNECTED");

var h1 = document.querySelector("h1");
var lis = document.querySelectorAll("li");
var color = document.querySelector("#ColorChange");
var isPurp = false;

h1.addEventListener("click", function(){
	h1.style.background = "orange";
});

for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
	});
}

// color.addEventListener("click", function(){

// 	if(isPurp){
// 		document.querySelector("body").style.background = "white";
// 		isPurp = false;
// 		console.log(isPurp);
// 	}
// 	else{
// 		document.querySelector("body").style.background = "purple";
// 		isPurp = true;
// 		console.log(isPurp);
// 	}
	
// 	// isPurp = !isPurp;
// });

color.addEventListener("click", function(){
		document.body.classList.toggle("purple");
});