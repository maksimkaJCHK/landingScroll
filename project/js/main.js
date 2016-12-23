var fixNav = function() {
	var scrollW = $(window).scrollTop();
	if(scrollW>110) {
		$('#nav').addClass('fix');
	} else {
		$('#nav.fix').removeClass('fix');
	}
};
$(document).on('ready', function() {
  fixNav();
  // Для данного параметра 'easing': 'easeInOutQuart' нужен плагин jquery.easing.js
  $('.no-animation #nav a').landingScroll({'blockIndent': 59, 'activeIndent': 150, 'easing': 'easeInOutQuart'});
  $('.animation #nav a').landingScroll({'blockIndent': 59, 'activeIndent': 150, 'easing': 'easeInOutQuart', 'blockActiveEnable': true});
});
$(window).on('scroll', function() {
  fixNav();
});

//Красивая прокрутка - easeInOutQuart, easeOutQuint, easeInOutQuint, easeOutExpo, easeInOutExpo, easeInCirc
//easeInOutCirc
//easeOutElastic easeInOutElastic - игровой
//easeInBack easeInOutBack - скачок обратно и прокрутка бывает нужно
//easeOutBounce - отскок