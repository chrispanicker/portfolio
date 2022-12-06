//mobile
console.log("hey!")

function menu(){
	console.log("i did it!")
	var links = document.getElementById('links');
	if (links.style.display === "flex"){
		links.style.display = "none";
	} else {
		links.style.display = "flex";
	}

}
