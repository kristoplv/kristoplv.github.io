var email = document.querySelector("#email");
var pw = document.querySelector("#password");
var pwLogo = document.querySelector(".password_logo");
var emailLogo = document.querySelector(".human_logo");
var noticeBox = document.getElementById("notice");
var emailCheck = -7;
var pwCheck = -5;
var correctAnsPw;
var correctAns;
var testEmail;
var testPass;


var loginArea = document.querySelector('#loginArea');
var loginButton = document.querySelector('#logIn');

var rememberMeCheckbox = document.querySelector('#rememberMe');
var rememberMe = false;

var login = document.querySelector("#loginButton");
var email = document.querySelector('#email');

loadSavedLogin();

rememberMeCheckbox.addEventListener('change', setRememberMeStatus);

function setRememberMeStatus(){
    if(rememberMeCheckbox.checked == false){
        rememberMe = false;
    } else if(rememberMeCheckbox.checked){
        rememberMe = true;
    }
}

var testMeil = async () => { return await onValue(EmailTester, testEmailInput)}
var testPassw = async () => { return await onValue(passwordTester, testPasswordInput)}

import {setRememberMeCookie, deleteRememberMeCookie, storeData, loadSavedLogin} from '../js/cookies'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {getDatabase, ref, push, set, onValue} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA68-WRoXzWuFYJQf0t-txxMq4E749arpQ",
  authDomain: "igplatvormid.firebaseapp.com",
  databaseURL: "https://igplatvormid-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "igplatvormid",
  storageBucket: "igplatvormid.appspot.com",
  messagingSenderId: "778407009045",
  appId: "1:778407009045:web:682d3fb68159d7a747a71c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getDatabase();
const EmailTester = ref(db, "TOIS/logimine/meil");
const passwordTester = ref(db, "TOIS/logimine/parool");


function testEmailInput(vals){
    var sisu = vals.val();
    var getAns =Object.values(sisu);
    var keys = Object.keys(sisu);
    for(var i=0;i<getAns.length; i++){
        if(email.value == getAns[i]){
            correctAns = true;
            emailCheck = keys[i];
            return 1;
        } else {
            correctAns = false;
        }
    }
}
function testPasswordInput(vals){
    var sisu = vals.val();
    var getAns =Object.values(sisu);
    var keys = Object.keys(sisu);
    for(var i=0;i<getAns.length; i++){
        if(pw.value == getAns[i]){
            correctAnsPw = true;
            pwCheck = keys[i];
            return 1;
        } else {
            correctAnsPw = false;
        }
    }
}

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}


function checkForValues(){
    var notice = "";
    if(email.value == ""){
        notice += "Meiliaadress lisamata! <br>"
        email.style.border = "1px solid red";
        noticeBox.style.color = "red";
        emailLogo.style.border = "1px solid red";
        email.style.borderLeft = "";
        emailLogo.style.borderRight = "";
    }
    if(pw.value == ""){
        notice += "Parool lisamata!";
        noticeBox.style.color = "red";
        pw.style.border = "1px solid red";
        pwLogo.style.border = "1px solid red";
        pw.style.borderLeft = "";
        pwLogo.style.borderRight = "";
    }
    if(notice != ""){
    } else
    if(notice == ""){
        testMeil()
        testPassw()
        sleep(100).then(()=>{
            console.log(emailCheck);
            console.log(pwCheck);
            return NotificationSystem(notice);
            
        })
        }

        noticeBox.innerHTML = "<p1 class='login_txt'>" + notice + "</p1>";
        noticeBox.style.fontSize = "18";
        
    }

function NotificationSystem(notice){
    if(emailCheck == pwCheck){
        notice = "Edukalt sisse logitud!";
        noticeBox.style.color = "green";
        pw.style.border = "";
        email.style.border = "";
        emailLogo.style.border = "";
        pwLogo.style.border = "";
        emailCheck = -7;
        pwCheck = -5;
        storeData();
        console.log(rememberMe);
        if(rememberMe == true){
            setRememberMeCookie();
        } else if(rememberMe == false){
            deleteRememberMeCookie();
        }
        sleep(1500).then(()=>{
            return location.href = "main.html";
        });
        } else {
        notice = "Kasutajanimi või parool vale!";
        noticeBox.style.color = "red";
        pw.style.border = "1px solid red";
        pwLogo.style.border = "1px solid red";
        emailLogo.style.border = "1px solid red";
        email.style.border = "1px solid red";
        email.style.borderLeft = "";
        emailLogo.style.borderRight = "";
        pw.style.borderLeft = "";
        pwLogo.style.borderRight = "";   
    }
    noticeBox.innerHTML = "<p1 class='login_txt'>" + notice + "</p1>";
    noticeBox.style.fontSize = "18";
}

function revertHightlightEmail(){
    email.style.border = "";
    emailLogo.style.border = "";
}
function revertHightlightPw(){
    pw.style.border = "";
    pwLogo.style.border = "";
}

login.addEventListener("click", checkForValues);
email.addEventListener("click", revertHightlightEmail);
pw.addEventListener("click", revertHightlightPw);