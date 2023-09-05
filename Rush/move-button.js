// called whenever the mouse is inside the div
function trackMouse(el, isInside) {
    var rect = el.getBoundingClientRect();
    var child = el.childNodes[1];
    var childWidth = child.offsetWidth;
    var childHeight = child.offsetHeight;
    var posX = window.event.clientX - rect.left;
    var posY = window.event.clientY - rect.top;
    var maxPosX = rect.width - childWidth / 2;
    var maxPosY = rect.height - childHeight / 2;
    var minPosX = childWidth / 2;
    var minPosY = childHeight / 2;
    var speed

    // limit posX and posY to stay within the bounds of the box
    posX = Math.min(Math.max(posX, minPosX), maxPosX);
    posY = Math.min(Math.max(posY, minPosY), maxPosY);

    //set the desired position to the center if the mouse calls the function by leaving the box
    if (isInside === false) {
        posX = rect.width/2
        posY = rect.height/2
        //this is the speed to return to the center. I found this was a lot less than the regular speed
        speed = 1000
    } else {
        //the regular speed when the box is following the mouse
        speed = 20000
    }

    console.log(childHeight);

        child.animate({
            top: (posY - childHeight / 2) + "px",
            left: (posX - childWidth / 2) + "px"
        }, {
            duration: speed,
            fill: "forwards"
        });
}

