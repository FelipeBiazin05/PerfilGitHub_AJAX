document.addEventListener('DOMContentLoaded', function() {
    const nomeElemento = document.querySelector('#nome');
    const usernameElemento = document.querySelector('#username');
    const avatarElemento = document.querySelector('#avatar');
    const repositorioElemento = document.querySelector('#repositorio');
    const seguidoresElemento = document.querySelector('#seguidores');
    const seguindoElemento = document.querySelector('#seguindo');
    const linkElemento = document.querySelector('#link');

    fetch('https://api.github.com/users/FelipeBiazin05').then(function(res){
        return res.json();
    })
    .then(function(json) {
        nomeElemento.innerText = json.name;
        usernameElemento.innerText = json.login;
        avatarElemento.src = json.avatar_url;
        seguidoresElemento.innerText = json.followers;
        seguindoElemento.innerText = json.following;
        linkElemento.href = json.html_url;
        repositorioElemento.innerText = json.public_repos;
        
    })
})