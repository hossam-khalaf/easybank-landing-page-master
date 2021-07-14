const btnHamburger = document.querySelector('.header__toggle')
const bodyElm = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElemntes = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', () => {
	header.classList.toggle('open')

	if (header.classList.contains('open')) {
		bodyElm.classList.add('noscroll')
		fadeElemntes.forEach((element) => {
			element.classList.remove('fade-out')
			element.classList.add('fade-in')
		})
	} else {
		bodyElm.classList.remove('noscroll')
		fadeElemntes.forEach((element) => {
			element.classList.remove('fade-in')
			element.classList.add('fade-out')
		})
	}
})
