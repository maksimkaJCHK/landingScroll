var fixNav = function() {
	var scrollW = $(window).scrollTop();
	if(scrollW>110) {
		$('#nav').addClass('fix');
	} else {
		$('#nav.fix').removeClass('fix');
	}
};