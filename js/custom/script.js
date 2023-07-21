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

  // This is a function for dropdown account in the header
  $('body').on('click', '.custom-my-account .btn-my-account', function() {
    var $this = $(this);
    var $target = $($this.attr("data-target"));
    
    $('.custom-my-account .btn-my-account').not($this).each(function() {
      var $otherTarget = $($(this).attr("data-target"));
      $otherTarget.removeClass("d-block");
    });
    
    $target.toggleClass("d-block");
  });
  // This is a function dropdown on sidebar for reunion, community, poser question
  function handleSubMenuEvents(menuSelector) {
    $('body').on('mouseenter', `${menuSelector} .item-sub-menu-burger`, function() {
      $(`${menuSelector} .dropdown-sub-menu-burger`).addClass("d-block");
      $(this).addClass("sub-menu-burger-active");
    });

    $('body').on('mouseleave', `${menuSelector}`, function(event) {
      var $dropdown = $(`${menuSelector} .dropdown-sub-menu-burger`);
      var dropdownLeft = $dropdown.offset().left;
      var dropdownTop = $dropdown.offset().top;
      var dropdownWidth = $dropdown.outerWidth();
      var dropdownHeight = $dropdown.outerHeight();

      var mouseX = event.pageX;
      var mouseY = event.pageY;

      if (mouseX < dropdownLeft || mouseX > dropdownLeft + dropdownWidth || mouseY < dropdownTop || mouseY > dropdownTop + dropdownHeight) {
        $dropdown.removeClass("d-block");
        $(`${menuSelector} .item-sub-menu-burger`).removeClass("sub-menu-burger-active");
      }
    });
  }

  handleSubMenuEvents('.menu-reunion');
  handleSubMenuEvents('.menu-commission');
  handleSubMenuEvents('.menu-poser-question');


  
/*   $('body').on('focus','#select-ask-question-category', function() {
    $(this).addClass('opened');
  });

  // When the select loses focus
  $('body').on('blur','#select-ask-question-category', function() {
    $(this).removeClass('opened');
  }); */

  // This is function homepage search
  jQuery('body .btn-search-header').on('click', () => {
    let keyword = jQuery('.input-search-header').val();
    keyword = keyword.replace(/ /g, '+');
    location.href="/recherche?search_api_fulltext=" + keyword
  })

  // This function is toogle of last document
  $('body').on('click', '.line-container-plus .btn-see-other-doc, .line-container-moins .btn-dismiss-other-doc', function() {
    if ($(this).hasClass('btn-see-other-doc')) {
        $('.section-others-documents').show();
        $('.line-container-plus').hide();
    } else {
        $('.section-others-documents').hide();
        $('.line-container-plus').show();
    }
  });
  
  // This is to change backtotop icon
  $('button#backtotop').html('<i class="fa fa-angle-double-up"></i>');
  
});    
})(jQuery);