(function($) {
  $(document).ready(function() {
  // This is a function to open sidenav menu
    $('body').on('click', '.menu-open', function(){
      $('#main-menu.top-bar').css('width', '200px');
      $('.content-menu-burger .menu-open, .content-menu-burger .content-sub-menu-burger').hide();
      $('#main-menu .grid-container nav, .content-menu-burger .menu-close').show();

    });

  // This is a function to close sidenav menu
  $('body').on('click', '.menu-close', function(){
      $('#main-menu.top-bar').css('width', '70px');
      $('.content-menu-burger .menu-open, .content-menu-burger .content-sub-menu-burger').show();
      $('#main-menu .grid-container nav, .content-menu-burger .menu-close').hide();

    });

  //this is a function for dropdown account in the header
  $('body').on('click', '.custom-my-account .btn-my-account', function() {
    var $this = $(this);
    var $target = $($this.attr("data-target"));
    
    $('.custom-my-account .btn-my-account').not($this).each(function() {
      var $otherTarget = $($(this).attr("data-target"));
      $otherTarget.removeClass("d-block");
    });
    
    $target.toggleClass("d-block");
  });
  //this is a function dropdown on sidebar for reunion, community, poser question
  $('body').on('mouseenter mouseleave', '.content-sub-menu-burger .item-sub-menu-burger[data-target]', function(event) {
    var $target = $($(this).data("target"));
    var isMouseEnter = event.type === 'mouseenter';
    $target.toggleClass("d-block", isMouseEnter);
  });

  //this function is toogle of last document
  $('body').on('click', '.line-container-plus .btn-see-other-doc, .line-container-moins .btn-dismiss-other-doc', function() {
    if ($(this).hasClass('btn-see-other-doc')) {
        $('.section-others-documents').show();
        $('.line-container-plus').hide();
    } else {
        $('.section-others-documents').hide();
        $('.line-container-plus').show();
    }
  });
  
  //change backtotop icon
  $('button#backtotop').html('<i class="fa fa-angle-double-up"></i>');
  

});   
    
})(jQuery);