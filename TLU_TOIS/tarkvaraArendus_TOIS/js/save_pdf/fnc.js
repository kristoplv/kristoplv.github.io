function generatePdf() {
    let nimetusEK = document.querySelector('#nimetus-ek');
    let nimetusIK = document.querySelector('#nimetus-ik');
    let nimetusVK = document.querySelector('#nimetus-vk');
    let kontaktope = document.querySelector('#kontaktope');
    let praktika = document.querySelector('#praktika');
    let iseseisevOpe = document.querySelector('#iseseisev-ope');
    let muuOppeviis = document.querySelector('#muu-oppeviis');
    let muuOppeviisNimetus = document.querySelector('#muu-oppeviisi-nimetus');
    let oppeviisid = "";
    let eesti = document.querySelector('#eesti');
    let inglise = document.querySelector('#inglise');
    let vene = document.querySelector('#vene');
    let muuOppetooKeel = document.querySelector('#muu-oppetookeel');
    let muuOppetooKeelNimetus = document.querySelector('#muu-oppetookeele-nimetus');
    let oppetooKeeled = "";
    let koolituseLiik = document.querySelector('#koolituse-liik');
    let liik = "";
    let kontaktopeH = document.querySelector('#kontaktope-h');
    let praktikaH = document.querySelector('#praktika-h');
    let iseseisevOpeH = document.querySelector('#iseseisev-ope-h');
    let muuOpeH = document.querySelector('#muu-ope-h');
    let mahtTundides = document.querySelector('#hours-result');
    let eap = document.querySelector('#eap-result');

    let kontrollivorm = document.querySelector('#kontrollivorm');
    let kontrollvorm = ""
    let hindamiskriteeriumidEK = document.querySelector('#hindamiskriteeriumid-ek');
    let hindamiskriteeriumidIK = document.querySelector('#hindamiskriteeriumid-ik');
    let hindamiskriteeriumidVK = document.querySelector('#hindamiskriteeriumid-vk');
    let eesmargidEK = document.querySelector('#eesmargid-ek');
    let eesmargidIK = document.querySelector('#eesmargid-ik');
    let eesmargidVK = document.querySelector('#eesmargid-vk');
    let opivaljundidEK = document.querySelector('#opivaljundid-ek');
    let opivaljundidIK = document.querySelector('#opivaljundid-ik');
    let opivaljundidVK = document.querySelector('#opivaljundid-vk');
    let sisuEK = document.querySelector('#sisu-ek');
    let sisuIK = document.querySelector('#sisu-ik');
    let sisuVK = document.querySelector('#sisu-vk');
    let eeldusedEK = document.querySelector('#eeldused-ek');
    let eeldusedIK = document.querySelector('#eeldused-ik');
    let eeldusedVK = document.querySelector('#eeldused-vk');
    let tingimusedEK = document.querySelector('#tingimused-ek');
    let tingimusedIK = document.querySelector('#tingimused-ik');
    let tingimusedVK = document.querySelector('#tingimused-vk');

    let sihtgrupp = document.querySelector('#sihtgrupp');
    let opikeskkond = document.querySelector('#opikeskkond');
    let koolitajaKompetentsus = document.querySelector('#koolitaja-kompetentsus');

    let oppevaldkond = document.querySelector('#oppevaldkond');
    let oppesuund = document.querySelector('#oppesuund');
    let oppekavaRuhm = document.querySelector('#oppekava-ruhm');
    let oppekavaKoostamiseAlus = document.querySelector('#oppekava-koostamise-alus');
    let veebisKuvatavKorraldaja = document.querySelector('#veebis-kuvatav-korraldaja');
    let pohivastutajaStruktuur = document.querySelector('#pohivastutaja-struktuur-id');
    let pohivastutajaNimi = document.querySelector('#pohivastutaja-nimi');
    let pohivastutajaOnKorraldaja = document.querySelector('#on-korraldaja');
    let pohivastutajaPoleKorraldaja = document.querySelector('#pole-korraldaja');
    let pohivastutajaKorraldaja = "";
    let pohivastutajaMahuprotsent = document.querySelector('#mahuprotsent');
    let vastutajaStruktuur = document.querySelector('#vastutaja-struktuur-id');
    let vastutajaNimi = document.querySelector('#vastutaja-nimi');
    let vastutajaOnKorraldaja = document.querySelector('#on-korraldaja-norm');
    let vastutajaPoleKorraldaja = document.querySelector('#pole-korraldaja-norm');
    let vastutajaKorraldaja = "";
    let vastutajaMahuprotsent = document.querySelector('#mahuprotsent-norm');
    let onTellitav = document.querySelector('#tellitav');
    let poleTellitav = document.querySelector('#pole-tellitav');
    let tellitavus = "";
    let onNahtav = document.querySelector('#nahtav');
    let poleNahtav = document.querySelector('#pole-nahtav');
    let nahtavus = "";
    let koolitusvaldkond = document.querySelector('#koolitusvaldkond');
    let viideKoolitusele = document.querySelector('#viide-koolitusele');
    let kuvatavKoolitaja = document.querySelector('#veebis-kuvatav-koolitaja');

    if(kontaktope.checked){
        oppeviisid += "Kontaktõpe\n";
    }
    if(praktika.checked){
        oppeviisid += "Praktika\n";
    }
    if(iseseisevOpe.checked){
        oppeviisid += "Iseseisev õpe\n";
    }
    if(muuOppeviis.checked){
        oppeviisid += "Muu: " + muuOppeviisNimetus.value;
    }
    oppeviisid = oppeviisid.trim();

    if(eesti.checked){
        oppetooKeeled += "Eesti\n";
    }
    if(inglise.checked){
        oppetooKeeled += "Inglise\n";
    }
    if(vene.checked){
        oppetooKeeled += "Vene\n";
    }
    if(muuOppetooKeel.checked){
        oppetooKeeled += "Muu: " + muuOppetooKeelNimetus.value;
    }
    oppetooKeeled = oppetooKeeled.trim();

    if(pohivastutajaOnKorraldaja.checked){
        pohivastutajaKorraldaja = "Jah";
    }
    if(pohivastutajaPoleKorraldaja.checked){
        pohivastutajaKorraldaja = "Ei";
    }

    if(vastutajaOnKorraldaja.checked){
        vastutajaKorraldaja = "Jah";
    }
    if(vastutajaPoleKorraldaja.checked){
        vastutajaKorraldaja = "Ei";
    }

    if(onTellitav.checked){
        tellitavus = "Tellitav";
    }
    if(poleTellitav.checked){
        tellitavus = "Pole tellitav";
    }

    if(onNahtav.checked){
        nahtavus = "Nähtav";
    }
    if(poleNahtav.checked){
        nahtavus = "Pole nähtav";
    }

    if(kontrollivorm.value == 1){
        kontrollvorm = "Eksam";
    }
    if(kontrollivorm.value == 2){
        kontrollvorm = "Arvestus";
    }
    if(kontrollivorm.value == 3){
        kontrollvorm = "Puudub";
    }

    if(koolituseLiik.value == 1){
        liik = "Esmane õpe";
    }
    if(koolituseLiik.value == 2){
        liik = "Ümberõpe";
    }
    if(koolituseLiik.value == 3){
        liik = "Täiendusõpe";
    }

    let doc = new jspdf.jsPDF();
    let pdfName = "oppekava.pdf"; // saab asendada nt. ainekoodiga
    doc.autoTable({
        theme: 'plain',
        styles: { lineColor: [0, 0, 0], lineWidth: 0.1, cellWidth: 90 },
        body: [
            [{ content: 'Üldine info', colSpan: 2, styles: { fontStyle: 'bold' } }],
            ['Õppekava nimetus eesti keeles', nimetusEK.value],
            ['Õppekava nimetus inglise keeles', nimetusIK.value],
            ['Õppekava nimetus vene keeles', nimetusVK.value],
            ['Õppeviisid', oppeviisid],
            ['Õppekeeled', oppetooKeeled],
            ['Koolituse liik', liik],
            ['Kontaktõppe maht', kontaktopeH.value],
            ['Praktika maht', praktikaH.value],
            ['Iseseisva õppe maht', iseseisevOpeH.value],
            ['Muu maht', muuOpeH.value],
            ['Õppekava maht kokku', mahtTundides.innerText],
            ['EAP maht', eap.innerText],
            [{ content: 'Hindamine ja õppe eesmärgid', colSpan: 2, styles: { fontStyle: 'bold' } }],
            ['Kontrollivorm', kontrollvorm],
            ['Hindamiskriteeriumid eesti keeles', hindamiskriteeriumidEK.value],
            ['Hindamiskriteeriumid inglise keeles', hindamiskriteeriumidIK.value],
            ['Hindamiskriteeriumid vene keeles', hindamiskriteeriumidVK.value],
            ['Õppe eesmärgid eesti keeles', eesmargidEK.value],
            ['Õppe eesmärgid inglise keeles', eesmargidIK.value],
            ['Õppe eesmärgid vene keeles', eesmargidVK.value],
            ['Õpiväljundid eesti keeles', opivaljundidEK.value],
            ['Õpiväljundid inglise keeles', opivaljundidIK.value],
            ['Õpiväljundid vene keeles', opivaljundidVK.value],
            ['Õppe sisu eesti keeles', sisuEK.value],
            ['Õppe sisu inglise keeles', sisuIK.value],
            ['Õppe sisu vene keeles', sisuVK.value],
            ['Õppe eeldused eesti keeles', eeldusedEK.value],
            ['Õppe eeldused inglise keeles', eeldusedIK.value],
            ['Õppe eeldused vene keeles', eeldusedVK.value],
            ['Õppe tingimused eesti keeles', tingimusedEK.value],
            ['Õppe tingimused inglise keeles', tingimusedIK.value],
            ['Õppe tingimused vene keeles', tingimusedVK.value],
            [{ content: 'Muu informatsioon', colSpan: 2, styles: { fontStyle: 'bold' } }],
            ['Sihtgrupp', sihtgrupp.value],
            ['Õpikeskkond', opikeskkond.value],
            ['Koolitaja kompetentsus', koolitajaKompetentsus.value],
            [{ content: 'Õppejuhi täita', colSpan: 2, styles: { fontStyle: 'bold' } }],
            ['Õppevaldkond', oppevaldkond.value],
            ['Õppesuund', oppesuund.value],
            ['Õppekava rühm', oppekavaRuhm.value],
            ['Õppekava koostamise alus', oppekavaKoostamiseAlus.value],
            ['Veebis kuvatav korraldaja struktuur ja kontakt', veebisKuvatavKorraldaja.value],
            ['Põhivastutaja struktuuriüksus', pohivastutajaStruktuur.value],
            ['Põhivastutaja nimi', pohivastutajaNimi.value],
            ['On korraldaja', pohivastutajaKorraldaja],
            ['Mahuprotsent', pohivastutajaMahuprotsent.value],
            ['Vastutaja struktuuriüksus', vastutajaStruktuur.value],
            ['Vastutaja nimi', vastutajaNimi.value],
            ['On korraldaja', vastutajaKorraldaja],
            ['Mahuprotsent', vastutajaMahuprotsent.value],
            ['Tellitavus', tellitavus],
            ['Nähtavus', nahtavus],
            ['Koolitusvaldkond', koolitusvaldkond.value],
            ['Viide seadusega seotud koolitusele', viideKoolitusele.value],
            ['Veebis kuvatav koolitaja', kuvatavKoolitaja.value]
        ],
    });
    doc.save(pdfName);
}