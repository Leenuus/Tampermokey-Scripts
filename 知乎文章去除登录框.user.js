// ==UserScript==
// @name         知乎文章去除登录框
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  去除知乎文章的登录提示框
// @author       Leenus
// @match        https://zhuanlan.zhihu.com/p/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';


    const timer = setInterval(function(){

        const close = document.querySelector("button[aria-label='关闭']")
        let c1 = false
        let c2 = false
        if (close){
            close.click()
            c1 = true
        }
        const close1 = document.querySelector("div.css-1ynzxqw")
        if (close1){
            close1.remove()
            c2 = true
        }
        if ( c1 && c2 ){
            clearInterval(timer)
        }
    }
    , 100)
})();