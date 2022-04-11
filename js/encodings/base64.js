function b64Encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64Decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
}