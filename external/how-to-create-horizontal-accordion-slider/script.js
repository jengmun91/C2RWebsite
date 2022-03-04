$(function () {
  // Show First Info
  $('.info').first().show().animate({ 
    width: '25%' 
  });
    
  // Show Info On Click
  $('.itm').click(function () {
     $('.accordionH-holder .itm').removeClass('active');
     $('.info-gp').removeClass('active');
     $(this).addClass('active');
     
      
     $(this)
     /* .next().addClass('active').show().animate({ width: '25%' })*/
      
       .next().show().animate({ width: '25%' }, function() { $(this).children().addClass('active') })
       .siblings('.info').animate({ width: 0 }, function() { $(this).hide()});
     /* .siblings('.info').css('opacity', 0).animate({ width: 0 }, function() { $(this).hide().css('opacity', 1); });*/
  });
});