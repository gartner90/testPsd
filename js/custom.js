
var winheight,
	winwidth;

$(document).ready( function() {
	winheight = $( window ).height();
	winwidth = $( window ).width();
	heightSlider();
	//$('.hamburguer, .close-menu-mobile').on('click', menuMobile);
});

$( window ).resize(function() {
	winheight = $( window ).height();
	winwidth = $( window ).width();
	heightSlider();
});

function heightSlider() {
	if (winheight >= 442 && winwidth > 900) {
		winheightMedium = winheight / 3;
		winheightMedium4 = winheight / 10;
		
		$('.slider h4').css("marginTop", winheightMedium);
		$('.read').css("marginTop", winheightMedium4);
		$('.slider').height(winheight);
	} else {
		$('.slider h4').removeAttr('style');
		$('.read').removeAttr('style');
		$('.slider').removeAttr('style');
	}
}


window.onload = function() {
	var slideout = new Slideout({
	  'panel': document.getElementById('panel'),
	  'menu': document.getElementById('menu'),
	  'side': 'right'
	});

	document.querySelector('.hamburguer').addEventListener('click', function() {
	  slideout.toggle();
	});

	document.querySelector('.menu-mobile').addEventListener('click', function(eve) {
	  if (eve.target.nodeName === 'A') { slideout.close(); }
	});
};
