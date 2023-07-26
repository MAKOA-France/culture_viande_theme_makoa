(function($) {
  $(document).ready(function() {


    //login page set placeholder
    jQuery('.user-login-form [name="name"]').attr('placeholder', 'Identifiant');


  // This is a function to open sidenav menu
    $('body').on('click', '.menu-open', function(){
      $('#main-menu.top-bar').css('width', '223px');
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

  // This is function for breadcrumb
  $(".breadcrumb ol li").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).children("ul").stop().slideDown(300);
    } else {
      $(this).children("ul").stop().slideUp(300);
    }
  });

  // This is function for level 1 dropdown of menu
  $('body').on('click', 'nav#block-menuprincipal ul li.is-dropdown-submenu-parent', function () {
    var $this = $(this);
    var isClick = $this.hasClass("first-level-click");

    // This is to close all other open drop-down menus except the one just clicked
    $('nav#block-menuprincipal ul li.is-dropdown-submenu-parent.first-level-click').not($this).removeClass("first-level-click").children("ul").stop().slideUp(300);

    if (isClick) {
      $this.removeClass("first-level-click");
      $this.children("ul").stop().slideUp(300);
    } else {
      $this.addClass("first-level-click");
      $this.children("ul").stop().slideDown(300);
    }
  });

   // This is function for display level 2 dropdown of menu on mouseenter
  $('body').on('mouseenter', 'nav#block-menuprincipal ul > li > ul > li.menu-item--expanded ', function(event) {
    event.stopPropagation();
    $('nav#block-menuprincipal ul > li > ul > li.menu-item--expanded ul').addClass("d-block");
    $(this).addClass("second-level-active");
  });

  // This is function for hide level 2 dropdown of menu on mouseover
  $('body').on('mouseleave', 'nav#block-menuprincipal ul > li > ul > li.menu-item--expanded ', function(event) {
    event.stopPropagation();
    var $dropdown = $('nav#block-menuprincipal ul > li > ul > li.menu-item--expanded ul');
    var dropdownLeft = $dropdown.offset().left;
    var dropdownTop = $dropdown.offset().top;
    var dropdownWidth = $dropdown.outerWidth();
    var dropdownHeight = $dropdown.outerHeight();

    var mouseX = event.pageX;
    var mouseY = event.pageY;

    if (mouseX < dropdownLeft || mouseX > dropdownLeft + dropdownWidth || mouseY < dropdownTop || mouseY > dropdownTop + dropdownHeight) {
      $dropdown.removeClass("d-block");
      $('nav#block-menuprincipal ul >li.first-level-click>ul.first-sub>li.menu-item--expanded').removeClass("second-level-active");
    }
  });  

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


  //window on load 
  $(window).on('load', function () {
    //login page 
    const h2Text = $('.page-user-login .user-login-form [role="alert"] h2.visually-hidden').text().trim();

    // Get the text inside the div
    const divText = $('.page-user-login .user-login-form [role="alert"]').contents().filter(function() {
      return this.nodeType === 3; // Filter out text nodes
    }).text().trim();
    // Check if the text matches the expected values
    if (h2Text === "Message d'erreur" && divText === "Accès refusé. Vous devez vous authentifier pour visualiser cette page.") {
      const errorMessage = jQuery(".messages--error div[role='alert']").text().trim();
      // Get the h2 element
      const h2Element = jQuery(".messages--error h2.visually-hidden");
    
      // Update the h2 text with the error message
      h2Element.text(errorMessage);
      // Remove the error message from the div
      jQuery('<i class="fa fa-times-circle" aria-hidden="true"></i>').insertBefore(".messages--error div[role='alert']");
      jQuery(".messages--error div[role='alert']").html('<h2>Accès refusé</h2>Vous devez vous authentifier pour visualiser cette page.');
      jQuery(".messages--error h2.visually-hidden").removeClass('visually-hidden');
    }
  })
  
});    
})(jQuery);