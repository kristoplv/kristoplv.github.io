let home = document.getElementById("home");
let skills = document.getElementById("about");
let education = document.getElementById("education");
let contact = document.getElementById("contact");

home.addEventListener("click", function(){
    home.scrollIntoView({behavior: "smooth"});
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

