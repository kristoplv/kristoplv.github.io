let session = JSON.parse(window.localStorage.getItem('session'));

function authAccess(){
    console.log('Sessiooni kontroll');
    if(session == null){
        window.location="login.html";
    }
}

authAccess();