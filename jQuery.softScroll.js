/*! 
 * jQuery SoftScroll anchor links
 * - Make anchor links smoothly scroll to destination
 * by Nicolaj Kirkgaard Nielsen 
 */
(function($){
  $.fn.softScroll = function( options ) {

		// Defaults
		var settings = $.extend( {
			'events'  : 'click',
			'time'    : 1000,
			'easing'  : 'swing',
			'offset'  : 20
		}, options);

		return this.each(function() {

			$(this).on(settings.events, function() {
				var hash   = $(this).attr('href'),
					offset = $(hash).offset();
				if (offset) {
					$('html, body').animate({ scrollTop: offset.top-settings.offset }, settings.time, settings.easing);
					return false;
				}
			});
		});
	};
})(jQuery);
