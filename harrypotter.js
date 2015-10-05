var houses = ["Hufflepuff", "Ravenclaw", "Gryffindor", "Slytherin"];

function getHouse() {
	var i = Math.floor(Math.random() * houses.length);
	return houses[i];
}

var nextButton = document.getElementById('sorting-hat');
nextButton.addEventListener('click', function(event) {
	document.getElementById('school').textContent = getHouse() + "!";
});