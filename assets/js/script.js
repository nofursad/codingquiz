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
let queNumInt = parseInt(queNum.innerHTML) - 1;

/**
 * Object with the sweetAlert function to be called on various occation
 */
 const sweetAlert = {
    initialAlert : function() {
        Swal.fire({
            title: '<strong><u>Some Rules of this Quiz</u></strong>',
            icon: 'info',
            html:
                '1. You will have only 15 seconds per each question. <br>' +
                '2. Once you select your answer, it can’t be undone. <br>' +
                '3. You can’t select any option once time goes off. <br>' +
                '4. You’ll get points on the basis of your correct answers. <br>'
            ,
            showCloseButton: true,
            width: '40rem',
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Lets Start!',
        })
    },
    correctAnsAlert : function() {
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'You selected the Correct Answer!',
            confirmButtonColor: 'rgba(60,179,113, 0.7)'
        })
    },
    incorrectAnsAlert : function() {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'You selected the Incorrect Answer!',
            confirmButtonColor: 'rgba(220,20,60, 0.6)'
        });
    },
    congratulation: function(userScore) {
        Swal.fire({
            // title: '<strong><u>Some Rules of this Quiz</u></strong>',
            title: '<h1></strong><i style="color:#66C7F4" class="fas fa-crown"></i></h1>',
            html:
                `You have completed the Quiz!<br>` +
                `<br>` +
                `You have socred ${userScore} out of 10.`
            ,
            showCloseButton: true,
            width: '40rem',
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Lets try again!',
        });
    }
}

/**
 * Function to display HTML question when HTML category is selected
 */
function displayHtmlQue(queNumInt) {
    let que = document.getElementById("question");
    que.innerText = html[queNumInt].question;
    let ansOpts = document.getElementsByClassName("answers");
    for (let x = 0; x < 4; x++){
        ansOpts[x].innerHTML = html[queNumInt].answers[x].text;
        ansBtns[x].dataset.correct = html[queNumInt].answers[x].correct;
    }
}

/**
 * Function to display HTML question when CSS category is selected
 */
function displayCssQue(queNumInt) {
    let que = document.getElementById("question");
    que.innerText = css[queNumInt].question;
    let ansOpts = document.getElementsByClassName("answers");
    for (let x = 0; x < 4; x++) {
        ansOpts[x].innerHTML = css[queNumInt].answers[x].text;
        ansBtns[x].dataset.correct = css[queNumInt].answers[x].correct;
    }
}

/**
 * Function to display HTML question when Javascript category is selected
 */
function displayJsQue(queNumInt) {
    let que = document.getElementById("question");
    que.innerText = javascript[queNumInt].question;
    let ansOpts = document.getElementsByClassName("answers");
    for (let x = 0; x < 4; x++) {
        ansOpts[x].innerHTML = javascript[queNumInt].answers[x].text;
        ansBtns[x].dataset.correct = javascript[queNumInt].answers[x].correct;
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
                sweetAlert.correctAnsAlert();
                queNum.innerText = parseInt(queNum.innerText) + 1;
                score.innerText = parseInt(score.innerText) + 1;
                queNumInt++;
            } else {
                sweetAlert.incorrectAnsAlert();
                queNum.innerText = parseInt(queNum.innerText) + 1;
                queNumInt++;
            }
            if (queNumInt < 10) {
                displayHtmlQue(queNumInt);
            } else {
                let userScore = document.getElementById("score").innerText;
                sweetAlert.congratulation(userScore);
                queNum.innerText = "1";
                score.innerText = "0";
                queNumInt = 0;
                displayHtmlQue(0);
            }
        });
    }
}

 // Function to identify the category of the quiz that is selected buy user.
 function queCatSelect(quizCat){
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
    queNum.innerText = "0";
    score.innerText = "0";
    queNumInt = 0;
 }
 
/**
 * The main quiz function which connect other function together.
 * Get the category of the quiz when the DOM is loaded and
 * run the quiz category as per user request.
 */
 function runQuiz(quizCat) {
    if (quizCat === "html") {
        displayHtmlQue(queNumInt);
    } else if (quizCat === "css") {
        displayCssQue(queNumInt);
    } else if (quizCat === "javascript") {
        displayJsQue(queNumInt);
    }
}

 // Questions for HTML Quiz
