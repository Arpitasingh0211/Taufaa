let navbar = document.querySelector(".navbar");
let mainContent = document.querySelector(".mainContent");
let navbarImg = document.querySelector(".navbar-img");
let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector("#close-icon");
let navbarContent = document.querySelector(".navbar-content");
navbarContent.style.maxWidth = "0px";

function toggleMenu(){
    if(navbarContent.style.maxWidth == "0px"){
        // mainContent.style.display = "none";
        navbarImg.style.display = "block"
        navbarImg.style.zIndex = "1"
        navbarContent.style.maxWidth = "100vh";
        navbar.style.paddingLeft = "2em";
        navbarContent.style.paddingLeft = "2em";
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
        closeIcon.style.zIndex = "1";
        closeIcon.style.transition = "3s ease";
        // mainContent.style.display = "none";
        // navbar.style.backgroundColor = "tranparent"
    }
    else{
        navbarContent.style.maxWidth = "0px";
        // mainContent.style.display = "block";
        // menuIcon.style.position = "fixed";
        menuIcon.style.display = "block";
        closeIcon.style.position = "relative";
        closeIcon.style.display = "none";
        closeIcon.style.zIndex = "0";
        navbar.style.paddingLeft = "2em";
        navbarContent.style.paddingLeft = "0em";
        menuIconIcon.style.transition = "3s ease";
        // mainContent.style.display = "block";
    }
}
