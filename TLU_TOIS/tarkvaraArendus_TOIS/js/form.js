
function openTable(tableBtn_id) {
    let table_id = tableBtn_id.replace('Btn', '');
    let table = document.getElementById(table_id);
    let hide = table.style.display === 'none';
    
    if (hide) {
        table.style.display = 'table';
    } else {
        table.style.display = 'none';
    }
}

function calculateEAP() {
    let kontaktope = Number(document.getElementById('kontaktope-h').value);
    let praktika = Number(document.getElementById('praktika-h').value);
    let iseseisev = Number(document.getElementById('iseseisev-ope-h').value);
    let muu = Number(document.getElementById('muu-ope-h').value);

    let hours = kontaktope + praktika + iseseisev + muu;
    let eap = Math.round((hours) / 26);

    let hoursResult = document.getElementById('hours-result');
    hoursResult.innerText = hours;
    let eapResult = document.getElementById('eap-result');
    eapResult.innerText = eap;
}

function showInputs(id) {
    let language = document.getElementById(id);
    let suffix = '';
    let th ='-th';
    let hindamiskriteeriumid = 'hindamiskriteeriumid-';
    let eesmargid = 'eesmargid-';
    let opivaljundid = 'opivaljundid-';
    let sisu = 'sisu-';
    let eeldused = 'eeldused-';
    let tingimused = 'tingimused-';

    if (id === 'inglise') {
        suffix = 'ik';
    }
    if (id === 'vene') {
        suffix = 'vk';
    }

    if (language.checked) {
        document.getElementById(hindamiskriteeriumid + suffix + th).style.display = '';
        document.getElementById(eesmargid + suffix + th).style.display = '';
        document.getElementById(opivaljundid + suffix + th).style.display = '';
        document.getElementById(sisu + suffix + th).style.display = '';
        document.getElementById(eeldused + suffix + th).style.display = '';
        document.getElementById(tingimused + suffix + th).style.display = '';
    } else {
        document.getElementById(hindamiskriteeriumid + suffix + th).style.display = 'none';
        document.getElementById(eesmargid + suffix + th).style.display = 'none';
        document.getElementById(opivaljundid + suffix + th).style.display = 'none';
        document.getElementById(sisu + suffix + th).style.display = 'none';
        document.getElementById(eeldused + suffix + th).style.display = 'none';
        document.getElementById(tingimused + suffix + th).style.display = 'none';
    }
}

