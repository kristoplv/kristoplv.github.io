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

const nimetus ="TOIS/vorm/uldine_info/nimetus/ek";
const EAP = "TOIS/vorm/uldine_info/EAP";
const hindamine = "TOIS/vorm/hindamine_eesmargid/kontrollivorm";
const vastutaja = "TOIS/vorm/admin/veebis_kuvatav_koolitaja";
const deleted = "TOIS/vorm/auth/deleted";
var reffer = "";


const listOFid = ["nimetus", "EAP", "hindamine", "instituut"];
const listOfClasses = ["links", "number", "", ""]

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
/*
                    <tr>
                        <th id="nimetus"><a href="form.html" class="links">Matemaatika elemendid</a></th>
                        <th id="EAP" class="number">1</th>
                        <th id="hindamine">Arvestus</th>
                        <th id="instituut">Digitehnoloogiate instituut</th>
                        <th class="links">
                            <a href="form.html" class="newsLink">Vaata</a>
                            <a href="muuda.html" class="newsLink">Muuda</a>
                            <a href="kustuta.html" class="newsLink">Kustuta</a>
                        </th>
                    </tr>
*/

function getAll(){
    var hash = [];
    var superList = [];
    superList.push(getFirebaseItem(nimetus, hash));
    superList.push(getFirebaseItem(EAP, hash));
    superList.push(getFirebaseItem(hindamine, hash));
    superList.push(getFirebaseItem(vastutaja, hash));
    superList.push(getFirebaseItem(deleted, hash));
    console.log(superList);
    createElements(superList, hash);
}

function createElements(el, hashes){
    var list = document.getElementById("bodyOfList");
    sleep(400).then(()=>{
        console.log(hashes)
        for(var i=0; i<el[1].length;i++){
            if(el[4][i] == "Ei"){
                var starter = document.createElement("tr");
                for(var a=0; a<el.length-1; a++){
                    var thStart = document.createElement("th")
                    thStart.id = listOFid[a];
                    thStart.className = listOfClasses[a];
                    thStart.innerHTML = el[a][i];
                    console.log(el[a][i]);
                    starter.appendChild(thStart);
                }
                var various1 = "<th class='links'><a href='vaata.html?id="+hashes[i]+"' id='"+hashes[i]+"' class='newsLink'>Vaata </a><a href='muuda.html?id="+hashes[i]+"' id='"+hashes[i]+"' class='newsLink'>Muuda </a><a href='kustuta.html?id="+hashes[i]+"' id='"+hashes[i]+"' class='newsLink'>Kustuta </a></th>";
                starter.innerHTML += various1;
                list.append(starter);
            }
        }
    })
}




function getFirebaseItem(baseRef, hash){
    var listOfResults = []
    var initRef = ref(db, baseRef);
    onValue(initRef, function(sisu){
        var newVals = sisu.val();
        var objectKeys = Object.keys(newVals);
        var innerSisu = Object.values(newVals);
        console.log(objectKeys);
        console.log(newVals);
        for(var i=0; i<objectKeys.length; i++){
            console.log(baseRef +"/"+objectKeys[i]+"/"+objectKeys[i]);
            var reffer = baseRef +"/"+objectKeys[i];
            console.log(objectKeys[i]);
            if(hash.includes(objectKeys[i])){

            } else{
                hash.push(objectKeys[i])
            }
            var newRef = ref(db, reffer);
            onValue(newRef, function(sisuNew){
                var lowValues = sisuNew.val();
                var finalValues = Object.values(lowValues);
                console.log(finalValues[0]);
                listOfResults.push(finalValues[0]);
                
            })
        }
    })
    return listOfResults;
}
getAll();

