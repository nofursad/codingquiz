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

function checkAnswer(){
}

function increaseScore(){
}

function resetCounter(){
}

function increaseQueNum(){
}

function getCorrectAnswer(){       
}

function displayHtmlQuestion(queNum){
    
}

function displayCssQuestion(queNum){
}

function displayJsQuestion(queNum){
}