function validate() {
    let uldineInfoCount = 0;
    let hindamineCount = 0;
    let muuCount = 0;
    let oppejuhiCount = 0;
    let nimetusEK = document.querySelector('#nimetus-ek');
    let nimetusIK = document.querySelector('#nimetus-ik');
    let oppeviisLabel = document.querySelector('#oppeviis-label');
    let kontaktope = document.querySelector('#kontaktope');
    let praktika = document.querySelector('#praktika');
    let iseseisevOpe = document.querySelector('#iseseisev-ope');
    let oppetooKeeledLabel = document.querySelector('#oppetoo-keeled-label');
    let eestiKeel = document.querySelector('#eesti');
    let ingliseKeel = document.querySelector('#inglise');
    let veneKeel = document.querySelector('#vene');
    let muuKeel = document.querySelector('#muu-oppetookeele-nimetus');
    let koolituseLiik = document.querySelector('#koolituse-liik');
    let kontaktopeH = document.querySelector('#kontaktope-h');
    let praktikaH = document.querySelector('#praktika-h');
    let iseseisevOpeH = document.querySelector('#iseseisev-ope-h');

    let kontrollivorm = document.querySelector('#kontrollivorm');
    let hindamiskriteeriumidEK = document.querySelector('#hindamiskriteeriumid-ek');
    let eesmargidEK = document.querySelector('#eesmargid-ek');
    let opivaljundidEK = document.querySelector('#opivaljundid-ek');
    let sisuEK = document.querySelector('#sisu-ek');
    let eeldusedEK = document.querySelector('#eeldused-ek');
    let tingimusedEK = document.querySelector('#tingimused-ek');

    let sihtgrupp = document.querySelector('#sihtgrupp');
    let opikeskkond = document.querySelector('#opikeskkond');
    let koolitajaKompetentsus = document.querySelector('#koolitaja-kompetentsus');

    let oppevaldkond = document.querySelector('#oppevaldkond');
    let oppesuund = document.querySelector('#oppesuund');
    let oppekavaKoostamiseAlus = document.querySelector('#oppekava-koostamise-alus');
    let veebisKuvatavKorraldaja = document.querySelector('#veebis-kuvatav-korraldaja');
    let pohivastutajaStruktuur = document.querySelector('#pohivastutaja-struktuur-id');
    let pohivastutajaStruktuurChildren = document.querySelector('#pohivastutaja-struktuur').children;
    let koolitusvaldkond = document.querySelector('#koolitusvaldkond');

    /* Üldine info */
    if (nimetusEK.value.trim() == '') {
        uldineInfoCount++;
        nimetusEK.value = nimetusEK.value.trim();
        nimetusEK.classList.add('emptyError');
    } else {
        nimetusEK.classList.remove('emptyError');
    }
    if (nimetusIK.value.trim() == '') {
        uldineInfoCount++;
        nimetusIK.value = nimetusIK.value.trim();
        nimetusIK.classList.add('emptyError');
    } else {
        nimetusIK.classList.remove('emptyError');
    }
    if (kontaktope.checked == false && praktika.checked == false && iseseisevOpe.checked == false) {
        uldineInfoCount++;
        oppeviisLabel.classList.add('emptyErrorText');
    } else {
        oppeviisLabel.classList.remove('emptyErrorText');
    }
    if (eestiKeel.checked == false && ingliseKeel.checked == false && veneKeel.checked == false) {
        if (muuKeel.value.trim() == '') {
            uldineInfoCount++;
            muuKeel.value = muuKeel.value.trim();
            oppetooKeeledLabel.classList.add('emptyErrorText');
        }
    } else {
        oppetooKeeledLabel.classList.remove('emptyErrorText');
    }
    if (koolituseLiik.value.trim() == '') {
        uldineInfoCount++;
        koolituseLiik.value = koolituseLiik.value.trim();
        koolituseLiik.classList.add('emptyError');
    } else {
        koolituseLiik.classList.remove('emptyError');
    }
    if (kontaktopeH.value.trim() == '' && praktikaH.value.trim() == '' && iseseisevOpeH.value.trim() == '') {
        uldineInfoCount++;
        kontaktopeH.value = kontaktopeH.value.trim();
        praktikaH.value = praktikaH.value.trim();
        iseseisevOpeH.value = iseseisevOpeH.value.trim();
        kontaktopeH.classList.add('emptyError');
        praktikaH.classList.add('emptyError');
        iseseisevOpeH.classList.add('emptyError');
    } else {
        kontaktopeH.classList.remove('emptyError');
        praktikaH.classList.remove('emptyError');
        iseseisevOpeH.classList.remove('emptyError');
    }

    /* Hindamine ja õppe eesmärgid */
    if (kontrollivorm.value.trim() == '') {
        hindamineCount++;
        kontrollivorm.value = kontrollivorm.value.trim();
        kontrollivorm.classList.add('emptyError');
    } else {
        kontrollivorm.classList.remove('emptyError');
    }
    if (hindamiskriteeriumidEK.value.trim() == '') {
        hindamineCount++;
        hindamiskriteeriumidEK.value = hindamiskriteeriumidEK.value.trim();
        hindamiskriteeriumidEK.classList.add('emptyError');
    } else {
        hindamiskriteeriumidEK.classList.remove('emptyError');
    }
    if (eesmargidEK.value.trim() == '') {
        hindamineCount++;
        eesmargidEK.value = eesmargidEK.value.trim();
        eesmargidEK.classList.add('emptyError');
    } else {
        eesmargidEK.classList.remove('emptyError');
    }
    if (opivaljundidEK.value.trim() == '') {
        hindamineCount++;
        opivaljundidEK.value = opivaljundidEK.value.trim();
        opivaljundidEK.classList.add('emptyError');
    } else {
        opivaljundidEK.classList.remove('emptyError');
    }
    if (sisuEK.value.trim() == '') {
        hindamineCount++;
        sisuEK.value = sisuEK.value.trim();
        sisuEK.classList.add('emptyError');
    } else {
        sisuEK.classList.remove('emptyError');
    }
    if (eeldusedEK.value.trim() == '') {
        hindamineCount++;
        eeldusedEK.value = eeldusedEK.value.trim();
        eeldusedEK.classList.add('emptyError');
    } else {
        eeldusedEK.classList.remove('emptyError');
    }
    if (tingimusedEK.value.trim() == '') {
        hindamineCount++;
        tingimusedEK.value = tingimusedEK.value.trim();
        tingimusedEK.classList.add('emptyError');
    } else {
        tingimusedEK.classList.remove('emptyError');
    }

    /* Muu informatsioon */
    if (sihtgrupp.value.trim() == '') {
        muuCount++;
        sihtgrupp.value = sihtgrupp.value.trim();
        sihtgrupp.classList.add('emptyError');
    } else {
        sihtgrupp.classList.remove('emptyError');
    }
    if (opikeskkond.value.trim() == '') {
        muuCount++;
        opikeskkond.value = opikeskkond.value.trim();
        opikeskkond.classList.add('emptyError');
    } else {
        opikeskkond.classList.remove('emptyError');
    }
    if (koolitajaKompetentsus.value.trim() == '') {
        muuCount++;
        koolitajaKompetentsus.value = koolitajaKompetentsus.value.trim();
        koolitajaKompetentsus.classList.add('emptyError');
    } else {
        koolitajaKompetentsus.classList.remove('emptyError');
    }

    /* Õppejuhi täita */
    if (oppevaldkond.value.trim() == '') {
        oppejuhiCount++;
        oppevaldkond.value = oppevaldkond.value.trim();
        oppevaldkond.classList.add('emptyError');
    } else {
        oppevaldkond.classList.remove('emptyError');
    }
    if (oppesuund.value.trim() == '') {
        oppejuhiCount++;
        oppesuund.value = oppesuund.value.trim();
        oppesuund.classList.add('emptyError');
    } else {
        oppesuund.classList.remove('emptyError');
    }
    if (oppekavaKoostamiseAlus.value.trim() == '') {
        oppejuhiCount++;
        oppekavaKoostamiseAlus.value = oppekavaKoostamiseAlus.value.trim();
        oppekavaKoostamiseAlus.classList.add('emptyError');
    } else {
        oppekavaKoostamiseAlus.classList.remove('emptyError');
    }
    if (veebisKuvatavKorraldaja.value.trim() == '') {
        oppejuhiCount++;
        veebisKuvatavKorraldaja.value = veebisKuvatavKorraldaja.value.trim();
        veebisKuvatavKorraldaja.classList.add('emptyError');
    } else {
        veebisKuvatavKorraldaja.classList.remove('emptyError');
    }

    let flag = false;
    for (let i = 0; i < pohivastutajaStruktuurChildren.length; i++) {
        flag = pohivastutajaStruktuurChildren[i].value === pohivastutajaStruktuur.value || flag;
    }
    if (flag == false) {
        oppejuhiCount++;
        pohivastutajaStruktuur.classList.add('emptyError');
    } else {
        pohivastutajaStruktuur.classList.remove('emptyError');
    }

    if (koolitusvaldkond.value.trim() == '') {
        oppejuhiCount++;
        koolitusvaldkond.value = koolitusvaldkond.value.trim();
        koolitusvaldkond.classList.add('emptyError');
    } else {
        koolitusvaldkond.classList.remove('emptyError');
    }
    /*
    let uldineInfoCount = 0;
    let hindamineCount = 0;
    let muuCount = 0;
    let oppejuhiCount = 0;*/

    let fileName = location.href.split("/").slice(-1);
    if (fileName[0].includes("Eng")) {
        /* Error messages ENG */
        if (uldineInfoCount != 0) {
            document.querySelector('#table1-error-eng').innerHTML = "<th>" + uldineInfoCount + " missing inputs!</th>";
        } else {
            document.querySelector('#table1-error-eng').innerHTML = "";
        }
        if (hindamineCount != 0) {
            document.querySelector('#table2-error-eng').innerHTML = "<th>" + hindamineCount + " missing inputs!</th>";
        } else {
            document.querySelector('#table2-error-eng').innerHTML = "";
        }
        if (muuCount != 0) {
            document.querySelector('#table3-error-eng').innerHTML = "<th>" + muuCount + " missing inputs!</th>";
        } else {
            document.querySelector('#table3-error-eng').innerHTML = "";
        }
        if (oppejuhiCount != 0) {
            document.querySelector('#table4-error-eng').innerHTML = "<th>" + oppejuhiCount + " missing inputs!</th>";
        } else {
            document.querySelector('#table4-error-eng').innerHTML = "";
        }
    } else {
        /* Error messages */
    if (uldineInfoCount != 0) {
        document.querySelector('#table1-error').innerHTML = "<th>" + uldineInfoCount + " välja täitmata!</th>";
    } else {
        document.querySelector('#table1-error').innerHTML = "";
    }
    if (hindamineCount != 0) {
        document.querySelector('#table2-error').innerHTML = "<th>" + hindamineCount + " välja täitmata!</th>";
    } else {
        document.querySelector('#table2-error').innerHTML = "";
    }
    if (muuCount != 0) {
        document.querySelector('#table3-error').innerHTML = "<th>" + muuCount + " välja täitmata!</th>";
    } else {
        document.querySelector('#table3-error').innerHTML = "";
    }
    if (oppejuhiCount != 0) {
        document.querySelector('#table4-error').innerHTML = "<th>" + oppejuhiCount + " välja täitmata!</th>";
    } else {
        document.querySelector('#table4-error').innerHTML = "";
    }
    }
}