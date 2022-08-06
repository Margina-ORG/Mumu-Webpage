var mainLayout = document.getElementsByTagName("main");
var slider = document.getElementById("slider");
var slidePositionA;
var slidePositionC;
var xStartTouch;
var xTouch;
var swipe;
var enableSlider = 650;
var slideTime = 0.5;

resetSlide();

function slideContent(id){
    if (width <= enableSlider) {
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
    slider.style.transition = slideTime+'s';
}

function onTouchStart(e){
    if (width <= enableSlider) {
        xStartTouch = e.touches[0].clientX;
    }
}
function onTouchMove(e)
{
    xTouch = e.touches[0].clientX;

    if (width <= enableSlider) {
        swipeHorizontal(slider, xStartTouch, xTouch, slideTime);
    }
}
function onTouchEnd(e){
    findSlide();
}

function swipeHorizontal(target, xS, xF, time){

    var move = xF-xS;
    var margin = parseInt(window.getComputedStyle(target).marginLeft)+move;
    var marginLimit = slidePositionA*3;

    if(move > 0 && margin > marginLimit){
        findSlide();
        xStartTouch = xTouch;
    } else if(move < 0 && margin < marginLimit*-1){
        findSlide();
        xStartTouch = xTouch;
    } else {
        target.style.marginLeft = margin+'px';
        target.style.transition = time+'s';
    }
}

function findSlide(){
    
    var direction = (xTouch-xStartTouch)*-1;
    var long = 200;
    var short = 30;
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
    slidePositionA = (slider.offsetWidth-mainLayout[0].offsetWidth)/2;
    slidePositionC = slidePositionA*-1;
}