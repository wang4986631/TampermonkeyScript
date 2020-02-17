// ==UserScript==
// @name        极客时间 专栏音频自动播放
// @namespace    http://tampermonkey.net/
// @version      0.1G
// @description  专栏音频自动播放
// @author       TerLaGlasst
// @match        https://time.geekbang.org/column/article/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function(){
       var play = document.getElementsByClassName('_1w0mM49m_0')[0];
        if(play){
            play.click();
        }
        var now =document.getElementById('slider').children[0].children[0].innerText;
        var end =document.getElementById('vue-slide-bar-wrap').nextElementSibling.innerText;
        if(now==end){
            var section = document.getElementsByClassName('_2AkdpMxn_0')[0].nextElementSibling;
            if(""==section.innerText){
                var nextChapter = document.getElementsByClassName('_2AkdpMxn_0')[0].parentElement.parentElement.parentElement.nextElementSibling;
                //下一章
                nextChapter.firstElementChild.click();
                //下一节
                nextChapter.lastElementChild.lastElementChild.firstElementChild.click();
                setTimeout(function(){
                    //play audio
                    document.getElementsByClassName('_1w0mM49m_0')[0].click();
                },500)
            }else{
                section.click();
                setTimeout(function(){
                    //play audio
                    document.getElementsByClassName('_1w0mM49m_0')[0].click();
                },500)
            }
        }
    },500)

    // Your code here...
})();
