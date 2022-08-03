var secSide = document.getElementsByClassName("sec-side");
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

    if (width < 1160) {
        for(var index in secSide){
            turnResponsive(secSide[index], "100%");
        }
    } else {
        for(var index in secSide){
            turnResponsive(secSide[index], "49%");
        }
    }
}

function turnResponsive(element, value){
    element.style.width = value;
}

