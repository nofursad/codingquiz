/*jshint esversion: 6 */

/**
 * Declear constant for DOM elements and global variables which 
 * can be call from different functions.
 */
 const queNum = document.getElementById("questionNum");
 const score = document.getElementById("score");
 const ansBtns = document.getElementsByClassName("options");
 const htmlBtn = document.getElementById("htmlBtn");
 const cssBtn = document.getElementById("cssBtn");
 const jsBtn = document.getElementById("jsBtn");
 let mainCont = document.querySelector("main");
 let mainContWidth = mainCont.offsetWidth;
 let timer = document.getElementById("sec");
 let timeLine = document.getElementById("timeLine");
 let queNumInt = parseInt(queNum.innerHTML) - 1;
 let counter, counterLine;
 let timerValue = 30;
 let widthValue = 0;
 let quizCat = "html";
 
 /**
  * Object with the sweetAlert function to be called on various occation
  */
 const sweetAlert = {
     initialAlert: function () {
         Swal.fire({
             title: "<strong><u>Some Rules of this Quiz</u></strong>",
             icon: "info",
             html:
                 "1. You will have only 30 seconds per each question. <br>" +
                 "2. Once you select your answer, it can’t be undone. <br>" +
                 "3. You can’t select any option once time goes off. <br>" +
                 "4. You’ll get points on the basis of your correct answers. <br>"
             ,
             showCloseButton: true,
             width: "40rem",
             focusConfirm: false,
             confirmButtonText:
                 "<i class='fa fa-thumbs-up'></i> Lets Start!",
         }).then((result) => {
             if (result.isConfirmed) {
                 clearInterval(counter);
                 starTimer(timerValue);
             }
         })
     },
     correctAnsAlert: function () {
         Swal.fire({
             icon: "success",
             title: "Good job!",
             text: "You selected the Correct Answer!",
             confirmButtonColor: "rgba(60,179,113, 0.7)"
         }).then((result) => {
             if (result.isConfirmed) {
                 clearInterval(counter);
                 starTimer(timerValue);
             }
         })
     },
     incorrectAnsAlert: function () {
         Swal.fire({
             icon: "error",
             title: "Oops!",
             text: "You selected the Incorrect Answer!",
             confirmButtonColor: "rgba(220,20,60, 0.6)"
         }).then((result) => {
             if (result.isConfirmed) {
                 clearInterval(counter);
                 starTimer(timerValue);
             }
         })
     },
     congratulation: function (userScore) {
         Swal.fire({
             title: "<h1></strong><i style='color:#66C7F4' class='fas fa-crown'></i></h1>",
             html:
                 `You have completed the Quiz!<br>` +
                 `<br>` +
                 `You have socred ${userScore} out of 10.`
             ,
             showCloseButton: true,
             width: "40rem",
             focusConfirm: false,
             confirmButtonText:
                 "<i class='fa fa-thumbs-up'></i> Lets try again!",
         }).then((result) => {
             if (result.isConfirmed) {
                 clearInterval(counter);
                 starTimer(timerValue);
             }
         })
     },
     timeOver: function (){
        Swal.fire({
            icon: "error",
            title: "Oops!",
            html: "Your Thirty Seconds are over.<br>"+
                  "Let's go to next question",
            confirmButtonColor: "rgba(220,20,60, 0.6)"
        }).then((result) => {
            if (result.isConfirmed) {
                clearInterval(counter);
                starTimer(timerValue);
            }
        })
     }
 }
 
 /**
  * Function to display question of the selected Category
  * function will take 2 parameter, quizCat and queNumInt and
  * access the question array to retrive the question and 
  * answer
  */
 function disQue(quizCat, queNumInt) {
     let que = document.getElementById("question");
     que.innerText = questions[quizCat][queNumInt].question;
     let ansOpts = document.getElementsByClassName("answers");
     for (let x = 0; x < 4; x++) {
         ansOpts[x].innerHTML = questions[quizCat][queNumInt].answers[x].text;
         ansBtns[x].dataset.correct = questions[quizCat][queNumInt].answers[x].correct;
     }
 }
 
 /**
  * Listen to the click on the answer buttons and get the data-type.
  * Compares the data-type and give the response to user answer.
  * Increase the question number and socre if answer is correct but
  * only increase question number if answer is incorrect.
  * After 10 questions, give full result to user and reset the quiz.
  */
 function checkAnswer() {
     for (let ansBtn of ansBtns) {
         ansBtn.addEventListener("click", function () {
             let answer = ansBtn.getAttribute("data-correct");
             if (answer === "true") {
                 clearInterval(counter);
                 sweetAlert.correctAnsAlert();
                 queNum.innerText = parseInt(queNum.innerText) + 1;
                 score.innerText = parseInt(score.innerText) + 1;
                 queNumInt++;
             } else {
                 clearInterval(counter);
                 sweetAlert.incorrectAnsAlert();
                 queNum.innerText = parseInt(queNum.innerText) + 1;
                 queNumInt++;
             }
             if (queNumInt < 10) {
                 disQue(quizCat, queNumInt);
             } else {
                 let userScore = document.getElementById("score").innerText;
                 sweetAlert.congratulation(userScore);
                 queNum.innerText = "1";
                 score.innerText = "0";
                 queNumInt = 0;
                 disQue(quizCat, 0);
             }
         });
     }
 }
 
 /**
  * Function to identify the category of the quiz that is selected buy user.
  */
 function queCatSelect(quizCat) {
     if (quizCat === "html") {
         htmlBtn.className = "btnCategory btnActive";
         cssBtn.className = "btnCategory";
         jsBtn.className = "btnCategory";
     } else if (quizCat === "css") {
         htmlBtn.className = "btnCategory";
         cssBtn.className = "btnCategory btnActive";
         jsBtn.className = "btnCategory";
     } else if (quizCat === "javascript") {
         htmlBtn.className = "btnCategory";
         cssBtn.className = "btnCategory";
         jsBtn.className = "btnCategory btnActive";
     }
     queNum.innerText = "1";
     score.innerText = "0";
     queNumInt = 0;
     clearInterval(counter);
     starTimer(timerValue);
 }
 
 /**
  * The main quiz function which connect other function together.
  * Get the category of the quiz when the DOM is loaded and
  * run the quiz category as per user request.
  */
 function runQuiz(quizCat, queNumInt) {
     disQue(quizCat, queNumInt);
    //  starTimer(timerValue);
 }
 
 /**
  * Count down timer function to be used in each question.
  */
 function starTimer(time) {
     counter = setInterval(countTimer, 1000);
     function countTimer() {
         timer.innerText = time;
         time--;
         if (time < 9) {
             let addZero = timer.innerText;
             timer.innerText = "0" + addZero;
         }
         if (time < 0) {
             clearInterval(counter);
             timer.innerText = "00";
             sweetAlert.timeOver();
             queNum.innerText = parseInt(queNum.innerText) + 1;
             queNumInt++;
             runQuiz(quizCat, queNumInt);
         }
     }
 }
 
 //  /**
 //   * Timer line that goes alone with time indicating the time
 //   */
 //   function starTimerLine(time, mainContWidth){
 //     counterLine = setInterval(countTimer, 100);
 //     function countTimer(){
 //         time += 1;
 //         timeLine.style.width = time + "px";
 //         if(time > mainContWidth) {
 //             clearInterval(counterLine);
 //         }
 //     }
 // }
 
 /**
  * Waiting for DOM content to finish loading before running the quiz.
  * Add the event listener to btnCategory class elements to get the 
  * quiz category to run the quiz.
  */
 document.addEventListener("DOMContentLoaded", function () {
     sweetAlert.initialAlert();
     let actQueCats = document.getElementsByClassName("btnCategory");
     for (let actQueCat of actQueCats) {
         actQueCat.addEventListener("click", function () {
             quizCat = actQueCat.getAttribute("data-type");
             queCatSelect(quizCat);
             runQuiz(quizCat, queNumInt);
         });
     }
     runQuiz("html", queNumInt);
 });
 
 checkAnswer();
 