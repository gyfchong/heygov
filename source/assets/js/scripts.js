/* ==========================================================================
 * SCRIPT.JS
 * ========================================================================== */

window.GULPBASE = window.GULPBASE || {};

/* Stop console.log errors */
if (typeof console === 'undefined') {
	window.console = {};
	console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function() {};
}

(function(NAMESPACE) {

	'use strict';

	NAMESPACE.INIT = {
		visual: function() {
			
			NAMESPACE.exampleModule.init();

		},
		functional: function() {
			
		}
	};

	NAMESPACE.init = function() {
		NAMESPACE.INIT.visual();
		NAMESPACE.INIT.functional();
	};

	$(document).ready(function() {
		NAMESPACE.init();
	});

}(GULPBASE));

