function createCookie(name, value, hours) {
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function checkCookie(name) {
    var cookie = readCookie(name);
    if (cookie == null)
        return false;

    return true;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

export default {
    createCookie: createCookie,
    readCookie: readCookie,
    checkCookie: checkCookie,
    eraseCookie: eraseCookie
}