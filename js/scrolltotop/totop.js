
(function($) {
 "use strict";

$(document).ready(function(){

	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 600) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
		var div=$(this).attr("href");
		
		var position=$(div).offset().top;
	
position=10;
		$("html, body").animate({ scrollTop: position }, 2000);
		return false;
	});
	
	$('.scrolldown').click(function(){
		var div=$(this).attr("href");
		var position=$(div).offset().top;
		
			$("html, body").animate({ scrollTop: position }, 1000);
			return false;
		});
	});
})(jQuery);