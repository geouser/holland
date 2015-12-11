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


var fullHeight = true;

if (params.isMobile) {
  var fullHeight = false;
}


/*
########################################
#   Main JS for Holland Landing page   #
########################################
*/



jQuery(document).ready(function($) {

$('.scrollbar').perfectScrollbar();

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
  arrows: false,
  dots: false
});

  if ($('.mini-slider').length > 0) {
    $('.mini-slider').slick({
      arrows: false,
      dots: true,
      autoplay: false,
      fade: true,
      autoplaySpeed: 4000
    });
  };

$(".slideNav li").click(function(e){
    e.preventDefault();
    slideIndex = $(this).index();
    $('.offerSlider').slick('slickGoTo', slideIndex);
});

/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: false,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom',

    callbacks: {
      open: function() {
        $('.mini-slider').get(0).slick.setPosition();
      }
    }
  });

$('#gmap').height( $(window).height() * 0.8 );
  
  $('.magnific-map').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: false,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom',

    callbacks: {
      open: function() {
        console.log('opened');
        googleMap_popup()
      }
    }
  });



/*  $('.gallery').magnificPopup({
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
*/
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

  $('.history_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    console.log(currentSlide);
    var allA = $('.gallery').find('a');
    allA.removeClass('active');

    var curFoto = $('.gallery').find('a[data-slide=' + currentSlide + ']');
    curFoto.addClass('active');
  });

  $('.gallery a').on('click', function(event) {
    event.preventDefault();
    $('.history_slider').slick( 'slickGoTo', $(this).attr('data-slide') );
  });





  $('.location_slider').slick({
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

$('nav a, .scrollDown').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
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

  //--------------------------------Google Карта в футере ---------------------------------
  function googleMap_initialize() {

      var mapCenterCoord = new google.maps.LatLng(59.970753, 30.261229);
      var mapMarkerCoord = new google.maps.LatLng(59.970753, 30.261229);

      var mapOptions = {
        center: mapCenterCoord,
        zoom: 17,
        //draggable: false,
        disableDefaultUI: true,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      var styles = [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":1},{"lightness":-12}]}];

      var styledMapType = new google.maps.StyledMapType(styles, {name: 'Styled'});
      map.mapTypes.set('Styled', styledMapType);
      map.setMapTypeId('Styled');

      var markerImage = new google.maps.MarkerImage('images/blue-marker.svg');
      var marker = new google.maps.Marker({
        icon: markerImage,
        position: mapMarkerCoord, 
        map: map,
        title:"Голландия"
      });

      $(window).resize(function (){
        map.setCenter(mapCenterCoord);
      });
  };
  googleMap_initialize();

  //--------------------------------Google Карта в футере ---------------------------------
  function googleMap_popup() {

      var mapCenterCoord = new google.maps.LatLng(59.970753, 30.261229);
      var mapMarkerCoord = new google.maps.LatLng(59.970753, 30.261229);

      var mapOptions = {
        center: mapCenterCoord,
        zoom: 17,
        //draggable: false,
        disableDefaultUI: true,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById('gmap-canvas'), mapOptions);

      var markerImage = new google.maps.MarkerImage('images/blue-marker.svg');
      var marker = new google.maps.Marker({
        icon: markerImage,
        position: mapMarkerCoord, 
        map: map,
        title:"Голландия"
      });

      $(window).resize(function (){
        $('#gmap').height( $(window).height() * 0.8 );
        map.setCenter(mapCenterCoord);
      });
  };

  $('#first').click(function(e){
    e.preventDefault();
    var coord = $(this).offset();
    console.log(coord);
  });
  $('#second').click(function(e){
    e.preventDefault();
    var coord = $(this).offset();
    console.log(coord);
  });



  function cover(el){
    var parentHeight = $('#map-box').height();
    var parentWidth = $('#map-box').width();

    /*var orientation;

    if ( parentHeight > parentWidth ) {
      orientation = 'port';
    } else if ( parentHeight <= parentWidth ) {
      orientation = 'land';
    }*/

    if ( $(window).width() > 1400 ) {
      el.width(parentWidth);
      el.find('#cover').css({
        width: parentWidth,
        height: 'auto'
      });
      el.css({
        'margin-top': '-' + el.height()/2 + 'px',
        'margin-left': '0',
        'top': '50%',
        'height': 'auto',
        'left': '0'
      });
    } else if ( $(window).width() <= 1400 && $(window).width() > 1000 ) {
      el.height(parentHeight);
      el.find('#cover').css({
        height: parentHeight,
        width: 'auto'
      });
      el.css({
        'top': 'auto',
        'left': '50%',
        'width': 'auto',
        'margin-top': '0',
      });
      el.css({
        'margin-left': '-' + el.width()/2 + 'px'
      });
    }

  };// end function cover

  cover( $('.h-map') );
  $(window).resize(function(event) {
    cover( $('.h-map') );
  });



function fullpage() {
      $('body').css('overflow', 'hidden');
      var divs = $('.section');
      var dir = 'up'; // wheel scroll direction
      var div = 0; // current div

      $(document.body).on('DOMMouseScroll mousewheel', function (e) {
          if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
              dir = 'down';
          } else {
              dir = 'up';
          }
          // find currently visible div :
          div = -1;
          divs.each(function(i){
              if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
                  div = i;
              }
          });
          if (dir == 'up' && div > 0) {
              div--;
          }
          if (dir == 'down' && div < divs.length) {
              div++;
          }
          //console.log(div, dir, divs.length);
          $('html,body').stop().animate({
              scrollTop: divs.eq(div).offset().top
          }, 700);
          return false;
      });
      $(window).resize(function () {
          $('html,body').scrollTop(divs.eq(div).offset().top);
      });


  };

  if (fullHeight && $(window).width() > 1340 && $(window).height() > 650  ) {
    fullpage();
  };




});




