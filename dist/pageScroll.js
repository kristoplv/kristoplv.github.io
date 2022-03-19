var home = document.getElementById("home");
var skills = document.getElementById("about");
var education = document.getElementById("education");
var contact = document.getElementById("contact");

document.getElementById("home").onclick().scrollIntoView();

home.addEventListener("click", function(){
    home.scrollIntoView();
    console.log("click works");
});
skills.addEventListener("click", function(){
    skills.scrollIntoView({behavior: "smooth"});
});
education.addEventListener("click", function(){
    education.scrollIntoView({behavior: "smooth"});
});
contact.addEventListener("click", function(){
    contact.scrollIntoView({behavior: "smooth"});
});

