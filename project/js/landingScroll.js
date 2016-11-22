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
          $('.'+settings.menuActiveClass).removeClass(settings.menuActiveClass);
          self.addClass(settings.menuActiveClass);
        } else {
          self.removeClass(settings.menuActiveClass);
        }
      })
    };
    findIndent(self);
    this.on('click', function(event) {
      var self = $(this);
      var valueScroll = self.attr('data-scroll');
      $('html, body').animate({'scrollTop': valueScroll}, settings.speed, settings.easing, function() {
        settings.callback();
      });
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