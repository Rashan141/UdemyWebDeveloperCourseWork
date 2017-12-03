console.log("Connected.");

var messy = document.querySelector("h1");
var messy2 = document.getElementsByClassName("Armedes");

var imageSize = document.getElementsByTagName("img");

for (var i = 0; i < imageSize.length; i++) {
	imageSize[i].style.height = "200px";
}