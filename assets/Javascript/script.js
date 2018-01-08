


// Project Image Carousel

var start = 0;
var carouselButtonRight = document.getElementById("rightButton");
var carouselButtonLeft = document.getElementById("leftButton");
var imageCarousel = document.getElementById("imageCarousel");
var projectLink = document.getElementById("projectLinks");
var projectName = document.getElementById("projectName");
// project constructor
function project(name, image, link){
    this.name = name;
    this.image = image;
    this.link = link;
}
// project objects
var pong = new project("Pong", "assets/Images/pong.jpg", "https://github.com/AlexHarris-CharlotteCodeCamp/Pong");
var spaceInvaders = new project("Space Invaders", "assets/Images/spaceInvaders.jpg", "https://github.com/AlexHarris-CharlotteCodeCamp/Space-Invaders");
var jqueryCalc = new project("jQuery Calculator", "assets/Images/jqueryCalculator.jpg", "https://github.com/AlexHarris-CharlotteCodeCamp/jQuery-Calculator");

var projectObjectArray = [jqueryCalc, pong, spaceInvaders];
projectName.textContent = projectObjectArray[start].name;

// Activate click for right carousel button
carouselButtonRight.addEventListener("click", function(){
    if(start < 2) {
        start++;
        imageCarousel.setAttribute("src", projectObjectArray[start].image);
        projectLink.setAttribute("href", projectObjectArray[start].link);
        projectName.textContent = projectObjectArray[start].name;
    } else {
        start = 0;
        imageCarousel.setAttribute("src", projectObjectArray[start].image);
        projectLink.setAttribute("href", projectObjectArray[start].link);
        projectName.textContent = projectObjectArray[start].name;
    }
})
// Activate click for left carousel button
carouselButtonLeft.addEventListener("click", function(){
    if(start === 0) {
        start = projectObjectArray.length - 1;
        imageCarousel.setAttribute("src", projectObjectArray[start].image);
        projectLink.setAttribute("href", projectObjectArray[start].link);
        projectName.textContent = projectObjectArray[start].name;
    } else {
        start--;
        imageCarousel.setAttribute("src", projectObjectArray[start].image);
        projectLink.setAttribute("href", projectObjectArray[start].link);
        projectName.textContent = projectObjectArray[start].name;
    }
})


// write code to change text content to display what the projects are to the user!!