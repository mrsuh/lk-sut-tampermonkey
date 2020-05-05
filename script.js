// ==UserScript==
// @name         sut autologin
// @namespace    sut
// @version      0.1
// @description  Auto login to site
// @author       Anton Sukhachev
// @match        https://lk.sut.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let username = 'username';//заменить на настоящий логин
    let password = 'password';//заменить на настоящий пароль

    setInterval(function() {
    if (document.querySelector('#exit')) {
        return;
    }

    document.querySelector('#username-element input').value = username;
    document.querySelector('#password-element input').value = password;
    document.querySelector('#submit-element input').click();
}, 1000);
})();