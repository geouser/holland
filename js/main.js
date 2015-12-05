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


});




