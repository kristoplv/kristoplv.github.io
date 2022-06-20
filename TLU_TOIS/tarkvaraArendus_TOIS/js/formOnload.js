window.onload = function(){
    console.log('laetud');
    document.querySelector('#hindamiskriteeriumid-ek').innerHTML = window.localStorage.getItem('hindamisKriteeriumidEK');
    document.querySelector('#hindamiskriteeriumid-ik').innerHTML = window.localStorage.getItem('hindamisKriteeriumidIK');
    document.querySelector('#hindamiskriteeriumid-vk').innerHTML = window.localStorage.getItem('hindamisKriteeriumidVK');
    document.querySelector('#eesmargid-ek').innerHTML = window.localStorage.getItem('eesmargidEK');
    document.querySelector('#eesmargid-ik').innerHTML = window.localStorage.getItem('eesmargidIK');
    document.querySelector('#eesmargid-vk').innerHTML = window.localStorage.getItem('eesmargidVK');
    document.querySelector('#opivaljundid-ek').innerHTML = window.localStorage.getItem('opivaljundidEK');
    document.querySelector('#opivaljundid-ik').innerHTML = window.localStorage.getItem('opivaljundidIK');
    document.querySelector('#opivaljundid-vk').innerHTML = window.localStorage.getItem('opivaljundidVK');
    document.querySelector('#sisu-ek').innerHTML = window.localStorage.getItem('sisuEK');
    document.querySelector('#sisu-ik').innerHTML = window.localStorage.getItem('sisuIK');
    document.querySelector('#sisu-vk').innerHTML = window.localStorage.getItem('sisuVK');
    document.querySelector('#eeldused-ek').innerHTML = window.localStorage.getItem('eeldusedEK');
    document.querySelector('#eeldused-ik').innerHTML = window.localStorage.getItem('eeldusedIK');
    document.querySelector('#eeldused-vk').innerHTML = window.localStorage.getItem('eeldusedVK');
    document.querySelector('#tingimused-ek').innerHTML = window.localStorage.getItem('tingimusedEK');
    document.querySelector('#tingimused-ik').innerHTML = window.localStorage.getItem('tingimusedIK');
    document.querySelector('#tingimused-vk').innerHTML = window.localStorage.getItem('tingimusedVK');
    
    let formID = document.querySelector('#courseId').innerHTML;
    setInterval(function() {
        console.log(formID);
        window.localStorage.setItem('hindamisKriteeriumidEK', document.querySelector('#hindamiskriteeriumid-ek').value);
        window.localStorage.setItem('hindamisKriteeriumidIK', document.querySelector('#hindamiskriteeriumid-ik').value);
        window.localStorage.setItem('hindamisKriteeriumidVK', document.querySelector('#hindamiskriteeriumid-vk').value);
        window.localStorage.setItem('eesmargidEK', document.querySelector('#eesmargid-ek').value);
        window.localStorage.setItem('eesmargidIK', document.querySelector('#eesmargid-ik').value);
        window.localStorage.setItem('eesmargidVK', document.querySelector('#eesmargid-vk').value);
        window.localStorage.setItem('opivaljundidEK', document.querySelector('#opivaljundid-ek').value);
        window.localStorage.setItem('opivaljundidIK', document.querySelector('#opivaljundid-ik').value);
        window.localStorage.setItem('opivaljundidVK', document.querySelector('#opivaljundid-vk').value);
        window.localStorage.setItem('sisuEK', document.querySelector('#sisu-ek').value);
        window.localStorage.setItem('sisuIK', document.querySelector('#sisu-ik').value);
        window.localStorage.setItem('sisuVK', document.querySelector('#sisu-vk').value);
        window.localStorage.setItem('eeldusedEK', document.querySelector('#eeldused-ek').value);
        window.localStorage.setItem('eeldusedIK', document.querySelector('#eeldused-ik').value);
        window.localStorage.setItem('eeldusedVK', document.querySelector('#eeldused-vk').value);
        window.localStorage.setItem('tingimusedEK', document.querySelector('#tingimused-ek').value);
        window.localStorage.setItem('tingimusedIK', document.querySelector('#tingimused-ik').value);
        window.localStorage.setItem('tingimusedVK', document.querySelector('#tingimused-vk').value);

        console.log(window.localStorage.getItem('hindamisKriteeriumidEK'));
    }, 60 * 1000);
    
    /*checkLoginStatus();*/

    /*authAccess();*/

    /* ISCED */
    let valdkond = document.querySelector('#oppevaldkond');
    let suund = document.querySelector('#oppesuund');
    let ruhm = document.querySelector('#oppekava-ruhm');

    for (var x in valikud) {
        console.log("Tootab");
        valdkond.options[valdkond.options.length] = new Option(x, x);
      }
      valdkond.onchange = function() {
        
        //empty Chapters- and Topics- dropdowns
        suund.length = 1;
        ruhm.length = 1;
        //display correct values
        for (var y in valikud[this.value]) {
          suund.options[suund.options.length] = new Option(y, y);
        }
      }
      suund.onchange = function() {
        //empty Chapters dropdown
        ruhm.length = 1;
        //display correct values
        var z = valikud[valdkond.value][this.value];
        for (var i = 0; i < z.length; i++) {
          ruhm.options[ruhm.options.length] = new Option(z[i], z[i]);
        }
    }

    /* Nupud, väljad enabled/disabled, colspan */
    document.querySelector('#downloadTxt').addEventListener('click', downloadFormTxt);
    document.querySelector('#downloadPdf').addEventListener('click', generatePdf);
    document.querySelector('#kontaktope').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#kontaktope-h').disabled = false;
        } else {
            document.querySelector('#kontaktope-h').disabled = true;
        }
    });
    document.querySelector('#praktika').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#praktika-h').disabled = false;
        } else {
            document.querySelector('#praktika-h').disabled = true;
        }
    });
    document.querySelector('#iseseisev-ope').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#iseseisev-ope-h').disabled = false;
        } else {
            document.querySelector('#iseseisev-ope-h').disabled = true;
        }
    });
    document.querySelector('#muu-oppeviis').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#muu-ope-h').disabled = false;
            document.querySelector('#muu-oppeviisi-nimetus').disabled = false;
        } else {
            document.querySelector('#muu-ope-h').disabled = true;
            document.querySelector('#muu-oppeviisi-nimetus').disabled = true;
        }
    });
    document.querySelector('#muu-oppetookeel').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#muu-oppetookeele-nimetus').disabled = false;
        } else {
            document.querySelector('#muu-oppetookeele-nimetus').disabled = true;
        }
    });
    document.querySelector('#inglise').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#kontrollivorm-colspan').colSpan += 1;
        } else {
            if (document.querySelector('#kontrollivorm-colspan').colSpan != 1) {
                document.querySelector('#kontrollivorm-colspan').colSpan -= 1
            }
        }
    });
    document.querySelector('#vene').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#kontrollivorm-colspan').colSpan += 1;
        } else {
            if (document.querySelector('#kontrollivorm-colspan').colSpan != 1) {
                document.querySelector('#kontrollivorm-colspan').colSpan -= 1
            }
        }
    });
    document.querySelector('#on-korraldaja').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#pole-korraldaja-norm').checked = true;
        }
    });
    document.querySelector('#on-korraldaja-norm').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#pole-korraldaja').checked = true;
        }
    });
}

document.body.addEventListener('change', function() {
    sleep(2000).then(() => {
    sendValues();
    console.log('saatsime');
    });
});