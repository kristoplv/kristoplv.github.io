let address = window.location.href;

export function setAddress(){
    console.log(window.localStorage.getItem('lang'));
    if(address.includes("main")){
        if(window.localStorage.getItem('lang') == 'EE'){
            if(window.location.href.includes('mainEng.html')){
                window.location.href = "main.html";
            }
        } else if(window.localStorage.getItem('lang') == 'EN'){
            if(window.location.href.includes('main.html')){
                window.location.href = "mainEng.html";
            }
        }
        console.log('Töötab')
        document.querySelector('#homePage').classList.add('currentPage');
    }
    if(address.includes("oppekavad")){
        if(window.localStorage.getItem('lang') == 'EE'){
            if(window.location.href.includes('oppekavadEng.html')){
                window.location.href = "oppekavad.html";
            }
        } else if(window.localStorage.getItem('lang') == 'EN'){
            console.log('töötab');
            if(window.location.href.includes('oppekavad.html')){
                console.log('töötab')
                window.location.href = "oppekavadEng.html";
            }
        }
        document.querySelector('#allForms').classList.add('currentPage');
    }
    if(address.includes("uusoppekava")){
        if(window.localStorage.getItem('lang') == 'EE'){
            if(window.location.href.includes('uusoppekavaEng.html')){
                window.location.href = "uusoppekava.html";
            }
        } else if(window.localStorage.getItem('lang') == 'EN'){
            console.log('töötab');
            if(window.location.href.includes('uusoppekava.html')){
                console.log('töötab')
                window.location.href = "uusoppekavaEng.html";
            }
        }
        document.querySelector('#newForm').classList.add('currentPage');
    }
}