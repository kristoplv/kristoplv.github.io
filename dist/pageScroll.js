
let home = document.getElementById("home");
let skills = document.getElementById("about");
let education = document.getElementById("education");
let contact = document.getElementById("contact");

earth.onclick = function(){
    window.open("https://www.visitestonia.com/en/");
}
window.addEventListener("scroll", function(){
    var a = window.scrollY;
    if(a > 0 && a < 600){
        home.className = "homeJS";
        skills.className = "about";
        education.className = "education";
        contact.className = "contact";
    } if(a > 600 && a < 1700){
        skills.className = "aboutJS";
        home.className = "home";
        education.className = "education";
        contact.className = "contact";
    } if(a > 1700 && a < 2800){
        home.className = "home";
        skills.className = "about";
        education.className = "educationJS";
        contact.className = "contact";
    } if(a > 2800){
        home.className = "home";
        skills.className = "about";
        education.className = "education";
        contact.className = "contactJS";
    }
})

home.onclick = function(){
    window.scroll(0, 0);
}
skills.onclick = function(){
    window.scroll(0, 1100);
}

education.onclick = function(){
    window.scroll(0, 2200);
}

contact.onclick = function(){
    window.scroll(0, 3300);
}