const html = [
    {
        question: "HTML Boy spends 7 years being the 3rd wheel.",
        answers: [
            { text: "Harry Potter and the Deathly Hollows", correct: true },
            { text: "Twilight", correct: false },
            { text: "Sherlock Holmes", correct: false },
            { text: "Star Wars a New Hope", correct: false }
        ]
    },
    {
        question: "Talking frog convinces son to kill his dad.",
        answers: [
            { text: "The Princess and the Frog", correct: false },
            { text: "Star Wars the Empire Strikes Back", correct: true },
            { text: "The Muppets Christmas Carol", correct: false },
            { text: "Shrek", correct: false }
        ]
    },
    {
        question: "A guy that is alone in the woods kisses a dead body while 7 other guys watch.",
        answers: [
            { text: "Sleeping Beauty", correct: false },
            { text: "Sleepy Hollow", correct: false },
            { text: "Snow White and the Seven dwarfs", correct: true },
            { text: "The Corpse Bride", correct: false }
        ]
    },
    {
        question: "A family's AirBnB experience goes very wrong.",
        answers: [
            { text: "The Shining", correct: true },
            { text: "Room 237", correct: false },
            { text: "Cabin in the Woods", correct: false },
            { text: "The Evil Dead", correct: false }
        ]
    },
    {
        question: "A series of naps.",
        answers: [
            { text: "The Matrix", correct: false },
            { text: "Avatar", correct: false },
            { text: "Sucker Punch", correct: false },
            { text: "Inception", correct: true }
        ]
    },
    {
        question: "Cancer survivor never loses his sense of humor.",
        answers: [
            { text: "50/50", correct: false },
            { text: "Deadpool", correct: true },
            { text: "The fault in our Stars", correct: false },
            { text: "Bucket List", correct: false }
        ]
    },
    {
        question: "Woman abandons all her standards to win back a horny teenager with greasy hair.",
        answers: [
            { text: "Grease", correct: true },
            { text: "Loser", correct: false },
            { text: "American Pie", correct: false },
            { text: "Not Another Teen Movie", correct: false }
        ]
    },
    {
        question: "A depressed office worker joins a cult and destabilizes the government.",
        answers: [
            { text: "Fight Club", correct: false },
            { text: "V for Vendetta", correct: false },
            { text: "Blade Runner", correct: false },
            { text: "The Matrix", correct: true }
        ]
    },
    {
        question: "Divorced man discovers he is trans, loses custody of his children.",
        answers: [
            { text: "Big Momma's House", correct: false },
            { text: "White Chicks", correct: false },
            { text: "Mrs Doubtfire", correct: true },
            { text: "Mr Nanny", correct: false }
        ]
    },
    {
        question: "A beautiful princess gets catfished.",
        answers: [
            { text: "Beauty and the Beast", correct: false },
            { text: "Cinderella", correct: false },
            { text: "Shrek", correct: false },
            { text: "Aladdin", correct: true }
        ]
    }
];

// Questions for CSS Quiz
const css = [
    {
        question: "CSS Boy spends 7 years being the 3rd wheel.",
        answers: [
            { text: "Harry Potter and the Deathly Hollows", correct: false },
            { text: "Twilight", correct: true },
            { text: "Sherlock Holmes", correct: false },
            { text: "Star Wars a New Hope", correct: false }
        ]
    },
    {
        question: "Talking frog convinces son to kill his dad.",
        answers: [
            { text: "The Princess and the Frog", correct: false },
            { text: "Star Wars the Empire Strikes Back", correct: true },
            { text: "The Muppets Christmas Carol", correct: false },
            { text: "Shrek", correct: false }
        ]
    },
    {
        question: "A guy that is alone in the woods kisses a dead body while 7 other guys watch.",
        answers: [
            { text: "Sleeping Beauty", correct: false },
            { text: "Sleepy Hollow", correct: false },
            { text: "Snow White and the Seven dwarfs", correct: true },
            { text: "The Corpse Bride", correct: false }
        ]
    },
    {
        question: "A family's AirBnB experience goes very wrong.",
        answers: [
            { text: "The Shining", correct: true },
            { text: "Room 237", correct: false },
            { text: "Cabin in the Woods", correct: false },
            { text: "The Evil Dead", correct: false }
        ]
    },
    {
        question: "A series of naps.",
        answers: [
            { text: "The Matrix", correct: false },
            { text: "Avatar", correct: false },
            { text: "Sucker Punch", correct: false },
            { text: "Inception", correct: true }
        ]
    },
    {
        question: "Cancer survivor never loses his sense of humor.",
        answers: [
            { text: "50/50", correct: false },
            { text: "Deadpool", correct: true },
            { text: "The fault in our Stars", correct: false },
            { text: "Bucket List", correct: false }
        ]
    },
    {
        question: "Woman abandons all her standards to win back a horny teenager with greasy hair.",
        answers: [
            { text: "Grease", correct: true },
            { text: "Loser", correct: false },
            { text: "American Pie", correct: false },
            { text: "Not Another Teen Movie", correct: false }
        ]
    },
    {
        question: "A depressed office worker joins a cult and destabilizes the government.",
        answers: [
            { text: "Fight Club", correct: false },
            { text: "V for Vendetta", correct: false },
            { text: "Blade Runner", correct: false },
            { text: "The Matrix", correct: true }
        ]
    },
    {
        question: "Divorced man discovers he is trans, loses custody of his children.",
        answers: [
            { text: "Big Momma's House", correct: false },
            { text: "White Chicks", correct: false },
            { text: "Mrs Doubtfire", correct: true },
            { text: "Mr Nanny", correct: false }
        ]
    },
    {
        question: "A beautiful princess gets catfished.",
        answers: [
            { text: "Beauty and the Beast", correct: false },
            { text: "Cinderella", correct: false },
            { text: "Shrek", correct: false },
            { text: "Aladdin", correct: true }
        ]
    }
];

