// ==UserScript==
// @name         Monochrome grayscale website
// @namespace    https://github.com/rokdd/userscript-monochrome-grayscale/
// @homepage     https://github.com/rokdd/userscript-monochrome-grayscale/
// @version      0.2
// @description  Display websites in grayscale
// @author       rokdd
// @match        https://web.whatsapp.com/*
// @match        http://*/*
// @match        https://*/*
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://github.com/rokdd/userscript-monochrome-grayscale/raw/main/monochrome-grayscale.user.js
// @downloadURL  https://github.com/rokdd/userscript-monochrome-grayscale/raw/main/monochrome-grayscale.user.js
// ==/UserScript==

(function() {
    // @match        http://*/*

    'use strict';
    var USERDEFINED_MATCHING=true;
function hello() { alert("hello"); }
GM.registerMenuCommand("Hello, world!", hello, "h");
    GM_addStyle ( `
   html {
    -moz-filter: grayscale(100%) !important;
    -webkit-filter: grayscale(100%) !important;
    filter: gray !important; /* IE6-9 */
    filter: grayscale(100%) !important;
}

` );
})();
