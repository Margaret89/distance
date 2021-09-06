import {$} from './common';

// $(window).scroll(function(){
// 	if($(this).scrollTop()>300){
// 		$('.js-move-up').addClass('visible');
// 	}else{
// 		$('.js-move-up').removeClass('visible');
// 	}
// });
// $('.js-move-up').click(function(){$('body,html').animate({scrollTop:0},800);return false;});

// offer slider
if($('.js-offer-slider').length){
	$('.js-offer-slider').slick({
		// centerMode: true,
		// centerPadding: 'calc(50% - 585px)',
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		appendArrows: $('.js-offer-slider-arr'),
		prevArrow: '<button id="prev" type="button" class="btn-arr"><svg class="icon ic-arrow-left ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr"><svg class="icon ic-arrow-right ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
		// responsive: [
		// 	{
		// 		breakpoint: 1240,
		// 		settings: {
		// 			centerPadding: 'calc(50% - 465px)',
		// 			slidesToShow: 3,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 992,
		// 		settings: {
		// 			centerPadding: 'calc(50% - 360px)',
		// 			slidesToShow: 1,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			centerPadding: '40px',
		// 			slidesToShow: 1,
		// 		}
		// 	},
		// ]
	});
}

// about slider
if($('.js-about-slider').length){
	$('.js-about-slider').slick({
		dots: true,
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
	});
}

// school slider
if($('.js-school-slider').length){
	$('.js-school-slider').slick({
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
	});
}

// instructors slider
if($('.js-instructors-slider').length){
	$('.js-instructors-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		appendArrows: $('.js-instructors-slider-arr'),
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
	});
}

// close scroll-popup
if($('.js-scroll-popup-close').length){
	$('.js-scroll-popup-close').on('click', function() {
		$(this).closest('.js-scroll-popup').addClass('inactive');
	});
}