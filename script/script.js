$(document).ready(function(){
	if ($(window).width() >= 573) {
		$('.carousel-autoplay').slick({
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000
		  });
	}
	else if ($(window).width() > 430 && $(window).width() < 573) {
		$('.carousel-autoplay').slick({
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000
		  });
	}
	else {
		$('.carousel-autoplay').slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000
		  });
	}
});