import { HemisphereLightProbe } from "three";
import { SmoothShading } from "three";

let home = document.getElementById("home");
let skills = document.getElementById("about");
let education = document.getElementById("education");
let contact = document.getElementById("contact");

home.addEventListener("click", scrollToElement(home));
skills.addEventListener("click", scrollToElement(skills));
education.addEventListener("click", scrollToElement(education));
contact.addEventListener("click", scrollToElement(contact));

function scrollToElement(el){
    el.scrollIntoView({behavior: "smooth"});
}