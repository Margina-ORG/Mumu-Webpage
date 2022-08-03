var secSide = document.getElementsByClassName("sec-side");
var mainLayout = document.getElementsByTagName("main");

var minSecSideBySide = 1000;
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

function autoWidth() {

    width = getWidth();

    if (width < 1000) {
        turnElementsResponsives(secSide, '95%');
        if(width < 600){
            turnElementsResponsives(mainLayout, '100%');
        } else {
            var value = minScreenMain/width*100;
            turnElementsResponsives(mainLayout, value+'%');
        }
    } else {
        turnElementsResponsives(secSide, '49%');
        turnElementsResponsives(mainLayout, '80%');
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
