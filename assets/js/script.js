//Wait for the DOM to finish loading before starting the Quiz
document.addEventListener("DOMContentLoaded", function(){
    let buttons  = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            let quizCat = button.getAttribute("data-type");
            resetCounter();
            changeCategory(quizCat);
            runQuiz(quizCat);
        })
    }
    runQuiz("html");
})

// core function to run the quiz
function runQuiz(quizCat){

}

// function to change the btnActive class in index page to hightlight the quiz category
function changeCategory(quizCat){
    if (quizCat === "html"){
        document.getElementById("htmlBtn").className = "category btncategory btnActive";
        document.getElementById("cssBtn").className = "category btncategory";
        document.getElementById("jsBtn").className = "category btncategory";
    } else if (quizCat === "css"){
        document.getElementById("htmlBtn").className = "category btncategory";
        document.getElementById("cssBtn").className = "category btncategory btnActive";
        document.getElementById("jsBtn").className = "category btncategory";
    } else if (quizCat === "javascript"){
        document.getElementById("htmlBtn").className = "category btncategory";
        document.getElementById("cssBtn").className = "category btncategory";
        document.getElementById("jsBtn").className = "category btncategory btnActive";
    }
}

function getCorrectAnswer(){       
}

//take the answer from user and compare the value to the result of
//getCorrectAnswer function to determine if user's answer is correct of not
function checkAnswer(){
}

//increase the score of user if the answer is correct
function increaseScore(){
    let score = document.getElementById("score");
    score.innerText = parseInt(score.innerText) + 1;
}

//reset the question counter and score counter when user
// select different catefory of quiz
function resetCounter(){
    document.getElementById("score").innerText = 0;
    document.getElementById("questionNum").innerText = 1;
    document.getElementById("min").innerText = 00;
    document.getElementById("sec").innerText = 00;
}

// increase the question number value displayed at the 
//info bar at the buttom of quiz after user answer the question
function increaseQueNum(){
    let queNum = document.getElementById("questionNum");
    queNum.innerText = parseInt(queNum.innerText) + 1;
}

// display the html question when html category is selected.
function displayhtmlQuestion(queNum){
    let questionDisplay = document.getElementById("question");
    let answersDisplay = document.getElementsByClassName("answers");
    let queAndAns = html[queNum];
    questionDisplay.innerHTML = queAndAns.question;
    for (let x = 0; x < answersDisplay.length; x++){
        answersDisplay[x].innerHTML = queAndAns.answers[x].text;
    };
}

// display the html question when css category is selected.
function displayCssQuestion(queNum){
    let questionDisplay = document.getElementById("question");
    let answersDisplay = document.getElementsByClassName("answers");
    let queAndAns = css[queNum];
    questionDisplay.innerHTML = queAndAns.question;
    for (let x = 0; x < answersDisplay.length; x++){
        answersDisplay[x].innerHTML = queAndAns.answers[x].text;
    };
}

// display the html question when javascript category is selected.
function displayJsQuestion(queNum){
    let questionDisplay = document.getElementById("question");
    let answersDisplay = document.getElementsByClassName("answers");
    let queAndAns = javascript[queNum];
    questionDisplay.innerHTML = queAndAns.question;
    for (let x = 0; x < answersDisplay.length; x++){
        answersDisplay[x].innerHTML = queAndAns.answers[x].text;
    };
}