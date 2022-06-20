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
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const loc = ref(db, "TOIS/vorm");


var idList = []
var name = document.querySelector("#name");
var desc = document.querySelector("#desc");
var status = document.querySelector("#status");

var btn_no = document.querySelector("#btnNo");
var btn_yes = document.querySelector("#btnYes");

idList.push(name);
idList.push(desc);
idList.push(status);


var name_ref = "TOIS/vorm/uldine_info/nimetus/ek/";
var desc_ref = "TOIS/vorm/hindamine_eesmargid/sisu/ek/";
var status_ref = "TOIS/vorm/uldine_info/EAP/";

var delete_ref = "TOIS/vorm/auth/deleted/";

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  



function getInfo(){
    var superList = [];
    var id = getId();
    getFirebaseItem(name_ref, id, superList)
    getFirebaseItem(desc_ref, id, superList)
    getFirebaseItem(status_ref, id, superList)
    sleep(100).then(()=>{
        for(var i=0; i<idList.length; i++){
            var listChild = "<td>"+superList[i]+"</td>"
            idList[i].innerHTML += listChild;
        }
    })
}

function getFirebaseItem(baseRef, id, superList){
    var base_loc = ref(db, baseRef+id+"/"+id);
    onValue(base_loc, (values)=>{
        var sisu = values.val();
        superList.push(sisu);
    })
}



function getId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    return id;
}


sleep(200).then(()=>{
    getInfo();
})



function deleteCurr(){
    var id = getId();
    console.log(id + delete_ref)
    set(ref(db, delete_ref+id), {
        [id] : "Jah"
    });
}

function returnToList(){
    window.location.href = "oppekavad.html";
}

btn_yes.addEventListener("click", deleteCurr);

btn_no.addEventListener("click", returnToList);