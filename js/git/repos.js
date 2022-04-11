function requestUserRepos(username) {
    const xhr = new XMLHttpRequest();

    const url = `https://api.github.com/users/${username}/repos`;

    xhr.open("GET", url, false);

    let data;

    xhr.onload = function() {
        data = JSON.parse(this.response);
    }

    xhr.send();

    return data;
}

function getRepoByName(username) {
    const repos = requestUserRepos(username);
    
    let got;

    repos.forEach(repo => {
        if (repo.name == name) {
            got = repo;
            return;
        }
    });

    return got;
}

function getRepo() {
    return getRepoByName("CharlesGameDev", "charlesgamedev.github.io");;
}