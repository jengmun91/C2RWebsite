
$(document).ready(function () {
    mobileDetect()
    checkOrientation();
    getWindowHeight();

    
     var resizeTimeout
      $(window).resize(function(){
            mobileDetect();
            checkOrientation();
           
      });
    


    var platform;
    function mobileDetect(){
          var detector = new MobileDetect(window.navigator.userAgent)
           /* console.log( "Mobile: " + detector.mobile());
            console.log( "Phone: " + detector.phone());
            console.log( "Tablet: " + detector.tablet());
            console.log( "OS: " + detector.os());
            console.log( "userAgent: " + detector.userAgent());*/
        $('body').removeClass('isSmallScreen');
        $('body').removeClass('isBigScreen');

          if(detector.phone()!=null){

               $('body').removeClass('isPC');
               $('body').addClass('isMobile');
               platform = 'isMobile';
              
              if($( window ).width() < 330){
                 $('body').addClass('isSmallScreen');
                }else{
                  $('body').removeClass('isSmallScreen');
                }

          }else if(detector.tablet()){

               $('body').removeClass('isPC');
               $('body').removeClass('isMobile');
               $('body').addClass('isTablet');

               platform = 'isTablet';
              
              if($( window ).width() < 700){ 
                 
                 $('body').addClass('isSmallScreen');
        
              }else{
                  $('body').removeClass('isSmallScreen');
              }
              
                if($( window ).width() > 1000){ 
                 
                 $('body').addClass('isBigScreen');

              }else{
                  $('body').removeClass('isBigScreen');
              }

          }else{

               $('body').removeClass('isMobile');
               $('body').removeClass('isTablet');
               $('body').addClass('isPC');

               platform = 'isPC';
          }
      }

    function checkBrowser(){
           var userAgentString =navigator.userAgent; 
           var IExplorerAgent = userAgentString.indexOf("MSIE") > -1 ||  userAgentString.indexOf("rv:") > -1; 
           var firefoxAgent = userAgentString.indexOf("Firefox") > -1;

          //console.log('IExplorerAgent='+IExplorerAgent)
          if(firefoxAgent){

          }else if(IExplorerAgent){
                $('body').addClass('ie')
          }
      }
    
    function checkOrientation(){
        if(platform != 'isPC'){
            if($( window ).height()< $( window ).width()){
                 $('body').removeClass('isPotrait');
                 $('body').addClass('isLandscape');
            }else{
                 $('body').removeClass('isLandscape');
                 $('body').addClass('isPotrait');
            }
        }
        
    }
   
    function getWindowHeight(){
        var windowH=$( window ).height();
    /*    $('.view-point-bg').css('height',windowH+5)*/
    }
        
});