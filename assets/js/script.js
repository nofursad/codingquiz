//Wait for the DOM to finish loading before starting the Quiz
document.addEventListener("DOMContentLoaded", function(){
    let catagories = document.getElementsByClassName("category");

    for (let category of catagories){
        if(category.className.includes("btnActive")){
            displayHtmlQuestion();
        }
    }
})