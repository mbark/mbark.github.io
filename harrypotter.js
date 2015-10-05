var houses = ["Hufflepuff", "Ravenclaw", "Gryffindo", "Slytherin"];

function getHouse() {
	var i = Math.floor(Math.random() * houses.length);
	return houses[i];
}

var nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', function(event) {
	document.getElementById('school').textContent = getHouse();
});