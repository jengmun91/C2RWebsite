$(function () {
  // Show First Info
  $('.info').first().show().animate({ 
    width: '50%' 
  });
  // Show Info On Click
  $('.item').click(function () {
    $(this)
      .next().show().animate({ width: '50%' })
      .siblings('.info').animate({ width: 0 }, function() { $(this).hide() });
  });
});