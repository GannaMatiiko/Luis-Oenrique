$(document).ready(function(){
	$(".j-scroll").on("click", function(e){
		var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
		}, 1200);
		e.preventDefault();
		return false;
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('#back_to_top').fadeIn();
		} else {
			$('#back_to_top').fadeOut();
		}
	});
	$('#back_to_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	var show = true;

	$(window).on("scroll", function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $('#facts').offset().top;

		if(w_top + 200 >= e_top) {
			$(".spincrement").spincrement({    
				thousandSeparator: "",
				duration: 1500
			});

			show = false;
		}
	});

	var counter = 0;
	var selector;
	$('#load_more').on("click", function(){
		if (counter % 2 == 0) {
			selector = 0;
		} else {
			selector = 1;
		}
		$(".portfolio_list:eq("+selector+")").clone().insertBefore(this);
		counter++;
	});
});
