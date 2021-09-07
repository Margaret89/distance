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
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		dots: false,
		appendArrows: $('.js-offer-slider-arr'),
		prevArrow: '<button id="prev" type="button" class="btn-arr"><svg class="icon ic-arrow-left ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr"><svg class="icon ic-arrow-right ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: false,
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
					dots: true,
				}
			},
		]
	});
}

// about slider
if($('.js-about-slider').length){
	$('.js-about-slider').slick({
		dots: true,
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
				}
			},
		]
	});
}

// school slider
if($('.js-school-slider').length){
	$('.js-school-slider').slick({
		prevArrow: '<button id="prev" type="button" class="btn-arr btn-arr_left"><svg class="icon ic-arrow-left ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr btn-arr_right"><svg class="icon ic-arrow-right ic-stroke" width="10" height="17"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
				}
			},
		]
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
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			centerPadding: '40px',
		// 			slidesToShow: 1,
		// 		}
		// 	},
		]
	});
}

// close scroll-popup
if($('.js-scroll-popup-close').length){
	$('.js-scroll-popup-close').on('click', function() {
		$(this).closest('.js-scroll-popup').addClass('inactive');
	});
}

// Open/Close mobile menu
if($('.js-open-menu').length){
	$('.js-open-menu').on('click', function(){
		$(this).toggleClass('active');
		$('.js-main-menu').toggleClass('active');
		$('.js-body').toggleClass('no-scroll');
	});

	$('.js-main-menu-arr').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).closest('.js-main-menu-item').children('.js-main-menu-sub').slideToggle(300);
	});

	
}