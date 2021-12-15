$(document).ready(function () {
	var scroll_pos = 0;
	$(document).scroll(function () {
		scroll_pos = $(this).scrollTop();
		if (scroll_pos > 10 && scroll_pos < 820) {
			$(".header").css('background-color', '#FFFFFF');
			$(".header__button").css('background-color', '#FFFFFF');
			$("h1").css('color', 'black');
			$(".header__link").css('color', 'black');
			$(".header__button").css('border', '1px solid rgba(0, 0, 0, 0.904)');
			$(".header__button").css('color', 'black');
		} else {
			$("header").css('background-color', '#5EAE53');
			$(".header__button").css('background-color', '#5EAE53');
			$(".header__button").css('color', 'black');
			$(".header__button").css('color', '#FFFFFF');
			$("h1").css('color', '#FFFFFF');
			$(".header__link").css('color', '#FFFFFF');
			$(".header__button").css('border', '1px solid rgba(255, 255, 255, 0.295743)');
		}


	});
	$(".hamburger").click(function (event) {
		$(".hamburger").toggleClass("is-active"),
			$(".header__block").toggleClass("active"),
			$(".header__logo").toggleClass("active"),
			$("body").toggleClass("lock");
	});




	$('.slider__card').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1008,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 630,
				settings: {
					arrows: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {

					arrows: false,

					centerPadding: '40px',
					slidesToShow: 1

				}
			}
		]
	});
});