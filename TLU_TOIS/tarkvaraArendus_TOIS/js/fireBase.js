import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {getDatabase, ref, push, set, onValue, get, child} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

var courseId_el = document.getElementById("courseId");
var courseId = courseId_el.innerHTML;
console.log(courseId);

// Vaga palju querySelectoreid

// Üldine
var nimiEK = document.getElementsByClassName("formInput uldine");
var oppeviisid = document.getElementsByClassName("uldine_viisid");
var keeled = document.getElementsByClassName("uldine_keeled");
var maht = document.getElementsByClassName("maht formInput");
//var eap = document.querySelector("#eap-result");
var names_viisid = ["/iseseisev/", "/kontaktope/", "/praktika/", "/muu/"];
var names_keeled = ["/ek/", "/ik/", "/vk/"]

// Hindamine ja sisu
var hindamiskriteeriumid = document.getElementsByClassName("formInput hk");
var eesmark = document.getElementsByClassName("formInput em");
var opivaljundid = document.getElementsByClassName("formInput ov");
var sisu = document.getElementsByClassName("formInput sisu");
var eeldused = document.getElementsByClassName("formInput eeldus");
var tingimused = document.getElementsByClassName("formInput tingimused");

// Muu info
var sihtgrupp = document.getElementsByClassName("formInput siht");
var keskkond = document.getElementsByClassName("formInput keskkond");
var kompetentsus = document.getElementsByClassName("formInput comp");
var veebis = document.getElementsByClassName("formInput web");

// Administraatori täita

var koostamise_alus = document.getElementById("oppekava-koostamise-alus");  // done
var korraldaja_veebis = document.getElementById("veebis-kuvatav-korraldaja");  // done

//var pohivastutaja_uksus_val = pohivastutaja_uksus[pohivastutaja_uksus.selectedIndex]
var pohivastutaja_korraldaja_jah = document.querySelector("#on-korraldaja");
var pohivastutaja_maht = document.getElementById("mahuprotsent");  // done
var pohivastutaja_nimi = document.querySelector("#pohivastutaja-nimi");  // done

var vastutaja_uksus = document.getElementById("vastutaja-struktuur");  // done
//var vastutaja_uksus_val = vastutaja_uksus[vastutaja_uksus.selectedIndex]
var vastutaja_korraldaja_jah = document.getElementById("on-korraldaja-norm");
var vastutaja_maht = document.getElementById("mahuprotsent-norm"); // done
var vastutaja_nimi = document.getElementById("vastutaja-nimi");  // done

var onTellitav = document.getElementById("tellitav"); // done
var poleTellitav = document.getElementById("pole-tellitav"); // done

var onNahtav = document.getElementById("nahtav"); // done
var poleNahtav = document.getElementById("pole-nahtav"); // done

var koolitusvaldkond = document.getElementById("koolitusvaldkond"); // done
var seadusega_koolitus_viide = document.getElementById("viide-koolitusele"); // done
var koolitajaVeebis = document.getElementById("veebis-kuvatav-koolitaja"); // done


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
const loc = ref(db, "TOIS/vorm");
var reffer = "";

/* general */
const oppekavaLoojaNimi = "TOIS/vorm/auth/oppekava_looja/";
const oppekavaTaitjaNimi = "TOIS/vorm/auth/taitja_nimi/";

var newBtn = document.querySelector("#submitForm");

function getAll(){
  var superList = [];
  superList.push(getFirebaseItem(oppekavaLoojaNimi));
  superList.push(getFirebaseItem(oppekavaTaitjaNimi));

  console.log(superList);
  createElements(superList);
}

function createElements(el){
  let oppekavaLoojaNimi = document.querySelector('#courseCreator');
  let oppekavaTaitjaNimi = document.querySelector('#courseFiller');

  let testList = [oppekavaLoojaNimi, oppekavaTaitjaNimi,]
  sleep(2000).then(()=>{
    for(var i=0; i<el[1].length;i++){
      for(var a=0; a<el.length; a++){
        testList[a].value = el[a][i];
      }
    }
  });
}

