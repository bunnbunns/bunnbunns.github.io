function openCloseNav() {
	const navbox = document.getElementById("navbox");

	if (navbox.classList.contains('closed')) {
		navbox.classList.remove('closed');
	} else {
		navbox.classList.add('closed');
	}
}