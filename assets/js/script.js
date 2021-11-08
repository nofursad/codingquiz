/*jshint esversion: 6 */

/**
 * Declear constant for DOM elements and global variables which 
 * can be call from different functions.
 */
 let queNum = document.getElementById("questionNum");
 let queNumInt = parseInt(queNum.innerHTML) - 1;
 let score = document.getElementById("score");
 let ansBtns = document.getElementsByClassName("options");
 let htmlBtn = document.getElementById("htmlBtn");
 let cssBtn = document.getElementById("cssBtn");
 let jsBtn = document.getElementById("jsBtn");

 