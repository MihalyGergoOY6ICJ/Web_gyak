function loadUsers(searchText){
    fetch('https://api.github.com/search/users?q=' + encodeURIComponent(searchText), {
        headers: {
            'Authorization': 'Bearer ' + GIT_TOKEN
        }
    })
        .then(res => res.json())
        .then(result => {
            const resultDiv = document.querySelector('#result');
            resultDiv.innerHTML = '';

            for(const user of result.items){
                const userHTML = `
                    <div class="card"> 
                        <a href="user.html?name=${encodeURIComponent(user.login)}"><h4>${user.login}</h4></a>
                        <img src="${user.avatar_url}">
                    </div>
                `;

                resultDiv.innerHTML += userHTML;
            }
        })
}



const button = document.querySelector("#user-search-btn");
button.addEventListener('click', () => {
    const userName = document.querySelector("#user-name").value;
    if(userName == ''){
        alert("Felhasználó neve nem lehet üres!")
    }
    else{
        loadUsers(userName);
    }
});