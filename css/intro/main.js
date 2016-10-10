"use strict";

document.getElementById("list").addEventListener("click", function(e) {
	console.log("Clicked baby!");
	let elem = e.target;

	// elem.style.width = "50%";
	elem.style.opacity = "0";
	// elem.style.left = "400px";
	// elem.style.visibility = "hidden";
})

document.getElementById("list").addEventListener("transitioneng", function() {
	console.log(arguments);
})