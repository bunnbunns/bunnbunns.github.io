document.querySelector('.q15-btn').addEventListener('click', function() {
	const answer = document.querySelector('.answer').value

	if (answer.toLowerCase() === "yes") {
		document.querySelector('.result').textContent='Pizza night every Saturday night at 7PM - Pier 88';
	} else {
		document.querySelector('.result').textContent='Thank you!';
	}
});