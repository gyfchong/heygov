/* ==========================================================================
 * EXAMPLE MODULE
 * ========================================================================== */

(function(NAMESPACE) {

	'use strict';

	NAMESPACE.exampleModule = (function() {

		var init;

		init = function() {
			// Code and stuff

			$('.view-about').on('click', function(e) {
				e.preventDefault();
				$('.about-us').slideToggle();
				$(this).parent().toggleClass('open');
			});

			$('.view-trend').on('click', function(e) {
				e.preventDefault();
				$('.data-visual').slideDown();
			});

			$('.data-visual .close').on('click', function(e) {
				e.preventDefault();
				$('.data-visual').slideUp();
			});

			$('.support .button').on('click', function(e) {
				e.preventDefault();
				var countNumber = parseInt($(this).find('.number').text());
				$(this).find('.number').text(countNumber+1);
			});

			$('.disapprove .button').on('click', function(e) {
				e.preventDefault();
				var countNumber = parseInt($(this).find('.number').text());
				$(this).find('.number').text(countNumber-1);
			});
		};

		return {
			init: init
		};
	}());

}(GULPBASE));