function getIdFromPage(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');
  return id;
}


function getFirebaseItem(baseRef){
  var pageId = getIdFromPage();
  var listOfResults = []
  var initRef = ref(db, baseRef);
  onValue(initRef, function(sisu){
      var newVals = sisu.val();
      /*var objectKeys = Object.keys(newVals);*/
      var innerSisu = Object.values(newVals);
      console.log(pageId);
      console.log(newVals);
      console.log(baseRef +"/"+pageId+"/"+pageId);
      var reffer = baseRef +"/"+pageId;
      console.log(pageId);
      var newRef = ref(db, reffer);
      onValue(newRef, function(sisuNew){
          var lowValues = sisuNew.val();
          var finalValues = Object.values(lowValues);
          console.log(finalValues[0]);
          listOfResults.push(finalValues[0]);
          
      })
  })
  return listOfResults;
}

getAll();


/*function sendToFirebase(){
  //onValue(loc, getAll)
  onValue(loc, sendValues)
  
}*/
function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function sendValues(){
  
  var koolituse_liik = document.querySelector("#koolituse-liik");
  var koolitus_valitud = koolituse_liik.options[koolituse_liik.selectedIndex];
  var kontrollvorm = document.querySelector("#kontrollivorm");
  var kontrollvorm_valitud = kontrollvorm.options[kontrollvorm.selectedIndex];
  var eap = (maht[0].value + maht[1].value + maht[2].value) / 26;
  var baseRef = "TOIS/vorm/uldine_info/";

  var newBase = "TOIS/vorm/vormid" + id
  
  
  // Üldine info
  saada(baseRef+"nimetus", nimiEK);
  var OKnimi = getNameOfOK(nimiEK);

  saada(baseRef+"maht", maht);
  normaalkujule(oppeviisid, baseRef+"oppeviisid/", names_viisid);
  normaalkujule(keeled, baseRef+"keeled/", names_keeled);
  saadaOptionSisu(baseRef + "koolituse_liik/", koolitus_valitud.innerText);
  var eapVal = document.getElementById("eap-result");
  saadaOptionSisu(baseRef+"EAP/", eapVal.innerText);
  
  // Hindamine ja sisu
  baseRef = "TOIS/vorm/hindamine_eesmargid/";
  saada(baseRef+"eeldused", eeldused);
  saada(baseRef+"eesmargid", eesmark);
  saadaOptionSisu(baseRef+"kontrollivorm/", kontrollvorm_valitud.innerText);
  saada(baseRef+"kriteeriumid", hindamiskriteeriumid);
  saada(baseRef+"labimise_tingimused", tingimused);
  saada(baseRef+"opivaljundid", opivaljundid);
  saada(baseRef+"sisu", sisu);
  
  // Muu info
  baseRef = "TOIS/vorm/muu_info/";
  saadaOneline(baseRef+"opikeskkond/", keskkond[0]);
  saadaOneline(baseRef+"sihtgrupp/", sihtgrupp[0]);
  //saadaOneline(baseRef+"/veebis_koolitaja", veebis[0]);
  saadaOneline(baseRef+"koolitaja_komp/", kompetentsus[0]);
  
  // Administraator
  var pohivastutaja_uksus = document.getElementById("pohivastutaja-struktuur-id"); // done
  console.log(pohivastutaja_uksus.value);

  var oppevaldkond = document.querySelector("#oppevaldkond");
  var oppevaldkond_val =  oppevaldkond.options[oppevaldkond.selectedIndex].innerText;
  
  var oppesuund = document.querySelector("#oppesuund");
  var oppesuund_val =  oppesuund.options[oppesuund.selectedIndex].innerHTML;
  
  var oppekava_ruhm = document.querySelector("#oppekava-ruhm");
  var oppekava_ruhm_val =  oppekava_ruhm.options[oppekava_ruhm.selectedIndex].innerHTML;

  baseRef = "TOIS/vorm/admin/";
  saadaOneline(baseRef+"pohivastutaja/struktuuriuksus/", pohivastutaja_uksus);
  saadaOneline(baseRef+"koolitusvaldkond/", koolitusvaldkond);
  saadaOneline(baseRef+"seadusega_seotud_koolituse_viide/", seadusega_koolitus_viide);
  saadaOneline(baseRef+"veebis_kuvatav_koolitaja/", koolitajaVeebis);
  saadaOneline(baseRef+"korraldaja_struktuur_kontakt/", korraldaja_veebis);
  saadaOneline(baseRef+"ok_koostamise_alus/", koostamise_alus);

  saadaOneline(baseRef+"pohivastutaja/nimi/", pohivastutaja_nimi);
  saadaOneline(baseRef+"pohivastutaja/mahuprotsent/", pohivastutaja_maht);

  saadaOneline(baseRef+"vastutaja/nimi/",vastutaja_nimi);
  saadaOneline(baseRef+"vastutaja/mahuprotsent/",vastutaja_maht);
  checkRadios(baseRef+"tellitav/", onTellitav);
  checkRadios(baseRef+"nahtav/", onNahtav);
  checkRadios(baseRef+"pohivastutaja/on_korraldaja/", pohivastutaja_korraldaja_jah);
  checkRadios(baseRef+"vastutaja/on_korraldaja/", vastutaja_korraldaja_jah);
  
  saadaOptionSisu(baseRef+"oppevaldkond/", oppevaldkond_val);
  saadaOptionSisu(baseRef+"oppesuund/", oppesuund_val);
  saadaOptionSisu(baseRef+"oppekava_ruhm/", oppekava_ruhm_val);

  let date = new Date();
  let currentDate = date.toLocaleDateString('et', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
  set(ref(db, "TOIS/vorm/auth/deleted/"+courseId), {
    [courseId] : "Ei"
  });
  saadaOptionSisu("TOIS/vorm/vormid/name/", OKnimi)
  saadaOptionSisu("TOIS/vorm/vormid/id/", courseId)
  saadaOptionSisu("TOIS/vorm/vormid/time/", currentDate);
}

function saadaOptionSisu(baseRef, values){
  set(ref(db, baseRef+courseId), {
    [courseId] : values
  });
}
function getNameOfOK(){
  return nimiEK[0].value;
}
function checkRadios(baseRef, values){
  if(values.checked){
    set(ref(db, baseRef+courseId), {
      [courseId] : "Jah"
    });
  } else{
    set(ref(db, baseRef+courseId), {
      [courseId] : "Ei"
    });
  }
}


function saada(baseRef, values){
  var basic_info_loc = ref(db, baseRef);
  onValue(basic_info_loc, function(sisu){
    var newVals = sisu.val();
    var objectKeys = Object.keys(newVals);
    for(var i=0; i<objectKeys.length; i++){
      console.log(values[i].value)
      set(ref(db, baseRef+"/"+objectKeys[i]+"/"+courseId), {
        [courseId] : values[i].value
      });
    }
  });
}

function normaalkujule(values, baseRef, names_viisid){
  var newList=[];
  for(var i=0; i<values.length; i++){
    if(values[i].checked){
      newList[i] = "Jah"
    } else {
      newList[i] = "Ei"
    }

  }
  for(var a=0; a<newList.length; a++){
    set(ref(db, baseRef+names_viisid[a]+courseId), {
      [courseId] : newList[a]
    });
  }
}

function saadaOneline(baseRef, liik){
  set(ref(db, baseRef+courseId), {
    [courseId] : liik.value
  });
}

newBtn.addEventListener("click", ()=>{ sendValues() })

/*window.onload = ()=>{
  
  sleep(10000).then(()=>{
    sendValues();
    console.log("saatsime")
  })
}*/