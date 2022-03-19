var home = document.getElementById("home");
var skills = document.getElementById("about");
var education = document.getElementById("education");
var contact = document.getElementById("contact");

home.addEventListener("click", function(){
    console.log("click works");
    home.scrollIntoView();
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

