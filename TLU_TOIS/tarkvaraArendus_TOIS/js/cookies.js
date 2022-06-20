export function storeData(){
    window.localStorage.setItem('session', JSON.stringify(email.value));
    let sessionCookie = JSON.parse(window.localStorage.getItem('session'));
    console.log(JSON.parse(window.localStorage.getItem('session')));
}

export function setRememberMeCookie(){
    window.localStorage.setItem('login', JSON.stringify(email.value));
    let loginCookie = JSON.parse(window.localStorage.getItem('login'));
}

export function deleteRememberMeCookie(){
    window.localStorage.removeItem('login', JSON.stringify(email.value));
}

export function loadSavedLogin(){
    if(JSON.parse(window.localStorage.getItem('login')) !== null){
        email.value = JSON.parse(window.localStorage.getItem('login'));
        document.querySelector('#rememberMe').checked = true;
    } else {
        document.querySelector('#rememberMe').checked = false;
    }
}