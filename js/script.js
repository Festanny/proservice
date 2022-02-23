$("body").on('click', '[href*="#"]', function(e){
	var fixed_offset = $('header nav').height()+30;
	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	e.preventDefault();
});

$(window).scroll(function(){
    if ($(window).scrollTop() > $('header').height()) {
        $('header nav').addClass('fixed');
    }
    else {
        $('header nav').removeClass('fixed');
    }
});
