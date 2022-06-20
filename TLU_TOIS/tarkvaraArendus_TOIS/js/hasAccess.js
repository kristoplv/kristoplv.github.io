let session = JSON.parse(window.localStorage.getItem('session'));

function authAccess(){
    if(session == null){
        window.location="login.html";
    }
}