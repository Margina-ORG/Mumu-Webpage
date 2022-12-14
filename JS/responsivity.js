var secSide = document.getElementsByClassName("sec-side");
var layoutWidth = document.getElementsByClassName("auto-width");
var video = document.getElementById("video");

var minSecSideBySide = 1075;
var minScreenMain = 600;



function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

var width = getWidth();
autoWidth();
autoHeight();

function autoHeight(){
    var w = video.offsetWidth;
    var h = w*0.56;
    video.style.height = h+'px';
}

function autoWidth() {

    width = getWidth();

    if (width < minSecSideBySide) {
        turnElementsResponsives(secSide, '95%');

        if(width < minScreenMain){
            turnElementsResponsives(layoutWidth, '95%');
            turnElementsResponsives(secSide, '100%');
        } else {
            var value = minScreenMain/width*95;
            turnElementsResponsives(layoutWidth, value+'%');
        }

    } else {
        turnElementsResponsives(secSide, '44%');
        turnElementsResponsives(layoutWidth, '100%');
    }
}

function turnElementResponsive(element, value){
    if(element){
        element.style.width = value;
    } else {
        console.log("Can't turn a null element into responsive!")
    }
}
function turnElementsResponsives(elements, value){
    Array.from(elements).forEach(function turnResponsive(element){element.style.width = value});
}