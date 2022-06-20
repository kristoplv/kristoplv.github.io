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

/* general */
const oppekavaLoojaNimi = "TOIS/vorm/auth/oppekava_looja/";
const oppekavaTaitjaNimi = "TOIS/vorm/auth/taitja_nimi/";

/* admin */
const koolitusvaldkond = "TOIS/vorm/admin/koolitusvaldkond";
const korraldajaStruktuurKontakt = "TOIS/vorm/admin/korraldaja_struktuur_kontakt";
const nahtav = "TOIS/vorm/admin/nahtav";
const okKoostamiseAlus = "TOIS/vorm/admin/ok_koostamise_alus";
const oppekavaRuhm = "TOIS/vorm/admin/oppekava_ruhm";
const oppesuund = "TOIS/vorm/admin/oppesuund";
const oppevaldkond = "TOIS/vorm/admin/oppevaldkond";
const pohivastutajaMahuprotsent = "TOIS/vorm/admin/pohivastutaja/mahuprotsent";
const pohivastutajaNimi = "TOIS/vorm/admin/pohivastutaja/nimi";
const pohivastutajaOnKorraldaja = "TOIS/vorm/admin/pohivastutaja/on_korraldaja";
const pohivastutajaStruktuuriuksus = "TOIS/vorm/admin/pohivastutaja/struktuuriuksus";
const seadusegaSeotudKoolituseViide = "TOIS/vorm/admin/seadusega_seotud_koolituse_viide";
const tellitav = "TOIS/vorm/admin/tellitav";
const vastutajaMahuprotsent = "TOIS/vorm/admin/vastutaja/mahuprotsent";
const vastutajaNimi = "TOIS/vorm/admin/vastutaja/nimi";
const vastutajaOnKorraldaja = "TOIS/vorm/admin/vastutaja/on_korraldaja";
const vastutajaStruktuuriuksus = "TOIS/vorm/admin/vastutaja/struktuuriuksus";
const veebisKuvatavKoolitaja = "TOIS/vorm/admin/veebis_kuvatav_koolitaja";

/* hindamine_eesmargid */
const eeldusedEK = "TOIS/vorm/hindamine_eesmargid/eeldused/ek";
const eeldusedIK = "TOIS/vorm/hindamine_eesmargid/eeldused/ik";
const eeldusedVK = "TOIS/vorm/hindamine_eesmargid/eeldused/vk";
const eesmargidEK = "TOIS/vorm/hindamine_eesmargid/eesmargid/ek";
const eesmargidIK = "TOIS/vorm/hindamine_eesmargid/eesmargid/ik";
const eesmargidVK = "TOIS/vorm/hindamine_eesmargid/eesmargid/vk";
const kontrollivorm = "TOIS/vorm/hindamine_eesmargid/kontrollivorm";
const kriteeriumidEK = "TOIS/vorm/hindamine_eesmargid/kriteeriumid/ek";
const kriteeriumidIK = "TOIS/vorm/hindamine_eesmargid/kriteeriumid/ik";
const kriteeriumidVK = "TOIS/vorm/hindamine_eesmargid/kriteeriumid/vk";
const labimiseTingimusedEK = "TOIS/vorm/hindamine_eesmargid/labimise_tingimused/ek";
const labimiseTingimusedIK = "TOIS/vorm/hindamine_eesmargid/labimise_tingimused/ik";
const labimiseTingimusedVK = "TOIS/vorm/hindamine_eesmargid/labimise_tingimused/vk";
const opivaljundidEK = "TOIS/vorm/hindamine_eesmargid/opivaljundid/ek";
const opivaljundidIK = "TOIS/vorm/hindamine_eesmargid/opivaljundid/ik";
const opivaljundidVK = "TOIS/vorm/hindamine_eesmargid/opivaljundid/vk";
const sisuEK = "TOIS/vorm/hindamine_eesmargid/sisu/ek";
const sisuIK = "TOIS/vorm/hindamine_eesmargid/sisu/ik";
const sisuVK = "TOIS/vorm/hindamine_eesmargid/sisu/vk";

/* muu_info */
const koolitajaKomp = "TOIS/vorm/muu_info/koolitaja_komp";
const opikeskkond = "TOIS/vorm/muu_info/opikeskkond";
const sihtgrupp = "TOIS/vorm/muu_info/sihtgrupp";
const veebisKoolitaja = "TOIS/vorm/muu_info/veebis_koolitaja";

