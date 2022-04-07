var firstName = document.querySelector("#fName");
var lastName = document.querySelector("#lName");
var telephone = document.querySelector("#telephone");
var email = document.querySelector("#email");
var message = document.querySelector("#message");
var send = document.querySelector("#sendBtn");
var mainContainer = document.querySelector("#contactForm");
var notice = "";

send.addEventListener("click", function(){
    if(firstName.value == 0 || firstName.value == ""){
        notice += "<p>Eesnimi pole sisestatud!</p>";
    }
    if(lastName.value == 0 || lastName.value == ""){
        notice += "<p>Perekonnanimi pole sisestatud!</p>";
    }
    if(email.value.includes("@") && email.value.includes(".")){
        console.log("wup");
    } else {
        notice += "<p>E-posti aadress on vale!</p>";
    }
    if(message.value == 0 || message.value == ""){
        notice += "<p>Sõnumit pole sisestatud!</p>";
    }
    if(notice == null){
        notice = "<p>Sõnum edukalt saadetud!</p>"
    }
    mainContainer.innerHTML += notice;
});
