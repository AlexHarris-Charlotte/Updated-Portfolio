
var start = 0;
var carouselButtonRight = document.getElementById("rightButton");
var carouselButtonLeft = document.getElementById("leftButton");
var imageCarousel = document.getElementById("imageCarousel");
var projectLink = document.getElementById("projectLinks");
var projectName = document.getElementById("projectName");
var playButton = document.getElementById("playLink");

// project constructor
function project(name, image, link, pageLink){
    this.name = name;
    this.image = image;
    this.link = link;
    this.pageLink = pageLink;
}

// project objects
var pong = new project("Pong", "assets/Images/pong.jpg", "https://github.com/AlexHarris-CharlotteCodeCamp/Pong", "https://alexharris-charlottecodecamp.github.io/Pong/");
var spaceInvaders = new project("Space Invaders", "assets/Images/spaceInvaders.jpg", "https://github.com/AlexHarris-CharlotteCodeCamp/Space-Invaders", "https://alexharris-charlottecodecamp.github.io/Space-Invaders/");
var jqueryCalc = new project("jQuery Calculator", "assets/Images/jqueryCalculator.jpg", "https://github.com/AlexHarris-CharlotteCodeCamp/jQuery-Calculator", "https://alexharris-charlottecodecamp.github.io/jQuery-Calculator/");

var projectObjectArray = [jqueryCalc, pong, spaceInvaders];
projectName.textContent = projectObjectArray[start].name;

// Activate click for right carousel button
carouselButtonRight.addEventListener("click", function(){
    if(start < 2) {
        start++;
        ClickFrom0();
    } else {
        start = 0;
        CarouselReset()
    }
})
// Activate click for left carousel button
carouselButtonLeft.addEventListener("click", function(){
    if(start === 0) {
        start = projectObjectArray.length - 1;
        ClickFrom0();
    } else {
        start--;
        CarouselReset()
    }
})

function ClickFrom0() {
    imageCarousel.setAttribute("src", projectObjectArray[start].image);
    projectLink.setAttribute("href", projectObjectArray[start].link);
    projectName.textContent = projectObjectArray[start].name;
    playButton.setAttribute("href", projectObjectArray[start].pageLink);
}

function CarouselReset() {
    imageCarousel.setAttribute("src", projectObjectArray[start].image);
    projectLink.setAttribute("href", projectObjectArray[start].link);
    projectName.textContent = projectObjectArray[start].name;
    playButton.setAttribute("href", projectObjectArray[start].pageLink);
}




