var mainLayout = document.getElementsByTagName("main");
var slider = document.getElementById("slider");
var slidePositionA = (slider.offsetWidth-mainLayout[0].offsetWidth)/2;
var slidePositionC = slidePositionA*-1;
var xStartTouch;
var xTouch;


function slideContent(id){
    if (width <= minSecSideBySide) {
        
        var value;
        switch (id) {
            case 1:
                value = slidePositionA;
                break;
            case 2:
                value = 0;
                break;
            case 3:
                value = slidePositionC;
                break;
        }
        slide(value+'px');
    }
}
function slide(value){
    slider.style.marginLeft = value;
    slider.style.transition = "1s";
}

function onTouchStart(e){
    xStartTouch = e.touches[0].clientX;
}
function onTouchMove(e)
{
    var xTouch = e.touches[0].clientX;

    swipeHorizontal(slider, xStartTouch, xTouch, 1);
}
function onTouchEnd(e){
    findSlide();
}

function swipeHorizontal(target, xS, xF, time){

    var move = xF-xS;
    var margin = parseInt(window.getComputedStyle(target).marginLeft)+move;
    console.log(margin);

    target.style.marginLeft = margin+'px';
    target.style.transition = time+'s';
}

function findSlide(){
    var margin = parseInt(window.getComputedStyle(slider).marginLeft);
    
    if(margin >= slidePositionA){
        slider.style.marginLeft = slidePositionA+'px';
        
    } else if (margin <= slidePositionC){
        slider.style.marginLeft = slidePositionC+'px';
    }
    slider.style.transition = '0.5s';
    
}