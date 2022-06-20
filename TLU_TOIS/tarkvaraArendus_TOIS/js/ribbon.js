var btn = document.querySelector("#menu");
var dropper = document.getElementById("dropped");

btn.addEventListener("click", ()=>{
    if(dropper.className == "nahtaval"){
        dropper.className = "peidus";
    } else if(dropper.className == "peidus"){
        dropper.className = "nahtaval";
    }
});




