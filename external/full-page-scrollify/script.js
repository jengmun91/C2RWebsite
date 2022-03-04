var $scrollduration = 1100;
//$('section').addClass('unmoved');

$.scrollify({
  section : 'section',
  easing: "easeOutExpo",
  scrollSpeed: $scrollduration,
  touchScroll:true,
  interstitialSection: ".placeholder",
  before: function () {
   /* $('section').addClass('unmoved');
    current = $.scrollify.current();
    current.removeClass('unmoved');
    if($.scrollify.currentIndex() == 0) {
      head.css('top', '30vh');
    } else {
      head.css('top', '20px');
    }; */
                }
});

/*var subline = $('span');
var head = $('h1');
inView.threshold(0.6);
inView('.data').on('enter', function(el){
  var color = $(el).attr('data-h1-color');
  subline.css('color', color );
});*/