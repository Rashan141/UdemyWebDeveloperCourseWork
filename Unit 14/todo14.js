console.log("CONNECTED");

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
	// lis[i].addEventListener("mouseover", function(){
	// 	this.style.background = "blue";
	// 	this.style.color = "white";
	// });

	// lis[i].addEventListener("mouseout", function(){
	// 	this.style.background = "white";
	// 	this.style.color = "black";
	// });

	lis[i].addEventListener("mouseover", function(){
		this.classList.add("blue");
	});

	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("blue");
	});

	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});

}