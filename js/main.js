// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};

function Main() {

  // add conditional classes
  if (params.isIOS) $('html').addClass('-ios');
  if (params.isMobile) $('html').addClass('-mobile');

}

$(function(){
  Main();
});


// Áðàóçåð Internet Explorer?
$(function(){
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null) {
      var v = parseFloat( RegExp.$1 );
      $('html').addClass("ie");
      $('html').addClass("ie"+v);
    }
  } else if (navigator.appName == 'Netscape') {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null) {
      var v = parseFloat( RegExp.$1 );
      $('html').addClass("ie");
      $('html').addClass("ie"+v);
    }
  }
});


$(function(){
    $(window).resize(function(event) {
      if ($(window).width() <= 1000) {
        $('body').removeClass('display-vertical');
      } else {$('body').addClass('display-vertical');};
    });
    if ($(window).width() < 800) {
       $('body').removeClass('display-vertical');
    }
      else { $('body').addClass('display-vertical'); }
      
  })


/*
#############################
#   Main JS for ____________   #
#############################
*/

jQuery(document).ready(function($) {

$('.apartment.visible').find('.apartmentInfoWrap ul').fadeIn('slow');

$('.apartment').hover(function(){
  $(this).css('width', '58%').addClass('visible').removeClass('hid').siblings().removeClass('visible').addClass('hid');
  $(this).siblings('.apartment').css('width', '21%');
  if ($(this).hasClass('visible')) {
    $(this).find('.apartmentInfoWrap ul').fadeIn('slow');
    $(this).siblings().find('.apartmentInfoWrap ul').fadeOut('fast')
  } 
});

$('.offerSlider').slick({
  fade: true,
  arrows: false
});

$(".slideNav li").click(function(e){
    e.preventDefault();
    slideIndex = $(this).index();
    $('.offerSlider').slick('slickGoTo', slideIndex);
});

/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: true,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    overflowY: 'auto',
    fixedContentPos: false,
    fixedBgPos: true,
    tLoading: 'Loading image #%curr%...',
    mainClass: 'my-mfp-slide-bottom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('alt');
      }
    }
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });


  function falseHover(el){
    $(el).toggleClass('hover').siblings().removeClass('hover');
  }

  $('.false_hover').on('click', function(event) {
    event.preventDefault();
    if (params.isMobile) falseHover(this);
  });

  $('.about_slider').slick({
    arrows: false,
    dots: true
  });

  $('.history_slider').slick({
    arrows: false,
    dots: true
  });


  $('.menu-button').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings().children('nav').fadeToggle('fast');
  });


$(function() { // add class on scroll
  var $document = $(document),
      $element = $('.menu-button'),
      $element2 = $('header'),
      className = 'hasScrolled';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 10);
    $element2.toggleClass(className, $document.scrollTop() >= 1);
  });
});

  $(function() { // scroll to anchor
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length  ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top 
          }, 1000);
          return false;
        }
      }
    });
  });


 $('.processBlockInfo h5 button').click(function(){
    if($(this).hasClass('visible')) {
      $(this).addClass('hid').removeClass('visible').parent().parent().addClass('hid').removeClass('visible');
    } else {
      $(this).addClass('visible').removeClass('hid').parent().parent().addClass('visible').removeClass('hid');
    }

 });

  $(function() {
    $( ".infoTabs" ).tabs();
  });

});




