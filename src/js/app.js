const header = document.querySelector('header')

const hamburgerBtn = document.querySelector('#hamburgerBtn')

const overlay = document.querySelector('header > div')

const mobileMenu = document.querySelector('.header__mobile-menu')

hamburgerBtn.addEventListener('click', () => {
	header.classList.toggle('opened')
	overlay.classList.toggle('overlay')
	overlay.classList.toggle('fade-in')
	mobileMenu.classList.toggle('show')
	mobileMenu.classList.toggle('fade-in')
})
