const contentPath = "https://api.github.com/repos/CharlesGameDev/charlesgamedev.github.io/contents";

function getContents(path = "") {
    const xhr = new XMLHttpRequest();

    const url = `${contentPath}/${path}`;

    xhr.open("GET", url, false);

    let data;

    xhr.onload = function(){
        data = JSON.parse(this.response);
    }

    xhr.send();

    return data;
}

function getFile(path) {
    const contents = getContents(path);

    return b64Decode(contents.content);
}

const token = "";

function writeFile(path, content, message) {
    const contents = getContents(path);

    const newContent = b64Encode(content);
    contents.content = newContent;

    const fd = new FormData();
    fd.append("owner", "CharlesGameDev");
    fd.append("repo", "charlesgamedev.github.io");
    fd.append("path", `${contentPath}/${path}`);
    fd.append("message", message);
    fd.append("content", newContent);
    const xhr = new XMLHttpRequest();

    const url = `${contentPath}/${path}`;

    xhr.open("PUT", url, false);
    xhr.setRequestHeader("authorization", `token ${token}`);
    xhr.setRequestHeader("accept", "application/vnd.github.v3+json");
    xhr.send(fd);
}