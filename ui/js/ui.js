
$(document).ready(function () {
    
    mobileDetect()
    checkSVGSupport();
          checkPlatformRedirectPage();   
    
    
    checkOrientation();
    getWindowHeight();
    checkBrowser();
    
     var resizeTimeout
      $(window).resize(function(){
            mobileDetect();
            checkOrientation();
           
      });
    
   function checkSVGSupport(){
       if(!Modernizr.svg) {
           console.log('NO SVG SUPPORT')
            $(body).addClass('no-svg');
        }else{
             console.log('SVG SUPPORT')
        }
   }

    var platform;
    function mobileDetect(){
        
          var detectUserAgent = new UserAgent().parse(navigator.userAgent);
          console.log('detectUserAgent='+detectUserAgent.isMobile)
            console.log('detectUserAgentDesktop='+detectUserAgent.isDesktop)
            console.log('detectUserAgentPlatform='+detectUserAgent.platform)
            console.log('detectUserAgentOS='+detectUserAgent.os)
            console.log('detectOS='+detectUserAgent.os)
        
          var detector = new MobileDetect(navigator.userAgent);
          console.log(window.navigator.userAgent);
          console.log(window.navigator.platform);
          console.log( "Mobile: " + detector.mobile());
          console.log( "Phone: " + detector.phone());
          console.log( "Tablet: " + detector.tablet());
          console.log( "OS: " + detector.os());
          console.log( "userAgent: " + detector.userAgent());
          console.log('isTOuch:'+ window.ontouchstart)
        
        if(detectUserAgent.os === 'OS X'){
            console.log('Apple device detcted!!!')
            $('body').addClass('isApple');
        }

        
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

        //   }else if(detector.tablet()){
        
         }else if(detector.tablet()!=null || detector.tablet()==null & detector.mobile()==null & detectUserAgent.isMobile){
              console.log('======TABLET/IPAD MINI IN=======:')
            // check is tablet or ipadmin
             setIsTablet();
             
         }else if(detector.tablet()==null && isIpadOS()/*detectUserAgent.os =='OS X'*/){
            // check is ipad , ipad pro
            console.log('======iPAD SERIES CHECKIN IN=======:')
             
            /*var WindowW=$(window).width();
            var WindowH=$(window).height();
            console.log('WIDTH : '+ WindowW);
            console.log('HEIGHT : '+ $(window).height());


            if((WindowW >= 1024-15 && WindowW <= 1024+15)&&(WindowH >= 768-15 && WindowH <= 768+15)){
                //IPAD 9.7* LANDSCAPE 
                console.log('======IPAD 9.7 LANDSCAPE IN =======:')
                setIsTablet();
            }
            else if((WindowH >= 1024-15 && WindowH <= 1024+15)&&(WindowW >= 768-15 && WindowW <= 768+15)){
                //IPAD 9.7*  
                console.log('======IPAD 9.7 IN =======:')
                setIsTablet();
            }
            else if((WindowW >= 1112-15 && WindowW <= 1112+15)&&(WindowH >= 834-15 && WindowH <= 834+15)){
                //IPAD PRO 10.5* LANDSCAPE 
                console.log('======IPAD PRO 10.5 LANDSCAPE IN =======:')
                setIsTablet();
            }
            else if((WindowH >= 1112-15 && WindowH <= 1112+15)&&(WindowW >= 834-15 && WindowW <= 834+15)){
                //IPAD PRO 10.5* 
                console.log('======IPAD PRO 10.5 IN =======:')
                setIsTablet();
            }
            else if((WindowW >= 1366-15 && WindowW <= 1366+15)&&(WindowH >= 1024-15 && WindowH <= 1024+15)){
                //IPAD PRO 2 12.9* LANDSCAPE 
                console.log('======IPAD PRO 2 12.9 LANDSCAPE IN =======:')
                setIsTablet();
            }
            else if((WindowH >= 1366-15 && WindowH <= 1366+15)&&(WindowW >= 1024-15 && WindowW <= 1024+15)){
                //IPAD PRO 2 12.9* 
                console.log('======IPAD PRO 2 12.9 IN =======:')
                setIsTablet();
            }
            else if((WindowW >= 2388-15 && WindowW <= 2388+15)&&(WindowH >= 1688-15 && WindowH <= 1688+15)){
                //IPAD PRO 2 11* 
                console.log('======IPAD PRO 2 11 IN =======:')
                setIsTablet();
            }
            else if((WindowH >= 2388-15 && WindowH <= 2388+15)&&(WindowW >= 1688-15 && WindowW <= 1688+15)){
                //IPAD PRO 2 11* LANDSCAPE 
                console.log('======IPAD PRO 2 11 LANDSCAPE IN  =======:')
                setIsTablet();
            }
            else if((WindowW >= 2732-15 && WindowW <= 2732+15)&&(WindowH >= 2048-15 && WindowH <= 2048+15)){
                //IPAD PRO 12.9* 
                console.log('======IPAD PRO 12.9 IN =======:')
                setIsTablet();
            }
            else if((WindowH >= 2732-15 && WindowH <= 2732+15)&&(WindowW >= 2048-15 && WindowW <= 2048+15)){
                //IPAD PRO 12.9* LANDSCAPE 
                console.log('======IPAD AIR 12.9 LANDSCAPE IN  =======:')
                setIsTablet();
            }
            else if((WindowW >= 2360-15 && WindowW <= 2360+15)&&(WindowH >= 1640-15 && WindowH <= 1640+15)){
                //IPAD AIR 10.9* 
                console.log('======IPAD AIR 10.9 IN =======:')
                setIsTablet();
            }
            else if((WindowH >= 2360-15 && WindowH <= 2360+15)&&(WindowW >= 1640-15 && WindowW <= 1640+15)){
                //IPAD AIR 10.9 LANDSCAPE* 
                console.log('======IPAD AIR 10.9 LANDSCAPE IN =======:')
                setIsTablet();
            }
            else{
                console.log('======SAFARI DESKTOP IN =======:')
                setIsPC()
            }*/
            console.log("<-------------------Is Ipad OS------------------->");
            setIsTablet();
             
             
          }else{

               $('body').removeClass('isMobile');
               $('body').removeClass('isTablet');
               $('body').addClass('isPC');

               platform = 'isPC';
               console.log("<--------------------- Is PC OS ------------------->");
               setIsPC()
          }

          
      }

      function isIpadOS() {
        return (/Macintosh/.test(navigator.userAgent) && 'ontouchend' in document) || 
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0) || 
        navigator.platform === 'iPad';
      }
    
    function checkPlatformRedirectPage(){
        
        if($('body').hasClass("indexx")){
          
           if(platform == 'isPC' ){
               
               $('body').show();
           }else{
               
               window.location.href = "index-m.html"; 
               
           }
        }else if($('body').hasClass("index-m")){
            
             if(platform == 'isPC' ){
                 
                 window.location.href = "index.html"; 
                 
            }else{
               
                $('body').show();
            }
        }else if($('body').hasClass("who-we-are")){
             if(platform == 'isPC' ){
               
               $('body').show();
            }else{

                 window.location.href = "who-are-we-m.html"; 

            }
        }
        else if($('body').hasClass("who-we-are-m")){
             if(platform == 'isPC' ){
                 
                 window.location.href = "who-are-we.html"; 
                 
            }else{
               
                $('body').show();
            }
        }
        else if($('body').hasClass("what-we-do")){
             if(platform == 'isPC' ){
               
               $('body').show();
            }else{

                 window.location.href = "what-we-do-m.html"; 

            }
        }
        else if($('body').hasClass("what-we-do-m")){
             if(platform == 'isPC' ){
                 
                 window.location.href = "what-we-do.html"; 
                 
            }else{
               
                $('body').show();
            }
        }
        
         if(platform == 'isMobile' || platform == 'isMobile' ){
             $('.navbar-brand').attr('href', 'index-m.html');
             $('.whoWeAreClass').attr('href', 'who-are-we-m.html');
             $('.whatWeDo').attr('href', 'what-we-do-m.html');
         }
       
    }
    function setIsPC(){
         $('body').removeClass('isMobile');
         $('body').removeClass('isTablet');
         $('body').addClass('isPC');

          platform = 'isPC';
    }

    function setIsTablet(){
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

    }
    
    function checkBrowser(){
           var userAgentString =navigator.userAgent; 
           var IExplorerAgent = userAgentString.indexOf("MSIE") > -1 ||  userAgentString.indexOf("rv:") > -1; 
           var firefoxAgent = userAgentString.indexOf("Firefox") > -1;
          /* var safariAgent =/^((?!chrome|android).)*safari/i.test(navigator.userAgent);*/
         /*  var safariAgent = userAgentString.indexOf("Safari") > -1;*/
           var safariAgent = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;
           var chromeAgent = userAgentString.indexOf("Chrome") > -1;
        
          //console.log('IExplorerAgent='+IExplorerAgent)
          if(firefoxAgent){
              $('body').addClass('firefox');
          }else if(IExplorerAgent){
                $('body').addClass('ie');   
          }else if(safariAgent){
               $('body').addClass('safari')
          }else{
               $('body').addClass('chrome');
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
       /* $('.isPC section.js-inview').css('height',windowH+15)*/
       /* $('.isMobile section.js-inview').css('height',windowH)*/
    }
     
      
          
});