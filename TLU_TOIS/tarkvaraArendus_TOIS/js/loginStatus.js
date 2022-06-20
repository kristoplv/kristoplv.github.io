let loginButton = document.querySelector('#logIn');

console.log(JSON.parse(window.localStorage.getItem('session')));

checkLoginStatus();

function checkLoginStatus(){
    console.log('Töötab');
    if(JSON.parse(window.localStorage.getItem('session')) !== null){
        if(window.localStorage.getItem('lang') == 'EE'){
            let welcomeDiv = document.querySelector('#welcomePlaceholder');
            let welcomeText = document.createTextNode("Tere, " + window.localStorage.getItem('session'));
            welcomeDiv.appendChild(welcomeText);
            loginButton.innerHTML = "Logi välja";
        }
        else if(window.localStorage.getItem('lang') == 'EN'){
            let welcomeDiv = document.querySelector('#welcomePlaceholder');
            let welcomeText = document.createTextNode("Hello, " + window.localStorage.getItem('session'));
            if(welcomeDiv.childNodes.length === 0){
                welcomeDiv.appendChild(welcomeText);
            }           
            loginButton.innerHTML = "Log out";        
        }
        
        loginButton.addEventListener('click', logOut);
    }
}

function logOut(){
    console.log('Välja logitud');
    window.localStorage.removeItem('session');
}