// Questions for JAVASCRIPT Quiz
const javascript = [
    {
        question: "JAVASCRIPT Boy spends 7 years being the 3rd wheel.",
        answers: [
            { text: "Harry Potter and the Deathly Hollows", correct: false },
            { text: "Twilight", correct: false },
            { text: "Sherlock Holmes", correct: true },
            { text: "Star Wars a New Hope", correct: false }
        ]
    },
    {
        question: "Talking frog convinces son to kill his dad.",
        answers: [
            { text: "The Princess and the Frog", correct: false },
            { text: "Star Wars the Empire Strikes Back", correct: true },
            { text: "The Muppets Christmas Carol", correct: false },
            { text: "Shrek", correct: false }
        ]
    },
    {
        question: "A guy that is alone in the woods kisses a dead body while 7 other guys watch.",
        answers: [
            { text: "Sleeping Beauty", correct: false },
            { text: "Sleepy Hollow", correct: false },
            { text: "Snow White and the Seven dwarfs", correct: true },
            { text: "The Corpse Bride", correct: false }
        ]
    },
    {
        question: "A family's AirBnB experience goes very wrong.",
        answers: [
            { text: "The Shining", correct: true },
            { text: "Room 237", correct: false },
            { text: "Cabin in the Woods", correct: false },
            { text: "The Evil Dead", correct: false }
        ]
    },
    {
        question: "A series of naps.",
        answers: [
            { text: "The Matrix", correct: false },
            { text: "Avatar", correct: false },
            { text: "Sucker Punch", correct: false },
            { text: "Inception", correct: true }
        ]
    },
    {
        question: "Cancer survivor never loses his sense of humor.",
        answers: [
            { text: "50/50", correct: false },
            { text: "Deadpool", correct: true },
            { text: "The fault in our Stars", correct: false },
            { text: "Bucket List", correct: false }
        ]
    },
    {
        question: "Woman abandons all her standards to win back a horny teenager with greasy hair.",
        answers: [
            { text: "Grease", correct: true },
            { text: "Loser", correct: false },
            { text: "American Pie", correct: false },
            { text: "Not Another Teen Movie", correct: false }
        ]
    },
    {
        question: "A depressed office worker joins a cult and destabilizes the government.",
        answers: [
            { text: "Fight Club", correct: false },
            { text: "V for Vendetta", correct: false },
            { text: "Blade Runner", correct: false },
            { text: "The Matrix", correct: true }
        ]
    },
    {
        question: "Divorced man discovers he is trans, loses custody of his children.",
        answers: [
            { text: "Big Momma's House", correct: false },
            { text: "White Chicks", correct: false },
            { text: "Mrs Doubtfire", correct: true },
            { text: "Mr Nanny", correct: false }
        ]
    },
    {
        question: "A beautiful princess gets catfished.",
        answers: [
            { text: "Beauty and the Beast", correct: false },
            { text: "Cinderella", correct: false },
            { text: "Shrek", correct: false },
            { text: "Aladdin", correct: true }
        ]
    }
];