require('./main.css');
import cookie from './utils/cookies'

(function () {

    let cookieName = "show_overlay";
    let cookieValue = 1;
    let cookieHours = 3600;

    if(cookie.checkCookie(cookieName) === false) {
        const div = document.createElement('div');
        div.innerHTML = `<div class="overlay-message-box">
This is a test inside the message box
<a href="#" id="ov_yes">YES</a> <a href="#" id="ov_no">NO</a>
</div>`;
        div.classList.add('overlay');
        document.body.appendChild(div);

        let closeBtn = document.getElementById('ov_yes');
        closeBtn.onclick = function () {
            div.remove()
            cookie.createCookie(cookieName, cookieValue, cookieHours);
        }
    }
})();