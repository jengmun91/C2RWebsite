var LslideA      = document.querySelectorAll('.LslideA'),
    RslideA      = document.querySelectorAll('.RslideA'),
    controlA     = document.querySelectorAll('.oncontrolA'),
    slideHeight = document.querySelector('.wrapper2').clientHeight,
    color = ['#000000', '#000000', '#000000'],
    index = 0;


function init() {
    slideHeight = document.querySelector('.wrapper2').clientHeight;
    for (i = 0; i < LslideA.length; i++) {
        LslideA[i].style.backgroundColor = color[i];
        LslideA[i].style.top = -slideHeight * i + "px";
        RslideA[i].style.top = slideHeight * i + "px";
    }  
}
init()
window.addEventListener('resize', function(){
    init()
});

function moveToTop() {

    index++;
    for (el = 0; el < LslideA.length; el++) {
        LslideA[el].style.top = parseInt(LslideA[el].style.top) + slideHeight + "px";
        RslideA[el].style.top = parseInt(RslideA[el].style.top) - slideHeight + "px";
    }

    if (index > LslideA.length-1) {
        index = 0;
        for (el = 0; el < LslideA.length; el++) {
            LslideA[el].style.top = -slideHeight * el + "px";
            RslideA[el].style.top = slideHeight * el + "px";
        }
    }
}

function moveToBottom() {
    index--;
    for (el = 0; el < LslideA.length; el++) {
        LslideA[el].style.top = parseInt(LslideA[el].style.top) - slideHeight + "px";
        RslideA[el].style.top = parseInt(RslideA[el].style.top) + slideHeight + "px";
        
    }
    if (index < 0) {
        index = RslideA.length-1;
        for (el = 0; el < LslideA.length; el++) {
            LslideA[el].style.top = parseInt(LslideA[el].style.top) + slideHeight * LslideA.length + "px";
            RslideA[el].style.top = parseInt(RslideA[el].style.top) - slideHeight * RslideA.length + "px";
        }
    }
}

function transition() {
    for (t = 0; t < LslideA.length; t++) {
        LslideA[t].style.transition = "all 0.8s";
        RslideA[t].style.transition = "all 0.8s";
    }
}
  

for (t = 0; t < controlA.length; t++) {
    controlA[t].addEventListener("click", function() {

        if (this.classList.contains('control-topA')) {
            moveToTop()
        } 
        if (this.classList.contains('control-bottomA')) {
            moveToBottom()
        }

        transition()
   
    });
}

var wheeling;
function mousemouve(e) {

    clearTimeout(wheeling);
    e.preventDefault();
    var e = window.event || e; 
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    
    wheeling = setTimeout(function() {
        wheeling = undefined;
        if (delta === 1) {
            moveToTop()
        }
        if (delta === -1) {
            moveToBottom()
        }
    }, 100);

    transition()
}

// document.addEventListener("mousewheel", mousemouve);
document.addEventListener("DOMMouseScroll", mousemouve);