$(document).ready(function() {

	$(".carousel-1").owlCarousel({
		navigation: true,
		pagination: false,
		navigationText: false,
		items: 1,
		autoHeight : true,
		nav: true,
		navText: false
	});

	var allPanels = $('.answer');
	allPanels.hide();
	$('.question').on('click', function() {
		var _this = $(this),
			answer  = _this.next('.answer'),
			speed = 250;
		_this.parent().siblings().children('.question').removeClass('question-active');
		_this.parent().siblings().children('.answer').slideUp(speed);
		if (answer.is(':visible')) {
			_this.removeClass('question-active');
			answer.slideUp(speed);
		} else {
			_this.addClass('question-active');
			answer.slideDown(speed);
		}
	});
});