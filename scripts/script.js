$(document).ready(function() {
	$('.testimonialSlide').slick({
		centerMode    : true,
		centerPadding : '50px',
		slidesToShow  : 3,
		// autoplay      : true,
		// autoplaySpeed : 10000,
		responsive    : [
			{
				breakpoint : 901,
				settings   : {
					slidesToShow : 1,

					infinite     : true,
					dots         : true
				}
			}
		]
	});
});

const hamToggle = document.querySelector('.hamburger');
const navMenu = document.getElementById('mainMenu');
const navMask = document.querySelector('.navMask');
const hamburger =
	'<svg xmlns="http://www.w3.org/2000/svg" width="25" height="18"><g fill="#242D52" fill-rule="evenodd"><path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z"/></g></svg>';
const closeX =
	'<svg xmlns="http://www.w3.org/2000/svg" width="21" height="22"><path fill="#242D52" fill-rule="evenodd" d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"/></svg>';

hamToggle.addEventListener('click', function(e) {
	console.log('click');
	if (navMenu.classList.contains('activeNav')) {
		hamToggle.innerHTML = hamburger;
		navMask.classList.remove('maskActive');
		navMask.style.display = 'none';
		navMenu.classList.remove('activeNav');
	} else {
		hamToggle.innerHTML = closeX;
		navMask.style.display = 'block';
		navMask.classList.add('maskActive');
		navMenu.classList.add('activeNav');
	}
});
