const questions = {
    html: [
        {
            question: "What does HTML stand for?",
            answers: [
                { text: "Hyper Text Markup Language", correct: true },
                { text: "Home Tool Mark up Language", correct: false },
                { text: "Hyperlinks and Text Markup Language", correct: false },
                { text: "None of above", correct: false }
            ]
        },
        {
            question: "Who is making the Web Standards?",
            answers: [
                { text: "Google", correct: false },
                { text: "The World Wide Web Consortium", correct: true },
                { text: "Microsoft", correct: false },
                { text: "Mozilla", correct: false }
            ]
        },
        {
            question: "How can you make a numbered list?",
            answers: [
                { text: "<dl>", correct: false },
                { text: "<ul>", correct: false },
                { text: "<ol>", correct: true },
                { text: "<list>", correct: false }
            ]
        },
        {
            question: "How can you make a bulleted list?",
            answers: [
                { text: "<ul>", correct: true },
                { text: "<dl>", correct: false },
                { text: "<ol>", correct: false },
                { text: "<list>", correct: false }
            ]
        },
        {
            question: "What is the correct HTML for making a checkbox?",
            answers: [
                { text: "<check>", correct: false },
                { text: "<input type='check'>", correct: false },
                { text: "<checkbox>", correct: false },
                { text: "<input type='checkbox'>", correct: true }
            ]
        },
        {
            question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
            answers: [
                { text: "longdesc", correct: false },
                { text: "alt", correct: true },
                { text: "src", correct: false },
                { text: "title", correct: false }
            ]
        },
        {
            question: "Which HTML element is used to specify a footer for a document or section?",
            answers: [
                { text: "<footer>", correct: true },
                { text: "<bottom>", correct: false },
                { text: "<section>", correct: false },
                { text: "<foot>", correct: false }
            ]
        },
        {
            question: "In HTML, onblur and onfocus are:",
            answers: [
                { text: "HTML elements", correct: false },
                { text: "Event attributes", correct: true },
                { text: "Style attributes", correct: false },
                { text: "None of above", correct: false }
            ]
        },
        {
            question: "In HTML, which attribute is used to specify that an input field must be filled out?",
            answers: [
                { text: "formvalidate", correct: false },
                { text: "validate", correct: false },
                { text: "required", correct: true },
                { text: "placeholder", correct: false }
            ]
        },
        {
            question: "Which HTML element defines navigation links?",
            answers: [
                { text: "<navigate>", correct: false },
                { text: "<button>", correct: false },
                { text: "<navigation>", correct: false },
                { text: "<nav>", correct: true }
            ]
        }
    ],
    css: [
        {
            question: "What does CSS stand for?",
            answers: [
                { text: "Computer Style Sheets", correct: false },
                { text: "Cascading Style Sheets", correct: true },
                { text: "Colorful Style Sheets", correct: false },
                { text: "Creative Style Sheets", correct: false }
            ]
        },
        {
            question: "What is the correct HTML for referring to an external style sheet?",
            answers: [
                { text: "<style src='mystyle.css'>", correct: false },
                { text: "<stylesheet>mystyle.css</stylesheet>", correct: false },
                { text: "<link rel='StyleSheet' type='text/css' href='mystyle.css'>", correct: true },
                { text: "None of above", correct: false }
            ]
        },
        {
            question: "Where in an HTML document is the correct place to refer to an external style sheet?",
            answers: [
                { text: "In the <body> section", correct: false },
                { text: "Before <head> element", correct: false },
                { text: "In the <head> section", correct: true },
                { text: "At the end of the document", correct: false }
            ]
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            answers: [
                { text: "<style>", correct: true },
                { text: "<css>", correct: false },
                { text: "<script>", correct: false },
                { text: "None of above", correct: false }
            ]
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            answers: [
                { text: "font", correct: false },
                { text: "styles", correct: false },
                { text: "class", correct: false },
                { text: "style", correct: true }
            ]
        },
        {
            question: "Which property is used to change the background color?",
            answers: [
                { text: "bgcolor", correct: false },
                { text: "background-color", correct: true },
                { text: "color", correct: false },
                { text: "None of above", correct: false }
            ]
        },
        {
            question: "Which CSS property is used to change the text color of an element?",
            answers: [
                { text: "color", correct: true },
                { text: "text-color", correct: false },
                { text: "fgcolor", correct: false },
                { text: "bgcolor", correct: false }
            ]
        },
        {
            question: "Which CSS property controls the text size?",
            answers: [
                { text: "font-style", correct: false },
                { text: "text-size", correct: false },
                { text: "text-style", correct: false },
                { text: "font-size", correct: true }
            ]
        },
        {
            question: "How do you make each word in a text start with a capital letter?",
            answers: [
                { text: "transform:capitalize", correct: false },
                { text: "You can't do that with CSS", correct: false },
                { text: "text-transform:capitalize", correct: true },
                { text: "text-style:capitalize", correct: false }
            ]
        },
        {
            question: "Which property is used to change the font of an element?",
            answers: [
                { text: "font", correct: false },
                { text: "font-weight", correct: false },
                { text: "font-style", correct: false },
                { text: "font-family", correct: true }
            ]
        }
    ],
    javascript: [
        {
            question: "Where is the correct place to insert a JavaScript?",
            answers: [
                { text: "Both the <head> and the <body> are correct", correct: true },
                { text: "The <head> section", correct: false },
                { text: "The <body> section", correct: false },
                { text: "Before the <head> section", correct: false }
            ]
        },
        {
            question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
            answers: [
                { text: "<script name='xxx.js'>", correct: false },
                { text: "<script src='xxx.js'>", correct: true },
                { text: "<script href='xxx.js'>", correct: false },
                { text: "<script link='xxx.js'>", correct: false }
            ]
        },
        {
            question: "How do you write 'Hello World' in an alert box?",
            answers: [
                { text: "alertBox('Hello World');", correct: false },
                { text: "msg('Hello World');", correct: false },
                { text: "alert('Hello World');", correct: true },
                { text: "msgBox('Hello World');", correct: false }
            ]
        },
        {
            question: "How do you create a function in JavaScript?.",
            answers: [
                { text: "function myFunction()", correct: true },
                { text: "function = myFunction()", correct: false },
                { text: "function : myFunction()", correct: false },
                { text: "let function = myFunction()", correct: false }
            ]
        },
        {
            question: "How do you call a function named 'myFunction'?",
            answers: [
                { text: "function myFunction", correct: false },
                { text: "call function myFunction()", correct: false },
                { text: "call myFunction()", correct: false },
                { text: "myFunction()", correct: true }
            ]
        },
        {
            question: "How to write an IF statement in JavaScript?",
            answers: [
                { text: "if i=5 then", correct: false },
                { text: "if (i==5)", correct: true },
                { text: "if i==5 then", correct: false },
                { text: "if i=5", correct: false }
            ]
        },
        {
            question: "How does a FOR loop start?",
            answers: [
                { text: "for(i=0;i<=5;i++)", correct: true },
                { text: "for(i<=5;i++)", correct: false },
                { text: "for(i=0:i<=5)", correct: false },
                { text: "for i=0 to 5", correct: false }
            ]
        },
        {
            question: "How can you add a comment in a JavaScript?",
            answers: [
                { text: "<!-- This is a comment -->", correct: false },
                { text: "`This is a comment`", correct: false },
                { text: "/**This is a comment*/", correct: false },
                { text: "//This is a comment", correct: true }
            ]
        },
        {
            question: "How do you round the number 7.25, to the nearest integer?",
            answers: [
                { text: "rnd(7.25)", correct: false },
                { text: "Math.round(7.25)", correct: true },
                { text: "round(7.25)", correct: false },
                { text: "Math.rnd(7.25)", correct: false }
            ]
        },
        {
            question: "Which event occurs when the user clicks on an HTML element?",
            answers: [
                { text: "onchange", correct: false },
                { text: "onmouseclick", correct: false },
                { text: "onmouseover", correct: false },
                { text: "onclick", correct: true }
            ]
        }
    ]
}