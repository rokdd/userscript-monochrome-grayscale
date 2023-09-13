// ==UserScript==
// @name         Monochrome grayscale website
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.whatsapp.com/*
// @match        https://trader.degiro.nl/*
// @grant        GM_addStyle
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    
// @downloadURL  
// ==/UserScript==

(function() {
    // @match        http://*/*

    'use strict';
    GM_addStyle ( `
   html {
    -moz-filter: grayscale(100%) !important;
    -webkit-filter: grayscale(100%) !important;
    filter: gray !important; /* IE6-9 */
    filter: grayscale(100%) !important;
}

` );
})();