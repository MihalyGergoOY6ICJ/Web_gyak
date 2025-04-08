const GIT_TOKEN = '';

function loadNavigation(){
    fetch('nav.html')
        .then(res => res.text())
        .then(navHtml => {
            const body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin', navHtml);
        })
        .catch(err => console.log(err));
}

async function loadUserData() {
    const res = await fetch('https://api.github.com/user', {
        headers:{
            'Authorization': 'Bearer ' + GIT_TOKEN
        }
    });

    const user = await res.json();

    sessionStorage.setItem('username', user.login);
}

loadNavigation();

const userName = sessionStorage.getItem('username');

if(!userName){
    loadUserData();
}
