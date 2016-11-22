$(document).on('ready', function() {
  fixNav();
  $('#nav a').landingScroll({'blockIndent': 59, 'activeIndent': 150, 'easing': 'easeInOutQuart'});
});
$(window).on('scroll', function() {
  fixNav();
});

//Красивая прокрутка - easeInOutQuart, easeOutQuint, easeInOutQuint, easeOutExpo, easeInOutExpo, easeInCirc
//easeInOutCirc
//easeOutElastic easeInOutElastic - игровой
//easeInBack easeInOutBack - скачок обратно и прокрутка бывает нужно
//easeOutBounce - отскок