var aboutText = document.getElementById("about-t");
var aboutPicture = document.getElementById("ab-pic");

var scrollToPosition = ()=>{
    var y = window.scrollY;
    if(y >= 1600){
        aboutText.className = "about-text show-text";
        aboutPicture.className = "about-picture show-pic";
    } else {
        aboutText.className = "about-text hidden";
        aboutPicture.className = "about-picture hidden";
    }
};

window.addEventListener("scroll", scrollToPosition);