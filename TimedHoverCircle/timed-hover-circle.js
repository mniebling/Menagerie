(function ($) {
	'use strict';

	$(function () {
		
		var $wrapper = $('.wrapper'),
			$circleTop = $('.circle-top');


		// Start animating if cursor enters the circle
		$wrapper.on('mouseenter', function () {

				$circleTop.addClass('animate-circle');
		});


		// Stop animating if cursor leaves the circle
		$wrapper.on('mouseleave', function () {

			$circleTop.removeClass('animate-circle');
		});


		// Do stuff if the animation successfully completes

		// W3C, Firefox
		$circleTop.get(0).addEventListener('animationend', animationEnded, false);
		// Webkit
		$circleTop.get(0).addEventListener('webkitAnimationEnd', animationEnded, false);
		// Opera
		$circleTop.get(0).addEventListener('oanimationend', animationEnded, false);
		// IE10
		$circleTop.get(0).addEventListener('MSAnimationEnd', animationEnded, false);

		function animationEnded () {

			console.log('Animation has ended!');

			$wrapper.after('<p>Animation has ended!</p>');
		}

	});
})(window.jQuery);