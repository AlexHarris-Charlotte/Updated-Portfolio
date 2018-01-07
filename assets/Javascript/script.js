


// Project Image Carousel

var start = 0;
var carouselButtonRight = document.getElementById("rightButton");
var carouselButtonLeft = document.getElementById("leftButton");
var imageCarousel = document.getElementById("imageCarousel");
var imageArray = ["assets/Images/jqueryCalculator.jpg", "assets/Images/pong.jpg", "assets/Images/spaceInvaders.jpg"];
carouselButtonRight.addEventListener("click", function(){
    if(start < 2) {
        start++;
        imageCarousel.setAttribute("src", imageArray[start]);
    } else {
        start = 0;
        imageCarousel.setAttribute("src", imageArray[start]);
    }
})

carouselButtonLeft.addEventListener("click", function(){
    if(start === 0) {
        start = imageArray.length - 1;
        imageCarousel.setAttribute("src", imageArray[start]);
    } else {
        start--;
        imageCarousel.setAttribute("src", imageArray[start]);
    }
})