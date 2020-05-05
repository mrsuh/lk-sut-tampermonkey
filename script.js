// ==UserScript==
// @name         lk.sut.ru autologin
// @namespace    https://github.com/mrsuh/lk-sut-tampermonkey
// @version      0.1
// @description  Auto login to site
// @author       Anton Sukhachev
// @match        https://lk.sut.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let username          = 'username';//заменить на настоящий логин
    let password          = 'password';//заменить на настоящий пароль
    let refreshTimeoutSec = 300;//период обновления страницы в секундах

    setInterval(function() {
        if (document.querySelector('#exit')) {
            return;
        }

        document.querySelector('#username-element input').value = username;
        document.querySelector('#password-element input').value = password;
        document.querySelector('#submit-element input').click();
    }, 1000);

    setInterval(function() {
        document.location.reload();
    }, refreshTimeoutSec * 1000);
})();