/* uldine_info */
const EAP = "TOIS/vorm/uldine_info/EAP";
const keeledEK = "TOIS/vorm/uldine_info/keeled/ek";
const keeledIK = "TOIS/vorm/uldine_info/keeled/ik";
const keeledVK = "TOIS/vorm/uldine_info/keeled/vk";
const koolituseLiik = "TOIS/vorm/uldine_info/koolituse_liik";
const mahtIseseisev = "TOIS/vorm/uldine_info/maht/iseseisev";
const mahtKontaktope = "TOIS/vorm/uldine_info/maht/kontaktope";
const mahtPraktika = "TOIS/vorm/uldine_info/maht/praktika";
const nimetusEK = "TOIS/vorm/uldine_info/nimetus/ek";
const nimetusIK = "TOIS/vorm/uldine_info/nimetus/ik";
const nimetusVK = "TOIS/vorm/uldine_info/nimetus/vk";
const oppeviisidIseseisev = "TOIS/vorm/uldine_info/oppeviisid/iseseisev";
const oppeviisidKontaktope = "TOIS/vorm/uldine_info/oppeviisid/kontaktope";
const oppeviisidMuu = "TOIS/vorm/uldine_info/oppeviisid/muu";
const oppeviisidPraktika = "TOIS/vorm/uldine_info/oppeviisid/praktika";

var reffer = "";

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
    var superList = [];
    superList.push(getFirebaseItem(oppekavaLoojaNimi));
    superList.push(getFirebaseItem(oppekavaTaitjaNimi));

    superList.push(getFirebaseItem(koolitusvaldkond));
    superList.push(getFirebaseItem(korraldajaStruktuurKontakt));
    superList.push(getFirebaseItem(nahtav));
    superList.push(getFirebaseItem(okKoostamiseAlus));
    superList.push(getFirebaseItem(oppekavaRuhm));
    superList.push(getFirebaseItem(oppesuund));
    superList.push(getFirebaseItem(oppevaldkond));
    superList.push(getFirebaseItem(pohivastutajaMahuprotsent));
    superList.push(getFirebaseItem(pohivastutajaNimi));
    superList.push(getFirebaseItem(pohivastutajaOnKorraldaja));
    superList.push(getFirebaseItem(pohivastutajaStruktuuriuksus));
    superList.push(getFirebaseItem(seadusegaSeotudKoolituseViide));
    superList.push(getFirebaseItem(tellitav));
    superList.push(getFirebaseItem(vastutajaMahuprotsent));
    superList.push(getFirebaseItem(vastutajaNimi));
    superList.push(getFirebaseItem(vastutajaOnKorraldaja));
    superList.push(getFirebaseItem(vastutajaStruktuuriuksus));
    superList.push(getFirebaseItem(veebisKuvatavKoolitaja));

    superList.push(getFirebaseItem(eeldusedEK));
    superList.push(getFirebaseItem(eeldusedIK));
    superList.push(getFirebaseItem(eeldusedVK));
    superList.push(getFirebaseItem(eesmargidEK));
    superList.push(getFirebaseItem(eesmargidIK));
    superList.push(getFirebaseItem(eesmargidVK));
    superList.push(getFirebaseItem(kontrollivorm));
    superList.push(getFirebaseItem(kriteeriumidEK));
    superList.push(getFirebaseItem(kriteeriumidIK));
    superList.push(getFirebaseItem(kriteeriumidVK));
    superList.push(getFirebaseItem(labimiseTingimusedEK));
    superList.push(getFirebaseItem(labimiseTingimusedIK));
    superList.push(getFirebaseItem(labimiseTingimusedVK));
    superList.push(getFirebaseItem(opivaljundidEK));
    superList.push(getFirebaseItem(opivaljundidIK));
    superList.push(getFirebaseItem(opivaljundidVK));
    superList.push(getFirebaseItem(sisuEK));
    superList.push(getFirebaseItem(sisuIK));
    superList.push(getFirebaseItem(sisuVK));

    superList.push(getFirebaseItem(koolitajaKomp));
    superList.push(getFirebaseItem(opikeskkond));
    superList.push(getFirebaseItem(sihtgrupp));

    superList.push(getFirebaseItem(EAP));
    superList.push(getFirebaseItem(keeledEK));
    superList.push(getFirebaseItem(keeledIK));
    superList.push(getFirebaseItem(keeledVK));
    superList.push(getFirebaseItem(koolituseLiik));
    superList.push(getFirebaseItem(mahtIseseisev));
    superList.push(getFirebaseItem(mahtKontaktope));
    superList.push(getFirebaseItem(mahtPraktika));
    superList.push(getFirebaseItem(nimetusEK));
    superList.push(getFirebaseItem(nimetusIK));
    superList.push(getFirebaseItem(nimetusVK));
    superList.push(getFirebaseItem(oppeviisidIseseisev));
    superList.push(getFirebaseItem(oppeviisidKontaktope));
    superList.push(getFirebaseItem(oppeviisidMuu));
    superList.push(getFirebaseItem(oppeviisidPraktika));

    console.log(superList);
    createElements(superList);
}

