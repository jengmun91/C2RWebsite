/**
 * https://github.com/protonet/jquery.inview
 */
(function($) {
  var inviewObjects = {},
    viewportSize, viewportOffset,
    d = document,
    w = window,
    documentElement = d.documentElement,
    expando = $.expando,
    timer;

  $.event.special.inview = {
    add: function(data) {
      inviewObjects[data.guid + "-" + this[expando]] = {
        data: data,
        $element: $(this)
      };

      // Use setInterval in order to also make sure this captures elements within
      // "overflow:scroll" elements or elements that appeared in the dom tree due to
      // dom manipulation and reflow
      // old: $(window).scroll(checkInView);
      //
      // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
      // intervals while the user scrolls. Therefore the inview event might fire a bit late there
      //
      // Don't waste cycles with an interval until we get at least one element that
      // has bound to the inview event.
      if (!timer && !$.isEmptyObject(inviewObjects)) {
        timer = setInterval(checkInView, 250);
      }
    },

    remove: function(data) {
      try {
        delete inviewObjects[data.guid + "-" + this[expando]];
      } catch (e) {}

      // Clear interval when we no longer have any elements listening
      if ($.isEmptyObject(inviewObjects)) {
        clearInterval(timer);
        timer = null;
      }
    }
  };

  function getViewportSize() {
    var mode, domObject, size = {
      height: w.innerHeight,
      width: w.innerWidth
    };

    // if this is correct then return it. iPad has compat Mode, so will
    // go into check clientHeight/clientWidth (which has the wrong value).
    if (!size.height) {
      mode = d.compatMode;
      if (mode || !$.support.boxModel) { // IE, Gecko
        domObject = mode === 'CSS1Compat' ?
          documentElement : // Standards
          d.body; // Quirks
        size = {
          height: domObject.clientHeight,
          width: domObject.clientWidth
        };
      }
    }

    return size;
  }

  function getViewportOffset() {
    return {
      top: w.pageYOffset || documentElement.scrollTop || d.body.scrollTop,
      left: w.pageXOffset || documentElement.scrollLeft || d.body.scrollLeft
    };
  }

  function checkInView() {
    var $elements = [],
      elementsLength, i = 0;

    $.each(inviewObjects, function(i, inviewObject) {
      var selector = inviewObject.data.selector,
        $element = inviewObject.$element;
      $elements.push(selector ? $element.find(selector) : $element);
    });

    elementsLength = $elements.length;
    if (elementsLength) {
      viewportSize = viewportSize || getViewportSize();
      viewportOffset = viewportOffset || getViewportOffset();

      for (; i < elementsLength; i++) {
        // Ignore elements that are not in the DOM tree
        if (!$.contains(documentElement, $elements[i][0])) {
          continue;
        }

        var $element = $($elements[i]),
          elementSize = {
            height: $element.height(),
            width: $element.width()
          },
          elementOffset = $element.offset(),
          inView = $element.data('inview'),
          visiblePartX,
          visiblePartY,
          visiblePartsMerged;

        // Don't ask me why because I haven't figured out yet:
        // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
        // Even though it sounds weird:
        // It seems that the execution of this function is interferred by the onresize/onscroll event
        // where viewportOffset and viewportSize are unset
        if (!viewportOffset || !viewportSize) {
          return;
        }

        if (elementOffset.top + elementSize.height > viewportOffset.top &&
          elementOffset.top < viewportOffset.top + viewportSize.height &&
          elementOffset.left + elementSize.width > viewportOffset.left &&
          elementOffset.left < viewportOffset.left + viewportSize.width) {
          visiblePartX = (viewportOffset.left > elementOffset.left ?
            'right' : (viewportOffset.left + viewportSize.width) < (elementOffset.left + elementSize.width) ?
            'left' : 'both');
          visiblePartY = (viewportOffset.top > elementOffset.top ?
            'bottom' : (viewportOffset.top + viewportSize.height) < (elementOffset.top + elementSize.height) ?
            'top' : 'both');
          visiblePartsMerged = visiblePartX + "-" + visiblePartY;
          if (!inView || inView !== visiblePartsMerged) {
            $element.data('inview', visiblePartsMerged).trigger('inview', [true, visiblePartX, visiblePartY]);
          }
        } else if (inView) {
          $element.data('inview', false).trigger('inview', [false]);
        }
      }
    }
  }

  $(w).bind("scroll resize scrollstop touchmove", function() {
    viewportSize = viewportOffset = null;
  });

  // IE < 9 scrolls to focused elements without firing the "scroll" event
  if (!documentElement.addEventListener && documentElement.attachEvent) {
    documentElement.attachEvent("onfocusin", function() {
      viewportOffset = null;
    });
  }
})(jQuery);

$.support.transition = (function() {
  var thisBody = document.body || document.documentElement,
    thisStyle = thisBody.style,
    support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
  return support;
})();

$(function() {
  
  $('.js-inview').each(function(){
      
  
    //only bind if browser supports animation - use HTML class added from Modernizr
    if ($('html').hasClass('cssanimations')) {
    
        $(this).bind('inview', function(e, isInView, visiblePartX, visiblePartY) {
            var elem = $(this);
            var className = elem.attr("data-animate");

            if (elem.data('inviewtimer')) {
              clearTimeout(elem.data('inviewtimer'));
              elem.removeData('inviewtimer');
            }

            if (isInView) {
              elem.data('inviewtimer', setTimeout(function() {
                console.log("VisiblePartY = " + visiblePartY);
                if (visiblePartY == 'top') {
                  elem.data('seenTop', true);
                } else if (visiblePartY == 'bottom') {
                  elem.data('seenBottom', true);
                } else {
                  elem.data('seenTop', true);
                  elem.data('seenBottom', true);
                }
                  if (elem.data('seenTop')) {
                        elem.addClass(className);
                      
                   }else if(elem.data('seenBottom')) {
                        elem.addClass(className);
                       
                   }else if(elem.data('seenTop') && elem.data('seenBottom')) {
                 /* elem.unbind('inview');*/
                  
                  elem.addClass(className);
                } 
              }, 0));
            }
            else{
                console.log('REMOVE')
                 elem.removeClass(className);
            }
        });
      
    }
    
  });
  
});