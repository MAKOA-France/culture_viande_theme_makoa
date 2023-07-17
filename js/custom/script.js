(function($) {
  $(document).ready(function() {
  // This is a function to open sidenav menu
    $('body').on('click', '.menu-open', function(){
      $('#main-menu.top-bar').css('width', '200px');
      $('.content-menu-burger .menu-open').hide();
      $('#main-menu .grid-container nav, .content-menu-burger .menu-close').show();

    });

  // This is a function to close sidenav menu
  $('body').on('click', '.menu-close', function(){
      $('#main-menu.top-bar').css('width', '70px');
      $('.content-menu-burger .menu-open').show();
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

  //change backtotop
  $('button#backtotop').html('<i class="fa fa-angle-double-up"></i>');
  

});   
    
})(jQuery);