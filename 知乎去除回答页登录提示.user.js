// ==UserScript==
// @name         知乎去除回答页登录提示
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  去除知乎烦人的登录提示
// @author       Leenus
// @match        https://www.zhihu.com/question/*/answer*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const timer = setInterval(() => {
        const closeBtn = document.querySelector("div.Modal.Modal--default.signFlowModal > button")

        if (closeBtn) {
            closeBtn.click()
            clearInterval(timer)
        }

    }, 200)
})();