function createElements(el){
    let oppekavaLoojaNimi = document.querySelector('#courseCreator');
    let oppekavaTaitjaNimi = document.querySelector('#courseFiller');

    let koolitusvaldkond = document.querySelector('#koolitusvaldkond');
    let veebisKuvatavKorraldaja = document.querySelector('#veebis-kuvatav-korraldaja');
    let onNahtav = document.querySelector('#nahtav');
    let oppekavaKoostamiseAlus = document.querySelector('#oppekava-koostamise-alus');
    let oppekavaRuhm = document.querySelector('#oppekava-ruhm');
    let oppesuund = document.querySelector('#oppesuund');
    let oppevaldkond = document.querySelector('#oppevaldkond');
    let pohivastutajaMahuprotsent = document.querySelector('#mahuprotsent');
    let pohivastutajaNimi = document.querySelector('#pohivastutaja-nimi');
    let pohivastutajaOnKorraldaja = document.querySelector('#on-korraldaja');
    let pohivastutajaStruktuur = document.querySelector('#pohivastutaja-struktuur-id');
    let viideKoolitusele = document.querySelector('#viide-koolitusele');
    let onTellitav = document.querySelector('#tellitav');
    let vastutajaMahuprotsent = document.querySelector('#mahuprotsent-norm');
    let vastutajaNimi = document.querySelector('#vastutaja-nimi');
    let vastutajaOnKorraldaja = document.querySelector('#on-korraldaja-norm');
    let vastutajaStruktuur = document.querySelector('#vastutaja-struktuur-id');
    let kuvatavKoolitaja = document.querySelector('#veebis-kuvatav-koolitaja');

    let eeldusedEK = document.querySelector('#eeldused-ek');
    let eeldusedIK = document.querySelector('#eeldused-ik');
    let eeldusedVK = document.querySelector('#eeldused-vk');
    let eesmargidEK = document.querySelector('#eesmargid-ek');
    let eesmargidIK = document.querySelector('#eesmargid-ik');
    let eesmargidVK = document.querySelector('#eesmargid-vk');
    let kontrollivorm = document.querySelector('#kontrollivorm');
    let hindamiskriteeriumidEK = document.querySelector('#hindamiskriteeriumid-ek');
    let hindamiskriteeriumidIK = document.querySelector('#hindamiskriteeriumid-ik');
    let hindamiskriteeriumidVK = document.querySelector('#hindamiskriteeriumid-vk');
    let tingimusedEK = document.querySelector('#tingimused-ek');
    let tingimusedIK = document.querySelector('#tingimused-ik');
    let tingimusedVK = document.querySelector('#tingimused-vk');
    let opivaljundidEK = document.querySelector('#opivaljundid-ek');
    let opivaljundidIK = document.querySelector('#opivaljundid-ik');
    let opivaljundidVK = document.querySelector('#opivaljundid-vk');
    let sisuEK = document.querySelector('#sisu-ek');
    let sisuIK = document.querySelector('#sisu-ik');
    let sisuVK = document.querySelector('#sisu-vk');

    let koolitajaKompetentsus = document.querySelector('#koolitaja-kompetentsus');
    let opikeskkond = document.querySelector('#opikeskkond');
    let sihtgrupp = document.querySelector('#sihtgrupp');

    let eap = document.querySelector('#eap-result');
    let eesti = document.querySelector('#eesti');
    let inglise = document.querySelector('#inglise');
    let vene = document.querySelector('#vene');
    let koolituseLiik = document.querySelector('#koolituse-liik');
    let iseseisevOpeH = document.querySelector('#iseseisev-ope-h');
    let kontaktopeH = document.querySelector('#kontaktope-h');
    let praktikaH = document.querySelector('#praktika-h');
    let nimetusEK = document.querySelector('#nimetus-ek');
    let nimetusIK = document.querySelector('#nimetus-ik');
    let nimetusVK = document.querySelector('#nimetus-vk');
    let iseseisevOpe = document.querySelector('#iseseisev-ope');
    let kontaktope = document.querySelector('#kontaktope');
    let muuOpe = document.querySelector('#muu-oppeviis');
    let praktika = document.querySelector('#praktika');

    let selected;
    let selected_kv;

    let testList = [oppekavaLoojaNimi, oppekavaTaitjaNimi,
        
        koolitusvaldkond, veebisKuvatavKorraldaja, onNahtav, oppekavaKoostamiseAlus, oppekavaRuhm,
        oppesuund, oppevaldkond, pohivastutajaMahuprotsent, pohivastutajaNimi, pohivastutajaOnKorraldaja,
        pohivastutajaStruktuur, viideKoolitusele, onTellitav, vastutajaMahuprotsent, vastutajaNimi,
        vastutajaOnKorraldaja, vastutajaStruktuur, kuvatavKoolitaja,
    
        eeldusedEK, eeldusedIK, eeldusedVK, eesmargidEK, eesmargidIK, eesmargidVK, kontrollivorm,
        hindamiskriteeriumidEK, hindamiskriteeriumidIK, hindamiskriteeriumidVK, tingimusedEK, tingimusedIK,
        tingimusedVK, opivaljundidEK, opivaljundidIK, opivaljundidVK, sisuEK, sisuIK, sisuVK,
    
        koolitajaKompetentsus, opikeskkond, sihtgrupp,
    
        eap, eesti, inglise, vene, koolituseLiik, iseseisevOpeH, kontaktopeH, praktikaH, nimetusEK, nimetusIK,
        nimetusVK, iseseisevOpe, kontaktope, muuOpe, praktika];
    sleep(2000).then(()=>{
        for(var i=0; i<el[1].length;i++){
            for(var a=0; a<el.length; a++){
                if(testList[a] == onTellitav && el[a][i] == "Jah"){
                    document.querySelector('#tellitav').checked = true
                }
                if(testList[a] == onTellitav && el[a][i] == "Ei"){
                    document.querySelector('#pole-tellitav').checked = true
                }
                if(testList[a] == onNahtav && el[a][i] == "Jah"){
                    document.querySelector('#nahtav').checked = true
                }
                if(testList[a] == onNahtav && el[a][i] == "Ei"){
                    document.querySelector('#pole-nahtav').checked = true
                }
                if(testList[a] == pohivastutajaOnKorraldaja && el[a][i] == "Jah"){
                    document.querySelector('#on-korraldaja').checked = true
                }
                if(testList[a] == pohivastutajaOnKorraldaja && el[a][i] == "Ei"){
                    document.querySelector('#pole-korraldaja').checked = true
                }
                if(testList[a] == vastutajaOnKorraldaja && el[a][i] == "Jah"){
                    document.querySelector('#on-korraldaja-norm').checked = true
                }
                if(testList[a] == vastutajaOnKorraldaja && el[a][i] == "Ei"){
                    document.querySelector('#pole-korraldaja-norm').checked = true
                }
                if(testList[a] == kontaktope && el[a][i] == "Jah"){
                    testList[a].checked = true;
                }
                if(testList[a] == praktika && el[a][i] == "Jah"){
                    testList[a].checked = true;
                }
                if(testList[a] == muuOpe && el[a][i] == "Jah"){
                    testList[a].checked = el[a][i];
                }
                if(testList[a] == iseseisevOpe && el[a][i] == "Jah"){
                    testList[a].checked = true;
                }
                if(testList[a] == eesti && el[a][i] == "Jah"){
                    testList[a].checked = true;
                }
                if(testList[a] == inglise && el[a][i] == "Jah"){
                    testList[a].checked = true;
                }
                if(testList[a] == vene && el[a][i] == "Jah"){
                    testList[a].checked = true;
                }
                if(testList[a] == koolituseLiik && el[a][i] == "Esmane õpe"){
                    selected = 0;
                } else if(testList[a] == koolituseLiik && el[a][i] == "Ümberõpe"){
                    selected = 1;
                } else if(testList[a] == koolituseLiik && el[a][i] == "Täiendusõpe"){
                    selected = 2;
                }
                if(testList[a] == kontrollivorm && el[a][i] == "Eksam"){
                    selected_kv = 0;
                } else if(testList[a] == kontrollivorm && el[a][i] == "Arvestus"){
                    selected_kv = 1;
                } else if(testList[a] == kontrollivorm && el[a][i] == "Puudub"){
                    selected_kv = 2;
                }
                if(testList[a] == eap) {
                    testList[a].innerHTML = el[a][i];
                } else if(el[a][i] == null) {
                    testList[a].value = "";
                } else {
                    testList[a].value = el[a][i];
                }
            }
            calculateEAP();
        }
        koolituseLiik.options[selected].selected = true;
        console.log(koolituseLiik.options[selected])
        kontrollivorm.options[selected_kv].selected = true;
    })
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

