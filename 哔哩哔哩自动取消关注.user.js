// ==UserScript==
// @name         哔哩哔哩自动取消关注
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://space.bilibili.com/*/fans/follow*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    addEventListener("DOMContentLoaded", (event) => {
        const ops = document.querySelector(".follow-main")
        console.log("fuckyou", ops)
    });
    const timer = setInterval(() => {
        const ops = document.querySelectorAll("#page-follows > div > div.follow-main > div.follow-content.section > div.content > ul.relation-list > li > div.content > div > div.be-dropdown.fans-action-btn.fans-action-follow > ul > li:nth-child(2)")
        console.log("fuckyou", ops)
        console.log("fuckyou", ops[0])
        if (ops) {
            window.ops = ops
            clearInterval(timer)
        }

    }, 2000)
    let index = 0
    const timer1 = setInterval(() => {
        if (window.ops) {
            if (index < window.ops.length) {
                window.ops[index].click()
                index += 1
            } else {
                clearInterval(timer1)
            }
        }
    }, 500)
})();