document.querySelector('button').addEventListener('click', function() {
	document.querySelector('.greeting').textContent='Good Evening, ' + document.querySelector('input').value + '!';
});