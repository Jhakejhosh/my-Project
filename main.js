const login = document.getElementById("login");
const signup = document.getElementById("signup");
const content = document.getElementById("login-content");
const logClose = document.getElementById("login-close");
const modal = document.getElementById("modal")

function logIn() {
    content.style.opacity = 1;
    content.style.display = "flex";
    modal.style.height = "100vh";
}
logClose.onclick = function() {
    content.style.opacity = 0;
    content.style.display = "none";
    modal.style.height = 0;
}
 const imageSlide = document.getElementById("image-slide");
 const rightArrow = document.getElementById("arrow-right");
 const leftArrow = document.getElementById("arrow-left");
 let x = 0;

 rightArrow.onclick = function() {
     if( x > "-330") {
        x = x - 320;
        imageSlide.style.left = x + "px";
     } 
 }
 leftArrow.onclick = function() {
    if( x < 0) {
       x = x + 320;
       imageSlide.style.left = x + "px";
    } 
}
const serviceSlide = document.getElementById("img-slide");
const space = document.getElementsByClassName("space");

space[1].onclick = function() {
    serviceSlide.src = "images/space3.jpg";
    animation();
    this.classList.add("main");
}
space[2].onclick = function() {
    serviceSlide.src = "images/viewspace.jpg";
    animation();
    this.classList.add("main");
}
space[3].onclick = function() {
    serviceSlide.src = "images/shopping room.jpg";
    animation();
    this.classList.add("main");
}
space[4].onclick = function() {
    serviceSlide.src = "images/veges.jpg";
    animation();
    this.classList.add("main");
}
space[5].onclick = function() {
    serviceSlide.src = "images/shopping room2.jpg";
    animation();
    this.classList.add("main");
}

function animation() {
    serviceSlide.classList.add("zoom");
    setTimeout(function() {
        serviceSlide.classList.remove("zoom");
    }, 1000);
    for (slide of space) {
        slide.classList.remove("main")
    }
}
window.addEventListener("scroll", function() {
    let content = document.querySelector(".myspace-content");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1;

    if (contentPosition < screenPosition) {
        content.classList.add("move");
    }
    else {
        content.classList.remove("move")
    }
})

const gallerySlide = document.getElementById("gallery-slider");
const moveLeft = document.getElementById("left-direct");
const moveRight = document.getElementById("right-direct");

let width = 0;

moveRight.onclick = function() {

    if ( width > "-500") {
        width = width - 400;
        gallerySlide.style.left = width + "px"
    }
}
moveLeft.onclick = function() {

    if ( width < 0) {
        width = width + 400;
        gallerySlide.style.left = width + "px"
    }
}

const reviewSlide = document.getElementById("reviews");
const revLeft = document.getElementById("left-review");
const revRight = document.getElementById("right-review");

let w = 0;

revRight.onclick = function() {

    if ( w > "-1000") {
        w = w - 450;
        reviewSlide.style.left = w + "px"
    }
}
revLeft.onclick = function() {

    if ( w < 0) {
        w = w + 450;
        reviewSlide.style.left = w + "px"
    }
}

const menu = document.getElementById("menu-content");
const menuClose = document.getElementById("menu-close");
const bar = document.getElementById("menu-bar");
const list = document.getElementById("menu-list");

bar.onclick = function() {
    menu.style.display = "block";
}
menuClose.onclick = function() {
    menu.style.display = "none"
}
list.onclick = function() {
    menu.style.display = "none"
}


