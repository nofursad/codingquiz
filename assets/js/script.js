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

 // Function to display HTML question when HTML category is selected
function displayHtmlQue(queNumInt) {
}

// Function to display HTML question when HTML category is selected
function displayCssQue(queNumInt) {
}

// Function to display HTML question when HTML category is selected
function displayJsQue(queNumInt) {
}

/**
 * Listen to the click on the answer buttons and get the data-type.
 * Compares the data-type and give the response to user answer.
 * Increase the question number and socre if answer is correct but
 * only increase question number if answer is incorrect.
 * After 10 questions, give full result to user and reset the quiz.
 */
 function checkAnswer() {
 }

 // Function to identify the category of the quiz that is selected buy user.
 function queCatSelect(quizCat){
 }
 
 /**
  * The main quiz function which connect other function together.
  * Get the category of the quiz when the DOM is loaded and
  * run the quiz category as per user request.
  */
 function runQuiz(quizCat) {
 }