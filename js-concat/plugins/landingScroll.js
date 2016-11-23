(function($) {
  jQuery.fn.landingScroll = function(options) {
    var settings = $.extend({
      'speed': 1000,
      'easing': 'linear',
      'blockIndent': 200,
      'activeIndent': 100,
      'menuActiveClass': 'active',
      'callback': function() {
        return;
      }
    }, options);
    var mainSelf = this;
    var forCAI = function() {
      for(var i=0; i<mainSelf.length; i++) {
        mainSelf.eq(i).attr('data-type', 'menu');
      }
    };
    var findIndent = function() {
      mainSelf.each(function() {
        var self = $(this);
        var posBlock = $('#'+self.data('link')).offset();
        var posTopBlock = posBlock.top;
        self.attr('data-scroll', (posTopBlock-settings.blockIndent));
      });
    };
    var showActiveItem = function() {
      var scrollW = $(window).scrollTop();
      mainSelf.each(function() {
        var self = $(this);
        if(scrollW>=(self.attr('data-scroll') - settings.activeIndent)) {
          $('[data-type="menu"].'+settings.menuActiveClass).removeClass(settings.menuActiveClass);
          self.addClass(settings.menuActiveClass);
        }
      })
    };
    forCAI();
    findIndent();
    this.on('click', function(event) {
      var self = $(this);
      var valueScroll = self.attr('data-scroll');
      $('html, body').animate({'scrollTop': valueScroll}, settings.speed, settings.easing, settings.callback);
      event.preventDefault();
    });
    $(window).on('scroll.landingScroll', showActiveItem);
    showActiveItem();
    $(window).on('resize', function() {
      $(window).off('scroll.landingScroll');
      findIndent();
      showActiveItem();
      $(window).on('scroll.landingScroll', showActiveItem);
    });
  };
})(jQuery);