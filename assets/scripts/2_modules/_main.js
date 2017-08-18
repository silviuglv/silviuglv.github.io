$(document).ready(function() {


  $('.tab-list').each(function() {
    var $this       = $(this);
    var $tab        = $this.find('li.active');
    var $link       = $tab.find('a');
    var $panel      = $($link.attr('href'));
    var $window     = $(window);
    var workTrigger = $panel.offset().top - $window.height() - 500;

    $this.on('click', '.tab-control', function(e) {
      e.preventDefault();
      var $link = $(this);
      var id    = this.hash;

      if (id && !$link.is('.active')) {
        $panel.removeClass('active');
        $tab.removeClass('active');
        $panel = $(id).addClass('active');
        $tab   = $link.parent().addClass('active');

      }
    });
    $window.on('scroll', function() {
      if ((workTrigger) < $window.scrollTop() && $panel.not('.active')) {
        $panel.addClass('active');

      };
    });
  });

  // TECH section animation

  var $window = $(window);
  var $tech   = $('#tech');
  var trigger = $tech.offset().top - 300;
  $window.on('scroll', function() {
    console.log(trigger);
    if ((trigger) < $window.scrollTop()) {

      $('.icon-container').addClass('animate')


    };
  });

});
