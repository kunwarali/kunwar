// JavaScript Document

$(document).ready(function(){
	$('.add-to-cartt').on('click',function(){
		var itemImg = $(this).parent().parent().find('img').eq(0);
		flyToElement($(itemImg), $('.shopping-cart'));
		cartValue=parseInt($('.badge').html())+1;
		$('.badge').html(cartValue);
	});
});
function flyToElement(flyer, flyingTo) {
	var $func = $(this);
	var divider = 3;
	var flyerClone = $(flyer).clone();
	$(flyerClone).css({position: 'absolute',height:200+"px",width:150+"px", top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 100000});
	$('body').append($(flyerClone));
	var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width()/divider)/2;
	var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height()/divider)/2;
	 
	$(flyerClone).animate({
		opacity: 0.4,
		left: gotoX,
		top: gotoY,
		width: $(flyer).width()/divider,
		height: $(flyer).height()/divider
	}, 1000,
	function () {
		$(flyingTo).fadeOut('fast', function () {
			$(flyingTo).fadeIn('fast', function () {
				$(flyerClone).fadeOut('fast', function () {
					$(flyerClone).remove();
				});
			});
		});
	});
	 
}