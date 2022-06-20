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

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getDatabase();
const loc = ref(db, "TOIS/vorm/vormid");
var reffer = "";
const thingy = document.getElementById("newsArea");

function main(){
    var item_1 = getValues("TOIS/vorm/vormid/id/")
    var item_2 = getValues("TOIS/vorm/vormid/name/")
    var item_3 = getValues("TOIS/vorm/vormid/time/")
    sleep(500).then(()=>{
        console.log(item_1.length)
        for(var i=0; i<item_1.length; i++){
            console.log(thingy);
            thingy.innerHTML += "<div id='"+item_1[i]+"' class='news'><div id='"+item_1[i]+"'><p>"+item_3[i]+"</p></div><div id='newsContent1' class='newsContent'><p>Õppekavas "+item_2[i]+" on tehtud muudatused</p><a href='vaata.html?id="+item_1[i]+"' class='newsLink'>Vaata</a></div></div><hr>"
        }
    })
}



function getValues(baseRef){
    var retVal = [];
    var reffer = ref(db, baseRef);
    onValue(reffer, (values)=>{
        var sisu = values.val();
        var keys = Object.keys(sisu);
        var vals = Object.values(sisu);
        var innerVals = Object.values(vals);
        for(var i=0; i<keys.length; i++){
            var newVar = innerVals[i]
            console.log(newVar)
            retVal.push(newVar[keys[i]]);

        }
    })
    return retVal;
}

main();