var mainLayout = document.getElementsByTagName("main");
var slider = document.getElementById("slider");
var slidePositionA = (slider.offsetWidth-mainLayout[0].offsetWidth)/2;
var slidePositionC = slidePositionA*-1;
var xStartTouch;
var xTouch;
var swipe;

resetSlide();

function slideContent(id){
    if (width <= minSecSideBySide) {
        swipe = id;
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
    slider.style.transition = "0.5s";
}

function onTouchStart(e){
    xStartTouch = e.touches[0].clientX;
}
function onTouchMove(e)
{
    xTouch = e.touches[0].clientX;
    swipeHorizontal(slider, xStartTouch, xTouch, 0.5);
}
function onTouchEnd(e){
    findSlide();
}

function swipeHorizontal(target, xS, xF, time){

    var move = xF-xS;
    var margin = parseInt(window.getComputedStyle(target).marginLeft)+move;

    target.style.marginLeft = margin+'px';
    target.style.transition = time+'s';
}

function findSlide(){
    
    var direction = (xTouch-xStartTouch)*-1;
    var long = width*0.33;
    var short = width*0.05;
    if(direction < -long && swipe == 3){
        swipe = 1;
    } else if(direction < -short && swipe > 1){
        swipe--;
    }

    if(direction > long && swipe == 1){
        swipe = 3;
    } else if(direction > short && swipe < 3){
        swipe++;
    }
    
    slideContent(swipe);
}
function resetSlide(){
    swipe = 2;
    slide(0);
    xStartTouch = 0;
    xTouch = 0;
}