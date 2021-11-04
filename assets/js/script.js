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

function runQuiz(quizCat){

}

function changeCategory(quizCat){
}

function getCorrectAnswer(){       
}

function checkAnswer(){
}

function increaseScore(){
    let score = document.getElementById("score");
    score.innerText = parseInt(score.innerText) + 1;
}

function increaseQueNum(){
    let queNum = document.getElementById("questionNum");
    queNum.innerText = parseInt(queNum.innerText) + 1;
}

function resetCounter(){
    document.getElementById("score").innerText = 0;
    document.getElementById("questionNum").innerText = 1;
}

function displayHtmlQuestion(queNum){  
}

function displayCssQuestion(queNum){
}

function displayJsQuestion(queNum){
}