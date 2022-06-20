import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {getDatabase, ref, push, set, onValue, get, child} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

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
const loc = ref(db, "TOIS/vorm/auth/");
var reffer = "";





window.onload = function() {
    let courseCreationDate = document.querySelector('#courseCreationDate');
    let date = new Date();
    let currentDate = date.toLocaleDateString('et', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    courseCreationDate.innerHTML = currentDate;

    document.querySelector('#generateCourseLink').addEventListener('click', generateLink);
}

// https://stackoverflow.com/a/27747377
function dec2hex(dec) {
    return dec.toString(16).padStart(2, '0');
}

function generateId(len) {
    let arr = new Uint8Array((len || 40) / 2);

    (window.crypto || window.msCrypto).getRandomValues(arr);

    return Array.from(arr, dec2hex).join('');
}

function generateLink() {
    let linkId = generateId(30);
    let date = new Date();
    date.toISOString();

    let courseCreator = document.querySelector('#courseCreator').value;
    let courseFiller = document.querySelector('#courseFiller').value;
    let buttonId = document.querySelector('#generateCourseLink');
    let courseLink = document.querySelector('#courseLink');
    
    buttonId.style.display = 'none';
    courseLink.innerHTML = '<a class="linkBtn" id="linkBtn" href="form.html?id=' + linkId + '">Link uue õppekava täitmiseks</a>';
    courseLink.innerHTML += '<img id="copyLink" src="images/link.png" alt="Kopeeri" title="Kopeeri" onclick="copyLink()">';

    let newFormHashmap = new Map([
        ['id', linkId],
        // firebase klappivus?
        ['date', date],
        ['courseCreator', courseCreator],
        ['courseFiller', courseFiller]
    ]);
    console.log(linkId + date + courseLink.innerHTML)
    set(ref(db, "TOIS/vorm/auth/link_hashed/"+linkId), {
        [linkId] : "form.html?id=" + linkId
    });
    set(ref(db, "TOIS/vorm/auth/loomise_kp/"+linkId), {
        [linkId] : date.toISOString()
    });
    set(ref(db, "TOIS/vorm/auth/oppekava_looja/"+linkId), {
        [linkId] : courseCreator
    });
    set(ref(db, "TOIS/vorm/auth/taitja_nimi/"+linkId), {
        [linkId] : courseFiller
    });


    
}

function copyLink() {
    let link = document.querySelector('#linkBtn').href;
    navigator.clipboard.writeText(link);
}