const toastTrigger1 = document.getElementById('liveToastBtn1')
const toastTrigger2 = document.getElementById('liveToastBtn2')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger1) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
	const price = document.querySelector('.price1').textContent

  toastTrigger1.addEventListener('click', () => {
		const qty = document.querySelector('.form1').value

		document.querySelector('.toast-body').textContent=qty + ' orders have been recieved! Your total is: $' + (qty*price).toFixed(2);
    toastBootstrap.show()
  })
}

if (toastTrigger2) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
	const price = document.querySelector('.price2').textContent

  toastTrigger2.addEventListener('click', () => {
		const qty = document.querySelector('.form2').value

		document.querySelector('.toast-body').textContent=qty + ' orders have been recieved! Your total is: $' + (qty*price).toFixed(2);
    toastBootstrap.show()
  })
}