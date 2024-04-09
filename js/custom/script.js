(function($) {
  $(document).ready(function() {


    var screenWidth = $(window).width();

    if (screenWidth <= 680) {
      $('.top-bar').css('display', 'contents')

      $('.title-bar').on('click', function() {
        $('.content-menu-burger').toggle();
        jQuery('.layout-container #main-menu').css('display', 'flex').css('important', 'true');
      })
    }

    //mot de passe oublié
    jQuery('.back-to-login').insertBefore('.btn-custom-submit #edit-actions');

    //login page set placeholder
    jQuery('.user-login-form [name="name"]').attr('placeholder', 'Identifiant');


  // This is a function to open sidenav menu
    $('body').on('click', '.menu-open', function(){
      $('#main-menu.top-bar').addClass('menu-sidebar-open');
      $('.content-menu-burger .menu-open').hide();
      $('#main-menu .grid-container nav, .content-menu-burger .menu-close').show();
      
    });

  // This is a function to close sidenav menu
  $('body').on('click', '.menu-close', function(){
      $('#main-menu.top-bar').removeClass('menu-sidebar-open');
      $('.content-menu-burger .menu-open').show();
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

 // Detect la taille de l'ecran
  if (window.innerWidth > 993) {

      // This is function stopped propagation on click submenu in sidebar left
        $('body').on('click', 'nav#block-menuprincipal ul > li > ul > li.menu-item a, nav#block-menuprincipal ul > li > ul > li.is-dropdown-submenu-parent.second-niv ', function(event) {
          event.stopPropagation();
        });
        
        // This is function for display level 2 dropdown of menu on mouseenter
        $('body').on('mouseenter', 'nav#block-menuprincipal ul > li.premier-niv.first-level-click > ul > li.menu-item--expanded', function(event) {
          event.stopPropagation();
          $('nav#block-menuprincipal ul ul').removeClass("d-block");

          $(this).find('ul').addClass("d-block");
          $('nav#block-menuprincipal ul > li > ul > li.menu-item--expanded').removeClass("second-level-active");
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

  }else{
    
      var menuSelectorMobile = '.menu-reunion, .menu-commission, .menu-poser-question';
  
      $('body').on('click', menuSelectorMobile, function() {
        var $contentSubMenuBurger = $(this).find('.dropdown-sub-menu-burger');    
        $('.content-sub-menu-burger').find('.dropdown-sub-menu-burger').not($contentSubMenuBurger).slideUp(300);    
        $contentSubMenuBurger.slideToggle(300);
      });
  
      $('body').on('click', '.menu-reunion .dropdown-sub-menu-burger, .menu-commission .dropdown-sub-menu-burger, .menu-poser-question .dropdown-sub-menu-burger', function(event) {
        event.stopPropagation();
      });
  
      $(document).click(function(event) {
        if (!$(event.target).closest(menuSelectorMobile).length) {
          $('.dropdown-sub-menu-burger').slideUp(300);
        }
      });

     // This is function for display and hide level 2 dropdown of menu on clic in mobile
      $('body').on('click', 'nav#block-menuprincipal ul > li.premier-niv > ul > li.menu-item--expanded.second-niv', function(event) {
        event.stopPropagation();  
        var $this = $(this);
        var isClick = $this.hasClass("second-level-click");
        $(this).find('ul').addClass("d-block");
        
        $('nav#block-menuprincipal ul > li.premier-niv > ul > li.menu-item--expanded.second-niv.second-level-click').not($this).removeClass("second-level-click").children("ul").stop().slideUp(300);
          if (isClick) {
            $this.removeClass("second-level-click");
            $this.children("ul").stop().slideUp(300);
          } else {
            $this.addClass("second-level-click");
            $this.children("ul").stop().slideDown(300);
          }
      });  

  }

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
  $('body').on('click', 'nav#block-menuprincipal ul li.menu-item--expanded.premier-niv', function(event) {
    event.stopPropagation();
    var $this = $(this);
    var isClick = $this.hasClass("first-level-click");

    // This is to close all other open drop-down menus except the one just clicked
    $('nav#block-menuprincipal ul li.menu-item--expanded.premier-niv.first-level-click').not($this).removeClass("first-level-click").children("ul").stop().slideUp(300);

    if (isClick) {
      $this.removeClass("first-level-click");
      $this.children("ul").stop().slideUp(300);
    } else {
      $this.addClass("first-level-click");
      $this.children("ul").stop().slideDown(300);
    }
  });

  // This is function homepage search
  jQuery('body .btn-search-header').on('click', () => {
    let keyword = jQuery('.input-search-header').val();
    keyword = keyword.replace(/ /g, '+');
    location.href="/recherche?search_api_fulltext=" + keyword
  })
  
  
  // Attach a keypress event handler to the input field with class "input-search-header."
  $('body .input-search-header').on('keypress', function(event) {
    // Check if the Enter key (key code 13) is pressed.
    if (event.which === 13) {
      let keyword = $(this).val();
      location.href="/recherche?search_api_fulltext=" + keyword
      event.preventDefault();
    }
  });

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
  /*  TODO 
    if (jQuery('[name="field_gabarit_texte_et_images[value]"]').prop('checked')) {
      jQuery('[id*=field-dossier-values]').next('.clearfix').show();
    }else {
        jQuery('[id*=field-dossier-values]').next('.clearfix').hide();
    }
    jQuery('body.path-taxonomy').on('click', function(e) {
      e.preventDefault();
        console.log('is checked')
        if (jQuery(this).prop('checked')) {
            jQuery('[id*=field-dossier-values]').next('.clearfix').show();
        }else {
            jQuery('[id*=field-dossier-values]').next('.clearfix').hide();
        }
        // jQuery('#field-dossier-values').next('.clearfix').toggle();
    }) */
    var messageDiv = $('.messages--status');
    var messageText = messageDiv.text();

    if (messageText.includes("You have already submitted this webform.")) {
        // messageDiv.hide();
    }
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
      jQuery(".messages--error div[role='alert']").html('<h2>Accès refusé.</h2>Vous devez vous authentifier pour visualiser cette page.');
      jQuery(".messages--error h2.visually-hidden").removeClass('visually-hidden');
    }
  });

  //This is a function of accordeon dans l'image + text    
  $(".middle.faq-dropdown").each(function () {
      const faqDropdown = $(this);
      const firstH4 = faqDropdown.find("h4:first");
      const toggleIcon = firstH4.find("span.glyphicon");
      const elementsToToggle = faqDropdown.children().not(firstH4);
      
      firstH4.on("click", function (event) {
        event.stopPropagation();
          elementsToToggle.slideToggle();
          toggleIcon.toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
          $(".middle.faq-dropdown")
            .not(faqDropdown)
            .find("> *:not(h4:first)")
            .slideUp()
            .end()
            .find("span.glyphicon")
            .removeClass("glyphicon-chevron-up")
            .addClass("glyphicon-chevron-down");
      });
  }); 

  $('.search-local-header .icon-search-header').on("click", function () {
    $('.search-local-header').find('.input-search-header, .btn-search-header').toggle();
  });

});    
})(jQuery);

